import React from 'react';
import { Hero } from '../components/Hero';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useLanguage } from '../components/Header';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Building2, Settings, Clock } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  Home: Home,
  Building2: Building2,
  Settings: Settings,
  Clock: Clock
};

export const HomePage = () => {
  const { t, currentLang } = useLanguage();

  return (
    <div>
      <Hero />
      
      {/* Quick Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              {t('services.badge')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('services.description')}
            </p>
          </div>

          {/* Services Grid - Preview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {mockData.services.map((service) => {
              const IconComponent = iconMap[service.icon];
              
              const getTitle = () => {
                switch(currentLang) {
                  case 'ru': return service.titleRu;
                  case 'en': return service.titleEn;
                  default: return service.title;
                }
              };
              
              return (
                <Card key={service.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {getTitle()}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {currentLang === 'ru' ? service.descriptionRu : 
                       currentLang === 'en' ? service.descriptionEn : 
                       service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA to Services Page */}
          <div className="text-center">
            <Link to="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                {t('cta.learnMore')}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {mockData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-medium">
                    {currentLang === 'ru' ? stat.labelRu : 
                     currentLang === 'en' ? stat.labelEn : 
                     stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};