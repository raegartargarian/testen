import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RenewableEnergyPage = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<"solar" | "real-estate">(
    "solar"
  );

  const solarData = {
    efficiency: 94.2,
    powerGenerated: 2847,
    co2Saved: 1423,
    costSavings: 8760,
    uptime: 99.7,
  };

  const realEstateData = {
    properties: 12,
    tokenValue: 2.4,
    occupancyRate: 87,
    monthlyYield: 4.2,
  };

  const SolarView = () => (
    <div className="space-y-8">
      {/* Central Solar Panel Animation */}
      <div className="flex justify-center">
        <div className="relative">
          {/* Solar Panel */}
          <div className="w-80 h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl relative overflow-hidden shadow-2xl border-4 border-blue-400/30">
            {/* Solar cells grid */}
            <div className="grid grid-cols-6 gap-1 p-4 h-full">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-blue-900/50 rounded-sm animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>

            {/* Sunlight rays */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
              <div className="text-6xl animate-bounce">☀️</div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute top-12 left-1/2 w-1 h-20 bg-yellow-400/60 animate-pulse"
                  style={{
                    transform: `rotate(${-30 + i * 15}deg) translateX(-50%)`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Data Overlay */}
          <div className="absolute -right-40 top-0 space-y-3">
            {Object.entries(solarData).map(([key, value]) => (
              <div
                key={key}
                className="bg-gray-900/80 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-3 min-w-32"
              >
                <div className="text-yellow-400 text-lg font-bold">
                  {typeof value === "number" ? value.toLocaleString() : value}
                  {key === "efficiency" || key === "uptime" ? "%" : ""}
                  {key === "powerGenerated" ? "kWh" : ""}
                  {key === "co2Saved" ? "kg" : ""}
                  {key === "costSavings" ? "$" : ""}
                </div>
                <div className="text-gray-400 text-xs capitalize">
                  {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solar Technology Overview */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 border border-yellow-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-bold text-white mb-2">
              Smart Grid Integration
            </h3>
            <p className="text-gray-400 text-sm">
              Advanced energy storage and distribution systems
            </p>
          </div>

          <div className="bg-gray-900/50 border border-yellow-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🔋</div>
            <h3 className="text-lg font-bold text-white mb-2">
              Energy Storage
            </h3>
            <p className="text-gray-400 text-sm">
              Next-generation battery technology for optimal efficiency
            </p>
          </div>

          <div className="bg-gray-900/50 border border-yellow-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-bold text-white mb-2">
              AI Optimization
            </h3>
            <p className="text-gray-400 text-sm">
              Machine learning for predictive energy management
            </p>
          </div>
        </div>
      </div>

      {/* Investment Metrics */}
      <div className="bg-gray-900/30 border border-yellow-500/20 rounded-xl p-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-4 text-center">
          Investment Opportunity
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">25%</div>
            <div className="text-sm text-gray-400">Expected ROI</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">$2.1M</div>
            <div className="text-sm text-gray-400">Market Value</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">15</div>
            <div className="text-sm text-gray-400">Year Lifespan</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">A+</div>
            <div className="text-sm text-gray-400">ESG Rating</div>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="text-center">
        <button
          onClick={() => setCurrentView("real-estate")}
          className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Next: Real Estate Integration →
        </button>
      </div>
    </div>
  );

  const RealEstateView = () => (
    <div className="space-y-8">
      {/* Smart Building Visualization */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-64 h-80 bg-gradient-to-t from-gray-800 to-gray-600 rounded-t-xl relative shadow-2xl">
            {/* Building floors */}
            {Array.from({ length: 8 }).map((_, floor) => (
              <div
                key={floor}
                className="absolute w-full h-8 flex justify-around items-center"
                style={{ bottom: `${floor * 35 + 10}px` }}
              >
                {Array.from({ length: 4 }).map((_, window) => (
                  <div
                    key={window}
                    className={`w-6 h-6 rounded ${
                      Math.random() > 0.3
                        ? "bg-yellow-400 animate-pulse"
                        : "bg-gray-700"
                    }`}
                  ></div>
                ))}
              </div>
            ))}

            {/* Solar panels on roof */}
            <div className="absolute -top-4 left-2 right-2 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-yellow-400 text-lg">☀️</span>
            </div>
          </div>

          {/* Property Data */}
          <div className="absolute -right-40 top-0 space-y-3">
            {Object.entries(realEstateData).map(([key, value]) => (
              <div
                key={key}
                className="bg-gray-900/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 min-w-32"
              >
                <div className="text-green-400 text-lg font-bold">
                  {typeof value === "number" ? value.toLocaleString() : value}
                  {key === "occupancyRate" ? "%" : ""}
                  {key === "tokenValue" ? "M" : ""}
                  {key === "monthlyYield" ? "%" : ""}
                </div>
                <div className="text-gray-400 text-xs capitalize">
                  {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real Estate Features */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 border border-green-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🏠</div>
            <h3 className="text-lg font-bold text-white mb-2">
              Tokenized Ownership
            </h3>
            <p className="text-gray-400 text-sm">
              Fractional real estate investment through blockchain
            </p>
          </div>

          <div className="bg-gray-900/50 border border-green-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🔌</div>
            <h3 className="text-lg font-bold text-white mb-2">
              Energy Integrated
            </h3>
            <p className="text-gray-400 text-sm">
              Solar-powered smart buildings with energy trading
            </p>
          </div>

          <div className="bg-gray-900/50 border border-green-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="text-lg font-bold text-white mb-2">
              Yield Generation
            </h3>
            <p className="text-gray-400 text-sm">
              Dual income from rent and energy production
            </p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center">
        <button
          onClick={() => setCurrentView("solar")}
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-xl hover:from-green-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          ← Back to Solar Technology
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-orange-900/20 to-green-900/20"></div>

      {/* Navigation */}
      <nav className="relative z-20 p-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <span>←</span>
          <span>Back to Portal</span>
        </button>
      </nav>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="text-center py-8 px-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            {currentView === "solar" ? "Renewable Energy" : "Smart Real Estate"}
          </h1>
          <p className="text-xl text-gray-300">
            {currentView === "solar"
              ? "Solar Innovation Vertical"
              : "Energy-Integrated Properties"}
          </p>
          <div className="mt-4 inline-block px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-400 text-sm">
            Dynamic NFT •{" "}
            {currentView === "solar"
              ? "Solar Use Case"
              : "Real Estate Integration"}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-8 pb-12">
          <div className="max-w-6xl mx-auto">
            {currentView === "solar" ? <SolarView /> : <RealEstateView />}
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-6 px-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Renewable Energy Dynamic NFT •{" "}
            {currentView === "solar" ? "Solar" : "Real Estate"} Vertical • NextG
            Fund
          </p>
        </footer>
      </div>
    </div>
  );
};

export default RenewableEnergyPage;
