
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu as MenuIcon, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Star, 
  ChevronRight, 
  Utensils, 
  Users, 
  Gift,
  FlaskConical,
  MessageSquare,
  Bot,
  Quote,
  ChevronDown,
  ExternalLink,
  Mail
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { APP_NAME, TAGLINE, SUB_TAGLINE, CONTACT_INFO, MENU_DATA, REVIEWS, GALLERY_IMAGES } from './constants';
import type { Page, Message } from './types';

// --- Services ---

const generateSocialTherapy = async (prompt: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "I'm currently offline (API Key missing). Please ask a human Social Therapist at the restaurant!";
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `You are the "Digital Social Therapist" for Colton's Social House. 
        Your persona is witty, welcoming, and knowledgeable about food and drinks.
        Address the user as a guest.
        Colton's motto is "Eat Fresh, Drink Craft, Be Social".
        Recommend items from the menu if asked (Craft Cocktails like Farmers Daughter, Sociables like Atomic Poppers).
        Keep responses concise (under 50 words) and fun.`
      }
    });
    return response.text || "I'm contemplating that... ask me again.";
  } catch (error) {
    console.error("Gemini Error", error);
    return "I seem to be having trouble connecting to the social grid. Try again later.";
  }
};

// --- Components ---

const Navbar = ({ activePage, navigate, mobileOpen, setMobileOpen }: { 
  activePage: Page; 
  navigate: (p: Page) => void;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNav = (page: Page) => {
    navigate(page);
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNav('home')}>
            <h1 className="font-header text-2xl tracking-widest font-bold uppercase text-green-500">
              Colton's
            </h1>
            <span className="text-xs tracking-[0.3em] text-stone-400 block -mt-1 uppercase">Social House</span>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {[
                { id: 'home', label: 'Home' },
                { id: 'menu', label: 'Eats & Drinks' },
                { id: 'reservations', label: 'Reservations' },
                { id: 'join', label: 'Join Our Team' },
                { id: 'about', label: 'About CSH' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id as Page)}
                  className={`px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                    activePage === item.id 
                      ? 'text-green-500 bg-stone-800' 
                      : 'text-stone-300 hover:text-white hover:bg-stone-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* More Options Dropdown */}
              <div className="relative inline-block text-left" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                    ['gift-cards', 'beta-tasting', 'ai-therapist'].includes(activePage)
                      ? 'text-green-500 bg-stone-800'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800'
                  }`}
                >
                  More Options <ChevronDown size={16} className="ml-1" />
                </button>

                {dropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-stone-900 ring-1 ring-black ring-opacity-5 focus:outline-none border border-stone-800">
                    <div className="py-1">
                      <button onClick={() => handleNav('gift-cards')} className="block w-full text-left px-4 py-3 text-sm text-stone-300 hover:bg-stone-800 hover:text-white uppercase tracking-wider">
                        Gift Cards
                      </button>
                      <button onClick={() => handleNav('beta-tasting')} className="block w-full text-left px-4 py-3 text-sm text-stone-300 hover:bg-stone-800 hover:text-white uppercase tracking-wider">
                        Beta-Tasting
                      </button>
                      <button onClick={() => handleNav('ai-therapist')} className="block w-full text-left px-4 py-3 text-sm text-stone-300 hover:bg-stone-800 hover:text-white uppercase tracking-wider">
                        Social Therapist Login
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-white hover:bg-stone-800 focus:outline-none"
            >
              {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 overflow-y-auto max-h-[80vh]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { id: 'home', label: 'Home' },
              { id: 'menu', label: 'Eats & Drinks' },
              { id: 'reservations', label: 'Reservations' },
              { id: 'join', label: 'Join Our Team' },
              { id: 'about', label: 'About CSH' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id as Page)}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-bold uppercase tracking-wider ${
                  activePage === item.id
                    ? 'text-green-500 bg-stone-800'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="border-t border-stone-800 pt-2 mt-2">
              <p className="px-3 py-2 text-xs font-bold text-stone-500 uppercase tracking-widest">More Options</p>
              <button onClick={() => handleNav('gift-cards')} className="block w-full text-left px-3 py-3 text-sm text-stone-300 hover:text-white uppercase tracking-wider">
                 Gift Cards
              </button>
              <button onClick={() => handleNav('beta-tasting')} className="block w-full text-left px-3 py-3 text-sm text-stone-300 hover:text-white uppercase tracking-wider">
                 Beta-Tasting
              </button>
              <button onClick={() => handleNav('ai-therapist')} className="block w-full text-left px-3 py-3 text-sm text-stone-300 hover:text-white uppercase tracking-wider">
                 Social Therapist Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-stone-950 text-stone-400 pt-16 pb-8 border-t border-stone-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="space-y-4">
        <h3 className="text-green-500 font-header text-lg uppercase tracking-widest mb-4">Contact Us</h3>
        <p className="flex items-center gap-3"><MapPin size={18} /> {CONTACT_INFO.address}</p>
        <p className="flex items-center gap-3"><Phone size={18} /> {CONTACT_INFO.phonePrimary}</p>
        <p className="flex items-center gap-3"><Clock size={18} /> {CONTACT_INFO.hours}</p>
      </div>
      <div className="text-center space-y-4">
        <h2 className="font-header text-3xl font-bold text-white uppercase tracking-widest">Colton's</h2>
        <p className="text-sm italic text-stone-500">{TAGLINE}</p>
        <div className="flex justify-center space-x-6 pt-4">
          <a href="#" className="hover:text-green-500 transition-colors"><Facebook size={24} /></a>
          <a href="#" className="hover:text-green-500 transition-colors"><Instagram size={24} /></a>
          <a href="#" className="hover:text-green-500 transition-colors"><Star size={24} /></a>
        </div>
      </div>
      <div className="md:text-right space-y-4">
        <h3 className="text-green-500 font-header text-lg uppercase tracking-widest mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm uppercase tracking-wide">
          <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
        </ul>
      </div>
    </div>
    <div className="mt-12 text-center text-xs text-stone-600 border-t border-stone-900 pt-8 uppercase tracking-widest">
      &copy; {new Date().getFullYear()} Colton's Social House. All Rights Reserved.
    </div>
  </footer>
);

// --- Pages ---

const HomePage = ({ navigate }: { navigate: (p: Page) => void }) => (
  <div className="animate-in fade-in duration-700">
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Social House Ambience" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/50 to-stone-900"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <div className="mb-6 inline-block p-1 border border-green-500/30 rounded-full bg-black/30 backdrop-blur-sm">
          <span className="px-4 py-1 text-green-500 text-xs font-bold uppercase tracking-[0.2em]">
            Clovis, CA
          </span>
        </div>
        <h1 className="font-header text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight uppercase tracking-tighter">
          A Socially <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Therapeutic</span> <br /> Experience
        </h1>
        <p className="font-header text-xl md:text-2xl text-stone-300 tracking-[0.3em] uppercase mb-12 border-t border-b border-stone-700 py-4 inline-block">
          {SUB_TAGLINE}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => navigate('menu')}
            className="w-full md:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-header font-bold uppercase tracking-widest transition-all transform hover:scale-105 shadow-lg shadow-green-900/50"
          >
            View Menu
          </button>
          <button 
            onClick={() => navigate('reservations')}
            className="w-full md:w-auto px-8 py-4 bg-transparent border-2 border-stone-400 hover:border-white text-stone-300 hover:text-white font-header font-bold uppercase tracking-widest transition-all hover:bg-white/5"
          >
            Book Table
          </button>
        </div>
      </div>
    </div>
    <div className="bg-stone-950 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Clock className="w-8 h-8 text-green-500" />, title: "Open Late", text: "7 Days / Week", sub: "11:00 AM – Midnight" },
          { icon: <Utensils className="w-8 h-8 text-green-500" />, title: "Eat Fresh", text: "Locally Sourced", sub: "Contemporary Comfort" },
          { icon: <Users className="w-8 h-8 text-green-500" />, title: "Be Social", text: "Outdoor Patio", sub: "Social Therapists" },
        ].map((item, i) => (
          <div key={i} className="bg-stone-900/50 border border-stone-800 p-8 text-center hover:border-green-500/50 transition-colors duration-300 group">
            <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
            <h3 className="font-header text-2xl font-bold text-white uppercase tracking-wider mb-2">{item.title}</h3>
            <p className="text-stone-400 uppercase tracking-wide text-sm">{item.text}</p>
            <p className="text-stone-500 text-sm mt-1">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-stone-900 py-24 px-4 border-t border-stone-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-header text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-4">
            The <span className="text-green-500">Vibe</span>
          </h2>
          <p className="text-stone-400 uppercase tracking-widest">A look inside the therapy session</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} className="relative group overflow-hidden h-64 md:h-80 border border-stone-800 rounded-sm">
              <img src={img.url} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <span className="text-green-500 text-xs font-bold uppercase tracking-widest mb-1 block">{img.category}</span>
                  <p className="text-white font-header text-xl uppercase tracking-wide">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="bg-stone-950 py-24 px-4 border-t border-stone-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-header text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-4">
            Guest <span className="text-green-500">Notes</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-stone-400">
             <span className="uppercase tracking-widest text-sm">Rated 4.5+ on Google</span>
             <div className="flex text-green-500">
               {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
             </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <div key={i} className="bg-stone-900 border border-stone-800 p-8 rounded-sm hover:border-green-500/30 transition-all duration-300 group">
               <div className="flex justify-between items-start mb-6">
                 <div className="flex gap-1 text-green-500">
                   {[...Array(review.rating)].map((_, r) => <Star key={r} size={14} fill="currentColor" />)}
                 </div>
                 <Quote size={24} className="text-stone-700 group-hover:text-stone-600 transition-colors" />
               </div>
               <p className="text-stone-300 text-sm leading-relaxed mb-6 italic line-clamp-4">"{review.text}"</p>
               <div className="flex items-center gap-3 pt-6 border-t border-stone-800">
                 <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center font-header font-bold text-stone-500 uppercase">
                   {review.author.charAt(0)}
                 </div>
                 <div>
                   <h4 className="text-white font-header text-sm font-bold uppercase tracking-wide">{review.author}</h4>
                   <p className="text-stone-500 text-xs uppercase tracking-wider">{review.source} • {review.relativeTime}</p>
                 </div>
               </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
           <a 
             href="https://www.google.com/maps/place/Colton's+Social+House/@36.8079459,-119.6968948,17z/data=!4m8!3m7!1s0x80945b89bb9127bb:0xa9ec0e63cc3b5483!8m2!3d36.8079416!4d-119.6943199!9m1!1b1!16s%2Fg%2F11cn3lt58w?entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D" 
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-green-500 uppercase tracking-widest text-sm font-bold hover:text-white transition-colors"
           >
             Read All Reviews <ChevronRight size={16} />
           </a>
        </div>
      </div>
    </div>
  </div>
);

const MenuPage = () => {
  const scrollToSection = (title: string) => {
    const element = document.getElementById(title);
    if (element) {
      const offset = 180;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const MENU_NAV_ITEMS = [
    { label: "CRAFT COCKTAILS", targetId: "CRAFT COCKTAILS: Spirited Favorites" },
    { label: "WINE, BOTTLED BEER & DRAFT FLIGHTS", targetId: "WINE" },
    { label: "N/A BEVERAGES", targetId: "H.T.A. (Mocktails)" },
    { label: "LUNCH & DINNER", targetId: "SOCIABLES" },
    { label: "LIL’ SESSIONS (Kids)", targetId: "LIL' SESSIONS (Kids)" },
    { label: "SWEET INDULGENCES", targetId: "SWEET INDULGENCES" },
  ];

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen bg-stone-950 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-header text-5xl font-bold text-white uppercase tracking-tighter mb-4">Eats & <span className="text-green-500">Drinks</span></h2>
          <p className="text-stone-400 max-w-lg mx-auto italic">
            Please inform your Social Therapist of any allergies. Shared equipment may cause cross-contact.
          </p>
          <div className="mt-4 flex justify-center gap-4 text-xs uppercase tracking-widest text-stone-500">
            <span className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> Spicy</span>
            <span className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Vegetarian</span>
          </div>
        </div>
        <div className="sticky top-20 z-40 bg-stone-950/95 backdrop-blur shadow-md -mx-4 border-b border-stone-800 mb-8">
          <div className="flex overflow-x-auto scrollbar-hide py-4 px-4 gap-8 md:justify-center items-center">
            {MENU_NAV_ITEMS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.targetId)}
                className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-green-500 transition-colors whitespace-nowrap pb-1 border-b-2 border-transparent hover:border-green-500"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-16 max-w-5xl mx-auto">
          {MENU_DATA.map((category, idx) => (
            <div key={idx} id={category.title} className="bg-stone-900/30 p-8 border-t-4 border-green-500/20 scroll-mt-48">
              <h3 className="font-header text-3xl font-bold text-white uppercase tracking-widest mb-2">{category.title}</h3>
              {category.note && <p className="text-green-500/80 italic mb-8 font-serif">{category.note}</p>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group relative">
                    <div className="flex justify-between items-baseline mb-1 border-b border-stone-800 pb-2 group-hover:border-stone-700 transition-colors">
                      <h4 className="font-header text-lg font-bold text-stone-200 uppercase tracking-wide group-hover:text-green-400 transition-colors">
                        {item.name}
                        {item.tags?.includes('spicy') && <span className="ml-2 text-red-500 text-xs align-top">▲</span>}
                        {item.tags?.includes('vegetarian') && <span className="ml-2 text-green-500 text-xs align-top">❖</span>}
                      </h4>
                      <span className="font-header text-lg font-bold text-green-500 ml-4 shrink-0">{item.price}</span>
                    </div>
                    <p className="text-stone-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 pt-8 border-t border-stone-800">
          <p className="text-stone-500 text-sm uppercase tracking-wider">Full menu available at the restaurant. Items subject to availability.</p>
        </div>
      </div>
    </div>
  );
};

const ReservationsPage = () => {
  const [partySize, setPartySize] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleFindTable = () => {
    if (!date) { alert("Please select a date."); return; }
    let time24 = "12:00"; 
    if (time.includes("AM")) {
      const parts = time.split(' ')[0].split(':');
      if (parts[0] === '12') parts[0] = '00';
      time24 = `${parts[0]}:${parts[1]}`;
    } else if (time.includes("PM")) {
      const parts = time.split(' ')[0].split(':');
      if (parts[0] !== '12') parts[0] = (parseInt(parts[0]) + 12).toString();
      time24 = `${parts[0]}:${parts[1]}`;
    } else {
       if (!time) { alert("Please select a time."); return; }
    }
    const dateTimeStr = `${date}T${time24}:00.000-08:00`;
    const url = `https://tables.toasttab.com/restaurants/53b9850f-5bee-49b3-8c53-dd4ce8ac0070/reserve?partySize=${partySize}&dateTime=${encodeURIComponent(dateTimeStr)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen bg-stone-950 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-header text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-4">
            Appointment <span className="text-green-500">Bookings</span>
          </h2>
          <div className="prose prose-invert mx-auto text-stone-400">
             <p className="mb-4">
               At Colton's Social House, we refer to our reservations as "Appointments" because we believe that dining with us is more than just a meal—it's a socially therapeutic experience.
             </p>
             <p className="italic text-sm">
               As a social house, our goal is to create an environment where guests can relax, connect, and enjoy meaningful moments together, much like a wellness appointment for the soul.
             </p>
          </div>
        </div>

        <div className="bg-stone-900 border border-stone-800 shadow-2xl overflow-hidden mb-16">
          <div className="bg-green-900/20 px-6 py-4 border-b border-green-900/30 flex justify-between items-center">
             <span className="text-green-500 font-bold uppercase tracking-wider text-sm">Small Group Bookings (Up to 6)</span>
             <span className="text-stone-400 text-sm flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Online</span>
          </div>

          <div className="p-8">
            <p className="text-stone-300 text-sm mb-6 leading-relaxed">
               Online booked Appointments are available <strong>Sunday through Wednesday from 11:15am to 10pm</strong>, & <strong>Thursday through Saturday from 11:15am to 4pm</strong>.
               <br/>
               <span className="italic text-stone-500">If your preferred date or time is unavailable, we still encourage you to join us as a walk-in!</span>
            </p>

            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                     <label className="block text-stone-300 font-header uppercase tracking-wider mb-2">Party Size</label>
                     <select value={partySize} onChange={(e) => setPartySize(parseInt(e.target.value))} className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none uppercase">
                        {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Guests</option>)}
                     </select>
                  </div>
                  <div>
                    <label className="block text-stone-300 font-header uppercase tracking-wider mb-2">Date</label>
                    <input type="date" className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none uppercase" onChange={(e) => setDate(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-stone-300 font-header uppercase tracking-wider mb-2">Time</label>
                    <select className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none uppercase" onChange={(e) => setTime(e.target.value)}>
                      <option value="">Select Time</option>
                      {['11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM','5:00 PM','5:30 PM','6:00 PM','6:30 PM','7:00 PM'].map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <button onClick={handleFindTable} className="w-full bg-stone-100 hover:bg-white text-stone-900 font-header font-bold uppercase py-4 tracking-widest transition-colors flex items-center justify-center gap-2">
                  Book Your Small Group Appointment <ChevronRight size={18} />
                </button>
            </div>
          </div>
        </div>

        {/* Large Group & General Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
               <h3 className="font-header text-2xl text-white uppercase tracking-wider border-b border-stone-800 pb-2">Large Group Requests</h3>
               <div className="text-stone-400 text-sm space-y-4 leading-relaxed">
                  <p>For groups of 7 to 20, we kindly ask that you submit a Large Group Appointment Request. Please review the information below, and if everything is acceptable, complete our Request Form.</p>
                  <p>Unfortunately, we cannot accommodate more than 20 guests in scheduled bookings; such larger parties will need to join us as walk-ins and will be seated at separate tables.</p>
                  <p>We respond to all requests within 24 hours. If you have questions before submitting, give us a call at (559) 721-6655.</p>
                  <button className="text-green-500 font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                     Large Group Request Form <ChevronRight size={14} />
                  </button>
               </div>

               <div className="bg-stone-900 p-6 border border-stone-800 rounded-sm">
                  <h4 className="font-header text-lg text-white uppercase tracking-wider mb-4">Deposit & Cancellation Policy</h4>
                  <ul className="text-xs text-stone-400 space-y-3">
                     <li><strong>DEPOSITS:</strong> Held in the form of a Colton’s gift card. You'll receive the card during your visit.</li>
                     <li><strong>3+ Day’s Notice:</strong> No penalty. You may pick up your gift card anytime.</li>
                     <li><strong>Less Than 3 Days Notice:</strong> A $1 per person cancellation fee will be deducted.</li>
                     <li><strong>Weather Issues:</strong> If weather prevents patio seating, we’ll do our best to find an indoor option.</li>
                  </ul>
               </div>
            </div>

            <div className="space-y-6">
               <h3 className="font-header text-2xl text-white uppercase tracking-wider border-b border-stone-800 pb-2">General Information</h3>
               <ul className="space-y-4 text-sm text-stone-300">
                  <li className="grid grid-cols-[120px_1fr]">
                     <span className="text-green-500 font-bold uppercase text-xs tracking-wider">Group Size Limit</span>
                     <span>Up to 20 guests. Larger parties declined.</span>
                  </li>
                  <li className="grid grid-cols-[120px_1fr]">
                     <span className="text-green-500 font-bold uppercase text-xs tracking-wider">Seating</span>
                     <span>All large group appointments are seated on our outdoor patio only.</span>
                  </li>
                  <li className="grid grid-cols-[120px_1fr]">
                     <span className="text-green-500 font-bold uppercase text-xs tracking-wider">Peak Restrictions</span>
                     <span>No large group bookings on Fridays or Saturdays after 3 PM.</span>
                  </li>
                  <li className="grid grid-cols-[120px_1fr]">
                     <span className="text-green-500 font-bold uppercase text-xs tracking-wider">Deposit Required</span>
                     <span>$5 per guest deposit, loaded onto a Colton’s gift card.</span>
                  </li>
                  <li className="grid grid-cols-[120px_1fr]">
                     <span className="text-green-500 font-bold uppercase text-xs tracking-wider">Minimum Spend</span>
                     <span>$25 per person minimum (before tax/tip).</span>
                  </li>
                  <li className="grid grid-cols-[120px_1fr]">
                     <span className="text-green-500 font-bold uppercase text-xs tracking-wider">Separate Checks</span>
                     <div className="space-y-1 text-xs">
                        <p>7-10: Unlimited</p>
                        <p>11-15: Up to 4</p>
                        <p>16-20: Up to 2</p>
                     </div>
                  </li>
               </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

const JoinTeamPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application Prepared! Please ensure you send your resume to csh@coltonssocialhouse.com with the subject 'New Applicant Resume_(your name)'.");
  };

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen bg-stone-950 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h2 className="font-header text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-8 text-center">
          Join Our <span className="text-green-500">Team</span>
        </h2>
        
        <div className="prose prose-invert prose-stone mb-12 text-center max-w-3xl mx-auto">
          <p className="text-lg font-light leading-relaxed mb-6">
            At Colton’s, we’re all about creating an environment where great food, great service, and great company come together to offer something more—what we call <strong>Social Therapy</strong>. It’s our way of delivering not just a meal, but a memorable, feel-good experience built on connection and care.
          </p>
          <p className="text-stone-400 mb-6">
            We believe every team member plays a part in that. No matter your role, when you join Colton’s, you become a <strong>Social Therapist</strong>—someone who helps create the energy, atmosphere, and guest experience we’re known for.
          </p>
          <div className="bg-stone-900 border border-green-500/30 p-4 rounded text-sm text-stone-300">
             <strong>Please note:</strong> Our busiest times are weekends, so availability Friday–Sunday (AM or PM) is required. Applicants with restaurant experience and open availability are more likely to be considered.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-stone-900 border border-stone-800 p-8 md:p-12 space-y-10 shadow-xl rounded-sm">
          <div className="border-b border-stone-800 pb-4">
             <h3 className="text-2xl font-header font-bold text-white uppercase">Colton's Employment Application</h3>
             <p className="text-stone-500 text-sm mt-1">To apply, please complete the application form below. After submitting, you’ll be prompted to email your resume.</p>
          </div>
          {/* Form Fields (kept from previous implementation as requested) */}
          <div className="space-y-2">
            <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">Date of Application <span className="text-red-500">*</span></label>
            <input required type="date" className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">First Name <span className="text-red-500">*</span></label>
              <input required type="text" className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">Last Name <span className="text-red-500">*</span></label>
              <input required type="text" className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
               <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">Phone # <span className="text-red-500">*</span></label>
               <input required type="tel" className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" />
            </div>
            <div className="space-y-2">
               <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">Email <span className="text-red-500">*</span></label>
               <input required type="email" className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" />
            </div>
          </div>
          <div className="space-y-4">
             <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">Position(s) Applying For <span className="text-red-500">*</span></label>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Server', 'Bartender', 'Host', 'Barback/Busser', 'Dishwasher', 'Line Cook', 'Prep Cook', 'Expo'].map(pos => (
                  <label key={pos} className="flex items-center gap-3 text-stone-300 hover:text-white cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 accent-green-500 bg-stone-800 border-stone-600 rounded" />
                    <span className="group-hover:text-green-500 transition-colors uppercase text-sm font-bold tracking-wide">{pos}</span>
                  </label>
                ))}
             </div>
          </div>
          <div className="border border-stone-700 p-6 bg-stone-900/50">
             <h4 className="text-green-500 font-header text-lg uppercase mb-4">Availability</h4>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
               <div className="space-y-2">
                 <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">Work Start Date <span className="text-red-500">*</span></label>
                 <input required type="text" className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" />
               </div>
               <div className="space-y-2">
                 <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">Interview Availability <span className="text-red-500">*</span></label>
                 <input required type="text" className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" />
               </div>
             </div>
             <div className="space-y-4 mb-6">
                <div className="bg-stone-800 p-4 rounded text-sm text-stone-300 leading-relaxed border-l-4 border-green-500">
                   <strong>AVAILABILITY DISCLAIMER:</strong> As a restaurant, weekends are our busiest time, therefore we require ALL employees to have availability Friday, Saturday and Sunday, for at least AM or PM each of those days.
                </div>
                <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">Select Available Shifts <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {['Weekday AM', 'Weekday PM', 'Weekend AM', 'Weekend PM'].map(shift => (
                     <label key={shift} className="flex items-center gap-2 text-stone-300">
                       <input type="checkbox" className="accent-green-500" /> {shift}
                     </label>
                   ))}
                </div>
             </div>
          </div>
          <div className="space-y-6">
             <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">Work Experience <span className="text-red-500">*</span></label>
                <textarea required rows={5} className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" />
             </div>
          </div>
          <div className="space-y-6">
             <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">Social Therapy <span className="text-red-500">*</span></label>
                <textarea required rows={4} className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" placeholder="What does a Socially Therapeutic Environment mean to you?" />
             </div>
          </div>
          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-header font-bold uppercase py-4 mt-4 tracking-widest transition-colors shadow-lg text-lg">
            Apply Now
          </button>
          <p className="text-center text-xs text-stone-500 mt-4">
             If you experience any issues uploading your resume, please <a href="mailto:csh@coltonssocialhouse.com" className="text-green-500 hover:underline">click here</a> to email it directly.
          </p>
        </form>
      </div>
    </div>
  );
};

const AboutPage = () => (
  <div className="pt-24 pb-20 px-4 min-h-screen bg-stone-950 flex flex-col items-center">
    <div className="max-w-4xl w-full">
       <div className="text-center mb-12">
         <h1 className="font-header text-5xl font-bold text-white uppercase tracking-tighter mb-4">
           Colton's <span className="text-green-500">Social House</span>
         </h1>
         <div className="h-1 w-20 bg-green-500 mx-auto"></div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-stone-900 p-8 border border-stone-800 text-center">
             <Clock className="w-10 h-10 text-green-500 mx-auto mb-4" />
             <h3 className="font-header text-2xl text-white uppercase tracking-wider mb-2">Hours of Operation</h3>
             <p className="text-stone-300 font-bold uppercase tracking-wide">11 AM - MIDNIGHT</p>
             <p className="text-stone-500 uppercase tracking-widest text-sm mt-1">7 Days / Week</p>
          </div>
          <div className="bg-stone-900 p-8 border border-stone-800 text-center">
             <MapPin className="w-10 h-10 text-green-500 mx-auto mb-4" />
             <h3 className="font-header text-2xl text-white uppercase tracking-wider mb-2">Location</h3>
             <p className="text-stone-300 uppercase tracking-wide">1150 Shaw Avenue</p>
             <p className="text-stone-300 uppercase tracking-wide">Clovis, CA • 93612</p>
          </div>
       </div>

       <div className="text-center mb-16">
          <Phone className="w-10 h-10 text-green-500 mx-auto mb-4" />
          <h3 className="font-header text-3xl text-white uppercase tracking-wider mb-6">Contact Us</h3>
          <p className="text-xl text-stone-300 mb-2">Call (559) 721-6655</p>
          <p className="text-stone-500 mb-6">Secondary Phone # (559) 472-3427</p>
          <button className="bg-white text-stone-900 px-8 py-3 font-header font-bold uppercase tracking-widest hover:bg-stone-200 transition-colors">
            Get In Touch (Email)
          </button>
       </div>

       <div className="border-t border-stone-800 pt-12">
          <h4 className="font-header text-xl text-white uppercase tracking-widest mb-6 text-center">Privacy Policy</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-stone-400">
             <div>
                <strong className="text-green-500 block mb-1 uppercase text-xs">1. Information We Collect</strong>
                <p>We may collect personal information such as your name, email address, phone number, and any other details you voluntarily provide.</p>
             </div>
             <div>
                <strong className="text-green-500 block mb-1 uppercase text-xs">2. How We Use Your Information</strong>
                <p>Your information is used to communicate with you, provide services, respond to inquiries, send relevant updates, and improve our offerings.</p>
             </div>
             <div>
                <strong className="text-green-500 block mb-1 uppercase text-xs">3. Who We Share Your Information With</strong>
                <p>We do not sell, rent, or share your personal information with third parties, affiliates, or outside organizations except as required by law or to provide services you’ve requested.</p>
             </div>
             <div>
                <strong className="text-green-500 block mb-1 uppercase text-xs">4. SMS Consent</strong>
                <p>If you opt in to receive SMS communications from us, your consent and phone number will be used solely for that purpose. SMS consent is not shared with third parties.</p>
             </div>
          </div>
       </div>
    </div>
  </div>
);

const GiftCardsPage = () => (
  <div className="pt-24 pb-20 px-4 min-h-screen bg-stone-950 flex flex-col items-center animate-in fade-in duration-500">
    <div className="max-w-2xl text-center">
      <Gift className="w-16 h-16 text-green-500 mx-auto mb-6" />
      <h2 className="font-header text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-8 leading-tight">
        Give the Gift of <br/> <span className="text-green-500">Social Therapy</span>
      </h2>
      <div className="prose prose-invert mx-auto text-lg text-stone-300 leading-relaxed mb-10">
        <p className="mb-4">Need a no-brainer gift that’s way better than socks? We’ve got you.</p>
        <p className="mb-4">Colton’s Gift Cards can be loaded with any amount from $5 to $500, and let’s be honest—who wouldn’t want a dose of Social Therapy?</p>
        <p className="mb-4">You can grab a physical card (or a few) at the restaurant, or snag an E-Gift Card by clicking the link below.</p>
        <p>Send one to yourself (because you deserve it), or to someone else with a custom message and even a scheduled delivery time. You can also choose to have it sent by text or email—fast, easy, and way more fun than guessing someone’s t-shirt size.</p>
      </div>
      <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 font-header font-bold text-xl uppercase tracking-widest shadow-lg shadow-green-900/40 transition-all hover:scale-105 flex items-center justify-center gap-3 mx-auto">
        Purchase E-Gift Card <ExternalLink size={20} />
      </button>
    </div>
  </div>
);

const BetaTastingPage = () => (
  <div className="pt-24 pb-20 px-4 min-h-screen bg-stone-950 flex flex-col items-center animate-in fade-in duration-500">
    <div className="max-w-3xl w-full">
      <div className="text-center mb-12">
        <FlaskConical className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h2 className="font-header text-5xl font-bold text-white uppercase tracking-tighter mb-6">
          #Beta-<span className="text-green-500">Taster</span>
        </h2>
        <div className="text-stone-300 leading-relaxed space-y-4 mb-10">
           <p>At Colton’s, our Social Experiment began before we ever opened our doors. We started with a series of private dinners, inviting our very first guests—who we proudly called Early Adopters—to help us shape and refine our menu through real-time feedback.</p>
           <p>When we officially opened in the summer of 2016, we entered what we called BetaMode, and our guests became Beta-Tasters. Their ongoing input helped guide everything from flavor tweaks to new ideas, and it’s a tradition we’ve continued ever since.</p>
           <p className="font-bold text-white">Today, Beta-Tasting is still at the heart of how we evolve. If you’re interested in being part of it, we’d love to hear from you.</p>
        </div>
      </div>

      <div className="bg-stone-900 border border-stone-800 p-8 md:p-12 shadow-2xl">
        <h3 className="font-header text-2xl text-white uppercase mb-8 border-b border-stone-800 pb-4">Beta-Tasting Feedback Form</h3>
        <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert("Thank you for your feedback, Beta-Taster!"); }}>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
               <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">First Name</label>
               <input type="text" className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" />
             </div>
             <div className="space-y-2">
               <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">Last Name</label>
               <input type="text" className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" />
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
               <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">Email Address</label>
               <input type="email" className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" />
             </div>
             <div className="space-y-2">
               <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">Phone</label>
               <input type="tel" className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" />
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="space-y-2">
               <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">Date Visited</label>
               <input type="date" className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" />
             </div>
             <div className="space-y-2">
               <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">Time of Visit <span className="text-red-500">*</span></label>
               <select className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none">
                 <option>Lunch</option>
                 <option>Dinner</option>
                 <option>Late Night</option>
               </select>
             </div>
             <div className="space-y-2">
               <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">Server Name</label>
               <input type="text" className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" />
             </div>
           </div>

           <div className="space-y-2">
             <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">Items Ordered <span className="text-red-500">*</span></label>
             <textarea rows={3} className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" placeholder="What did you try today?" required />
           </div>

           <div className="space-y-6 border-t border-stone-800 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="text-xs uppercase font-bold text-stone-500 tracking-wider mb-2 block">How was your meal? <span className="text-red-500">*</span></label>
                    <select className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none">
                       <option>Excellent</option>
                       <option>Good</option>
                       <option>Average</option>
                       <option>Poor</option>
                    </select>
                 </div>
                 <div>
                    <label className="text-xs uppercase font-bold text-stone-500 tracking-wider mb-2 block">Meal Comments</label>
                    <input type="text" className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="text-xs uppercase font-bold text-stone-500 tracking-wider mb-2 block">How was your service? <span className="text-red-500">*</span></label>
                    <select className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none">
                       <option>Excellent</option>
                       <option>Good</option>
                       <option>Average</option>
                       <option>Poor</option>
                    </select>
                 </div>
                 <div>
                    <label className="text-xs uppercase font-bold text-stone-500 tracking-wider mb-2 block">Service Comments</label>
                    <input type="text" className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="text-xs uppercase font-bold text-stone-500 tracking-wider mb-2 block">Overall Experience? <span className="text-red-500">*</span></label>
                    <select className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none">
                       <option>Excellent</option>
                       <option>Good</option>
                       <option>Average</option>
                       <option>Poor</option>
                    </select>
                 </div>
                 <div>
                    <label className="text-xs uppercase font-bold text-stone-500 tracking-wider mb-2 block">Experience Comments</label>
                    <input type="text" className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" />
                 </div>
              </div>
           </div>

           <div className="space-y-2">
             <label className="text-xs uppercase font-bold text-stone-500 tracking-wider">Ideas for new items or items to bring back?</label>
             <textarea rows={3} className="w-full bg-stone-800 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none" />
           </div>

           <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-header font-bold uppercase py-4 tracking-widest transition-colors shadow-lg">
             Submit Feedback
           </button>
        </form>
      </div>
    </div>
  </div>
);

const AiTherapistPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello. I'm your Digital Social Therapist. Are you here for the 'Farmers Daughter' or do you just need some 'Sage Advice'? How can I help?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await generateSocialTherapy(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setLoading(false);
  };

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen bg-stone-950 flex flex-col items-center">
      <div className="max-w-2xl w-full h-[600px] flex flex-col bg-stone-900 border border-stone-800 rounded-lg shadow-2xl overflow-hidden">
        <div className="bg-stone-800 p-4 border-b border-stone-700 flex items-center gap-3">
           <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-stone-900">
             <Bot size={24} />
           </div>
           <div>
             <h3 className="font-header text-white font-bold uppercase tracking-wide">Social Therapist</h3>
             <span className="text-xs text-green-500 uppercase tracking-wider flex items-center gap-1">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Online
             </span>
           </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-lg text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-green-600 text-white rounded-br-none' 
                  : 'bg-stone-800 text-stone-200 rounded-bl-none border border-stone-700'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-stone-800 text-stone-400 p-3 rounded-lg text-xs animate-pulse">
                Therapist is thinking...
              </div>
            </div>
          )}
        </div>
        <div className="p-4 bg-stone-800 border-t border-stone-700 flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about cocktails or food..."
            className="flex-1 bg-stone-900 border border-stone-700 text-white p-3 focus:border-green-500 focus:outline-none rounded-md"
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white p-3 rounded-md transition-colors"
          >
            <MessageSquare size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <HomePage navigate={setActivePage} />;
      case 'menu': return <MenuPage />;
      case 'reservations': return <ReservationsPage />;
      case 'join': return <JoinTeamPage />;
      case 'about': return <AboutPage />;
      case 'gift-cards': return <GiftCardsPage />;
      case 'beta-tasting': return <BetaTastingPage />;
      case 'ai-therapist': return <AiTherapistPage />;
      default: return <HomePage navigate={setActivePage} />;
    }
  };

  return (
    <div className="bg-stone-950 min-h-screen text-stone-200 font-sans selection:bg-green-500 selection:text-white">
      <Navbar 
        activePage={activePage} 
        navigate={setActivePage} 
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <main className="min-h-screen">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
