
const regionSouthData = (user) => {
  return [{
    spot: 'Sagres',
    level: 'Intermediate',
    crowd: 'Empty',
    image: 'https://d5c6u7j9.stackpathcdn.com/wp-content/uploads/2019/04/Praia-do-Beliche-surfing-Algarve.jpg',
    description: 'Lorem ipsum',
    lng: -8.8019,
    lat: 37.0825,
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

module.exports = regionSouthData