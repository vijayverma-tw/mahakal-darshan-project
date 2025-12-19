import React, { useState } from 'react';
import MemberForm from './MemberForm';

const BookingForm = ({ 
  members, 
  availableSeats, 
  onMembersChange, 
  onAddMember, 
  onRemoveMember,
  onSubmit,
  loading 
}) => {
  const [errors, setErrors] = useState({});

  const validateMember = (member, index) => {
    const memberErrors = {};

    if (!member.firstName.trim()) {
      memberErrors.firstName = 'First name is required';
    }

    if (!member.lastName.trim()) {
      memberErrors.lastName = 'Last name is required';
    }

    if (!member.gender) {
      memberErrors.gender = 'Please select a gender';
    }

    const age = parseInt(member.age);
    if (!member.age || age < 1 || age > 120) {
      memberErrors.age = 'Age must be between 1 and 120';
    }

    if (!member.aadhaar) {
      memberErrors.aadhaar = 'Aadhaar number is required';
    } else if (!/^\d{12}$/.test(member.aadhaar)) {
      memberErrors.aadhaar = 'Aadhaar must be exactly 12 digits';
    }

    // Validate contact number for primary member
    if (index === 0) {
      if (!member.contact?.trim()) {
        memberErrors.contact = 'Contact number is required';
      } else if (!/^\+?\d{10,12}$/.test(member.contact)) {
        memberErrors.contact = 'Enter a valid phone number (10-12 digits)';
      }
    }

    return memberErrors;
  };

  const validateAllMembers = () => {
    const allErrors = {};
    let hasErrors = false;

    members.forEach((member, index) => {
      const memberErrors = validateMember(member, index);
      if (Object.keys(memberErrors).length > 0) {
        allErrors[index] = memberErrors;
        hasErrors = true;
      }
    });

    setErrors(allErrors);
    return !hasErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAllMembers()) {
      onSubmit();
    } else {
      const firstErrorElement = document.querySelector('.db-input-field.error');
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handleMemberChange = (index, field, value) => {
    onMembersChange(index, field, value);
    if (errors[index]?.[field]) {
      const newErrors = { ...errors };
      delete newErrors[index][field];
      if (Object.keys(newErrors[index]).length === 0) {
        delete newErrors[index];
      }
      setErrors(newErrors);
    }
  };

  const canAddMore = members.length < availableSeats;

  return (
    <form onSubmit={handleSubmit} className="db-booking-form">
      <div className="form-sections">
        {members.map((member, index) => (
          <div key={index} className="member-item">
            <MemberForm
              member={member}
              index={index}
              isPrimary={index === 0}
              onChange={handleMemberChange}
              onRemove={onRemoveMember}
              errors={errors[index]}
            />
          </div>
        ))}
      </div>

      {canAddMore && (
        <button
          type="button"
          onClick={onAddMember}
          className="add-member-btn"
        >
          <span className="add-icon">➕</span>
          <span>Add Another Member</span>
        </button>
      )}
      
      {!canAddMore && members.length < availableSeats && (
        <div className="max-members-info db-card">
          <p className="info-content">
            <span className="info-icon">ℹ️</span>
            Maximum members ({availableSeats}) reached
          </p>
        </div>
      )}

      <div className="action-buttons db-card">
        <div className="buttons-grid">
          <button
            type="submit"
            disabled={loading}
            className="db-btn-primary full-width"
          >
            {loading ? (
              <>
                <div className="spinner"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>✓</span>
                <span>Submit Booking</span>
              </>
            )}
          </button>
        </div>
        <div className="info-banner">
          <p className="banner-text">
            <span className="banner-icon">💡</span>
            Make sure all fields are filled correctly before submitting
          </p>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
