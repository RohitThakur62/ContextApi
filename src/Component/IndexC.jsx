import React, { useContext } from 'react'
import { ThemeContext } from '../App'

export const IndexC = () => {

    // const theme=useContext(ThemeContext);
    // const setTheme=useContext(ThemeContext);
    //destructure
    const{theme,setTheme}=useContext(ThemeContext);

    const handleButton=()=>{
        if(theme=='light'){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }

    }
  return (
    <div>
        <button onClick={handleButton}>ChangeTheme</button>
    </div>
  )
}
