import React, {createContext, useState, useContext} from 'react';

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export const AppProvider = ({children}) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  const translate = async (text) => {
    if (language === 'en') return text;

    try {
      const response = await fetch('https://libretranslate.de/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          q: text,
          source: 'en',
          target: 'hi',
          format: 'text',
        }),
      });

      const data = await response.json();
      return data.translatedText;
    } catch (error) {
      console.error('Translation Error:', error);
      return text;
    }
  };

  return (
    <AppContext.Provider value={{language, toggleLanguage, translate}}>
      {children}
    </AppContext.Provider>
  );
};
