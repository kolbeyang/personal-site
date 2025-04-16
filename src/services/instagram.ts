/**
 * Instagram API Service
 * 
 * To implement the full Instagram API integration, you'll need to:
 * 1. Create an Instagram Basic Display app in the Facebook Developer Console
 * 2. Get client ID, client secret, and redirect URI
 * 3. Get an access token via OAuth
 * 4. Use the token to fetch user media
 * 
 * This service provides a placeholder structure for that implementation.
 */

// Mock data for development
const MOCK_POSTS = [
  {
    id: '1',
    mediaUrl: '/instagram-placeholder-1.jpg',
    permalink: 'https://instagram.com/p/1',
    caption: 'Exploring new artistic techniques with this latest piece.',
    timestamp: '2024-04-01T12:00:00Z'
  },
  {
    id: '2',
    mediaUrl: '/instagram-placeholder-2.jpg',
    permalink: 'https://instagram.com/p/2',
    caption: 'Working on a new series inspired by urban landscapes.',
    timestamp: '2024-03-28T14:30:00Z'
  },
  {
    id: '3',
    mediaUrl: '/instagram-placeholder-3.jpg',
    permalink: 'https://instagram.com/p/3',
    caption: 'Sketches from my latest project.',
    timestamp: '2024-03-25T09:15:00Z'
  },
  {
    id: '4',
    mediaUrl: '/instagram-placeholder-4.jpg',
    permalink: 'https://instagram.com/p/4',
    caption: 'Experimenting with new color palettes.',
    timestamp: '2024-03-22T16:45:00Z'
  },
  {
    id: '5',
    mediaUrl: '/instagram-placeholder-5.jpg',
    permalink: 'https://instagram.com/p/5',
    caption: 'Behind the scenes of my creative process.',
    timestamp: '2024-03-18T11:20:00Z'
  },
  {
    id: '6',
    mediaUrl: '/instagram-placeholder-6.jpg',
    permalink: 'https://instagram.com/p/6',
    caption: 'Finished piece from my latest collection.',
    timestamp: '2024-03-15T13:10:00Z'
  }
];

export interface InstagramPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  caption: string;
  timestamp: string;
}

/**
 * Fetch Instagram posts for a given username
 * 
 * @param username The Instagram username to fetch posts for
 * @returns A promise that resolves to an array of Instagram posts
 */
export const fetchInstagramPosts = async (username: string): Promise<InstagramPost[]> => {
  // In a real implementation, this would make an API call to Instagram
  // For now, we'll return mock data
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Return mock data
  return MOCK_POSTS;
};

/**
 * Get Instagram profile URL for a username
 * 
 * @param username The Instagram username
 * @returns The full Instagram profile URL
 */
export const getInstagramProfileUrl = (username: string): string => {
  return `https://instagram.com/${username}`;
};
