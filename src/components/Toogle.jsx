import { useState } from 'react';

function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{
      padding: '32px',
      border: '1px solid #ddd',
      borderRadius: '12px',
      width: '240px',
    }}>
      <h2>Toggle Panel</h2>

      <button
        onClick={() => setIsVisible(prev => !prev)}
        style={{
          background: isVisible ? '#e74c3c' : '#2ecc71',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        {isVisible ? 'Hide' : 'Show'} Content
      </button>

      {isVisible && (
        <div style={{
          marginTop: '16px',
          padding: '12px',
          background: '#f0f4ff',
          borderRadius: '8px',
        }}>
          <p>🎉 You revealed the hidden content!</p>
          <p>This appears and disappears based on state.</p>
        </div>
      )}
    </div>
  );
}

export default Toggle;