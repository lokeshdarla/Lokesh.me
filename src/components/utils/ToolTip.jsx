import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ text, children }) => {
  const [isTooltipVisible, setTooltipVisibility] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisibility(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisibility(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isTooltipVisible && (
        <div className="absolute z-10 p-2 text-white bg-gray-900 rounded-lg shadow-sm">
          {text}
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
