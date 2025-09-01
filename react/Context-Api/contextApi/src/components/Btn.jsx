import React from 'react'
import useTheme from '../context/theme'

function Btn() {
  const { themeMode, lightMode, darkMode } = useTheme()

  const checkMode = (e) => {
    if (e.target.checked) {
      darkMode()
    } else {
      lightMode()
    }
  }

  return (
    <>
      <label className="text-white mr-2">Dark Mode</label>
      <input type="checkbox" checked={themeMode === "dark"} onChange={checkMode} />
    </>
  )
}

export default Btn
