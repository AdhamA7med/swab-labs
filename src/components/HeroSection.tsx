import { Button } from '@/components/ui/button';
import { Stethoscope, ShieldCheck, Award, Clock, CheckCircle, FlaskConical } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-medical-softBlue via-white to-medical-softGreen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="space-y-4">
              <div className="flex items-center space-x-reverse space-x-2 text-medical-blue">
                <Award className="w-6 h-6" />
                <span className="text-sm font-medium">معتمد وموثوق</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-medical-gray-900 leading-tight text-shadow-soft">
                معامل{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-green">
                  القاضي
                </span>
                <br />
                للتحاليل الطبية
              </h1>
              <p className="text-xl text-medical-gray-600 leading-relaxed">
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
                <span className="text-medical-gray-700 font-medium">نتائج دقيقة ومضمونة</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <div className="w-10 h-10 bg-medical-green/10 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-medical-green" />
                </div>
                <span className="text-medical-gray-700 font-medium">استلام سريع للنتائج</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <div className="w-10 h-10 bg-medical-teal/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-medical-teal" />
                </div>
                <span className="text-medical-gray-700 font-medium">أجهزة حديثة ومعايرة</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <div className="w-10 h-10 bg-medical-navy/10 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-medical-navy" />
                </div>
                <span className="text-medical-gray-700 font-medium">عناية فائقة بالمرضى</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/201097933148"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gradient-to-r from-medical-blue to-medical-green hover:from-medical-navy hover:to-medical-teal text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
                  احجز تحليلك الآن
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="border-2 border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white px-8 py-4 rounded-full transition-all duration-300">
                  تواصل معنا
                </Button>
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative animate-fade-in-left">
            <div className="relative">
              {/* Medical Lab Image */}
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="معمل التحاليل الطبية - أجهزة حديثة"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/20 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-medical-blue to-medical-green rounded-full flex items-center justify-center shadow-xl">
                <FlaskConical className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-medical-green to-medical-teal rounded-full flex items-center justify-center shadow-xl">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;













// import { Button } from '@/components/ui/button';
// import { Stethoscope, ShieldCheck, Award, Clock, CheckCircle, FlaskConical } from 'lucide-react';

// const HeroSection = () => {
//   return (
//     <section id="home" className="min-h-screen bg-gradient-to-br from-medical-softBlue via-white to-medical-softGreen flex items-center pt-16">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Text Content */}
//           <div className="space-y-8 animate-fade-in-right">
//             <div className="space-y-4">
//               <div className="flex items-center space-x-reverse space-x-2 text-medical-blue">
//                 <Award className="w-6 h-6" />
//                 <span className="text-sm font-medium">معتمد وموثوق</span>
//               </div>
//               <h1 className="text-4xl md:text-6xl font-bold text-medical-gray-900 leading-tight text-shadow-soft">
//                 معامل{' '}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-green">
//                   اسواب
//                 </span>
//                 <br />
//                 للتحاليل الطبية
//               </h1>
//               <p className="text-xl text-medical-gray-600 leading-relaxed">
//                 أعلى دقة في النتائج • أحدث أجهزة التحاليل • فريق طبي متخصص
//                 <br />
//                 اطمئن على صحتك مع أفضل معامل التحاليل الطبية في مصر
//               </p>
//             </div>

//             {/* Features */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex items-center space-x-reverse space-x-3">
//                 <div className="w-10 h-10 bg-medical-blue/10 rounded-full flex items-center justify-center">
//                   <CheckCircle className="w-5 h-5 text-medical-blue" />
//                 </div>
//                 <span className="text-medical-gray-700 font-medium">نتائج دقيقة ومضمونة</span>
//               </div>
//               <div className="flex items-center space-x-reverse space-x-3">
//                 <div className="w-10 h-10 bg-medical-green/10 rounded-full flex items-center justify-center">
//                   <Clock className="w-5 h-5 text-medical-green" />
//                 </div>
//                 <span className="text-medical-gray-700 font-medium">استلام سريع للنتائج</span>
//               </div>
//               <div className="flex items-center space-x-reverse space-x-3">
//                 <div className="w-10 h-10 bg-medical-teal/10 rounded-full flex items-center justify-center">
//                   <ShieldCheck className="w-5 h-5 text-medical-teal" />
//                 </div>
//                 <span className="text-medical-gray-700 font-medium">أجهزة حديثة ومعايرة</span>
//               </div>
//               <div className="flex items-center space-x-reverse space-x-3">
//                 <div className="w-10 h-10 bg-medical-navy/10 rounded-full flex items-center justify-center">
//                   <Stethoscope className="w-5 h-5 text-medical-navy" />
//                 </div>
//                 <span className="text-medical-gray-700 font-medium">عناية فائقة بالمرضى</span>
//               </div>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button size="lg" className="bg-gradient-to-r from-medical-blue to-medical-green hover:from-medical-navy hover:to-medical-teal text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
//                 احجز تحليلك الآن
//               </Button>
//               <Button size="lg" variant="outline" className="border-2 border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white px-8 py-4 rounded-full transition-all duration-300">
//                 تواصل معنا
//               </Button>
//             </div>
//           </div>

//           {/* Image Side */}
//           <div className="relative animate-fade-in-left">
//             <div className="relative">
//               {/* Medical Lab Image */}
//               <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
//                 <img 
//                   src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                   alt="معمل التحاليل الطبية - أجهزة حديثة"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/20 to-transparent"></div>
//               </div>

//               {/* Floating Elements */}
//               <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-medical-blue to-medical-green rounded-full flex items-center justify-center shadow-xl">
//                 <FlaskConical className="w-10 h-10 text-white" />
//               </div>
//               <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-medical-green to-medical-teal rounded-full flex items-center justify-center shadow-xl">
//                 <Stethoscope className="w-8 h-8 text-white" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
