import React from 'react';

/**
 *
 * @param {{label: string, value: string, onChange: Object}} props
 */
function InputText(props) {
  const { label, value, onChange } = props;

  return (
    <div>
      <div>
        <label htmlFor="input-text" className="label input">
          {label}
        </label>
      </div>
      <input type="text" name="input-text" value={value} onChange={onChange} />
    </div>
  );
}

export default InputText;
