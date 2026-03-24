import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cake, Instagram, MessageCircle, ChevronDown } from 'lucide-react';

type Section = 'home' | 'faq';

const Navbar = ({ activeSection }: { activeSection: Section }) => {
  const scrollTo = (target: 'home' | 'faq') => {
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linkClass = (section: Section) =>
    section === activeSection
      ? 'text-primary font-semibold border-b border-primary/30 pb-1 transition-colors'
      : 'text-secondary hover:text-primary transition-colors';

  return (
    <header className="fixed top-0 w-full z-50 glass-header border-b border-primary/5">
      <nav className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        <div className="text-2xl font-headline italic text-primary flex items-center gap-2 tracking-wide">
          <img src="../public/favicon.png" className="w-7 h-6" />
          Deuxcerie
        </div>
        <div className="hidden md:flex items-center gap-10 font-light text-xs tracking-[0.2em] uppercase">
          <button type="button" onClick={() => scrollTo('home')} className={linkClass('home')}>
            Início
          </button>
          <button type="button" onClick={() => scrollTo('faq')} className={linkClass('faq')}>
            FAQ
          </button>
        </div>
        <button
          type="button"
          className="bg-primary text-white px-8 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300 active:scale-95 shadow-lg shadow-primary/20"
          onClick={() => window.open("https://wa.me/5521998864321", "_blank")}
        >
          Encomendar
        </button>
      </nav>
    </header>
  );
};

const Hero = () => (
  <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
    <div className="absolute inset-0 bg-brand-gradient"></div>
    <div className="absolute inset-0 opacity-20">
      <img
        src="https://lh3.googleusercontent.com/aida/ADBb0ugNYn7EktDkQzMkBmc09d4iWaEy6WHrTyHbeKLv6wXurqRwEoDtgLgZzLQrjwBL1YygNUEchtqDc3b3hxFKdfm5NsAohWH-66HngIu97WZbvxboywsNt4HESFBkMJOW8fBuckQL717sn15OX5UHy2mJbTt8rHZ0qHk5NHn0fIA51QQAyKYiXY-4Qs5YTdcTRhN1HppaCNkNq70xyjukUE6jfBUiAZG9D27DZTNKXLwqZkvXpHcJL_XdZ6z5pVT6wCTbIXvkUuMUMWE"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover mix-blend-overlay"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10 py-20">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8 text-white"
      >
        <div className="inline-block px-4 py-1 rounded-full border border-white/20 text-[10px] uppercase tracking-[0.3em] font-medium">
          Pâtisserie d'Artiste
        </div>
        <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tight leading-tight">
          Doces que marcam <span className="italic font-normal">memórias</span>.
        </h1>
        <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed max-w-lg">
          Arte em cada detalhe. Emoção em cada sabor.
        </p>
        <div className="flex flex-wrap gap-6 items-center pt-4">
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative hidden md:block"
      >
        <div className="relative z-10 rounded-2xl shadow-2xl transform rotate-2 border-[12px] border-white/10">
          <img
            src="../public/candle_cake.png"
            alt="Bolo artesanal Deuxcerie"
            className="w-full h-[500px] object-contain bg-white/10"
          />
        </div>
        {/* <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-xl z-20 transform -rotate-3 border border-white/20">
          <img
            src="https://lh3.googleusercontent.com/aida/ADBb0ujO8JG-8oUantbwDOaxN-BvXnm1HdA9cCCNhZHz9K6ykCnsvTSsZNRKk2lK-0GCPXk6e9XELtr4CsyFbaMo8RvnqePKPrVu709s5UyUuSG89onzln2d3_f_yp4Gbjik92Cq581CmnNhAfVUM6Ot-dziZToVNYGAgZVMvuZkS4SnQpeVIqYGJFPRY4xHUDRk6E0uC-QzBYmIDrcxBI1An2-4ub1YLxg9maqOFaN5GVVRhi9OvYFMT3R3aHPBF5F08NK3FNlYP2-uJr0"
            alt="Ilustração Deuxcerie"
            loading="lazy"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div> */}
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section className="py-32 bg-cream px-6" id="story">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 text-primary uppercase tracking-[0.4em] text-[10px] font-bold">
            <span className="w-10 h-[1px] bg-primary/30"></span>
            A Nossa Essência
            <span className="w-10 h-[1px] bg-primary/30"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline text-primary leading-tight">
            Onde o <span className="italic">terroir</span> brasileiro encontra a técnica francesa.
          </h2>
          <div className="space-y-6 text-on-surface-variant font-light leading-relaxed text-lg">
            <p>
              A Deuxcerie é mais do que uma marca de confeitaria: <span className="font-bold">é uma experiência que une sabor, emoção e memórias.</span>
            </p>
            <p>
              Cada criação é pensada como uma joia, onde o cacau de origem, as frutas da estação e a precisão técnica se fundem para criar algo verdadeiramente singular.
            </p>
          </div>
          <div className="flex gap-12 pt-6">
            <div>
              <span className="block text-4xl font-headline text-primary">2024</span>
              <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">Início do Sonho</span>
            </div>
            <div>
              <span className="block text-4xl font-headline text-primary">100%</span>
              <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">Artesanal</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="../public/moon_cake.png"
            alt="Detalhe de confeitaria artesanal"
            loading="lazy"
            className="rounded-2xl shadow-xl w-full aspect-[4/5] object-cover"
            referrerPolicy="no-referrer"
          />
          {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary p-6 rounded-full flex items-center justify-center text-white shadow-2xl">
            <ArrowRight className="w-10 h-10 rotate-[-45deg]" />
          </div> */}
        </motion.div>
      </div>
    </div>
  </section>
);

const Values = () => (
  <section className="py-32 bg-surface px-6 border-y border-primary/5" id="values">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24 max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl font-headline text-primary">Nossos Pilares</h2>
        <p className="text-on-surface-variant font-light">A excelência não é um ato, mas um hábito presente em cada etapa da nossa produção.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {[
          { icon: 'brush', title: 'Meticulosidade', desc: 'Do desenho do bolo à escolha da fita de cetim, nenhum detalhe é pequeno demais para a nossa atenção.' },
          { icon: 'eco', title: 'Terroir Brasileiro', desc: 'Valorizamos o produtor local, trazendo o frescor das frutas e a riqueza do cacau nativo para a alta confeitaria.' },
          { icon: 'favorite', title: 'Legado e Emoção', desc: 'Não entregamos apenas doces; entregamos o centro das atenções das suas celebrações mais queridas.' }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="group text-center space-y-6 px-4"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
            </div>
            <h3 className="text-xl font-headline text-primary tracking-wide">{item.title}</h3>
            <p className="text-on-surface-variant font-light leading-relaxed text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const faqItems = [
  {
    question: 'Com quanto de antecedência devo fazer minha encomenda?',
    answer: 'Nosso prazo mínimo é 2 dias de antecedência para pedidos. Recomendamos pelo menos 7 dias de antecedência para bolos personalizados e tortas. Para datas especiais como casamentos e eventos corporativos, o ideal é entrar em contato com 10 dias de antecedência para garantir disponibilidade e permitir o planejamento detalhado da peça.',
  },
  {
    question: 'Posso escolher um sabor que não está no cardápio?',
    answer: 'Prezamos pela qualidade dos nossos ingredientes e pela autenticidade dos sabores clássicos franceses com toques brasileiros. Por isso, trabalhamos exclusivamente com os sabores do nosso cardápio — mas a combinação e mistura entre eles é totalmente sua! Explore as possibilidades e crie a sua experiência perfeita.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-cream px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="flex items-center justify-center gap-4 text-primary uppercase tracking-[0.4em] text-[10px] font-bold">
            <span className="w-10 h-[1px] bg-primary/30"></span>
            Dúvidas Frequentes
            <span className="w-10 h-[1px] bg-primary/30"></span>
          </div>
          <h2 className="text-4xl font-headline text-primary">Perguntas Frequentes</h2>
          <p className="text-on-surface-variant font-light">Tudo o que você precisa saber antes de fazer sua encomenda.</p>
        </motion.div>

        <div className="space-y-3">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-primary/5 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left gap-4"
                >
                  <span className="font-headline text-primary text-lg leading-snug">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="px-8 pb-6 text-on-surface-variant font-light leading-relaxed text-sm">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-32 px-6">
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-7xl mx-auto rounded-[3rem] bg-brand-gradient text-white overflow-hidden relative shadow-3xl"
    >
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc05NrsLQ2JjB4VH9K-R2ZHXNYSXauBGNqMOoBBjpl-da3X7bZfPI7wbMdJdYov9CEvBbIODDviYfilvkeJkUunUzY5QJMtYyjAXLDQEP0J2pl8aYX5P-3ZH5yDcY8zGM39B-q0vN1AXNAmnD8SBP6eeO1HtwMq7n61ZDXHJhiM7hG7OwCBjvQBa-PVA3bkETh37dwx2f9gY2fdIkqMWT63FitAETjP3azzwyoqp5S9DlewvTspK4Cf9K4pIY-9WAVgECzArILhYdP"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="relative z-10 p-12 md:p-24 flex flex-col items-center text-center space-y-10">
        <h2 className="text-4xl md:text-6xl font-headline leading-tight max-w-3xl">Deixe cada mordida se tornar uma lembrança inesquecível.</h2>
        <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl">Consultas personalizadas para eventos exclusivos ou encomendas imediatas da nossa coleção sazonal.</p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button
            type="button"
            onClick={() => window.open("https://wa.me/5521998864321", "_blank")}
            className="bg-white text-primary px-14 py-5 rounded-full text-sm font-bold shadow-xl hover:bg-cream transition-all"
          >
            Faça seu pedido
          </button>
          {/* <button type="button" className="border border-white/30 px-14 py-5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
            Fale conosco
          </button> */}
        </div>
      </div>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="w-full bg-cream py-20 px-8 border-t border-primary/5">
    <div className="max-w-screen-xl mx-auto flex flex-col items-center">
      <div className="text-3xl font-headline italic text-primary mb-12">Deuxcerie</div>
      <div className="flex justify-center gap-8 mb-12">
        <a href="https://www.instagram.com/deuxcerie/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Deuxcerie"
          className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a onClick={() => window.open("https://wa.me/5521998864321", "_blank")} href="#" aria-label="WhatsApp Deuxcerie" className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
      <p className="text-secondary/50 text-[10px] tracking-[0.4em] uppercase text-center">
        © 2026 DEUXCERIE. DOCES QUE MARCAM MEMÓRIAS.
      </p>
    </div>
  </footer>
);

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    const handleScroll = () => {
      const faqEl = document.getElementById('faq');
      if (!faqEl) return;
      const faqTop = faqEl.getBoundingClientRect().top;
      setActiveSection(faqTop <= window.innerHeight * 0.5 ? 'faq' : 'home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} />
      <main className="pt-20">
        <Hero />
        <About />
        <Values />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
