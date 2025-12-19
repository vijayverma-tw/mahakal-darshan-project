import React from 'react';

const AvailabilityInfo = ({ availableSeats, loading }) => {
  if (loading) {
    return (
      <div className="db-availability-info loading db-card">
        <div className="loading-content">
          <div className="spinner"></div>
          <p className="loading-text">Checking availability...</p>
        </div>
      </div>
    );
  }

  if (availableSeats === null || availableSeats === undefined) {
    return null;
  }

  const isAvailable = availableSeats > 0;

  return (
    <div className={`db-availability-info db-card ${isAvailable ? 'available' : 'unavailable'}`}>
      <div className="background-icon">{isAvailable ? '✅' : '❌'}</div>
      
      <div className="content">
        <div className="info-row">
          <div className="main-info">
            <div className="status-header">
              <span className="status-icon">{isAvailable ? '✅' : '❌'}</span>
              <h3 className={`status-title ${isAvailable ? 'available-text' : 'unavailable-text'}`}>
                {isAvailable ? 'Seats Available!' : 'No Seats Available'}
              </h3>
            </div>
            <div className="seats-count">
              <p className={`count ${isAvailable ? 'available-count' : 'unavailable-count'}`}>
                {availableSeats}
              </p>
              <p className="label">
                {availableSeats === 1 ? 'Seat' : 'Seats'}
              </p>
            </div>
          </div>
          
          {isAvailable && (
            <div className="members-box">
              <p className="box-label">You can book up to</p>
              <p className="members-count">{availableSeats}</p>
              <p className="members-label">Members</p>
            </div>
          )}
        </div>
        
        {!isAvailable && (
          <div className="warning-box">
            <p className="warning-text">
              <span>⚠️</span>
              Please select a different slot or date
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailabilityInfo;
