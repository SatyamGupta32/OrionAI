import React from 'react';

interface ToggleSwitchProps {
  isOn: boolean;
  toggleSwitch: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, toggleSwitch }) => {
  return (
    <div
      onClick={toggleSwitch}
      className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition duration-300 ${
        isOn ? 'bg-green-500' : 'bg-gray-300'
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition duration-300 ${
          isOn ? 'translate-x-6' : ''
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
