import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, FlaskConical, ShieldCheck, Award } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'عن المعمل', href: '#about' },
    { label: 'آراء العملاء', href: '#testimonials' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-medical-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-reverse space-x-3 animate-fade-in-right">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-medical-blue to-medical-green rounded-lg flex items-center justify-center">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-medical-red rounded-full flex items-center justify-center">
                <ShieldCheck className="w-2 h-2 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-medical-blue">معامل اسواب</h1>
              <p className="text-xs text-medical-green">للتحاليل الطبية</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-reverse space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-medical-gray-700 hover:text-medical-blue transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-medical-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-medical-blue to-medical-green hover:from-medical-navy hover:to-medical-teal text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                احجز الآن
              </Button>
            </a>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-reverse space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-medical-blue to-medical-green rounded-lg flex items-center justify-center">
                    <FlaskConical className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-medical-blue">معامل اسواب</h2>
                    <p className="text-sm text-medical-green">للتحاليل الطبية</p>
                  </div>
                </div>
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg text-medical-gray-700 hover:text-medical-blue transition-colors duration-300 font-medium py-2 border-b border-medical-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="https://wa.me/201234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-r from-medical-blue to-medical-green text-white px-6 py-3 rounded-full mt-4">
                    احجز الآن
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;












// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { Menu, FlaskConical, ShieldCheck, Award } from 'lucide-react';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { label: 'الرئيسية', href: '#home' },
//     { label: 'خدماتنا', href: '#services' },
//     { label: 'عن المعمل', href: '#about' },
//     { label: 'آراء العملاء', href: '#testimonials' },
//     { label: 'تواصل معنا', href: '#contact' },
//   ];

//   return (
//     <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-medical-gray-200 shadow-sm">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-reverse space-x-3 animate-fade-in-right">
//             <div className="relative">
//               <div className="w-10 h-10 bg-gradient-to-br from-medical-blue to-medical-green rounded-lg flex items-center justify-center">
//                 <FlaskConical className="w-6 h-6 text-white" />
//               </div>
//               <div className="absolute -top-1 -right-1 w-4 h-4 bg-medical-red rounded-full flex items-center justify-center">
//                 <ShieldCheck className="w-2 h-2 text-white" />
//               </div>
//             </div>
//             <div>
//               <h1 className="text-xl font-bold text-medical-blue">معامل اسواب</h1>
//               <p className="text-xs text-medical-green">للتحاليل الطبية</p>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-reverse space-x-8">
//             {menuItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="text-medical-gray-700 hover:text-medical-blue transition-colors duration-300 font-medium relative group"
//               >
//                 {item.label}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-medical-blue transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             ))}
//             <Button className="bg-gradient-to-r from-medical-blue to-medical-green hover:from-medical-navy hover:to-medical-teal text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
//               احجز الآن
//             </Button>
//           </nav>

//           {/* Mobile Navigation */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild className="md:hidden">
//               <Button variant="ghost" size="icon">
//                 <Menu className="h-6 w-6" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-80">
//               <div className="flex flex-col space-y-6 mt-8">
//                 <div className="flex items-center space-x-reverse space-x-3 mb-6">
//                   <div className="w-12 h-12 bg-gradient-to-br from-medical-blue to-medical-green rounded-lg flex items-center justify-center">
//                     <FlaskConical className="w-7 h-7 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="text-xl font-bold text-medical-blue">معامل اسواب</h2>
//                     <p className="text-sm text-medical-green">للتحاليل الطبية</p>
//                   </div>
//                 </div>
//                 {menuItems.map((item) => (
//                   <a
//                     key={item.label}
//                     href={item.href}
//                     className="text-lg text-medical-gray-700 hover:text-medical-blue transition-colors duration-300 font-medium py-2 border-b border-medical-gray-100"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.label}
//                   </a>
//                 ))}
//                 <Button className="bg-gradient-to-r from-medical-blue to-medical-green text-white px-6 py-3 rounded-full mt-4">
//                   احجز الآن
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
