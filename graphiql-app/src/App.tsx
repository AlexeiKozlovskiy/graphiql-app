import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Page404 from './routes/Page404';
import HomePage from './routes/HomePage';
import Header from './components/Header';
import { IntlProvider } from 'react-intl';
import { LanguagesManager } from './components/languages/languagesManager';
import { translations } from './components/languages/translations';
import { LOCALES } from './components/languages/locales';
import Footer from './components/Footer';

function App() {
  const { currentLocale, setLocale } = LanguagesManager();

  return (
    <IntlProvider
      messages={translations[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <div className="App wrapper">
        <Header currentLocale={currentLocale} setLocale={setLocale} />
        <div className="appContent">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;
