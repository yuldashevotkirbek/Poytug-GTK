import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Home, Building2, Settings, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { mockData } from '../mock';
import { useLanguage } from './Header';

const iconMap = {
  Home: Home,
  Building2: Building2,
  Settings: Settings,
  Clock: Clock
};

export const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const { t, currentLang } = useLanguage();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            {t('services.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mockData.services.map((service) => {
            const IconComponent = iconMap[service.icon];
            const isSelected = selectedService === service.id;
            
            // Get localized content
            const getTitle = () => {
              switch(currentLang) {
                case 'ru': return service.titleRu;
                case 'en': return service.titleEn;
                default: return service.title;
              }
            };
            
            const getDescription = () => {
              switch(currentLang) {
                case 'ru': return service.descriptionRu;
                case 'en': return service.descriptionEn;
                default: return service.description;
              }
            };
            
            const getFeatures = () => {
              switch(currentLang) {
                case 'ru': return service.featuresRu || service.features;
                case 'en': return service.featuresEn || service.features;
                default: return service.features;
              }
            };
            
            return (
              <Card
                key={service.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0 ${
                  isSelected ? 'bg-blue-50 shadow-2xl scale-105' : 'bg-white shadow-lg'
                }`}
                onClick={() => setSelectedService(isSelected ? null : service.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                    isSelected ? 'bg-blue-600' : 'bg-gradient-to-br from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700'
                  }`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mt-4">
                    {getTitle()}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {getDescription()}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {getFeatures().map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant={isSelected ? "default" : "outline"}
                    className={`w-full transition-all duration-300 ${
                      isSelected 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {t('cta.learnMore')}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Details */}
        {selectedService && (
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0 shadow-2xl">
            <CardContent className="p-8">
              {(() => {
                const service = mockData.services.find(s => s.id === selectedService);
                const IconComponent = iconMap[service.icon];
                
                return (
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {currentLang === 'ru' ? service.titleRu : currentLang === 'en' ? service.titleEn : service.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        {currentLang === 'ru' ? service.descriptionRu : currentLang === 'en' ? service.descriptionEn : service.description}
                      </p>
                      <div className="grid grid-cols-1 gap-3 mb-6">
                        {(currentLang === 'ru' ? service.featuresRu || service.features : 
                          currentLang === 'en' ? service.featuresEn || service.features : 
                          service.features).map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white rounded-2xl p-8 shadow-xl">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                          {t('services.orderReady')}
                        </h4>
                        <p className="text-gray-600 mb-6">
                          {t('services.orderDescription')}
                        </p>
                        <div className="space-y-3">
                          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                            {t('cta.getQuote')}
                          </Button>
                          <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-3">
                            {t('cta.callUs')}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};