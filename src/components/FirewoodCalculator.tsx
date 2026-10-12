'use client';

import React, { useState } from 'react';
import { Flame, Truck, TreePine, CheckCircle2, Phone, Send, Calculator } from 'lucide-react';

interface Suburb {
  name: string;
  fee: number;
}

const SUBURBS: Suburb[] = [
  { name: 'Wangaratta Town (Local)', fee: 20 },
  { name: 'Yard Pickup (Shanley St Depot)', fee: 0 },
  { name: 'Glenrowan', fee: 35 },
  { name: 'Oxley', fee: 35 },
  { name: 'Milawa', fee: 40 },
  { name: 'Moyhu', fee: 50 },
  { name: 'Beechworth', fee: 55 },
  { name: 'Chiltern', fee: 50 },
  { name: 'Eldorado', fee: 45 },
];

const WOOD_TYPES = [
  { id: 'redgum', name: 'Premium Seasoned Redgum (Slow Burn)', pricePerM3: 190, desc: 'Heavy, dense, long-lasting coals with maximum heat output.' },
  { id: 'mixed', name: 'Dry Mixed Hardwood (Box & Ironbark)', pricePerM3: 160, desc: 'Hot, fast heat, easy to light and split.' },
];

const QUANTITIES = [
  { label: '1 m³ (Trailer Load)', m3: 1 },
  { label: '2 m³ (Double Trailer)', m3: 2 },
  { label: '3 m³ (Light Tipper)', m3: 3 },
  { label: '5 m³ (Full Tipper Load)', m3: 5 },
  { label: '10 m³ (Tandem Semi Load)', m3: 10 },
];

export function SlabEstimator() {
  return <FirewoodCalculator />;
}

export function FirewoodCalculator() {
  const [selectedWood, setSelectedWood] = useState(WOOD_TYPES[0]);
  const [selectedQty, setSelectedQty] = useState(QUANTITIES[1]); // 2m3
  const [selectedSuburb, setSelectedSuburb] = useState(SUBURBS[0]);
  const [kindlingBags, setKindlingBags] = useState(1);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const woodCost = selectedWood.pricePerM3 * selectedQty.m3;
  const kindlingCost = kindlingBags * 15;
  const deliveryCost = selectedSuburb.fee;
  const totalCost = woodCost + kindlingCost + deliveryCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="calculator" className="py-20 bg-surface-900 border-y border-surface-800 text-surface-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950 px-3 py-1 rounded-full border border-amber-800 mb-4 inline-block">
            Arboressence Pricing Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Firewood Delivery Suburb Calculator
          </h2>
          <p className="mt-4 text-surface-300 text-base">
            Select your timber type, load size in cubic metres, and delivery suburb across North East Victoria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Calculator Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Wood Type */}
            <div className="bg-surface-950 rounded-2xl p-6 border border-surface-800">
              <h3 className="font-bold text-white text-base mb-3 flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                1. Select Timber Variety
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WOOD_TYPES.map((w) => (
                  <button
                    key={w.id}
                    type="button"
                    onClick={() => setSelectedWood(w)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedWood.id === w.id
                        ? 'border-amber-500 bg-amber-950/40 ring-2 ring-amber-500/30'
                        : 'border-surface-800 bg-surface-900/60 hover:border-surface-700'
                    }`}
                  >
                    <div className="font-bold text-sm text-white">{w.name}</div>
                    <div className="text-amber-400 font-black text-sm mt-1">${w.pricePerM3} / m³</div>
                    <div className="text-[11px] text-surface-400 mt-1">{w.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Quantity */}
            <div className="bg-surface-950 rounded-2xl p-6 border border-surface-800">
              <h3 className="font-bold text-white text-base mb-3 flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-500" />
                2. Select Load Volume (Cubic Metres)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {QUANTITIES.map((q) => (
                  <button
                    key={q.m3}
                    type="button"
                    onClick={() => setSelectedQty(q)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedQty.m3 === q.m3
                        ? 'border-amber-500 bg-amber-950/40 font-bold text-white'
                        : 'border-surface-800 bg-surface-900/60 text-surface-300 hover:border-surface-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{q.label}</div>
                    <div className="text-amber-400 font-black text-sm mt-0.5">${(selectedWood.pricePerM3 * q.m3)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Suburb */}
            <div className="bg-surface-950 rounded-2xl p-6 border border-surface-800">
              <h3 className="font-bold text-white text-base mb-3">
                3. Choose Delivery Suburb / Location
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SUBURBS.map((s) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => setSelectedSuburb(s)}
                    className={`p-2.5 rounded-lg border text-left text-xs transition-all flex justify-between items-center ${
                      selectedSuburb.name === s.name
                        ? 'border-amber-500 bg-amber-950/40 text-white font-bold'
                        : 'border-surface-800 bg-surface-900/60 text-surface-300 hover:border-surface-700'
                    }`}
                  >
                    <span>{s.name}</span>
                    <span className="text-amber-400 font-extrabold">{s.fee === 0 ? 'Free' : `+$${s.fee}`}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Calculator Order & Booking Summary (5 cols) */}
          <div className="lg:col-span-5 bg-surface-950 rounded-2xl p-6 sm:p-8 border border-surface-800 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-surface-800">
              Firewood Order Summary
            </h3>

            <div className="space-y-3 text-xs text-surface-300 mb-6">
              <div className="flex justify-between pb-2 border-b border-surface-850">
                <span>{selectedWood.name} ({selectedQty.m3} m³)</span>
                <span className="font-bold text-white">${woodCost}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-surface-850">
                <span>Delivery: {selectedSuburb.name}</span>
                <span className="font-bold text-amber-400">{deliveryCost === 0 ? 'Yard Pickup' : `$${deliveryCost}`}</span>
              </div>
              <div className="pt-2 flex justify-between items-baseline">
                <span className="font-bold text-sm text-surface-200">Total Price:</span>
                <span className="text-3xl font-black text-amber-400">${totalCost}</span>
              </div>
            </div>

            {submitted ? (
              <div className="bg-amber-950/80 border border-amber-700 p-6 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-amber-400 mx-auto" />
                <h4 className="font-bold text-white">Firewood Order Logged!</h4>
                <p className="text-xs text-surface-300">
                  Our Shanley St depot team will call you at {phone} to confirm drop-off time and dumping location instructions.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-2 bg-amber-600 text-stone-950 font-black rounded-lg text-xs uppercase"
                >
                  Adjust Order
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block text-surface-300 font-bold mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Colin Briggs"
                    className="w-full p-2.5 rounded-lg bg-surface-900 border border-surface-750 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-surface-300 font-bold mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0412 345 678"
                      className="w-full p-2.5 rounded-lg bg-surface-900 border border-surface-750 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-surface-300 font-bold mb-1">Delivery Address *</label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. 14 Grey St, Wangaratta"
                      className="w-full p-2.5 rounded-lg bg-surface-900 border border-surface-750 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-surface-300 font-bold mb-1">Dumping Instructions / Notes</label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Dump on left side of driveway next to the shed..."
                    className="w-full p-2.5 rounded-lg bg-surface-900 border border-surface-750 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-black rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-950 flex items-center justify-center gap-2"
                >
                  <Flame className="w-4 h-4 fill-stone-950" />
                  <span>Order Firewood / Book Delivery</span>
                </button>

                <div className="text-center pt-2">
                  <a
                    href="tel:0357257493"
                    className="text-xs text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Prefer to speak? Call Depot: (03) 5725 7493
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
