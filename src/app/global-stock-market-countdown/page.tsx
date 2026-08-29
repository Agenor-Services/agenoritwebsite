import { Metadata } from "next";
import StockMarketCountdown from "./StockMarketCountdown";

export const metadata: Metadata = {
  title: "Global Stock Market Countdown & Live Clocks | AgenorIT",
  description: "Live real-time opening and closing countdowns, active trading sessions, and world market clocks for NYSE, NASDAQ, LSE, ASX, TSE, HKEX, and European exchanges.",
  keywords: [
    "global stock market countdown",
    "stock market opening times",
    "stock market hours countdown",
    "world stock exchange clocks",
    "NYSE open countdown",
    "ASX trading hours",
    "LSE trading hours",
    "live market status",
  ],
  openGraph: {
    title: "Global Stock Market Countdown & Live Clocks | AgenorIT",
    description: "Live real-time opening and closing countdowns, trading sessions, and world clocks for global stock exchanges.",
    url: "https://www.agenorit.com.au/global-stock-market-countdown",
    type: "website",
  },
};

export default function GlobalStockMarketCountdownPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Global Stock Market Countdown & Live Clocks",
    "url": "https://www.agenorit.com.au/global-stock-market-countdown",
    "description": "Live real-time opening and closing countdowns, active trading sessions, and world market clocks for global stock exchanges.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "provider": {
      "@type": "Organization",
      "name": "AgenorIT",
      "url": "https://www.agenorit.com.au",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StockMarketCountdown />
    </>
  );
}
