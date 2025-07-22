import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OpenPackPage = () => {
  const navigate = useNavigate();
  const [activeSystem, setActiveSystem] = useState<
    "automation" | "robotics" | "logistics"
  >("automation");
  const [productionCount, setProductionCount] = useState(1247);

  // Simulate real-time production updates
  useEffect(() => {
    const interval = setInterval(() => {
      setProductionCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const systemData = {
    automation: {
      efficiency: 97.8,
      uptime: 99.2,
      throughput: 2340,
      defectRate: 0.12,
    },
    robotics: {
      activeRobots: 24,
      tasksCompleted: 15680,
      precision: 99.97,
      energyEfficiency: 94.5,
    },
    logistics: {
      ordersProcessed: 892,
      deliveryTime: 2.3,
      inventoryAccuracy: 99.8,
      costReduction: 23.4,
    },
  };

  const SystemVisualization = () => {
    const data = systemData[activeSystem];

    return (
      <div className="space-y-8">
        {/* Factory Visualization */}
        <div className="flex justify-center">
          <div className="relative w-96 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl border border-cyan-500/30">
            {/* Factory Floor */}
            <div className="absolute inset-0 p-4">
              {/* Conveyor Belt */}
              <div className="absolute bottom-8 left-0 right-0 h-8 bg-gray-700 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse"></div>
                {/* Moving products */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-6 h-6 bg-blue-500 rounded transform animate-pulse"
                    style={{
                      left: `${i * 15 + 5}%`,
                      top: "4px",
                      animationDelay: `${i * 0.3}s`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Robotic Arms */}
              {activeSystem === "robotics" && (
                <>
                  <div className="absolute top-4 left-8 w-12 h-20 bg-cyan-600 rounded-t-full animate-pulse"></div>
                  <div className="absolute top-4 right-8 w-12 h-20 bg-cyan-600 rounded-t-full animate-pulse delay-300"></div>
                </>
              )}

              {/* Automation Panels */}
              {activeSystem === "automation" && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 grid grid-cols-4 gap-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded ${
                        Math.random() > 0.3
                          ? "bg-green-400 animate-pulse"
                          : "bg-gray-600"
                      }`}
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  ))}
                </div>
              )}

              {/* Logistics Network */}
              {activeSystem === "logistics" && (
                <div className="absolute inset-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-8 h-8 bg-orange-500 rounded-full animate-ping"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + (i % 2) * 30}%`,
                        animationDelay: `${i * 0.4}s`,
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>

            {/* Production Counter */}
            <div className="absolute top-4 right-4 bg-black/80 px-3 py-2 rounded text-cyan-400 font-mono text-sm">
              #{productionCount.toLocaleString()}
            </div>
          </div>
        </div>

        {/* System Data Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {Object.entries(data).map(([key, value]) => (
            <div
              key={key}
              className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-4"
            >
              <div className="text-cyan-400 text-xl font-bold">
                {typeof value === "number" ? value.toLocaleString() : value}
                {key.includes("Rate") ||
                key.includes("efficiency") ||
                key.includes("uptime") ||
                key.includes("precision") ||
                key.includes("Accuracy")
                  ? "%"
                  : ""}
                {key.includes("Time") ? "h" : ""}
                {key.includes("Reduction") ? "%" : ""}
              </div>
              <div className="text-gray-400 text-xs capitalize">
                {key.replace(/([A-Z])/g, " $1").toLowerCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>

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
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            OpenPack Platform
          </h1>
          <p className="text-xl text-gray-300">Industry 4.0 Vertical</p>
          <div className="mt-4 inline-block px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-400 text-sm">
            Dynamic NFT • Smart Manufacturing
          </div>
        </header>

        {/* System Navigation */}
        <div className="px-8 mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center space-x-4">
              {(["automation", "robotics", "logistics"] as const).map(
                (system) => (
                  <button
                    key={system}
                    onClick={() => setActiveSystem(system)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeSystem === system
                        ? "bg-cyan-500 text-black"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {system.charAt(0).toUpperCase() + system.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 px-8 pb-12">
          <div className="max-w-6xl mx-auto">
            <SystemVisualization />

            {/* Features Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 border border-cyan-500/30 rounded-xl p-6 text-center group hover:border-cyan-400 transition-colors duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  🤖
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Autonomous Systems
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  AI-powered robotic systems that adapt and optimize production
                  workflows in real-time
                </p>
                <div className="mt-4 text-cyan-400 text-sm font-medium">
                  99.2% Uptime
                </div>
              </div>

              <div className="bg-gray-900/50 border border-blue-500/30 rounded-xl p-6 text-center group hover:border-blue-400 transition-colors duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  📊
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Digital Twin
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Real-time digital replicas of physical systems for predictive
                  maintenance and optimization
                </p>
                <div className="mt-4 text-blue-400 text-sm font-medium">
                  Live Monitoring
                </div>
              </div>

              <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-6 text-center group hover:border-purple-400 transition-colors duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  🔗
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Smart Logistics
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Blockchain-based supply chain tracking with IoT integration
                  for complete transparency
                </p>
                <div className="mt-4 text-purple-400 text-sm font-medium">
                  End-to-End Tracking
                </div>
              </div>
            </div>

            {/* Investment Metrics */}
            <div className="mt-12 bg-gray-900/30 border border-cyan-500/20 rounded-xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6 text-center">
                Platform Performance
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    40%
                  </div>
                  <div className="text-gray-400">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    3.2M
                  </div>
                  <div className="text-gray-400">Units Produced</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    150+
                  </div>
                  <div className="text-gray-400">Clients Worldwide</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-400">Operations</div>
                </div>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Technology Stack
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "AI/ML",
                  "IoT",
                  "Blockchain",
                  "Digital Twin",
                  "Edge Computing",
                  "Robotics",
                  "5G Networks",
                  "AR/VR",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm hover:border-cyan-400 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-6 px-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            OpenPack Dynamic NFT • Industry 4.0 Vertical • NextG Fund
          </p>
        </footer>
      </div>
    </div>
  );
};

export default OpenPackPage;
