import React, { useState, useEffect } from 'react';
import { BrainCircuit, Menu, X } from 'lucide-react';

interface NavbarProps {
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg shadow-md shadow-indigo-600/20">
              <BrainCircuit className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Voiverse
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-indigo-600 text-sm font-medium transition-colors">工作原理</a>
            <a href="#topics" className="text-slate-600 hover:text-indigo-600 text-sm font-medium transition-colors">精选主题</a>
            <a href="#pricing" className="text-slate-600 hover:text-indigo-600 text-sm font-medium transition-colors">价格计划</a>
            
            <button 
              onClick={onJoinClick}
              className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              内测申请
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 p-4 absolute w-full shadow-xl">
          <div className="flex flex-col space-y-4">
             <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium">工作原理</a>
             <a href="#topics" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium">精选主题</a>
             <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium">价格计划</a>
             <button 
              onClick={() => { onJoinClick(); setMobileMenuOpen(false); }}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold w-full"
            >
              内测申请
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};