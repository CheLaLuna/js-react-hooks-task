import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// BEGIN (write your solution here)
const Factorial = ({ number }) => {
    const factorialFunc = (num) => {
      if (num <= 0) return 1;
      return num * factorialFunc(num - 1);
    };
  
    const result = factorialFunc(number);
    return <div>Factorial of {number} is {result}</div>;
  };
  
  const App = () => {
    const { t, i18n } = useTranslation();
    const [value, setValue] = useState(0);
  
    const handleLangSwitch = (e) => {
      const lang = e.target.dataset.testid;
      i18n.changeLanguage(lang);
    };
  
    const getClassName = (currLang) => {
      return i18n.language === currLang ? 'btn btn-primary' : 'btn btn-outline-primary';
    };
  
    return (
      <div className="App">
        <div className="btn-group mb-3" role="group">
          <button
            type="button"
            data-testid="en"
            className={getClassName('en')}
            onClick={handleLangSwitch}
          >
            {t('languages.en')}
          </button>
          <button
            type="button"
            data-testid="ru"
            className={getClassName('ru')}
            onClick={handleLangSwitch}
          >
            {t('languages.ru')}
          </button>
        </div>
        <br />
        <div className="btn-group mb-3" role="group">
          <button type="button" className="btn btn-outline-primary" onClick={() => setValue(1)}>{`${t('factorial')} 1`}</button>
          <button type="button" className="btn btn-outline-primary" onClick={() => setValue(5)}>{`${t('factorial')} 5`}</button>
          <button type="button" className="btn btn-outline-primary" onClick={() => setValue(10)}>{`${t('factorial')} 10`}</button>
          <button type="button" className="btn btn-outline-primary" onClick={() => setValue(20)}>{`${t('factorial')} 20`}</button>
        </div>
        <Factorial number={value} />
      </div>
    );
};
// END

export default App;
