
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass-nav border-b border-white/5 h-[52px]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        {/* Brand/Product Name */}
        <div className="flex items-center">
          <a href="#" className="text-white/90 font-semibold text-lg tracking-tight hover:text-white transition-colors">
            eufy Edge Agent
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[11px] lg:text-[12px] text-zinc-400 font-medium tracking-normal">
          <a href="#product-bento" className="hover:text-white transition-colors">Proactive Security System</a>
          <a href="#child-protection" className="hover:text-white transition-colors">Child Protection</a>
          <a href="#property-protection" className="hover:text-white transition-colors">Property Protection</a>
          <a href="#smart-intelligence" className="hover:text-white transition-colors">eufy Assistant</a>
          <a href="#local-privacy" className="hover:text-white transition-colors">Local Security</a>
          <a href="#comparison" className="hover:text-white transition-colors">Product Comparison</a>
        </div>

        {/* Right Action Section */}
        <div className="flex items-center">
          <button className="bg-[#0071e3] text-white text-[12px] px-3.5 py-1 rounded-full font-medium hover:bg-[#0077ed] transition-all transform active:scale-95 shadow-lg shadow-blue-500/20">
            立即购买
          </button>
          
          {/* Mobile Menu Icon (Visual Only) */}
          <button className="ml-4 md:hidden text-zinc-400">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2">
              <line x1="2" y1="5" x2="16" y2="5" />
              <line x1="2" y1="13" x2="16" y2="13" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
