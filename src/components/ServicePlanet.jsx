import React from 'react';

export function ServicePlanet({ color, glow, name }) {
  return (
    <div className="service-planet-wrapper">
      <div
        className="service-planet-container"
        style={{
          '--planet-color': color,
          '--glow-color': glow,
        }}
      >
        <div className="service-planet-orbit-ring" />
        <div className="planet-dot" />
      </div>
      {name && (
        <div className="service-planet-badge">
          <span>{name}</span>
        </div>
      )}
    </div>
  );
}
