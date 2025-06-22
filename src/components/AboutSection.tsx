
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Shield, Clock, CheckCircle, Heart } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: 'أعلى معايير الجودة',
      description: 'معتمدون من وزارة الصحة والهيئات الدولية للجودة',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'فريق طبي متخصص',
      description: 'أطباء وفنيون مختبرات معتمدون وذوو خبرة عالية',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'أجهزة حديثة ومعايرة',
      description: 'أحدث التقنيات المختبرية والأجهزة المعايرة دورياً',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Clock,
      title: 'سرعة في النتائج',
      description: 'استلام النتائج عبر الواتساب أو SMS في أسرع وقت',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const stats = [
    { number: '50000+', label: 'تحليل مكتمل', icon: CheckCircle },
    { number: '15+', label: 'سنة خبرة', icon: Award },
    { number: '24/7', label: 'خدمة عملاء', icon: Clock },
    { number: '99.9%', label: 'دقة النتائج', icon: Shield }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="flex items-center justify-center space-x-reverse space-x-2 mb-4">
            <Heart className="w-8 h-8 text-medical-blue" />
            <span className="text-medical-blue font-semibold">من نحن</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            معامل{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-green">
              اسواب
            </span>{' '}
            للتحاليل الطبية
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            نحن في معامل اسواب نلتزم بتقديم أعلى مستويات الخدمة الطبية والدقة في النتائج.
            منذ تأسيسنا، نسعى دائماً لتوفير تجربة مميزة لجميع مرضانا من خلال الاستثمار في
            أحدث التقنيات والكوادر المتخصصة.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 medical-card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 animate-pulse-glow`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-medical-blue via-medical-green to-medical-teal p-8 rounded-3xl text-white mb-16 animate-fade-in-up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-3">
                <stat.icon className="w-8 h-8 mx-auto opacity-80" />
                <div className="text-3xl font-bold">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-3xl font-bold text-gray-900">رؤيتنا ورسالتنا</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-reverse space-x-3">
                <CheckCircle className="w-6 h-6 text-medical-green mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>رؤيتنا:</strong> أن نكون الخيار الأول والموثوق في مجال التحاليل الطبية في مصر والمنطقة العربية
                </p>
              </div>
              <div className="flex items-start space-x-reverse space-x-3">
                <CheckCircle className="w-6 h-6 text-medical-blue mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>رسالتنا:</strong> تقديم خدمات تحاليل طبية عالية الجودة بأحدث التقنيات وأعلى معايير السلامة
                </p>
              </div>
              <div className="flex items-start space-x-reverse space-x-3">
                <CheckCircle className="w-6 h-6 text-medical-teal mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>قيمنا:</strong> الدقة، الأمانة، السرعة، والاهتمام الفائق بتجربة المريض
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-left">
            <div className="bg-gradient-to-br from-medical-blue/10 via-medical-green/10 to-medical-teal/10 p-8 rounded-3xl">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Heart, label: 'عناية فائقة' },
                  { icon: Shield, label: 'ثقة مطلقة' },
                  { icon: Award, label: 'جودة عالية' },
                  { icon: Clock, label: 'خدمة سريعة' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-md text-center animate-float"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <item.icon className="w-8 h-8 text-medical-blue mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
