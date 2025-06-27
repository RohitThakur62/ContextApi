import React, { createContext, useState } from 'react'
import { IndexA } from './Component/indexA';
import './App.css'
const ThemeContext=createContext();
const App = () => {
  const[theme,setTheme]=useState('light');
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className='container' style={{backgroundColor:theme==='light'?
        'red':'blue'
      }}>
        <IndexA/>
      </div>
      
    </ThemeContext.Provider>
    
  )
}

export default App;
export {ThemeContext};
