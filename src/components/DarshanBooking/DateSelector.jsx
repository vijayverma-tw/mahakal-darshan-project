import React from 'react';
import DatePicker from 'react-datepicker';

const DateSelector = ({ selectedDate, onDateSelect, disabled }) => {
  const today = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  return (
    <div className="db-date-selector db-card">
      <div className="card-header">
        <span className="icon">📅</span>
        <h2 className="title">Select Date</h2>
      </div>
      <p className="description">Pick your preferred date for the ceremony</p>
      <div className="date-picker-wrapper">
        <DatePicker
          selected={selectedDate}
          onChange={onDateSelect}
          minDate={today}
          maxDate={maxDate}
          dateFormat="dd/MM/yyyy"
          placeholderText="Click to choose a date"
          disabled={disabled}
          className="db-input-field"
          inline={false}
          showPopperArrow={true}
          calendarClassName="custom-calendar"
          popperClassName="darshan-booking-datepicker-popper"
          popperProps={{
            strategy: "fixed"
          }}
        />
        <div className="calendar-icon">📆</div>
      </div>
      <div className="info-box">
        <p className="info-text">
          <span>ℹ️</span>
          You can book slots up to 3 months in advance
        </p>
      </div>
    </div>
  );
};

export default DateSelector;
