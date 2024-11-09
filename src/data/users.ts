export interface TwitterUser {
  handle: string;
  name: string;
  category: string[];
  avatar: string;
  bio: string;
  followers: string;
}

export const users: TwitterUser[] = [
  {
    handle: '@naval',
    name: 'Naval',
    category: ['Tech', 'Philosophy', 'Startups'],
    avatar: 'https://pbs.twimg.com/profile_images/1256841238298292232/ycqwaMI2_400x400.jpg',
    bio: 'Building startups, investing in them, writing about wealth creation and philosophy',
    followers: '2.8M'
  },
  {
    handle: '@paulg',
    name: 'Paul Graham',
    category: ['Tech', 'Startups', 'Programming'],
    avatar: 'https://pbs.twimg.com/profile_images/1824002576/pg-railsconf_400x400.jpg',
    bio: 'Co-founder of Y Combinator, programmer, essayist',
    followers: '1.7M'
  },
  {
    handle: '@elonmusk',
    name: 'Elon Musk',
    category: ['Tech', 'Space', 'AI'],
    avatar: 'https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg',
    bio: 'Owner of X, CEO of Tesla and SpaceX',
    followers: '170.4M'
  },
  {
    handle: '@VitalikButerin',
    name: 'Vitalik Buterin',
    category: ['Crypto', 'Tech', 'Blockchain'],
    avatar: 'https://pbs.twimg.com/profile_images/1748153260203229184/sXJIGMBk_400x400.jpg',
    bio: 'Ethereum co-founder. Cryptocurrency and blockchain pioneer',
    followers: '4.9M'
  },
  {
    handle: '@balajis',
    name: 'Balaji',
    category: ['Tech', 'Crypto', 'Future'],
    avatar: 'https://pbs.twimg.com/profile_images/1406974882919813128/LOUb2m4R_400x400.jpg',
    bio: 'Author of The Network State, technology entrepreneur and investor',
    followers: '780K'
  },
   {
    handle: '@aenuio',
    name: 'Aenish Shrestha',
    category: ['Tech', 'AI', 'Engineer', 'Construction'],
    avatar: 'https://pbs.twimg.com/profile_images/1766863621223546880/pPfso5l5_200x200.jpg',
    bio: 'Currently building Tech For Construction',
    followers: '8'
  },
  {
    handle: '@levelsio',
    name: 'levelsio',
    category: ['Tech', 'AI', 'Saas','Indie'],
    avatar: 'https://pbs.twimg.com/profile_images/1589756412078555136/YlXMBzhp_400x400.jpg',
    bio: '📸http://PhotoAI.com $139K/m',
    followers: '571.7K'
  },
  {
    handle: '@marc_louvion',
    name: 'marc_louvion',
    category: ['Tech', 'AI', 'Saas','Indie'],
    avatar: 'https://pbs.twimg.com/profile_images/1514863683574599681/9k7PqDTA_400x400.jpg',
    bio: '📈 http://DataFa.st (new)',
    followers: '136.5K'
  }
];

export const categories = Array.from(
  new Set(users.flatMap(user => user.category))
).sort();