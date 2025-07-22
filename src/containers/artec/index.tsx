import { useNavigate } from "react-router-dom";

const ArtecPage = () => {
  const navigate = useNavigate();

  const artworks = [
    {
      id: 1,
      title: "Abstract Symphony",
      artist: "Edward",
      medium: "Digital Art",
      year: "2024",
      image: "🎨", // Placeholder - will be replaced with actual images
    },
    {
      id: 2,
      title: "Urban Dreams",
      artist: "Edward",
      medium: "Mixed Media",
      year: "2024",
      image: "🖼️",
    },
    {
      id: 3,
      title: "Future Visions",
      artist: "Edward",
      medium: "Digital Art",
      year: "2024",
      image: "🎭",
    },
  ];

  const films = [
    {
      id: 1,
      title: "The Godfather 4",
      type: "Feature Film",
      duration: "2h 45m",
      status: "In Production",
      poster: "🎬",
      description: "The epic continuation of the Corleone family saga",
    },
    {
      id: 2,
      title: "Following Harry",
      type: "Documentary",
      duration: "1h 30m",
      status: "Post-Production",
      poster: "🎥",
      description: "An intimate documentary exploring the creative process",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>

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
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Artec
          </h1>
          <p className="text-xl text-gray-300">Art & Film Vertical</p>
          <div className="mt-4 inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-400 text-sm">
            Dynamic NFT • Live Collection
          </div>
        </header>

        {/* Main Content - Split Layout */}
        <main className="flex-1 px-8 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
              {/* Left Side - Edward's Art Gallery */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-white">
                    Edward's Gallery
                  </h2>
                  <div className="text-sm text-gray-400">
                    Dynamic NFT Frames
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {artworks.map((artwork) => (
                    <div
                      key={artwork.id}
                      className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-500 hover:scale-105 cursor-pointer"
                    >
                      {/* Artwork Display */}
                      <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg mb-4 flex items-center justify-center text-6xl">
                        {artwork.image}
                      </div>

                      {/* Artwork Info */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                          {artwork.title}
                        </h3>
                        <p className="text-purple-400 text-sm">
                          {artwork.artist}
                        </p>
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>{artwork.medium}</span>
                          <span>{artwork.year}</span>
                        </div>
                      </div>

                      {/* NFT Badge */}
                      <div className="mt-4 inline-block px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">
                        NFT #00{artwork.id}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Artist Bio Section */}
                <div className="bg-gray-900/30 border border-gray-700 rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-bold text-white mb-3">
                    About the Artist
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Edward is a visionary artist exploring the intersection of
                    traditional and digital art forms. His work captures the
                    essence of human emotion through innovative techniques and
                    bold compositions.
                  </p>
                  <div className="mt-4 flex space-x-4 text-sm">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded">
                      Digital Art
                    </span>
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded">
                      Mixed Media
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded">
                      Contemporary
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side - Film Content */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-white">
                    Film Productions
                  </h2>
                  <div className="text-sm text-gray-400">Cinema Collection</div>
                </div>

                {films.map((film) => (
                  <div
                    key={film.id}
                    className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-pink-500 transition-all duration-500 cursor-pointer"
                  >
                    <div className="flex space-x-6">
                      {/* Film Poster */}
                      <div className="w-32 h-48 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                        {film.poster}
                      </div>

                      {/* Film Info */}
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                            {film.title}
                          </h3>
                          <p className="text-pink-400 font-medium">
                            {film.type}
                          </p>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed">
                          {film.description}
                        </p>

                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>⏱️ {film.duration}</span>
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              film.status === "In Production"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-blue-500/20 text-blue-400"
                            }`}
                          >
                            {film.status}
                          </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3 pt-2">
                          <button className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-lg hover:bg-pink-500/30 transition-colors text-sm">
                            Watch Trailer
                          </button>
                          <button className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors text-sm">
                            Behind Scenes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Production Stats */}
                <div className="bg-gray-900/30 border border-gray-700 rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Production Overview
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-400">2</div>
                      <div className="text-sm text-gray-400">
                        Active Projects
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">
                        5+
                      </div>
                      <div className="text-sm text-gray-400">
                        Awards Nominated
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-6 px-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Artec Dynamic NFT • Art & Film Vertical • NextG Fund
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ArtecPage;
