"use client";
import Image from "next/image";

export default function ProviderHelp() {
  return (
    <div className="bg-[#E9E0D3] text-white font-sans">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Top Box */}
        <div className="bg-[#333333] p-10 md:flex justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Hello existing providers.<br />
              How may we help you?
            </h2>
            <div className="bg-[#666666] p-6 mt-6 relative">
              <div className="absolute -left-4 top-0 h-full w-2 bg-[#8A1538]" />
              <h3 className="text-white font-semibold mb-2">
                WELCOME EXISTING PROVIDERS
              </h3>
              <p className="text-[#D3D3D3] text-sm">
                ProCare’s success could not be achieved without our provider partners.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div className="mt-6">
                <p className="uppercase tracking-widest text-sm mb-2">Invoice Forms:</p>
                <div className="flex gap-4">
                  <button className="border px-4 py-2 text-white tracking-wide text-sm hover:bg-white hover:text-black transition">
                    TRANSPORTATION
                  </button>
                  <button className="border px-4 py-2 text-white tracking-wide text-sm hover:bg-white hover:text-black transition">
                    INTERPRETER
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 mt-10 md:mt-0">
            <Image
              src="/meeting.jpg"
              alt="meeting"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Middle CTA */}
        <div className="bg-black text-white px-6 py-8 md:flex items-center justify-between">
          <p className="text-sm text-gray-400">
            ProCare’s is always recruiting high-quality transportation and language providers to become part of our network.
          </p>
          <button className="bg-[#8A1538] px-6 py-3 mt-4 md:mt-0 text-white font-semibold text-sm tracking-wide hover:bg-[#a91c45] transition">
            JOIN TODAY
          </button>
        </div>

        {/* Bottom Section */}
        <div className="bg-black text-white px-6 py-12">
          <h3 className="text-[#B91C1C] text-2xl font-bold mb-6">Membership benefits:</h3>
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-bold mb-2">CREDENTIALED NETWORK</h4>
              <ul className="text-gray-400 space-y-1">
                <li>Driver and Interpreter Contractual Standards</li>
                <li>Ranking System</li>
                <li>Provider Scorecard</li>
                <li>No Sub-Networks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">SYSTEM MANAGED DOCUMENTATION</h4>
              <ul className="text-gray-400 space-y-1">
                <li>Automated Documentation Follow Ups</li>
                <li>Provider Network Controls</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">HIGH PROVIDER RETENTION</h4>
              <ul className="text-gray-400 space-y-1">
                <li>Timely Payments</li>
                <li>Provider Portal</li>
                <li>On-going Provider Communication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
