import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from 'lucide-react';

// Event type definition
interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  attendees: number;
  category: string;
}

// Sample event data
const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'React Developer Meetup',
    date: 'May 15, 2023 • 6:00 PM',
    location: 'Tech Hub, San Francisco',
    image: 'https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    attendees: 87,
    category: 'Web Development'
  },
  {
    id: '2',
    title: 'AI & Machine Learning Workshop',
    date: 'May 22, 2023 • 10:00 AM',
    location: 'Innovation Center, New York',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    attendees: 124,
    category: 'AI & Machine Learning'
  },
  {
    id: '3',
    title: 'Mobile App Design Principles',
    date: 'June 3, 2023 • 2:00 PM',
    location: 'Design Studio, Austin',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    attendees: 56,
    category: 'Design'
  },
  {
    id: '4',
    title: 'Blockchain Developer Conference',
    date: 'June 10, 2023 • 9:00 AM',
    location: 'Crypto Center, Miami',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    attendees: 210,
    category: 'Blockchain'
  },
  {
    id: '5',
    title: 'Game Development Hackathon',
    date: 'June 17-18, 2023 • All Day',
    location: 'Game Studio, Seattle',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    attendees: 95,
    category: 'Game Development'
  },
  {
    id: '6',
    title: 'Data Science Summit',
    date: 'June 25, 2023 • 11:00 AM',
    location: 'Data Center, Chicago',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    attendees: 178,
    category: 'Data Science'
  }
];

export const EventCardGallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
        <div className="flex space-x-2">
          <button 
            onClick={scrollLeft}
            className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button 
            onClick={scrollRight}
            className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex space-x-4 px-1">
          {upcomingEvents.map(event => (
            <div 
              key={event.id}
              className="flex-shrink-0 w-80 snap-start bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-indigo-700">
                  {event.category}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    {event.date}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    {event.location}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-gray-400" />
                    {event.attendees} attending
                  </div>
                </div>
                
                <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
