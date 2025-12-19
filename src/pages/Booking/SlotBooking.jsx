import React, { useState, useEffect } from 'react';
import SlotTabs from '../../components/DarshanBooking/SlotTabs';
import DateSelector from '../../components/DarshanBooking/DateSelector';
import AvailabilityInfo from '../../components/DarshanBooking/AvailabilityInfo';
import BookingForm from '../../components/DarshanBooking/BookingForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/DarshanBookingStyles/main.scss";
import axios from 'axios';

// Base URL for API - pointing to local backend
const API_BASE_URL = 'http://localhost:8000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Mock data for development
const MOCK_MODE = false; // Set to true for mock data, false to use real backend

// Mapping from display name (Hindi) to API key
const SLOT_NAME_TO_KEY = {
  'प्रातः': 'MORNING',
  'मध्याह्न': 'NOON',
  'सायंकाल': 'EVENING',
  'रात्रि': 'NIGHT',
};

/**
 * Get available slots for a specific date
 */
export const getSlotsByDate = async (date) => {
  if (MOCK_MODE) {
    // Mock response - simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock logic: return random availability for all slots
    return {
      data: {
        'MORNING': Math.floor(Math.random() * 15) + 5,
        'NOON': Math.floor(Math.random() * 10) + 2,
        'EVENING': Math.floor(Math.random() * 12) + 3,
        'NIGHT': Math.floor(Math.random() * 10) + 1,
      },
      status: 200,
      message: 'slot availability retrieved',
      error: false
    };
  }
  
  try {
    const response = await api.get('/slots/', {
      params: { date },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching slots:', error);
    throw error;
  }
};

/**
 * Book a slot with member details
 * @param {Object} bookingData - JSON object with booking details
 */
export const bookSlot = async (bookingData) => {
  if (MOCK_MODE) {
    // Mock response - simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate occasional errors (10% chance)
    if (Math.random() < 0.1) {
      throw new Error('Booking failed. Please try again.');
    }
    
    return {
      data: {},
      status: 201,
      message: 'Your request has been submitted',
      error: false
    };
  }
  
  try {
    // Send JSON payload
    const response = await api.post('/bookings/', bookingData);
    return response.data;
  } catch (error) {
    console.error('Error booking slot:', error);
    throw error;
  }
};

const SlotBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [slotsAvailability, setSlotsAvailability] = useState(null); // Stores all slots with their availability
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [availableSeats, setAvailableSeats] = useState(null);
  
  const [members, setMembers] = useState([{
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    aadhaar: '',
    aadhaarFile: null, // Aadhaar document file
    contact: '', // Phone number for primary member
    identityDetails: '' // Optional additional identity info
  }]);
  
  const [loading, setLoading] = useState(false);
  const [slotsLoading, setSlotsLoading] = useState(false);

  // Fetch available slots when date is selected
  useEffect(() => {
    const fetchSlots = async () => {
      if (selectedDate) {
        setSlotsLoading(true);
        setSelectedSlot(null);
        setAvailableSeats(null);
        
        try {
          const formattedDate = selectedDate.toISOString().split('T')[0];
          const response = await getSlotsByDate(formattedDate);
          
          if (response.error) {
            throw new Error(response.message || 'Failed to fetch slots');
          }
          
          setSlotsAvailability(response.data);
        } catch (err) {
          toast.error('Failed to fetch available slots. Please try again.');
          setSlotsAvailability(null);
        } finally {
          setSlotsLoading(false);
        }
      }
    };

    fetchSlots();
  }, [selectedDate]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
    setSlotsAvailability(null);
    setAvailableSeats(null);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    // Get the available seats for the selected slot
    const slotKey = SLOT_NAME_TO_KEY[slot];
    const seats = slotsAvailability?.[slotKey] || 0;
    setAvailableSeats(seats);
    
    // Trim members if they exceed available seats
    if (members.length > seats) {
      setMembers(members.slice(0, seats));
    }
  };

  const handleMemberChange = (index, field, value) => {
    const newMembers = [...members];
    newMembers[index] = {
      ...newMembers[index],
      [field]: value
    };
    setMembers(newMembers);
  };

  const handleAddMember = () => {
    if (members.length < availableSeats) {
      setMembers([...members, {
        firstName: '',
        lastName: '',
        gender: '',
        age: '',
        aadhaar: '',
        aadhaarFile: null,
        identityDetails: ''
      }]);
    }
  };

  const handleRemoveMember = (index) => {
    if (index > 0) {
      setMembers(members.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      const primaryMember = members[0];
      
      // Create JSON payload matching backend expected format
      const bookingData = {
        booking_date: formattedDate,
        time_segment: SLOT_NAME_TO_KEY[selectedSlot],
        primary_person_name: `${primaryMember.firstName} ${primaryMember.lastName}`.trim(),
        primary_contact: primaryMember.contact,
        persons: members.map(member => ({
          name: `${member.firstName} ${member.lastName}`.trim(),
          aadhaar: member.aadhaar,
          aadhaar_file: null, // File upload not supported in JSON format
          identity_details: member.identityDetails || ''
        }))
      };

      const response = await bookSlot(bookingData);
      
      // Show success message
      toast.success(response.message || 'Your request has been submitted successfully!');
      
      // Reset form immediately after successful submission
      setSelectedSlot(null);
      setSelectedDate(null);
      setAvailableSeats(null);
      setSlotsAvailability(null);
      setMembers([{
        firstName: '',
        lastName: '',
        gender: '',
        age: '',
        aadhaar: '',
        aadhaarFile: null,
        contact: '',
        identityDetails: ''
      }]);
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Booking failed. Please try again.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const showForm = selectedSlot && selectedDate && availableSeats > 0;

  return (
    <div className="darshan-booking">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="db-container">
        <div className="db-content-wrapper db-slot-booking-page">
          <div className="page-header">
            <div className="om-icon-wrapper">
              <span className="om-icon">🕉️</span>
            </div>
            <h1 className="page-title">
              Mandir Pooja Booking
            </h1>
            <p className="page-description">
              Book your slot for sacred pooja ceremonies
            </p>
            <div className="divider"></div>
          </div>

          <div className="section">
            <DateSelector
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
              disabled={false}
            />
          </div>

          {selectedDate && (slotsLoading || slotsAvailability) && (
            <div className="section animated">
              <SlotTabs 
                selectedSlot={selectedSlot} 
                onSlotSelect={handleSlotSelect}
                slotsAvailability={slotsAvailability}
                loading={slotsLoading}
              />
            </div>
          )}

          {selectedSlot && availableSeats !== null && (
            <div className="section animated">
              <AvailabilityInfo
                availableSeats={availableSeats}
                loading={false}
              />
            </div>
          )}

          {showForm && (
            <div className="section animated">
              <BookingForm
                members={members}
                availableSeats={availableSeats}
                onMembersChange={handleMemberChange}
                onAddMember={handleAddMember}
                onRemoveMember={handleRemoveMember}
                onSubmit={handleSubmit}
                loading={loading}
              />
            </div>
          )}

          <div className="footer">
            <div className="footer-box">
              <p className="footer-text">🙏 May your prayers be answered 🙏</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotBooking;
