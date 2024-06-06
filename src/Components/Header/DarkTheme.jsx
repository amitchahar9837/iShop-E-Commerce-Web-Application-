import React, { useEffect, useState } from "react";
import DARKTHEMEICON from '../../assets/images/SVGIcons/dark-theme.svg'
const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem('theme') : 'light');

  const element= document.documentElement; //access to html element
  //adding theme to localStorage and html element
  useEffect(()=>{
    localStorage.setItem('theme', theme);
    if(theme === 'dark'){
        element.classList.add('dark');
    }else{
        element.classList.remove('dark');
    }
  })
  return (
    <div>
      <img onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')}
        src={DARKTHEMEICON}
        alt=""
        title={theme === 'dark' ? 'switch to light mode' : 'switch to dark mode'}
        className={`w-5 cursor-pointer transition-all duration-300 dark:invert`}
      />
    </div>
  );
};

export default DarkMode;
