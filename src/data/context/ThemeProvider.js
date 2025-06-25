import React, {createContext, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {darkTheme, lightTheme} from '../../utils/Constants/theme';


export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const systemScheme = useColorScheme();
  const [theme, setTheme] = useState(lightTheme);
  const [mode, setMode] = useState('system'); // 'light' | 'dark' | 'system'

  useEffect(() => {
    const loadTheme = async () => {
      const savedMode = await AsyncStorage.getItem('app-theme-mode');
      if (savedMode === 'light') {
        setTheme(lightTheme);
        setMode('light');
      } else if (savedMode === 'dark') {
        setTheme(darkTheme);
        setMode('dark');
      } else {
        // Default to system
        const sysTheme = systemScheme === 'dark' ? darkTheme : lightTheme;
        setTheme(sysTheme);
        setMode('system');
      }
    };
    loadTheme();
  }, [systemScheme]);

  const toggleTheme = async () => {
    let newMode;
    if (mode === 'light') {
      newMode = 'dark';
      setTheme(darkTheme);
    } else if (mode === 'dark') {
      newMode = 'system';
      setTheme(systemScheme === 'dark' ? darkTheme : lightTheme);
    } else {
      newMode = 'light';
      setTheme(lightTheme);
    }
    setMode(newMode);
    await AsyncStorage.setItem('app-theme-mode', newMode);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme, mode}}>
      {children}
    </ThemeContext.Provider>
  );
};
