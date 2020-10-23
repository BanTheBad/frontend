import React from 'react';

/**
 *
 * @param {{text: string, size: string, onClick: Object}} props
 */
function Button(props) {
  const { type, text, onClick, size, disabled } = props;

  return (
    <div>
      <button
        type={type}
        className={`button ${size ? size : ''}`}
        onClick={onClick}
        disabled={disabled}
        {...props}
        style={{
          backgroundColor: disabled ? '#C4C4C4' : '#303030',
          color: disabled ? '#666666' : '#F9DECA',
          border: disabled ? '2px solid #C4C4C4' : '2px solid #B5A396',

          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
