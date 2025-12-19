import React from 'react';

// Updated slots with Hindi names
const SLOTS = ['प्रातः', 'मध्याह्न', 'सायंकाल', 'रात्रि'];

const SLOT_ICONS = {
  'प्रातः': '☀️',
  'मध्याह्न': '🌞',
  'सायंकाल': '🌆',
  'रात्रि': '🌙'
};

// Mapping from display name to API key
const SLOT_NAME_TO_KEY = {
  'प्रातः': 'MORNING',
  'मध्याह्न': 'NOON',
  'सायंकाल': 'EVENING',
  'रात्रि': 'NIGHT',
};

const SlotTabs = ({ selectedSlot, onSlotSelect, slotsAvailability, loading }) => {
  if (loading) {
    return (
      <div className="db-slot-tabs db-card">
        <div className="card-header">
          <span className="icon">⏰</span>
          <h2 className="title">Available Slots</h2>
        </div>
        <div className="loading-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div className="spinner"></div>
          <p className="loading-text" style={{ marginLeft: '1rem' }}>Loading available slots...</p>
        </div>
      </div>
    );
  }

  if (!slotsAvailability) {
    return null;
  }

  return (
    <div className="db-slot-tabs db-card">
      <div className="card-header">
        <span className="icon">⏰</span>
        <h2 className="title">Select Pooja Slot</h2>
      </div>
      <p className="description">Choose your preferred time for the pooja ceremony</p>
      <div className="slots-grid">
        {SLOTS.map((slot) => {
          const slotKey = SLOT_NAME_TO_KEY[slot];
          const availability = slotsAvailability[slotKey] || 0;
          const isDisabled = availability === 0;
          
          return (
            <button
              key={slot}
              onClick={() => !isDisabled && onSlotSelect(slot)}
              className={`slot-button ${selectedSlot === slot ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
              disabled={isDisabled}
            >
              <div className="button-content">
                <span className="slot-icon">{SLOT_ICONS[slot]}</span>
                <span className="slot-name">{slot}</span>
                <span className={`slot-availability ${availability > 5 ? 'high' : availability > 0 ? 'low' : 'none'}`}>
                  {availability > 0 ? `${availability} seats` : 'No seats'}
                </span>
              </div>
              {selectedSlot === slot && (
                <div className="checkmark">✓</div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SlotTabs;
