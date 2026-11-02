import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Layers, 
  ArrowRight, 
  User, 
  Lock, 
  Mail, 
  X, 
  Menu, 
  ChevronRight, 
  Sparkles,
  Cloud,
  Terminal,
  Activity,
  Phone,
  MapPin,
  Send,
  Users,
  Award,
  Clock
} from 'lucide-react';

// --- SVG IKONKALAR ---
const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

// --- KOMPONENT: HEADER ---
const Header = ({ onOpenLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            DevNexus<span className="text-cyan-400">.it</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-cyan-400 transition-colors">Xizmatlar</a>
          <a href="#features" className="hover:text-cyan-400 transition-colors">Afzalliklar</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">Biz haqimizda</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Aloqa</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={onOpenLogin}
            className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-200 font-medium hover:bg-slate-800 transition-all"
          >
            Kirish
          </button>
          <button 
            onClick={onOpenLogin}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:opacity-90 shadow-lg shadow-cyan-500/25 transition-all"
          >
            Ro'yxatdan o'tish
          </button>
        </div>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 flex flex-col gap-4">
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 py-2">Xizmatlar</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 py-2">Afzalliklar</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 py-2">Biz haqimizda</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 py-2">Aloqa</a>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}
            className="w-full py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-semibold"
          >
            Kirish / Ro'yxatdan o'tish
          </button>
        </div>
      )}
    </header>
  );
};

