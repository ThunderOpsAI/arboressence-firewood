'use client';

import { TreePine, Flame, Shovel, ShieldCheck, Check, Truck } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    name: 'Dry Seasoned Redgum Firewood',
    category: 'Winter Fuel Delivery',
    description: 'Aged in dry paddocks and split to standard fireplace dimensions. High density, clean burning, minimal ash, and maximum heat output.',
    icon: Flame,
    tag: 'Clean Burning Redgum',
    specs: [
      'Moisture Tested Under 18%',
      'Split to 30–35cm Fireplace Sizes',
      'Trailer Loads (1–2m³) to Full Tippers (5–10m³)',
      'Shanley St Depot Pickup Available'
    ]
  },
  {
    name: 'Hazardous Tree Removal & Dismantling',
    category: 'Certified Arboriculture',
    description: 'Expert sectional dismantling of dangerous, dead, or encroaching trees near powerlines, houses, and fences. Fully insured qualified climbers.',
    icon: TreePine,
    tag: 'Fully Insured Arborists',
    specs: [
      'Elevated Work Platform (EWP) & Climbing',
      'Sectional Lowering with Rigging Systems',
      'Storm Damage Emergency Tree Clearances',
      'Council Permit Advice & Reports'
    ]
  },
  {
    name: 'Tree Pruning & Deadwooding',
    category: 'Canopy Health Management',
    description: 'Weight reduction, canopy thinning, deadwood removal, and hedge trimming to encourage healthy tree growth and protect assets.',
    icon: ShieldCheck,
    tag: 'Australian Standard AS 4373',
    specs: [
      'Crown Thinning & Formative Pruning',
      'Powerline Clearance Trimming',
      'Weight Relief on Overextended Limbs',
      'Orchard & Heritage Tree Care'
    ]
  },
  {
    name: 'Stump Grinding & Wood Chipping',
    category: 'Site Clearing & Mulch',
    description: 'Complete stump eradication below ground level ready for replanting or turfing, plus on-site wood chipping and organic garden mulch supply.',
    icon: Shovel,
    tag: 'Complete Site Clean',
    specs: [
      'Deep Stump Grinding (300mm below grade)',
      'Tight-Access Narrow Track Stump Grinders',
      'Fresh Organic Woodchip Mulch Sales',
      'Acreage Slashing & Fire Hazard Mitigation'
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-surface-950 text-surface-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950 px-3 py-1 rounded-full border border-amber-800 mb-3 inline-block">
            Our Timber &amp; Tree Operations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Firewood Supplies &amp; Professional Tree Surgery
          </h2>
          <p className="mt-4 text-surface-300 text-base">
            Serving Wangaratta, Glenrowan, Oxley, Milawa, Moyhu, and Beechworth with premium firewood and arborist machinery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="bg-surface-900 border border-surface-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/50 transition-all shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-800 flex items-center justify-center text-amber-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-surface-800 px-2.5 py-1 rounded-md">
                      {svc.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{svc.name}</h3>
                  <div className="text-xs text-amber-400 font-semibold mb-3">{svc.category}</div>
                  <p className="text-sm text-surface-300 leading-relaxed mb-6">{svc.description}</p>

                  <div className="space-y-2 mb-6">
                    {svc.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-surface-300">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-800 flex justify-between items-center">
                  <a
                    href="#calculator"
                    className="text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300"
                  >
                    Calculate Price &rarr;
                  </a>
                  <a
                    href="tel:0357257493"
                    className="text-xs font-bold text-surface-400 hover:text-white"
                  >
                    Call (03) 5725 7493
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
