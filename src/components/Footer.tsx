import { Phone, Mail, MapPin, Flame } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-surface-400 text-xs py-14 border-t border-surface-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-black text-base">
              <Flame className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span>Arboressence Firewood &amp; Tree</span>
            </div>
            <p className="text-surface-400 max-w-sm leading-relaxed">
              Premium dry seasoned redgum and mixed hardwood supplies, plus certified arborist services across Wangaratta and North East Victoria.
            </p>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Depot &amp; Contact</h4>
            <div className="flex items-center gap-2 text-surface-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>32 Murrell St (Depot: Shanley St), Wangaratta VIC</span>
            </div>
            <div className="flex items-center gap-2 text-surface-300">
              <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <a href="tel:0357257493" className="hover:text-white transition-colors">(03) 5725 7493</a>
            </div>
            <div className="flex items-center gap-2 text-surface-300">
              <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <a href="mailto:Admin@arboressence.com.au" className="hover:text-white transition-colors">Admin@arboressence.com.au</a>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Quick Links</h4>
            <div><a href="#calculator" className="hover:text-white transition-colors">Firewood Calculator</a></div>
            <div><a href="#services" className="hover:text-white transition-colors">Tree Removals</a></div>
            <div><a href="#services" className="hover:text-white transition-colors">Stump Grinding</a></div>
            <div><span className="text-surface-500">Shanley St Yard Pickups</span></div>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-surface-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Arboressence Firewood &amp; Tree. All rights reserved.
          </div>
          <div>
            Serving Wangaratta, Glenrowan, Oxley, Milawa, Moyhu &amp; Beechworth
          </div>
        </div>
      </div>
    </footer>
  );
}
