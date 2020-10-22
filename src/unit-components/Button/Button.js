import React from 'react';

/**
 *
 * @param {{text: string, size: string, onClick: Object}} props
 */
function Button(props) {
  const { text, onClick, size } = props;

  return (
    <div>
      <button className={`button ${size ? size : ''}`} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
