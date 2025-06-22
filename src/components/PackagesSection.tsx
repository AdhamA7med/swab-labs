
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Award, Heart } from 'lucide-react';

const PackagesSection = () => {
  const packages = [
    {
      name: 'الباقة الأساسية',
      price: '299',
      originalPrice: '450',
      description: 'فحوصات أساسية للاطمئنان على الصحة العامة',
      features: [
        'CBC - صورة دم كاملة',
        'السكر العشوائي',
        'وظائف الكلى (Urea/Creatinine)',
        'وظائف الكبد (AST/ALT)',
        'تحليل البول الكامل'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      popular: false
    },
    {
      name: 'الباقة الشاملة',
      price: '599',
      originalPrice: '850',
      description: 'فحص شامل يغطي معظم الجوانب الصحية المهمة',
      features: [
        'جميع تحاليل الباقة الأساسية',
        'TSH/FT4 - الغدة الدرقية',
        'HbA1c - السكر التراكمي',
        'Cholesterol - الكوليسترول الكامل',
        'فيتامين د',
        'مخزون الحديد (Ferritin)',
        'حمض البول (Uric Acid)'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      popular: true
    },
    {
      name: 'الباقة البلاتينية',
      price: '899',
      originalPrice: '1299',
      description: 'الفحص الأكثر شمولية لصحة مثالية',
      features: [
        'جميع تحاليل الباقة الشاملة',
        'فيتامين ب12',
        'الكالسيوم الكلي',
        'المغنيسيوم',
        'الزنك',
        'البروتين الكلي والألبومين',
        'CRP - بروتين C التفاعلي',
        'استشارة طبية مجانية'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="flex items-center justify-center space-x-reverse space-x-2 mb-4">
            <Star className="w-8 h-8 text-medical-blue" />
            <span className="text-medical-blue font-semibold">باقاتنا المميزة</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            اختر الباقة{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-green">
              المناسبة لك
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            باقات متنوعة ومصممة لتلبي احتياجاتك الصحية المختلفة بأفضل الأسعار
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`${pkg.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 medical-card-hover animate-fade-in-up relative overflow-hidden ${
                pkg.popular ? 'ring-4 ring-green-400 ring-opacity-50' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 text-sm font-bold rounded-bl-lg">
                  الأكثر طلباً
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-4 animate-pulse-glow`}>
                  {pkg.popular ? (
                    <Award className="w-10 h-10 text-white" />
                  ) : (
                    <Heart className="w-10 h-10 text-white" />
                  )}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {pkg.description}
                </CardDescription>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-gray-900">
                    {pkg.price}{' '}
                    <span className="text-lg text-gray-600 font-normal">جنيه</span>
                  </div>
                  <div className="text-lg text-gray-500 line-through">
                    {pkg.originalPrice} جنيه
                  </div>
                  <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                    وفر {parseInt(pkg.originalPrice) - parseInt(pkg.price)} جنيه
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-reverse space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105`}
                >
                  احجز الآن
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-medical-blue to-medical-green p-8 rounded-3xl text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🎉 عرض خاص لفترة محدودة</h3>
            <p className="text-lg mb-4 opacity-90">
              احصل على خصم إضافي 10% عند حجز أي باقة اليوم + استشارة طبية مجانية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-sm opacity-80">
                📞 للحجز: 01080865555 | 📱 واتساب: 01080184444
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
