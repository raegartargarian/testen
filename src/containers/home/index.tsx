import { openViewVaultExplorer } from "@/shared/utils/viewVaultInExplorer";
import { BG } from "./bg";

const HomePage = () => {
  const templates = [
    {
      title: "Godfather Template",
      subtitle: "Classic Cinema Experience",
      url: "https://bafybeigpavv565gyy6b5axxg5lpwwisbhe3tr2zaa7j36mc2ft2rwcllxy.ipfs.pub.test.filedgr.network/#/",
    },
    {
      title: "Harry Template",
      subtitle: "Documentary Excellence",
      url: "https://bafybeibtl7wtvhw5t6xztlzty73kxpprbehemptej555eievyjgvupo3xe.ipfs.pub.test.filedgr.network/#/",
    },
    {
      title: "Artech Template",
      subtitle: "Modern Art & Technology",
      url: "https://bafybeibtl7wtvhw5t6xztlzty73kxpprbehemptej555eievyjgvupo3xe.ipfs.pub.test.filedgr.network/#/",
    },
    {
      title: "Curax Template",
      subtitle: "Innovation & Research",
      url: "https://bafybeieoraupgjilerly4rwmkr5jyjewjlkarvfbhmx2jwrjfewgixibfi.ipfs.pub.test.filedgr.network/#/",
    },
  ];

  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <BG />
      </div>

      {/* Gradient Overlay */}

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="text-center py-12 px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Humanity AI</h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              <span className="font-semibold text-white">NextG Fund:</span>{" "}
              Advancing Humanity Through Innovation
            </p>
            <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">6</div>
                <div>Investment Verticals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">∞</div>
                <div>Dynamic NFTs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div>Innovation</div>
              </div>
            </div>
          </div>
        </header>

        {/* View NFT Section */}
        <section className="text-center py-8 px-8">
          <div className="max-w-6xl mx-auto">
            <button
              onClick={() => openViewVaultExplorer()}
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white text-lg font-semibold rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/50 hover:scale-105"
            >
              View NFT
            </button>
          </div>
        </section>

        {/* Main Grid */}
        <main className="flex-1 flex items-center justify-center px-8 pb-12">
          <div className="max-w-6xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {templates.map((module) => (
                <div
                  key={module.url}
                  onClick={() => handleCardClick(module.url)}
                  className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-80 cursor-pointer transition-all duration-500 hover:scale-105 hover:border-gray-500 
                     hover:shadow-2xl hover:shadow-purple-500/20"
                  `}
                >
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                        {module.title}
                      </h3>
                      <p className="text-lg text-blue-400 font-medium mb-3">
                        {module.subtitle}
                      </p>
                    </div>

                    <div className="flex justify-end mt-6">
                      <div className="text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </div>
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 px-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Dynamic NFT Platform • Powered by Innovation • Built for the Future
          </p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
