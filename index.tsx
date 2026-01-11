import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  ShoppingCart, Menu, X, CheckCircle, Leaf, ShieldCheck, 
  ArrowRight, ChevronDown, ChevronUp, Mail, Flame, Droplets, Phone, MapPin, Heart
} from 'lucide-react';

// --- Data Definitions ---
const PRODUCTS = [
  {
    id: '1',
    name: 'প্রতিদিনের ফ্রাইপ্যান (Everyday Skillet)',
    price: '১,২৫০',
    description: '১০০% প্রাকৃতিক মাটির তৈরি। ভাজাভুজি ও কম তেলে রান্নার জন্য একদম সঠিক নির্বাচন।',
    image: 'https://images.unsplash.com/photo-1590004953392-5aba2e785943?auto=format&fit=crop&q=80&w=600',
    category: 'ফ্রাইপ্যান'
  },
  {
    id: '2',
    name: 'গভীর কারি হাঁড়ি (Deep Curry Pot)',
    price: '১,৮০০',
    description: 'ঝোল বা কারি জাতীয় খাবার ধীর আঁচে রান্নার জন্য আদর্শ। খাবারের স্বাদ ও গন্ধ অটুট রাখে।',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=600',
    category: 'রান্নার হাঁড়ি'
  },
  {
    id: '3',
    name: 'আর্টিসান ডাচ ওভেন (Artisan Dutch Oven)',
    price: '২,৫০০',
    description: 'আধুনিক ডিজাইন ও মাটির গুণাগুণের সংমিশ্রণ। স্ট্যু বা বেকিংয়ের কাজেও ব্যবহারযোগ্য।',
    image: 'https://images.unsplash.com/photo-1584990333910-efedbc7c289c?auto=format&fit=crop&q=80&w=600',
    category: 'প্রিমিয়াম'
  },
  {
    id: '4',
    name: 'ট্যাজিন স্টাইল কুকার (Tagine Pot)',
    price: '২,১০০',
    description: 'মাংস ও সবজি প্রাকৃতিকভাবে সেদ্ধ করার জন্য ইউনিক শেপ। খাবারের পুষ্টি ধরে রাখে।',
    image: 'https://images.unsplash.com/photo-1542674291-d24933928929?auto=format&fit=crop&q=80&w=600',
    category: 'স্পেশাল'
  }
];

