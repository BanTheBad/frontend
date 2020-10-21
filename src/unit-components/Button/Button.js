import React from 'react';

/**
 *
 * @param {{text: string, onClick: Object}} props
 */
function Button(props) {
  const { text, onClick } = props;

  return (
    <div>
      <button className="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
