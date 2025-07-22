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
      <div className="absolute inset-0 opacity-10">
        {/* Replace with your SVG: <BG className="w-full h-full object-cover" /> */}
        <BG />
      </div>
      <div className="container mx-auto">
        {/* Header */}
        <header className="relative z-10 flex justify-between items-start p-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">Humanity AI</span>
            </div>
          </div>

          <div className="flex space-x-12">
            <div className="text-right">
              <div className="text-xl font-bold">24/7</div>
              <div className="text-sm text-gray-400">
                running and redemption
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold">Transparency</div>
              <div className="text-sm text-gray-400">verifiable on-chain</div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="relative z-10 px-8">
          {/* Title Section */}
          <div className="mb-16">
            <h1 className="text-6xl font-bold mb-4">Humanity AI</h1>
            <p className="text-xl text-gray-300">
              <span className="font-semibold">NextG Fund:</span> Advancing
              Humanity Through Innovation
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {templates.map((template, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(template.url)}
                className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-lg p-8 cursor-pointer transition-all duration-300 hover:bg-opacity-90 hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-gray-500"
              >
                <div className="h-48 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {template.title}
                    </h3>
                    <div className="w-12 h-1 bg-white mb-4"></div>
                  </div>

                  <div className="mt-auto">
                    <p className="text-gray-300 text-sm">{template.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
