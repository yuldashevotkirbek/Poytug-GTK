import React, { useState, createContext, useContext } from 'react';
import { Button } from './ui/button';
import { Phone, Globe, Menu, X } from 'lucide-react';
import { mockData } from '../mock';
import { NavLink, Link } from 'react-router-dom';

// Language Context
const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return { currentLang: 'uz', setCurrentLang: () => {}, t: (key) => key };
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('uz');

  const t = (key) => {
    const keys = key.split('.');
    let value = mockData.translations[currentLang];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // fallback to key if translation not found
      }
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLang, setCurrentLang, t } = useLanguage();

  const languages = [
    { code: 'uz', name: 'O\'zbek', flag: '🇺🇿' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const navItems = [
    { key: 'nav.home', to: '/' },
    { key: 'nav.services', to: '/services' },
    { key: 'nav.about', to: '/about' },
    { key: 'nav.contact', to: '/contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3 group transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src="/poytug-gaz.png" 
                    alt="Poytug' Gaz" 
                    className="h-10 w-10 md:h-12 md:w-12 object-contain transition-all duration-300 group-hover:drop-shadow-lg" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                    {mockData.company.name}
                  </span>
                  <span className="text-xs md:text-sm text-gray-500 font-medium -mt-1">
                    Poytug' Gaz To'ldirish Korxonasi
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`
                  }
                  end={item.to === '/'}
                >
                  {t(item.key)}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative group">
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span className="text-sm">{languages.find(l => l.code === currentLang)?.flag}</span>
              </Button>
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>{mockData.company.phone}</span>
            </div>

            {/* CTA Button */}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors duration-200">
              {t('cta.orderNow')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {/* Mobile Logo */}
              <div className="px-3 py-2 mb-3 border-b border-gray-100">
                <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                  <img 
                    src="/poytug-gaz.png" 
                    alt="Poytug' Gaz" 
                    className="h-8 w-8 object-contain" 
                  />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-blue-600">{mockData.company.name}</span>
                    <span className="text-xs text-gray-500">LPG To'ldirish Korxonasi</span>
                  </div>
                </Link>
              </div>
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`
                  }
                  end={item.to === '/'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </NavLink>
              ))}
              <div className="border-t pt-3 mt-3">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{mockData.company.phone}</span>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full mt-2 mx-3">
                  {t('cta.orderNow')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};