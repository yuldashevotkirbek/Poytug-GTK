import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Send } from 'lucide-react';
import { mockData } from '../mock';
import { useLanguage } from './Header';

export const Footer = () => {
  const { t, currentLang } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: t('nav.services'),
      links: [
        'Uyga yetkazib berish',
        'Biznes xizmatlar',
        'Propan baklari o\'rnatish',
        '24/7 favqulodda xizmat',
        'Online buyurtma'
      ]
    },
    {
      title: 'Kompaniya',
      links: [
        t('nav.about'),
        'Bizning jamoamiz',
        'Karyera',
        'Yangiliklar',
        'Blog'
      ]
    },
    {
      title: 'Yordam',
      links: [
        'FAQ',
        'Texnik yordam',
        'Xavfsizlik yo\'riqlari',
        'Narxlar',
        t('nav.contact')
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {mockData.company.name}
              </h3>
              <p className="text-gray-400">
                {currentLang === 'ru' ? mockData.company.tagline.ru : currentLang === 'en' ? mockData.company.tagline.en : mockData.company.tagline.uz}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">{mockData.company.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">{mockData.company.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Butun O'zbekiston</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">24/7 xizmat</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">{t('footer.socialTitle')}</h4>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </button>
                <button className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                </button>
                <button className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        

        {/* Bottom Footer */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-gray-400">
            <p>&copy; {currentYear} {mockData.company.name}. {t('footer.copyright')}</p>
          </div>
          <div className="md:text-right">
            <div className="flex flex-col md:flex-row md:justify-end gap-4 md:gap-8">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                {t('footer.termsOfService')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                {t('footer.privacyPolicy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                {t('footer.cookiePolicy')}
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </footer>
  );
};