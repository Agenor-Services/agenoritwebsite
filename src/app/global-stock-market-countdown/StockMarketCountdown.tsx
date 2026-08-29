"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  Clock, 
  Globe, 
  TrendingUp, 
  Search, 
  Calendar, 
  Activity, 
  ArrowUpRight, 
  Layers, 
  CheckCircle2, 
  AlertCircle,
  Coffee,
  Sun,
  Moon
} from "lucide-react";
import MagicButton from "@/components/MagicButton";

interface Session {
  openHour: number;
  openMinute: number;
  closeHour: number;
  closeMinute: number;
}

interface Market {
  id: string;
  name: string;
  shortName: string;
  exchange: string;
  city: string;
  country: string;
  flag: string;
  region: "APAC" | "Americas" | "Europe";
  timezone: string;
  currency: string;
  benchmark: string;
  sessions: Session[]; // Single or morning/afternoon split
  hasLunchBreak?: boolean;
}

const MARKETS: Market[] = [
  {
    id: "asx",
    name: "Australian Securities Exchange",
    shortName: "ASX",
    exchange: "ASX",
    city: "Sydney",
    country: "Australia",
    flag: "🇦🇺",
    region: "APAC",
    timezone: "Australia/Sydney",
    currency: "AUD ($)",
    benchmark: "S&P/ASX 200",
    sessions: [{ openHour: 10, openMinute: 0, closeHour: 16, closeMinute: 0 }],
  },
  {
    id: "nyse",
    name: "New York Stock Exchange & NASDAQ",
    shortName: "NYSE / NASDAQ",
    exchange: "NYSE / NASDAQ",
    city: "New York",
    country: "United States",
    flag: "🇺🇸",
    region: "Americas",
    timezone: "America/New_York",
    currency: "USD ($)",
    benchmark: "S&P 500 / NASDAQ 100",
    sessions: [{ openHour: 9, openMinute: 30, closeHour: 16, closeMinute: 0 }],
  },
  {
    id: "lse",
    name: "London Stock Exchange",
    shortName: "LSE",
    exchange: "LSE",
    city: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    timezone: "Europe/London",
    currency: "GBP (£)",
    benchmark: "FTSE 100",
    sessions: [{ openHour: 8, openMinute: 0, closeHour: 16, closeMinute: 30 }],
  },
  {
    id: "tse",
    name: "Tokyo Stock Exchange",
    shortName: "TSE",
    exchange: "TSE / JPX",
    city: "Tokyo",
    country: "Japan",
    flag: "🇯🇵",
    region: "APAC",
    timezone: "Asia/Tokyo",
    currency: "JPY (¥)",
    benchmark: "Nikkei 225",
    hasLunchBreak: true,
    sessions: [
      { openHour: 9, openMinute: 0, closeHour: 11, closeMinute: 30 },
      { openHour: 12, openMinute: 30, closeHour: 15, closeMinute: 30 },
    ],
  },
  {
    id: "hkex",
    name: "Hong Kong Stock Exchange",
    shortName: "HKEX",
    exchange: "HKEX",
    city: "Hong Kong",
    country: "Hong Kong",
    flag: "🇭🇰",
    region: "APAC",
    timezone: "Asia/Hong_Kong",
    currency: "HKD (HK$)",
    benchmark: "Hang Seng Index",
    hasLunchBreak: true,
    sessions: [
      { openHour: 9, openMinute: 30, closeHour: 12, closeMinute: 0 },
      { openHour: 13, openMinute: 0, closeHour: 16, closeMinute: 0 },
    ],
  },
  {
    id: "xetra",
    name: "Deutsche Börse / Frankfurt Stock Exchange",
    shortName: "FWB / XETRA",
    exchange: "XETRA",
    city: "Frankfurt",
    country: "Germany",
    flag: "🇩🇪",
    region: "Europe",
    timezone: "Europe/Berlin",
    currency: "EUR (€)",
    benchmark: "DAX 40",
    sessions: [{ openHour: 9, openMinute: 0, closeHour: 17, closeMinute: 30 }],
  },
  {
    id: "euronext",
    name: "Euronext (Paris / Amsterdam)",
    shortName: "Euronext",
    exchange: "Euronext",
    city: "Paris / Amsterdam",
    country: "European Union",
    flag: "🇪🇺",
    region: "Europe",
    timezone: "Europe/Paris",
    currency: "EUR (€)",
    benchmark: "CAC 40 / AEX",
    sessions: [{ openHour: 9, openMinute: 0, closeHour: 17, closeMinute: 30 }],
  },
  {
    id: "nse",
    name: "National Stock Exchange of India",
    shortName: "NSE / BSE",
    exchange: "NSE / BSE",
    city: "Mumbai",
    country: "India",
    flag: "🇮🇳",
    region: "APAC",
    timezone: "Asia/Kolkata",
    currency: "INR (₹)",
    benchmark: "Nifty 50 / Sensex",
    sessions: [{ openHour: 9, openMinute: 15, closeHour: 15, closeMinute: 30 }],
  },
  {
    id: "sgx",
    name: "Singapore Exchange",
    shortName: "SGX",
    exchange: "SGX",
    city: "Singapore",
    country: "Singapore",
    flag: "🇸🇬",
    region: "APAC",
    timezone: "Asia/Singapore",
    currency: "SGD (S$)",
    benchmark: "Straits Times (STI)",
    hasLunchBreak: true,
    sessions: [
      { openHour: 9, openMinute: 0, closeHour: 12, closeMinute: 0 },
      { openHour: 13, openMinute: 0, closeHour: 17, closeMinute: 0 },
    ],
  },
  {
    id: "tsx",
    name: "Toronto Stock Exchange",
    shortName: "TSX",
    exchange: "TSX",
    city: "Toronto",
    country: "Canada",
    flag: "🇨🇦",
    region: "Americas",
    timezone: "America/Toronto",
    currency: "CAD (C$)",
    benchmark: "S&P/TSX Composite",
    sessions: [{ openHour: 9, openMinute: 30, closeHour: 16, closeMinute: 0 }],
  },
  {
    id: "six",
    name: "SIX Swiss Exchange",
    shortName: "SIX",
    exchange: "SIX",
    city: "Zurich",
    country: "Switzerland",
    flag: "🇨🇭",
    region: "Europe",
    timezone: "Europe/Zurich",
    currency: "CHF (Fr.)",
    benchmark: "SMI",
    sessions: [{ openHour: 9, openMinute: 0, closeHour: 17, closeMinute: 30 }],
  },
];

