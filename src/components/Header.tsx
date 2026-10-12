'use client';

import { Menu, X, Phone, TreePine, Flame, MapPin } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = '(03) 5725 7493';
  const cleanPhone = '0357257493';

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-surface-950/95 backdrop-blur-xl border-b border-surface-800 shadow-xl py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group focus:outline-none">
              <div className="h-11 sm:h-12 px-3 py-1 bg-amber-700 text-white rounded-xl shadow-md flex items-center justify-center font-black text-lg">
                <Flame className="w-5 h-5 mr-1 text-amber-300 fill-amber-300" />
                <span>ARBORESSENCE</span>
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-white font-extrabold text-sm tracking-tight leading-none">Arboressence Firewood &amp; Tree</div>
                <div className="text-amber-400 text-[10px] uppercase font-bold tracking-widest mt-0.5">Wangaratta &bull; Shanley St Depot</div>
              </div>
            </Link>
            
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-800/80 border border-surface-700/60 text-[11px] text-surface-300">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>32 Murrell St, Wangaratta</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-7">
            <Link href="/#calculator" className="text-surface-300 hover:text-amber-400 transition-colors text-sm font-semibold tracking-wide">
              Firewood Delivery Calculator
            </Link>
            <Link href="/#services" className="text-surface-300 hover:text-amber-400 transition-colors text-sm font-semibold tracking-wide">
              Tree Removal &amp; Lopping
            </Link>
            <Link href="/#quote" className="text-surface-300 hover:text-amber-400 transition-colors text-sm font-semibold tracking-wide">
              Tree Surgery Quote
            </Link>
            <Link href="/#contact" className="text-surface-300 hover:text-amber-400 transition-colors text-sm font-semibold tracking-wide">
              Contact &amp; Depot
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#calculator"
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-950/60"
            >
              <Flame className="w-4 h-4 fill-stone-950" />
              <span>Order Firewood / Tree Quote</span>
            </a>

            <a
              href={`tel:${cleanPhone}`}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-surface-850 hover:bg-surface-800 border border-surface-700 text-amber-400 font-bold text-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{phoneNumber}</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-surface-400 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-surface-900 border-t border-surface-800 px-4 py-6 space-y-4">
          <Link href="/#calculator" onClick={() => setIsMenuOpen(false)} className="block text-surface-200 hover:text-amber-400 font-medium">
            Firewood Delivery Calculator
          </Link>
          <Link href="/#services" onClick={() => setIsMenuOpen(false)} className="block text-surface-200 hover:text-amber-400 font-medium">
            Tree Removal &amp; Lopping
          </Link>
          <Link href="/#quote" onClick={() => setIsMenuOpen(false)} className="block text-surface-200 hover:text-amber-400 font-medium">
            Tree Surgery Quote
          </Link>
          <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="block text-surface-200 hover:text-amber-400 font-medium">
            Contact &amp; Depot Hours
          </Link>
          <div className="pt-2">
            <a
              href={`tel:${cleanPhone}`}
              className="w-full py-3 bg-amber-600 text-stone-950 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Depot: {phoneNumber}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
