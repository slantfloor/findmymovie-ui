import React from "react";

export default function HomePage() {
  const popularQuotes = [
    { quote: `"May the Force be with you"`, movie: "Star Wars" },
    { quote: `"I'll be back"`, movie: "The Terminator" },
    { quote: `"Here's looking at you, kid"`, movie: "Casablanca" },
    { quote: `"You can't handle the truth!"`, movie: "A Few Good Men" },
  ];

  return (
    <div className="min-h-screen bg-[#121417] text-white font-sans">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center py-6 border-b border-gray-800 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-1 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v16h16V4H4zM4 8h16M4 16h16"
                />
              </svg>
            </div>
            <span className="font-bold text-xl">FindMyMovie</span>
          </div>

          <nav className="flex space-x-6 text-gray-400 text-sm sm:text-base">
            <span className="hover:text-white cursor-pointer">Browse</span>
            <span className="hover:text-white cursor-pointer">Trending</span>
            <span className="hover:text-white cursor-pointer">About</span>
          </nav>
        </header>

        {/* Main */}
        <main className="py-12 text-center flex flex-col items-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold max-w-4xl leading-tight">
            Find Movies by{" "}
            <span className="text-blue-500">Memorable Quotes</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl text-sm sm:text-base">
            Remember that perfect line but can't recall the movie? Just type it in and discover the film that made it famous.
          </p>

          {/* Search */}
          <form
            className="mt-8 w-full max-w-2xl flex items-center bg-[#1a1e27] rounded-lg"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder={`You can type: "You can't handle the truth!"`}
              className="flex-grow bg-transparent px-4 sm:px-5 py-3 text-sm sm:text-base rounded-l-lg text-white placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 px-4 sm:px-5 py-3 text-sm sm:text-base rounded-r-lg hover:bg-blue-600 transition flex items-center"
            >
              <svg
                className="h-5 w-5 mr-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              Search
            </button>
          </form>

          {/* Categories */}
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-10 mt-8 text-gray-400 text-sm sm:text-base">
            {[
              { label: "Classic Movies", icon: "check" },
              { label: "Action Films", icon: "play" },
              { label: "Drama", icon: "film" },
            ].map(({ label, icon }, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 cursor-pointer hover:text-white mt-4 sm:mt-0"
              >
                {icon === "check" && (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {icon === "play" && (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132z" />
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={2} fill="none" />
                  </svg>
                )}
                {icon === "film" && (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18" />
                  </svg>
                )}
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* Popular Searches */}
          <section className="w-full mt-16">
            <h2 className="text-xl font-semibold mb-6">Popular Searches</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {popularQuotes.map(({ quote, movie }, i) => (
                <div
                  key={i}
                  className="flex items-start sm:items-center space-x-4 bg-[#1a1e27] p-4 rounded-lg shadow hover:bg-[#273043] cursor-pointer"
                >
                  <div className="bg-blue-700 p-2 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white text-sm sm:text-base">{quote}</p>
                    <p className="text-yellow-500 text-xs sm:text-sm mt-1">
                      From <span className="font-semibold">{movie}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full text-center">
            {[
              {
                title: "Smart Search",
                desc: "AI-powered search that finds movies even with partial or misremembered quotes",
                icon: (
                  <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                bg: "bg-[#1e273e]",
              },
              {
                title: "Vast Database",
                desc: "Quotes from thousands of movies across all genres and eras",
                icon: (
                  <svg className="h-8 w-8 text-yellow-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18" />
                  </svg>
                ),
                bg: "bg-yellow-700",
              },
              {
                title: "Instant Results",
                desc: "Get movie details, cast info, and where to watch in seconds",
                icon: (
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.286 7.03a1 1 0 00.95.69h7.37c.969 0 1.371 1.24.588 1.81l-5.978 4.31a1 1 0 00-.364 1.118l2.287 7.029c.3.922-.755 1.688-1.538 1.118l-5.978-4.31a1 1 0 00-1.175 0l-5.978 4.31c-.783.57-1.838-.196-1.538-1.118l2.287-7.029a1 1 0 00-.364-1.118L2.98 12.457c-.783-.57-.38-1.81.588-1.81h7.37a1 1 0 00.95-.69l2.286-7.03z" />
                  </svg>
                ),
                bg: "border border-white",
              },
            ].map(({ title, desc, icon, bg }, i) => (
              <div key={i}>
                <div className={`mx-auto mb-3 w-16 h-16 rounded-full ${bg} flex items-center justify-center`}>
                  {icon}
                </div>
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                <p className="text-gray-400 px-4 text-sm">{desc}</p>
              </div>
            ))}
          </section>
        </main>

        {/* Footer */}
        <footer className="py-6 text-center text-gray-500 border-t border-gray-800 text-xs sm:text-sm">
          © 2024 FindMyMovie. Powered by the love of cinema.
        </footer>
      </div>
    </div>
  );
}