interface MarketStatus {
  isOpen: boolean;
  isLunch: boolean;
  isWeekend: boolean;
  statusText: "OPEN" | "CLOSED" | "LUNCH BREAK" | "WEEKEND";
  statusColor: string;
  localTimeFormatted: string;
  localDateFormatted: string;
  countdownText: string;
  countdownSubtext: string;
  progressPercentage: number;
}

function calculateMarketStatus(market: Market, now: Date): MarketStatus {
  // Convert current time to the market's timezone
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: market.timezone,
    hourCycle: "h23",
    weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).formatToParts(now);

  const getPart = (type: string) => parts.find((p) => p.type === type)?.value || "";
  const weekday = getPart("weekday"); // Mon, Tue, Wed, Thu, Fri, Sat, Sun
  const hour = parseInt(getPart("hour"), 10);
  const minute = parseInt(getPart("minute"), 10);
  const second = parseInt(getPart("second"), 10);

  const localTimeFormatted = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
  const localDateFormatted = new Intl.DateTimeFormat("en-US", {
    timeZone: market.timezone,
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(now);

  const isWeekend = weekday === "Sat" || weekday === "Sun";
  const currentTotalMinutes = hour * 60 + minute + second / 60;

  // Format seconds to HH:MM:SS
  const formatSeconds = (totalSec: number) => {
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = Math.floor(totalSec % 60);
    return `${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`;
  };

  if (isWeekend) {
    // Days until Monday
    let daysUntilMonday = weekday === "Sat" ? 2 : 1;
    const firstSession = market.sessions[0];
    const targetMondayMinutes = firstSession.openHour * 60 + firstSession.openMinute;
    const remainingMinutesToday = 24 * 60 - currentTotalMinutes;
    const totalMinutesUntilOpen = remainingMinutesToday + (daysUntilMonday - 1) * 24 * 60 + targetMondayMinutes;
    const totalSecondsUntilOpen = totalMinutesUntilOpen * 60 - second;

    return {
      isOpen: false,
      isLunch: false,
      isWeekend: true,
      statusText: "WEEKEND",
      statusColor: "text-slate-400 border-slate-700 bg-slate-800/40",
      localTimeFormatted,
      localDateFormatted,
      countdownText: formatSeconds(totalSecondsUntilOpen),
      countdownSubtext: "Opens Monday",
      progressPercentage: 0,
    };
  }

  // Check trading sessions
  let inSession = false;
  let inLunch = false;
  let activeSession: Session | null = null;
  let nextSession: Session | null = null;

  for (let i = 0; i < market.sessions.length; i++) {
    const s = market.sessions[i];
    const openMin = s.openHour * 60 + s.openMinute;
    const closeMin = s.closeHour * 60 + s.closeMinute;

    if (currentTotalMinutes >= openMin && currentTotalMinutes < closeMin) {
      inSession = true;
      activeSession = s;
      break;
    }

    if (currentTotalMinutes < openMin && !nextSession) {
      nextSession = s;
    }
  }

  // Check if it's lunch break (between sessions for split session markets)
  if (!inSession && market.sessions.length > 1) {
    const s1 = market.sessions[0];
    const s2 = market.sessions[1];
    const s1Close = s1.closeHour * 60 + s1.closeMinute;
    const s2Open = s2.openHour * 60 + s2.openMinute;

    if (currentTotalMinutes >= s1Close && currentTotalMinutes < s2Open) {
      inLunch = true;
      nextSession = s2;
    }
  }

  if (inSession && activeSession) {
    const closeMin = activeSession.closeHour * 60 + activeSession.closeMinute;
    const remainingSeconds = (closeMin - currentTotalMinutes) * 60;
    
    // Overall market day progress
    const firstSession = market.sessions[0];
    const lastSession = market.sessions[market.sessions.length - 1];
    const dayStartMin = firstSession.openHour * 60 + firstSession.openMinute;
    const dayEndMin = lastSession.closeHour * 60 + lastSession.closeMinute;
    const progress = Math.min(100, Math.max(0, ((currentTotalMinutes - dayStartMin) / (dayEndMin - dayStartMin)) * 100));

    return {
      isOpen: true,
      isLunch: false,
      isWeekend: false,
      statusText: "OPEN",
      statusColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
      localTimeFormatted,
      localDateFormatted,
      countdownText: formatSeconds(remainingSeconds),
      countdownSubtext: market.sessions.length > 1 && activeSession === market.sessions[0] ? "Until Lunch Break" : "Until Market Close",
      progressPercentage: progress,
    };
  }

  if (inLunch && nextSession) {
    const nextOpenMin = nextSession.openHour * 60 + nextSession.openMinute;
    const remainingSeconds = (nextOpenMin - currentTotalMinutes) * 60;

    return {
      isOpen: false,
      isLunch: true,
      isWeekend: false,
      statusText: "LUNCH BREAK",
      statusColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      localTimeFormatted,
      localDateFormatted,
      countdownText: formatSeconds(remainingSeconds),
      countdownSubtext: "Afternoon Session Opens",
      progressPercentage: 50,
    };
  }

  // If closed before open or after close
  const firstSession = market.sessions[0];
  const lastSession = market.sessions[market.sessions.length - 1];
  const firstOpenMin = firstSession.openHour * 60 + firstSession.openMinute;
  const lastCloseMin = lastSession.closeHour * 60 + lastSession.closeMinute;

  if (currentTotalMinutes < firstOpenMin) {
    // Opens today
    const remainingSeconds = (firstOpenMin - currentTotalMinutes) * 60;
    return {
      isOpen: false,
      isLunch: false,
      isWeekend: false,
      statusText: "CLOSED",
      statusColor: "text-slate-400 border-white/10 bg-white/5",
      localTimeFormatted,
      localDateFormatted,
      countdownText: formatSeconds(remainingSeconds),
      countdownSubtext: "Opens Today",
      progressPercentage: 0,
    };
  } else {
    // Closed after hours. If Friday, opens Monday; else opens tomorrow
    const isFriday = weekday === "Fri";
    const daysUntilNext = isFriday ? 3 : 1;
    const remainingMinutesToday = 24 * 60 - currentTotalMinutes;
    const totalMinutesUntilOpen = remainingMinutesToday + (daysUntilNext - 1) * 24 * 60 + firstOpenMin;
    const totalSecondsUntilOpen = totalMinutesUntilOpen * 60;

    return {
      isOpen: false,
      isLunch: false,
      isWeekend: false,
      statusText: "CLOSED",
      statusColor: "text-slate-400 border-white/10 bg-white/5",
      localTimeFormatted,
      localDateFormatted,
      countdownText: formatSeconds(totalSecondsUntilOpen),
      countdownSubtext: isFriday ? "Opens Monday" : "Opens Tomorrow",
      progressPercentage: 100,
    };
  }
}

export default function StockMarketCountdown() {
  const [now, setNow] = useState<Date>(new Date());
  const [selectedRegion, setSelectedRegion] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [timeMode, setTimeMode] = useState<"LOCAL" | "MARKET" | "UTC">("MARKET");

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const marketStatuses = useMemo(() => {
    return MARKETS.map((market) => ({
      market,
      status: calculateMarketStatus(market, now),
    }));
  }, [now]);

  const openMarketsCount = marketStatuses.filter((m) => m.status.isOpen).length;

  const filteredMarkets = marketStatuses.filter(({ market, status }) => {
    const matchesRegion = 
      selectedRegion === "ALL" || 
      (selectedRegion === "OPEN" && status.isOpen) ||
      market.region === selectedRegion;

    const matchesSearch = 
      market.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.benchmark.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesRegion && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Real-Time Global Market Clocks
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
            Global Stock Market <span className="gradient-text">Countdown</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Live opening and closing countdowns, trading hours, and session statuses across major stock exchanges worldwide.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-8">
            <div className="p-4 rounded-xl glass-panel border border-white/10 text-center">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-1">Live Status</span>
              <span className="text-xl font-bold text-emerald-400 flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                {openMarketsCount} Markets Open
              </span>
            </div>

            <div className="p-4 rounded-xl glass-panel border border-white/10 text-center">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-1">UTC Time</span>
              <span className="text-xl font-mono font-bold text-white">
                {now.toUTCString().slice(17, 25)}
              </span>
            </div>

            <div className="p-4 rounded-xl glass-panel border border-white/10 text-center">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-1">Your Device Time</span>
              <span className="text-xl font-mono font-bold text-blue-400">
                {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
              </span>
            </div>

            <div className="p-4 rounded-xl glass-panel border border-white/10 text-center">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-1">Global Coverage</span>
              <span className="text-xl font-bold text-violet-400">11 Exchanges</span>
            </div>
          </div>
        </div>

        {/* Filter & Controls Bar */}
        <div className="glass-panel p-4 rounded-2xl border border-white/10 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Region Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {[
              { id: "ALL", label: "All Markets" },
              { id: "OPEN", label: `Open Now (${openMarketsCount})` },
              { id: "APAC", label: "Asia-Pacific" },
              { id: "Americas", label: "Americas" },
              { id: "Europe", label: "Europe" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedRegion(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedRegion === tab.id
                    ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search exchange, city, ticker..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
            />
          </div>
        </div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredMarkets.map(({ market, status }) => (
            <div
              key={market.id}
              className={`glass-panel p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                status.isOpen 
                  ? "border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.1)] bg-gradient-to-b from-[#111827] to-[#0b0f19]" 
                  : "border-white/10 hover:border-white/20 bg-[#0b0f19]"
              }`}
            >
              {/* Header */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" role="img" aria-label={market.country}>
                      {market.flag}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-white text-base leading-tight">
                          {market.shortName}
                        </h3>
                        <span className="text-[11px] text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5 font-mono">
                          {market.city}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                        {market.name}
                      </p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-bold tracking-wide shrink-0 ${status.statusColor}`}
                  >
                    {status.isOpen && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>}
                    {status.isLunch && <Coffee size={12} className="text-amber-400" />}
                    {status.statusText}
                  </span>
                </div>

                {/* Live Clock & Local Time */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock size={16} className="text-blue-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase font-semibold block">Market Local Time</span>
                      <span className="font-mono text-base font-bold text-white tracking-wider">
                        {status.localTimeFormatted}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 uppercase font-semibold block">Date</span>
                    <span className="text-xs text-gray-300 font-medium">
                      {status.localDateFormatted}
                    </span>
                  </div>
                </div>

                {/* Countdown Highlight */}
                <div className="mb-4">
                  <span className="text-xs text-gray-400 block mb-1">
                    {status.countdownSubtext}
                  </span>
                  <div className="text-2xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">
                    {status.countdownText}
                  </div>
                </div>

                {/* Trading Progress Bar */}
                {status.isOpen && (
                  <div className="mb-4">
                    <div className="flex justify-between text-[11px] text-gray-400 mb-1 font-mono">
                      <span>Session Elapsed</span>
                      <span>{Math.round(status.progressPercentage)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-1000"
                        style={{ width: `${status.progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Meta */}
              <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] text-gray-400">
                <div>
                  <span className="text-gray-500 block text-[10px] uppercase">Benchmark</span>
                  <span className="text-gray-300 font-medium">{market.benchmark}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 block text-[10px] uppercase">Regular Hours</span>
                  <span className="text-gray-300 font-mono">
                    {market.sessions.map(s => `${String(s.openHour).padStart(2, '0')}:${String(s.openMinute).padStart(2, '0')}-${String(s.closeHour).padStart(2, '0')}:${String(s.closeMinute).padStart(2, '0')}`).join(" & ")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Fintech & Cloud CTA */}
        <section className="glass-panel p-8 sm:p-12 rounded-2xl border border-blue-500/20 text-center relative overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.1)]">
          <div className="badge mx-auto mb-4">
            <span className="pulse-dot"></span>
            Fintech & High-Throughput Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Building Real-Time Financial & AI Infrastructure?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            From low-latency cloud pipelines on Azure to intelligent financial automation agents, AgenorIT engineers the foundations that scale without missing a beat.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagicButton href="/contact" showArrow>
              Discuss Your Fintech Architecture
            </MagicButton>
            <MagicButton href="/services/cloud/azure-setup" contentClassName="!bg-transparent">
              Explore Azure Cloud Services
            </MagicButton>
          </div>
        </section>
      </div>
    </div>
  );
}
