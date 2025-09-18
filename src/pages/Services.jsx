import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Home, Building2, Settings, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { mockData } from '../mock';
import { useLanguage } from '../components/Header';

const iconMap = {
  Home: Home,
  Building2: Building2,
  Settings: Settings,
  Clock: Clock
};

export const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const { t, currentLang } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            {t('services.badge')}
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.description')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
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
                  className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-102 border-0 ${
                    isSelected ? 'bg-blue-50 shadow-2xl scale-102' : 'bg-white shadow-lg'
                  }`}
                  onClick={() => setSelectedService(isSelected ? null : service.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                        isSelected ? 'bg-blue-600' : 'bg-gradient-to-br from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700'
                      }`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                          {getTitle()}
                        </CardTitle>
                        <p className="text-gray-600 leading-relaxed">
                          {getDescription()}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    {/* Features */}
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {getFeatures().map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        variant={isSelected ? "default" : "outline"}
                        className={`flex-1 transition-all duration-300 ${
                          isSelected 
                            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                            : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        {isSelected ? t('services.orderReady') : t('cta.learnMore')}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                      
                      {isSelected && (
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
                          {t('cta.getQuote')}
                        </Button>
                      )}
                    </div>
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
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">
                          {currentLang === 'ru' ? service.titleRu : currentLang === 'en' ? service.titleEn : service.title}
                        </h2>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md mx-auto">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          {t('services.orderReady')}
                        </h3>
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
                  );
                })()}
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
};