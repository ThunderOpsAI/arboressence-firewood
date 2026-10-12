'use client';

import { Flame, TreePine, Phone, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const phoneNumber = '(03) 5725 7493';
  const cleanPhone = '0357257493';

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-surface-950 via-surface-900 to-surface-950">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950/80 border border-amber-800 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
            Seasoned Firewood &bull; Certified Arborists &bull; Wangaratta
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Dry Split Redgum Firewood &amp; Expert Tree Lopping.
          </h1>

          <p className="text-lg sm:text-xl text-surface-300 leading-relaxed mb-8 max-w-2xl font-light">
            Keep your home burning warm all winter with premium dry split redgum delivered across Wangaratta and North East Victoria. Full tipper loads or trailer pickups from Shanley St, plus licensed tree removals and stump grinding.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#calculator"
              className="px-6 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-black rounded-xl text-center text-xs uppercase tracking-wider transition-all shadow-xl shadow-amber-950/50 flex items-center justify-center gap-2"
            >
              <span>Calculate Firewood Delivery Price</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${cleanPhone}`}
              className="px-6 py-4 bg-surface-900 hover:bg-surface-850 text-white border border-surface-700 font-bold rounded-xl text-center text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Depot: (03) 5725 7493</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-12 mt-12 border-t border-surface-800 text-xs text-surface-400">
            <div>
              <div className="text-white font-black text-lg">100% Seasoned</div>
              <div>Low Moisture Redgum</div>
            </div>
            <div>
              <div className="text-white font-black text-lg">Suburb Delivery</div>
              <div>Tipper or Tandem Loads</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-white font-black text-lg">Certified Arborists</div>
              <div>Safe Hazardous Removals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
