
import { Button } from '@/components/ui/button';
import { Heart, Shield, Award, Clock, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="space-y-4">
              <div className="flex items-center space-x-reverse space-x-2 text-medical-blue">
                <Award className="w-6 h-6" />
                <span className="text-sm font-medium">معتمد وموثوق</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight text-shadow-medical">
                معامل{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-green">
                  اسواب
                </span>
                <br />
                للتحاليل الطبية
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                أعلى دقة في النتائج • أحدث أجهزة التحاليل • فريق طبي متخصص
                <br />
                اطمئن على صحتك مع أفضل معامل التحاليل الطبية في مصر
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-reverse space-x-3">
                <div className="w-10 h-10 bg-medical-blue/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-medical-blue" />
                </div>
                <span className="text-gray-700 font-medium">نتائج دقيقة ومضمونة</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <div className="w-10 h-10 bg-medical-green/10 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-medical-green" />
                </div>
                <span className="text-gray-700 font-medium">استلام سريع للنتائج</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <div className="w-10 h-10 bg-medical-teal/10 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-medical-teal" />
                </div>
                <span className="text-gray-700 font-medium">أجهزة حديثة ومعايرة</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <div className="w-10 h-10 bg-medical-purple/10 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-medical-purple" />
                </div>
                <span className="text-gray-700 font-medium">عناية فائقة بالمرضى</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-medical-blue to-medical-green hover:from-medical-green hover:to-medical-blue text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
                احجز تحليلك الآن
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white px-8 py-4 rounded-full transition-all duration-300">
                تواصل معنا
              </Button>
            </div>
          </div>

          {/* Image/Animation Side */}
          <div className="relative animate-fade-in-left">
            <div className="relative">
              {/* Main Illustration */}
              <div className="w-full h-96 bg-gradient-to-br from-medical-blue/10 via-medical-green/10 to-medical-teal/10 rounded-3xl flex items-center justify-center animate-float">
                <div className="grid grid-cols-3 gap-6 p-8">
                  {/* Medical Icons Animation */}
                  {[
                    { icon: Heart, color: 'text-medical-red', delay: '0s' },
                    { icon: Shield, color: 'text-medical-blue', delay: '0.5s' },
                    { icon: Award, color: 'text-medical-green', delay: '1s' },
                    { icon: Clock, color: 'text-medical-orange', delay: '1.5s' },
                    { icon: CheckCircle, color: 'text-medical-purple', delay: '2s' },
                    { icon: Heart, color: 'text-medical-teal', delay: '2.5s' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center animate-pulse-glow`}
                      style={{ animationDelay: item.delay }}
                    >
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-medical-blue to-medical-green rounded-full flex items-center justify-center animate-float shadow-xl">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-medical-green to-medical-teal rounded-full flex items-center justify-center animate-float shadow-xl" style={{ animationDelay: '1s' }}>
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
