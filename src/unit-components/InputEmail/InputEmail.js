import React from 'react';

/**
 *
 * @param {{label: string, value: string, onChange: Object}} props
 */
function InputEmail(props) {
  const { label, value, onChange, className } = props;

  return (
    <div>
      <div>
        <label htmlFor="input-email" className="label input">
          {label}
        </label>
      </div>
      <input
        type="email"
        name="input-email"
        className={className}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

export default InputEmail;
