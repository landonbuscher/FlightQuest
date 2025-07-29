import React from "react";

import sky from "../assets/BkgLong.png";
import clouds from "../assets/CloudLong.png";
import planeGif from "../assets/Plane.gif";

const LandingPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero */}
      <header
        className="w-full bg-cover bg-center text-white min-h-screen px-4 text-left relative overflow-hidden"
        style={{
          backgroundImage: `url(${sky})`,
        }}
      >
        <img
          src={planeGif}
          className="absolute top-100 left-0 w-64 h-auto z-10 animate-plane"
          alt="Flying plane"
        />

        <div
          className="absolute inset-0 bg-cover bg-center z-20 pointer-events-none animate-clouds"
          style={{
            backgroundImage: `url(${clouds})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-20 pointer-events-none" />

        {/* Hero Text */}
        <div className="relative z-30 px-4 md:ml-24 max-w-4xl mt-32 mt-180 text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
            Ground School, <span className="font-pixel">Reimagined.</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Learn FAA Private Pilot Ground School the fun way - with gamified
            lessons, quizzes, and challenges.
          </p>
          <a
            href="#signup"
            className="bg-sky-700 text-lg font-bold text-white px-6 py-3 rounded-md font-sans shadow-lg hover:scale-105 inline-block transition"
          >
            Join the Beta
          </a>
        </div>
      </header>

      {/* Feature Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why FlightQuest?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "🎮 Gamified Learning",
              desc: "Earn XP, badges, and level up your pilot knowledge.",
            },
            {
              title: "✈️ Flight-Based Lessons",
              desc: "Learn via real scenarios, not just trivia.",
            },
            {
              title: "🧠 Retention-Boosted",
              desc: "Flashcards, spaced repetition, and quizzes.",
            },
            {
              title: "📱 Learn Anywhere",
              desc: "Mobile-ready lessons for short or long sessions.",
            },
          ].map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-50 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Join the New Generation of Aviators?
        </h2>
        <p className="mb-6 text-lg">
          Free during beta. Be the first to try it.
        </p>
        <a
          id="signup"
          href="#"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-mono shadow-lg hover:scale-105 inline-block transition"
        >
          Join the Beta
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center text-sm py-6">
        <p>
          &copy; {new Date().getFullYear()} FlightQuest. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="#" className="hover:underline mx-2">
            Privacy
          </a>
          <a href="#" className="hover:underline mx-2">
            Terms
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
