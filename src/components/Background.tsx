import React from 'react';

const GridOverlay: React.FC = () => {
  const gridStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: '25px 25px',
    zIndex: 0,
    backgroundImage: 'radial-gradient(black 0.5px, transparent 0)',
  };

  return <div style={gridStyle}></div>;
};

export default GridOverlay;
