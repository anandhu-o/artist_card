import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import ArtistCarousel from './components/ArtistCarousel';

const mockArtists = [
  {
    id: 1,
    name: 'Ritviz',
    event: "Saarang '27",
    subTitle: 'EDM Nite',
    badges: ['Featured Artist', 'Electronic Pop'],
    bio: 'Known for his unique blend of Indian classical music and electronic dance beats, Ritviz has redefined the contemporary soundscape. His energetic performances and infectious melodies create an unforgettable live experience that bridges cultural divides.',
    imageUrl: '/ritwiz.png',
  },
  {
    id: 2,
    name: 'Sid Sriram',
    event: "Saarang '27",
    subTitle: 'Pop Nite',
    badges: ['Headliner', 'Carnatic Pop'],
    bio: 'A phenomenon in the world of South Indian film music, Sid Sriram stunningly blends traditional carnatic roots with modern RnB and pop. Prepare for an incredibly soul-stirring vocal performance!',
    imageUrl: '/sis_sriram.png',
  },
  {
    id: 3,
    name: 'Anirudh',
    event: "Saarang '27",
    subTitle: 'Rock Nite',
    badges: ['Global Icon', 'Rockstar'],
    bio: 'One of the most sought-after music composers and playback singers in Indian cinema. Known for his viral hits and electrifying live performances, Anirudh brings an unmatched wave of energy and charisma to the stage!',
    imageUrl: '/Anrudh.png',
  }
];

export default function App() {
  return (
    <div className="text-on-surface min-h-screen flex flex-col antialiased bg-transparent relative overflow-x-hidden">
      {/* Full Page Background */}
      <div className="fixed inset-0 z-[-1]">
        <img 
          alt="Epic music festival stage" 
          className="w-full h-full object-cover brightness-[0.6] contrast-[1.15]" 
          src="/background.png" 
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <Navbar />
      
      <main className="flex-1 w-full flex flex-col items-center justify-center relative">
        <ArtistCarousel artists={mockArtists} />
      </main>
      
      <MobileNav />
    </div>
  );
}