const FAQS = [
  {
    question: 'মাটির হাঁড়ি ফেটে যাওয়া কীভাবে রোধ করব?',
    answer: 'রান্না শুরু করার আগে হাঁড়িটি ৩০ মিনিট পানিতে ভিজিয়ে রাখুন। সরাসরি উচ্চ তাপে বসাবেন না, ধীর আঁচে রান্না শুরু করে ধীরে ধীরে তাপ বাড়ান। রান্নার মাঝে হঠাৎ ঠান্ডা পানি দেবেন না।'
  },
  {
    question: 'ইনডাকশন স্টোভে কি মাটির পাত্র ব্যবহার করা যায়?',
    answer: 'সরাসরি ব্যবহার করা যায় না কারণ মাটি চৌম্বকীয় নয়। তবে একটি ইন্ডাকশন কনভার্টার প্লেট ব্যবহার করে আপনি এটি সহজেই ব্যবহার করতে পারেন।'
  },
  {
    question: 'মাটির হাঁড়ি ধোয়ার সঠিক উপায় কী?',
    answer: 'রাসায়নিক সাবান ব্যবহার না করাই ভালো। হালকা গরম পানি এবং বেকিং সোডা বা লেবুর রস দিয়ে পরিষ্কার করুন যাতে মাটির ছিদ্রগুলো বন্ধ না হয়।'
  }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="bg-[#E2725B] p-2 rounded-xl shadow-md transform group-hover:rotate-12 transition-transform">
            <Leaf className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-bold ${scrolled ? 'text-[#333333]' : 'text-white'}`}>মৃৎশিল্প</span>
        </div>
        <div className={`hidden md:flex items-center gap-10 font-medium ${scrolled ? 'text-[#333333]' : 'text-white'}`}>
          <a href="#home" className="hover:text-[#E2725B] transition-colors">হোম</a>
          <a href="#shop" className="hover:text-[#E2725B] transition-colors">পণ্যসমূহ</a>
          <a href="#why-clay" className="hover:text-[#E2725B] transition-colors">কেন মাটি?</a>
          <a href="#blog" className="hover:text-[#E2725B] transition-colors">শিখুন</a>
        </div>
        <div className="flex items-center gap-4">
          <button className={`relative p-2 ${scrolled ? 'text-[#333333]' : 'text-white'} hover:text-[#E2725B] transition-colors`}>
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-[#E2725B] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">০</span>
          </button>
          <button className={`md:hidden ${scrolled ? 'text-[#333333]' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl p-6 border-t animate-fade-in flex flex-col gap-6 font-bold text-[#333333]">
          <a href="#home" onClick={() => setIsOpen(false)}>হোম</a>
          <a href="#shop" onClick={() => setIsOpen(false)}>পণ্যসমূহ</a>
          <a href="#why-clay" onClick={() => setIsOpen(false)}>কেন মাটি?</a>
          <a href="#blog" onClick={() => setIsOpen(false)}>শিখুন</a>
        </div>
      )}
    </nav>
  );
};

const App = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1510137600163-2729bc6959a6?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover brightness-[0.4]" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white animate-fade-in">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-[#E2725B] text-sm font-bold mb-6 shadow-xl uppercase tracking-wider">১০০% প্রাকৃতিক ও স্বাস্থ্যকর</span>
            <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8">রান্না হোক <br/><span className="text-[#E2725B]">বিষমুক্ত</span> ও খাঁটি</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-12 font-light leading-relaxed max-w-xl">
              ক্ষতিকারক কেমিক্যাল কোটিং ও টক্সিন-মুক্ত রান্নার সূচনা করুন মৃৎশিল্পের লিড-ফ্রি মাটির পাত্রে। ফিরিয়ে আনুন হারিয়ে যাওয়া খাঁটি স্বাদ।
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#shop" className="bg-[#E2725B] hover:bg-[#c95d48] text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl text-lg text-center">কেনাকাটা করুন <ArrowRight /></a>
              <a href="#why-clay" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center transition-all text-lg text-center">কেন মাটির পাত্র?</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-3"><ShieldCheck className="text-[#8A9A5B] w-6 h-6" /><span className="font-bold">লিড-ফ্রি সনদপ্রাপ্ত</span></div>
          <div className="flex items-center gap-3"><Droplets className="text-[#8A9A5B] w-6 h-6" /><span className="font-bold">টক্সিন মুক্ত</span></div>
          <div className="flex items-center gap-3"><Leaf className="text-[#8A9A5B] w-6 h-6" /><span className="font-bold">১০০% ন্যাচারাল</span></div>
          <div className="flex items-center gap-3"><CheckCircle className="text-[#8A9A5B] w-6 h-6" /><span className="font-bold">বিএসটিআই অনুমোদিত</span></div>
        </div>
      </section>

      <section id="why-clay" className="py-32 bg-[#F7F3EE]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif">কেন মাটির পাত্র সেরা?</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">মাটির পাত্র শুধু ঐতিহ্য নয়, এটি একটি সুস্থ জীবনধারার অঙ্গীকার।</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="bg-[#E2725B]/10 p-4 rounded-2xl w-fit mb-8"><Droplets className="text-[#E2725B] w-10 h-10" /></div>
              <h3 className="text-2xl font-bold mb-4">পুষ্টি ধরে রাখে</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-light">মাটির ছোট ছিদ্র দিয়ে তাপ সমভাবে পৌঁছায়, যা খাবারের পুষ্টিগুণ ও আর্দ্রতা বজায় রাখে।</p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="bg-[#8A9A5B]/10 p-4 rounded-2xl w-fit mb-8"><ShieldCheck className="text-[#8A9A5B] w-10 h-10" /></div>
              <h3 className="text-2xl font-bold mb-4">কেমিক্যাল মুক্ত</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-light">টেফলন বা নন-স্টিক কোটিং থেকে ক্ষতিকারক টক্সিন নির্গত হয় না। ১০০% প্রাকৃতিক ও লিড-ফ্রি।</p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="bg-[#E2725B]/10 p-4 rounded-2xl w-fit mb-8"><Flame className="text-[#E2725B] w-10 h-10" /></div>
              <h3 className="text-2xl font-bold mb-4">স্বাদ বৃদ্ধি করে</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-light">মাটি ক্ষারীয় হওয়ায় খাবারের অ্যাসিডিটি নিয়ন্ত্রণ করে এবং প্রাকৃতিকভাবে স্বাদ বহুগুণ বাড়ায়।</p>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 font-serif">আমাদের সংগ্রহ</h2>
            <p className="text-xl text-gray-500 font-light">দক্ষ কারিগরদের হাতের স্পর্শে তৈরি প্রিমিয়াম পণ্য</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {PRODUCTS.map(p => (
              <div key={p.id} className="product-card bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-xs font-bold shadow-sm">{p.category}</div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 leading-tight">{p.name}</h3>
                  <p className="text-gray-400 text-base mb-8 flex-grow leading-relaxed font-light">{p.description}</p>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                    <span className="text-2xl font-bold text-[#333333]">৳{p.price}</span>
                    <button className="bg-[#333333] text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-[#E2725B] transition-all shadow-lg active:scale-95">অর্ডার দিন</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-32 bg-[#333333] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 font-serif">শিখুন ও জানুন</h2>
          <div className="grid md:grid-cols-2 gap-16 text-left">
            <div className="group cursor-pointer">
              <div className="aspect-video rounded-[3rem] overflow-hidden mb-8 shadow-xl"><img src="https://images.unsplash.com/photo-1466632311177-7d5b472fc5f5?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Blog" /></div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-[#E2725B]">ফার-ইনফ্রারেড কুকিং কী?</h3>
              <p className="text-gray-400 text-lg font-light mb-6 leading-relaxed">মাটির পাত্রে রান্নার বৈজ্ঞানিক উপকারিতা ও এর পেছনের রহস্য জানুন। কেন এটি স্বাস্থ্যের জন্য সেরা।</p>
              <button className="flex items-center gap-2 text-[#E2725B] font-bold text-lg">আরও পড়ুন <ArrowRight /></button>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-video rounded-[3rem] overflow-hidden mb-8 shadow-xl"><img src="https://images.unsplash.com/photo-1565193998248-d500a72183b1?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Blog" /></div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-[#E2725B]">সিজনিং করার সঠিক পদ্ধতি</h3>
              <p className="text-gray-400 text-lg font-light mb-6 leading-relaxed">আপনার মাটির পাত্র দীর্ঘস্থায়ী করার ৫টি বিশেষ টিপস। প্রথম ব্যবহারের আগে কী করবেন।</p>
              <button className="flex items-center gap-2 text-[#E2725B] font-bold text-lg">আরও পড়ুন <ArrowRight /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#F7F3EE]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 font-serif">সচরাচর জিজ্ঞাসিত প্রশ্ন</h2>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                <button className={`w-full p-8 text-left flex justify-between items-center ${activeFaq === i ? 'bg-gray-50' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}>
                  <span className="font-bold text-xl">{faq.question}</span>
                  {activeFaq === i ? <ChevronUp className="text-[#E2725B]" /> : <ChevronDown />}
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${activeFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 pt-0 text-gray-500 text-lg leading-relaxed border-t border-gray-50 font-light">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#333333] text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-20 mb-20 text-center md:text-left">
            <div className="col-span-1">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
                <div className="bg-[#E2725B] p-2 rounded-xl"><Leaf className="text-white w-6 h-6" /></div>
                <span className="text-3xl font-bold">মৃৎশিল্প</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed font-light">ঐতিহ্যের স্বাদ ও আধুনিক স্বাস্থ্যের মেলবন্ধন। আমাদের উদ্দেশ্য আপনার রান্নাঘরকে বিষমুক্ত রাখা।</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-8 opacity-50 text-xs uppercase tracking-widest">লিংকসমূহ</h4>
              <ul className="space-y-4 text-gray-400 text-lg">
                <li><a href="#home" className="hover:text-white transition-colors">হোম</a></li>
                <li><a href="#shop" className="hover:text-white transition-colors">শপ</a></li>
                <li><a href="#why-clay" className="hover:text-white transition-colors">কেন মাটি?</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">শিক্ষা</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-8 opacity-50 text-xs uppercase tracking-widest">যোগাযোগ</h4>
              <div className="space-y-4 text-gray-400 text-lg">
                <p className="flex items-center gap-3 justify-center md:justify-start"><MapPin size={18} className="text-[#E2725B]" /> ঢাকা, বাংলাদেশ</p>
                <p className="flex items-center gap-3 justify-center md:justify-start"><Phone size={18} className="text-[#E2725B]" /> ০১৭০০-০০০০০১</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-8 opacity-50 text-xs uppercase tracking-widest">সাবস্ক্রাইব</h4>
              <div className="flex flex-col gap-4">
                <input type="email" placeholder="আপনার ইমেইল" className="w-full bg-white/10 p-4 rounded-xl border border-white/10 outline-none focus:ring-2 focus:ring-[#E2725B]" />
                <button className="w-full bg-[#E2725B] p-4 rounded-xl font-bold hover:bg-[#c95d48] transition-colors">সাবস্ক্রাইব করুন</button>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 text-center text-gray-500 font-light text-sm">
            <p>© ২০২৪ মৃৎশিল্প। সকল অধিকার সংরক্ষিত। সুস্থ থাকুন, মাটির সাথে থাকুন।</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