// --- KOMPONENT: CARD ---
const Card = ({ icon: Icon, title, description, badge, isPopular }) => {
  return (
    <div className={`relative group p-6 rounded-2xl transition-all duration-300 ${
      isPopular 
        ? 'bg-slate-800/80 border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/10' 
        : 'bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
    }`}>
      {badge && (
        <span className="absolute -top-3 right-6 px-3 py-1 bg-cyan-500 text-slate-950 text-xs font-bold rounded-full">
          {badge}
        </span>
      )}

      <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400 transition-colors">
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium group-hover:translate-x-1 transition-transform cursor-pointer">
        <span>Batafsil ko'rish</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
};

// --- KOMPONENT: LOGIN MODAL ---
const Login = ({ isOpen, onClose }) => {
  const [isLoginState, setIsLoginState] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            {isLoginState ? "Tizimga kirish" : "Ro'yxatdan o'tish"}
          </h2>
          <p className="text-slate-400 text-sm">
            {isLoginState ? "Platformaga kirish uchun ma'lumotlaringizni kiriting" : "Yangi hisob yaratish uchun ma'lumotlarni to'ldiring"}
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {!isLoginState && (
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">To'liq ismingiz</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Ali Valiyev"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Email manzil</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="email" 
                placeholder="misol@devnexus.it"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Parol</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20"
          >
            {isLoginState ? "Kirish" : "Hisob yaratish"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-400">
          {isLoginState ? "Hisobingiz yo'qmi? " : "Allaqachon hisobingiz bormi? "}
          <button 
            onClick={() => setIsLoginState(!isLoginState)}
            className="text-cyan-400 hover:underline font-medium"
          >
            {isLoginState ? "Ro'yxatdan o'ting" : "Kiring"}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- ASOSIY APP KOMPONENTI ---
export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const services = [
    {
      icon: Globe,
      title: "Veb Dasturlash",
      description: "Zamonaviy va tezkor ishlaydigan veb-saytlar hamda murakkab veb-tizimlarni ishlab chiqish.",
      badge: "Top Xizmat"
    },
    {
      icon: Cpu,
      title: "Sun'iy Intellekt",
      description: "Biznes jarayonlarini avtomatlashtirish uchun AI va Machine Learning yechimlari.",
      isPopular: true
    },
    {
      icon: ShieldCheck,
      title: "Kiberxavfsizlik",
      description: "Tizimlaringiz va ma'lumotlaringizni xakerlik hujumlaridan ishonchli himoya qilish."
    },
    {
      icon: Cloud,
      title: "Bulutli Texnologiyalar",
      description: "AWS, Google Cloud va Azure platformalarida infratuzilmani sozlash va boshqarish."
    },
    {
      icon: Terminal,
      title: "DevOps va CI/CD",
      description: "Dasturiy ta'minotni avtomatik testlash va serverlarga uzluksiz joylashtirish."
    },
    {
      icon: Activity,
      title: "IT Konsalting",
      description: "Biznesingiz uchun eng to'g'ri raqamli strategiya va texnik yechimlarni tanlash."
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Yuqori Tezlik",
      description: "Saytlarimiz va tizimlarimiz maksimal darajada optimallashtirilgan bo'lib, soniyalar ichida yuklanadi."
    },
    {
      icon: Layers,
      title: "Moslashuvchan Arxitektura",
      description: "Loyihaingiz kelajakda oson kengayishi va yangi funksiyalar qo'shilishi uchun mos qilib quriladi."
    },
    {
      icon: ShieldCheck,
      title: "Maksimal Xavfsizlik",
      description: "Ma'lumotlar xavfsizligi va maxfiyligi xalqaro standartlarga to'liq javob beradi."
    },
    {
      icon: Clock,
      title: "24/7 Qo'llab-quvvatlash",
      description: "Mutaxassislarimiz har doim aloqada va yuzaga kelgan texnik masalalarni tezda hal qiladi."
    }
  ];

  const stats = [
    { value: "150+", label: "Muvaffaqiyatli Loyihalar", icon: Award },
    { value: "50+", label: "Malakali Mutaxassislar", icon: Users },
    { value: "99.9%", label: "Tizim Barqarorligi", icon: ShieldCheck },
    { value: "5+", label: "Yillik Tajriba", icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 scroll-smooth">
      <Header onOpenLogin={() => setIsLoginOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-cyan-400 mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Kelajak Texnologiyalari Shu Yyerda</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Biznesingizni <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Raqamli Avlodga</span> Olib Chiqing
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Zamonaviy dasturiy yechimlar, yuqori xavfsizlik va sun'iy intellekt integratsiyasi orqali biznesingiz samaradorligini oshiring.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Boshlash</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <a 
              href="#services"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-slate-800 text-slate-300 font-semibold hover:bg-slate-900 transition-all text-center"
            >
              Xizmatlar bilan tanishish
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: XIZMATLAR */}
      <section id="services" className="py-24 bg-slate-900/30 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Bizning Xizmatlar</h2>
            <p className="text-slate-400">
              Biz har qanday murakkablikdagi IT loyihalarni amalga oshirish uchun tayyormiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: AFZALLIKLAR */}
      <section id="features" className="py-24 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Nima Uchun Aynan Biz?</h2>
            <p className="text-slate-400">
              Mijozlarimizga taqdim etadigan asosiy ustunliklarimiz va imkoniyatlarimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, index) => {
              const IconComp = feat.icon;
              return (
                <div key={index} className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-cyan-500/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feat.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: BIZ HAQIMIZDA */}
      <section id="about" className="py-24 bg-slate-900/30 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase mb-2 block">Biz haqimizda</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Yuqori Malakali IT Mutaxassislardan Tashkil Topgan Jamoa
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                DevNexus IT kompaniyasi 2020-yildan beri bizneslar uchun zamonaviy dasturiy mahsulotlar yaratib kelmoqda. Bizning maqsadimiz — ilg'or texnologiyalar orqali biznesingizni avtomatlashtirish va rivojlantirishdir.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-cyan-400" />
                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                      </div>
                      <span className="text-xs text-slate-400">{stat.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 border border-slate-800 p-8 flex flex-col justify-center gap-6">
                <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="text-white font-semibold">Tahlil va Rejalashtirish</h4>
                      <p className="text-xs text-slate-400">Biznes talablaringizni chuqur o'rganamiz</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl ml-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="text-white font-semibold">Dizayn va Dasturlash</h4>
                      <p className="text-xs text-slate-400">Eng so'nggi texnologiyalarda kod yozamiz</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl ml-12">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="text-white font-semibold">Test va Ishga Tushirish</h4>
                      <p className="text-xs text-slate-400">Loyihani xavfsiz va tezkor topshiramiz</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ALOQA */}
      <section id="contact" className="py-24 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Biz Bilan Bog'laning</h2>
            <p className="text-slate-400">
              Loyihaingiz bormi? Savollaringizga javob berishdan mamnunmiz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-slate-400 text-sm">info@devnexus.it</p>
                  <p className="text-slate-400 text-sm">support@devnexus.it</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Telefon</h4>
                  <p className="text-slate-400 text-sm">+998 (71) 200-00-00</p>
                  <p className="text-slate-400 text-sm">+998 (90) 123-45-67</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Manzil</h4>
                  <p className="text-slate-400 text-sm">Toshkent shahri, Yunusobod tumani, IT Park majmuasi</p>
                </div>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Ismingiz</label>
                <input 
                  type="text" 
                  placeholder="Ismingizni kiriting" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Email manzil</label>
                <input 
                  type="email" 
                  placeholder="misol@gmail.com" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Xabar / Loyiha haqida</label>
                <textarea 
                  rows="4" 
                  placeholder="Loyihaingiz va g'oyangiz haqida qisqacha..." 
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <span>Xabarni Yuborish</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-cyan-400" />
            <span className="font-bold text-white">DevNexus.it</span>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} DevNexus IT Solutions. Barcha huquqlar himoyalangan.
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-cyan-400 transition-colors"><GithubIcon /></a>
            <a href="#" className="hover:text-cyan-400 transition-colors"><TwitterIcon /></a>
            <a href="#" className="hover:text-cyan-400 transition-colors"><LinkedinIcon /></a>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}