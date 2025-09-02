import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Btn() {
  const { ThemeMode, enableDarkMode, enableLightMode } = useContext(ThemeContext);

  const handle = (e) => {
    if (e.target.checked) {
      enableDarkMode();
    } else {
      enableLightMode();
    }
  };

  return (
    <input
      type="checkbox"
      checked={ThemeMode === 'dark'}
      onChange={handle}
    />
  );
}

export default Btn;
