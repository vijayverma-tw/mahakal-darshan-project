import React from 'react';

const MemberForm = ({ member, index, isPrimary, onChange, onRemove, errors }) => {
  const handleChange = (field, value) => {
    onChange(index, field, value);
  };

  return (
    <div className="db-member-form db-card">
      <div className="form-header">
        <div className="member-info">
          <div className={`avatar ${isPrimary ? 'primary' : 'additional'}`}>
            👤
          </div>
          <h3 className="member-title">
            {isPrimary ? 'Primary Member' : `Member ${index + 1}`}
          </h3>
        </div>
        {!isPrimary && (
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="remove-btn"
          >
            ✕ Remove
          </button>
        )}
      </div>

      <div className="fields-grid">
        {/* First Name */}
        <div className="db-form-group">
          <label className="db-label-text">
            <span className="icon">👤</span>
            <span>First Name</span>
            <span className="required">*</span>
          </label>
          <input
            type="text"
            value={member.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            className={`db-input-field ${errors?.firstName ? 'error' : ''}`}
            placeholder="Enter first name"
          />
          {errors?.firstName && (
            <p className="db-error-text">
              <span>⚠️</span> {errors.firstName}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="db-form-group">
          <label className="db-label-text">
            <span className="icon">👤</span>
            <span>Last Name</span>
            <span className="required">*</span>
          </label>
          <input
            type="text"
            value={member.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            className={`db-input-field ${errors?.lastName ? 'error' : ''}`}
            placeholder="Enter last name"
          />
          {errors?.lastName && (
            <p className="db-error-text">
              <span>⚠️</span> {errors.lastName}
            </p>
          )}
        </div>

        {/* Gender */}
        <div className="db-form-group full-width">
          <label className="db-label-text">
            <span className="icon">⚥</span>
            <span>Gender</span>
            <span className="required">*</span>
          </label>
          <div className="gender-grid">
            {['Male', 'Female', 'Other'].map((gender) => (
              <label 
                key={gender} 
                className={`gender-option ${member.gender === gender ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name={`gender-${index}`}
                  value={gender}
                  checked={member.gender === gender}
                  onChange={(e) => handleChange('gender', e.target.value)}
                  className="gender-input"
                />
                <div className="gender-content">
                  <span className="gender-icon">
                    {gender === 'Male' ? '👨' : gender === 'Female' ? '👩' : '👤'}
                  </span>
                  <span className={`gender-label ${member.gender === gender ? 'selected-label' : 'unselected-label'}`}>
                    {gender}
                  </span>
                </div>
              </label>
            ))}
          </div>
          {errors?.gender && (
            <p className="db-error-text">
              <span>⚠️</span> {errors.gender}
            </p>
          )}
        </div>

        {/* Age */}
        <div className="db-form-group">
          <label className="db-label-text">
            <span className="icon">🎂</span>
            <span>Age</span>
            <span className="required">*</span>
          </label>
          <input
            type="number"
            min="1"
            max="120"
            value={member.age}
            onChange={(e) => handleChange('age', e.target.value)}
            className={`db-input-field ${errors?.age ? 'error' : ''}`}
            placeholder="Enter age (1-120)"
          />
          {errors?.age && (
            <p className="db-error-text">
              <span>⚠️</span> {errors.age}
            </p>
          )}
        </div>

        {/* Aadhaar Number */}
        <div className="db-form-group">
          <label className="db-label-text">
            <span className="icon">🆔</span>
            <span>Aadhaar Number</span>
            <span className="required">*</span>
          </label>
          <input
            type="text"
            maxLength="12"
            value={member.aadhaar}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '');
              handleChange('aadhaar', value);
            }}
            className={`db-input-field ${errors?.aadhaar ? 'error' : ''}`}
            placeholder="12-digit Aadhaar number"
          />
          <div className="aadhaar-counter">
            <p className="counter-text">
              {member.aadhaar.length}/12 digits
            </p>
            {member.aadhaar.length === 12 && (
              <span className="complete-badge">
                <span>✓</span> Complete
              </span>
            )}
          </div>
          {errors?.aadhaar && (
            <p className="db-error-text">
              <span>⚠️</span> {errors.aadhaar}
            </p>
          )}
        </div>

        {/* Aadhaar Document Upload */}
        <div className="db-form-group">
          <label className="db-label-text">
            <span className="icon">📄</span>
            <span>Aadhaar Document</span>
            <span className="optional">(Optional)</span>
          </label>
          <div className="file-upload-wrapper">
            <input
              type="file"
              id={`aadhaar-file-${index}`}
              accept="image/*,.pdf"
              onChange={(e) => {
                const file = e.target.files[0];
                handleChange('aadhaarFile', file || null);
              }}
              className="file-input"
            />
            <label htmlFor={`aadhaar-file-${index}`} className="file-upload-label db-input-field">
              {member.aadhaarFile ? (
                <span className="file-selected">
                  <span className="file-icon">📎</span>
                  <span className="file-name">{member.aadhaarFile.name}</span>
                </span>
              ) : (
                <span className="file-placeholder">
                  <span className="upload-icon">📤</span>
                  <span>Choose file (Image/PDF)</span>
                </span>
              )}
            </label>
            {member.aadhaarFile && (
              <button
                type="button"
                className="file-remove-btn"
                onClick={() => handleChange('aadhaarFile', null)}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Contact Number (Primary member only) */}
        {isPrimary && (
          <div className="db-form-group">
            <label className="db-label-text">
              <span className="icon">📱</span>
              <span>Contact Number</span>
              <span className="required">*</span>
            </label>
            <input
              type="tel"
              value={member.contact || ''}
              onChange={(e) => {
                // Allow only digits and + sign
                const value = e.target.value.replace(/[^\d+]/g, '');
                handleChange('contact', value);
              }}
              className={`db-input-field ${errors?.contact ? 'error' : ''}`}
              placeholder="+91XXXXXXXXXX"
              maxLength="13"
            />
            {errors?.contact && (
              <p className="db-error-text">
                <span>⚠️</span> {errors.contact}
              </p>
            )}
          </div>
        )}

        {/* Identity Details (Optional) */}
        <div className={`db-form-group ${isPrimary ? '' : 'full-width'}`}>
          <label className="db-label-text">
            <span className="icon">📝</span>
            <span>Additional Identity Info</span>
            <span className="optional">(Optional)</span>
          </label>
          <input
            type="text"
            value={member.identityDetails || ''}
            onChange={(e) => handleChange('identityDetails', e.target.value)}
            className="db-input-field"
            placeholder="Any additional identity information"
          />
        </div>
      </div>
    </div>
  );
};

export default MemberForm;
