
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Droplet, Activity, Eye, Thermometer, Shield, Pill, Award } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Droplet,
      title: 'CBC - صورة دم كاملة',
      description: 'فحص شامل لمكونات الدم للكشف عن الأنيميا والالتهابات',
      symptoms: 'إرهاق، دوخة، ضعف عام، شحوب الوجه',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: Activity,
      title: 'TSH/FT4 - الغدة الدرقية',
      description: 'فحص وظائف الغدة الدرقية وتنظيم الهرمونات',
      symptoms: 'زيادة أو نقص الوزن، خمول، تساقط شعر',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Thermometer,
      title: 'HbA1c - السكر التراكمي',
      description: 'قياس مستوى السكر في الدم خلال الشهرين الماضيين',
      symptoms: 'عطش دائم، تبول متكرر، إرهاق غير مبرر',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Heart,
      title: 'Cholesterol - الكوليسترول',
      description: 'فحص مستويات الدهون والكوليسترول في الدم',
      symptoms: 'تاريخ عائلي لأمراض القلب، سمنة، اضطراب الدهون',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Shield,
      title: 'وظائف الكلى - Urea/Creatinine',
      description: 'تقييم كفاءة عمل الكلى وصحة الجهاز البولي',
      symptoms: 'تورم الرجلين، قلة التبول، ارتفاع ضغط الدم',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
    {
      icon: Eye,
      title: 'وظائف الكبد - AST/ALT',
      description: 'فحص سلامة الكبد وكفاءة وظائفه الحيوية',
      symptoms: 'غثيان مستمر، اصفرار الجلد أو العين، إرهاق',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: Pill,
      title: 'فيتامين د - Vitamin D',
      description: 'قياس مستوى فيتامين د المهم لصحة العظام والمناعة',
      symptoms: 'ألم في العظام، اكتئاب، ضعف مناعة، تعب مزمن',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Award,
      title: 'مخزون الحديد - Ferritin',
      description: 'فحص مستوى مخزون الحديد في الجسم',
      symptoms: 'خمول، أنيميا، تعب بدون سبب واضح، تساقط شعر',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="flex items-center justify-center space-x-reverse space-x-2 mb-4">
            <Heart className="w-8 h-8 text-medical-blue" />
            <span className="text-medical-blue font-semibold">خدماتنا المتميزة</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            تحاليل طبية{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-green">
              شاملة ودقيقة
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من التحاليل الطبية بأعلى معايير الدقة والجودة لضمان صحتك وسلامتك
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${service.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 medical-card-hover animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-3">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 animate-pulse-glow`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className={`text-lg font-bold ${service.iconColor} mb-2`}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-700 text-center mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="bg-white/70 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-gray-800 mb-1">الأعراض المرتبطة:</p>
                  <p className="text-sm text-gray-600">{service.symptoms}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-medical-blue to-medical-green p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4">هل تحتاج استشارة طبية؟</h3>
            <p className="text-lg mb-6 opacity-90">
              فريقنا الطبي المتخصص متاح للإجابة على جميع استفساراتك وتوجيهك للتحاليل المناسبة
            </p>
            <button className="bg-white text-medical-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              استشر طبيبنا مجاناً
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
