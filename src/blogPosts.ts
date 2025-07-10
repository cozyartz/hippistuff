// Blog posts for HippiStuff
// Each post is an object with title, date, author, content, and tags

export interface BlogPost {
  title: string;
  date: string;
  author: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "The Art of Mindful Gardening",
    date: "2025-06-29",
    author: "Willow Sunbeam",
    content: `
      Gardening is more than just planting seeds—it's a meditative journey. 
      In this post, we explore how connecting with the earth, feeling the soil, and observing the cycles of nature can bring peace and clarity to your daily life. 
      Tips include barefoot gardening, companion planting, and creating a pollinator-friendly space. 
      Embrace the slow, intentional rhythm of mindful gardening and let your spirit bloom with your plants.
    `,
    tags: ["mindfulness", "gardening", "nature"]
  },
  {
    title: "DIY Tie-Dye: Express Your Inner Rainbow",
    date: "2025-06-29",
    author: "River Skye",
    content: `
      Tie-dye is a classic hippie art form that celebrates individuality and color. 
      This guide walks you through eco-friendly tie-dye techniques using natural dyes from kitchen scraps like avocado pits and turmeric. 
      Learn how to fold, bind, and dye your own shirts, tapestries, or bags. 
      Let your creativity flow and wear your art with pride!
    `,
    tags: ["DIY", "art", "sustainable fashion"]
  },
  {
    title: "Sound Healing: The Power of Vibrations",
    date: "2025-06-29",
    author: "Sage Harmony",
    content: `
      Sound healing uses vibrations from instruments like singing bowls, gongs, and chimes to restore balance in the body and mind. 
      Discover the history of sound healing, how to create your own sound bath at home, and the science behind why it works. 
      Whether you're a seasoned practitioner or just curious, sound healing is a beautiful way to tune in to your inner peace.
    `,
    tags: ["wellness", "music", "healing"]
  }
];
