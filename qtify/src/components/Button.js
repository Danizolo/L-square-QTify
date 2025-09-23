/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 23/09/2025 - 13:46:44
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/09/2025
    * - Author          : DHANUSH
    * - Modification    : 
**/
import React, { useState } from 'react';

function Button({ text }) {
    
  const [isHovered, setIsHovered] = useState(false);
  const styles = {
    '--primary-green': '#34C94B',
    '--black': '#121212',
  };

  const buttonStyle = {
    backgroundColor: 'var(--black)',
    color: 'var(--primary-green)',
    fontFamily: 'Poppins, sans-serif',
    padding: '12px 24px',
    border: '1px solid var(--primary-green)',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'background-color 0.3s ease, transform 0.1s ease',
    display: 'inline-block',
    textAlign: 'center',
    outline: 'none',
  };

  const buttonHoverStyle = {
    backgroundColor: 'var(--primary-green)',
    color: 'var(--black)',
    transform: 'scale(1.05)',
  };

  return (
    <button
      style={{ ...styles, ...buttonStyle, ...(isHovered && buttonHoverStyle) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
}

// // The main App component that renders our button.
// // This component should be the default export for your application.
// function App() {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
//       {/* Example usage of the reusable Button component */}
//       <Button text="Give Feedback" />
//     </div>
//   );
// }

export default Button;
