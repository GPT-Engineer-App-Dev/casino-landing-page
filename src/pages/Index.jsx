import React, { useState, useEffect } from 'react';
import { Rocket, Comet, CreditCard, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const StreamingComet = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => (prev + 2) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-16 h-16">
      <Comet
        size={64}
        className="text-blue-400 absolute top-0 left-0"
        style={{ 
          transform: `translateX(${position}%)`,
          filter: `blur(${Math.sin(position / 10) * 2}px) brightness(${1 + Math.sin(position / 10) * 0.5})`
        }}
      />
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card className="bg-gray-800 text-white">
    <CardHeader>
      <Icon size={32} className="text-blue-400 mb-2" />
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>{description}</CardContent>
  </Card>
);

export default function CosmicJackpot() {
  return (
    <div className="min-h-screen bg-black text-white bg-[url('/stars.svg')] bg-repeat">
      <header className="py-6 px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Rocket size={32} className="text-blue-500" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Cosmic Jackpot
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#games" className="hover:text-blue-400 transition-colors">Games</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to the Future of Stellar Entertainment
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Experience the thrill of zero-gravity gaming in Earth's orbit!
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Launch Cosmic Games
            </Button>
            <StreamingComet />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={Comet}
            title="Gravity-Defying Games"
            description="Experience classic casino games with a cosmic twist. Our zero-G roulette and nebula slots will blow your mind!"
          />
          <FeatureCard
            icon={CreditCard}
            title="Universal Currency"
            description="Play with our proprietary StarDust Tokens, accepted across all known galaxies and easily exchangeable with Earth currencies."
          />
          <FeatureCard
            icon={Users}
            title="Intergalactic Community"
            description="Connect with players from Earth, Mars colonies, and beyond. Make friends across the solar system!"
          />
        </section>

        <section className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">Our Stellar Location</h3>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <img src="/placeholder.svg" alt="Earth view from space" className="mx-auto object-cover w-full h-64" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-lg">Orbiting at 400km above Earth's surface</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready for Liftoff?</h3>
          <p className="mb-8">Book your space flight and join us for an out-of-this-world entertainment experience!</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Reserve Your Cosmic Journey
          </Button>
        </section>
      </main>

      <footer className="bg-gray-900 py-6 px-4 text-center">
        <p>&copy; 2150 Cosmic Jackpot. All rights reserved across the known universe.</p>
        <p className="text-sm text-gray-500 mt-2">
          Enjoying responsibly is crucial in space. Please play within your limits and don't bet your return ticket!
        </p>
      </footer>
    </div>
  );
}