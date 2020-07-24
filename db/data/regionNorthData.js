
const regionNorthData = (user) => {
  return [{
    spot: 'Matosinhos',
    level: 'Beginner',
    crowd: 'Can get busy',
    image: 'https://i.ytimg.com/vi/M4-Pl6onJYY/maxresdefault.jpg',
    description: 'Lorem ipsum',
    lng: -8.68908,
    lat: 41.18207,
    rating: '★★★★★',
    comments: [], 
    user: user[0]
  },

  {
    spot: 'Afife',
    level: 'Intermediate',
    crowd: 'Can get busy',
    image: 'https://i.ytimg.com/vi/M4-Pl6onJYY/maxresdefault.jpg',
    description: 'Lorem ipsum',
    lng: 8.8610,
    lat: 41.7794,
    rating: '★★★★★',
    comments: [], 
    user: user[0]
  }

  ]
}

module.exports = regionNorthData