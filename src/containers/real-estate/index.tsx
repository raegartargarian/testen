import { useNavigate } from "react-router-dom";

const RealEstatePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-teal-900/20"></div>

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

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        {/* Coming Soon Content */}
        <div className="text-center space-y-8 max-w-2xl mx-auto px-8">
          {/* Icon */}
          <div className="text-8xl mb-8">🏢</div>

          {/* Title */}
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Real Estate
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-8">
            Smart Buildings & Tokenized Ownership
          </p>

          {/* Coming Soon Badge */}
          <div className="inline-block px-6 py-3 bg-yellow-500/20 rounded-full text-yellow-400 text-lg font-medium mb-8">
            🚧 Coming Soon
          </div>

          {/* Description */}
          <div className="bg-gray-900/50 border border-green-500/30 rounded-xl p-8 text-left">
            <h3 className="text-2xl font-bold text-white mb-4">
              What's Coming
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="text-green-400 mt-1">•</span>
                <span>
                  Fractional real estate investment through blockchain
                  tokenization
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-400 mt-1">•</span>
                <span>
                  Smart buildings integrated with renewable energy systems
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-400 mt-1">•</span>
                <span>Dual income streams from rent and energy production</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-400 mt-1">•</span>
                <span>AI-powered property management and optimization</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-400 mt-1">•</span>
                <span>
                  Transparent and liquid real estate investment platform
                </span>
              </li>
            </ul>
          </div>

          {/* Alternative Access */}
          <div className="pt-8">
            <p className="text-gray-400 mb-4">
              You can preview Real Estate integration in our
            </p>
            <button
              onClick={() => navigate("/renewable-energy")}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:from-green-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105"
            >
              Renewable Energy Demo →
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-6 left-0 right-0 text-center">
          <p className="text-gray-500 text-sm">
            Real Estate Dynamic NFT • Smart Buildings Vertical • NextG Fund
          </p>
        </footer>
      </div>
    </div>
  );
};

export default RealEstatePage;
