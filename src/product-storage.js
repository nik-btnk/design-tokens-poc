// Allergy Icons
import iconEggs from './assets/icons/health/Icon=allergy-egg.png'
import iconFish from './assets/icons/health/Icon=allergy-fish.png'
import iconMilk from './assets/icons/health/Icon=allergy-milk.png'
import iconNuts from './assets/icons/health/Icon=allergy-nuts.png'
import iconWheat from './assets/icons/health/Icon=allergy-wheat.png'

// Nutrition Items
import iconLowFat from './assets/icons/health/Icon=nutrition-fat.png'
import iconHighProtein from './assets/icons/health/Icon=nutrition-protein.png'
import iconNoSugar from './assets/icons/health/Icon=nutrition-sugar.png'

const eggs = {
  name: 'Eggs',
  icon: iconEggs,
  description: 'Little extra something?'
}
const milk = {
  name: 'Milk',
  icon: iconMilk,
  description: 'Little extra something?'
}
const fish = {
  name: 'Fish',
  icon: iconFish,
  description: 'Little extra something?'
}
const nuts = {
  name: 'Nuts',
  icon: iconNuts,
  description: 'Little extra something?'
}
const wheat = {
  name: 'Wheat',
  icon: iconWheat,
  description: 'Little extra something?'
}

const lowFat = {
  name: 'Low Fat',
  icon: iconLowFat,
  description: 'Little extra something?'
}
const highProtein = {
  name: 'High Protein',
  icon: iconHighProtein,
  description: 'Little extra something?'
}
const noSugar = {
  name: 'No Sugar',
  icon: iconNoSugar,
  description: 'Little extra something?'
}

const products = [
  {
    name: 'Clockwork Orange',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tempor velit. Nunc mi sapien, dictum vel tristique quis, pulvinar in felis. Aenean posuere dignissim ligula, in porta ante finibus eu. Sed rhoncus lacus sit amet ligula scelerisque, sit amet eleifend velit interdum. Praesent rutrum urna eu laoreet viverra.',
    price: 4.99,
    nutrition: highProtein,
    allergy: [milk, eggs],
    category: "Hot 'n Spicy",
    calories: 220
  },
  {
    name: 'Red Planet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tempor velit. Nunc mi sapien, dictum vel tristique quis, pulvinar in felis. Aenean posuere dignissim ligula, in porta ante finibus eu. Sed rhoncus lacus sit amet ligula scelerisque, sit amet eleifend velit interdum. Praesent rutrum urna eu laoreet viverra.',
    price: 9.99,
    nutrition: noSugar,
    allergy: null,
    category: "Hot 'n Spicy",
    calories: 175
  },
  {
    name: 'Green Land',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tempor velit. Nunc mi sapien, dictum vel tristique quis, pulvinar in felis. Aenean posuere dignissim ligula, in porta ante finibus eu. Sed rhoncus lacus sit amet ligula scelerisque, sit amet eleifend velit interdum. Praesent rutrum urna eu laoreet viverra.',
    price: 7.99,
    nutrition: lowFat,
    allergy: [milk, nuts, wheat],
    category: "Hot 'n Spicy",
    calories: 275
  },
  {
    name: 'Yellow Submarine',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tempor velit. Nunc mi sapien, dictum vel tristique quis, pulvinar in felis. Aenean posuere dignissim ligula, in porta ante finibus eu. Sed rhoncus lacus sit amet ligula scelerisque, sit amet eleifend velit interdum. Praesent rutrum urna eu laoreet viverra.',
    price: 4.2,
    nutrition: lowFat,
    allergy: [fish],
    category: "Hot 'n Spicy",
    calories: 195
  },
  {
    name: 'Vivacious Violet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tempor velit. Nunc mi sapien, dictum vel tristique quis, pulvinar in felis. Aenean posuere dignissim ligula, in porta ante finibus eu. Sed rhoncus lacus sit amet ligula scelerisque, sit amet eleifend velit interdum. Praesent rutrum urna eu laoreet viverra.',
    price: 2.99,
    nutrition: highProtein,
    allergy: null,
    category: "Hot 'n Spicy",
    calories: 205
  },

  {
    name: 'Pink Panther',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tempor velit. Nunc mi sapien, dictum vel tristique quis, pulvinar in felis. Aenean posuere dignissim ligula, in porta ante finibus eu. Sed rhoncus lacus sit amet ligula scelerisque, sit amet eleifend velit interdum. Praesent rutrum urna eu laoreet viverra.',
    price: 4.99,
    nutrition: lowFat,
    allergy: [milk, eggs],
    category: 'Cool as Ice',
    calories: 210
  },
  {
    name: 'Feeling Blue',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tempor velit. Nunc mi sapien, dictum vel tristique quis, pulvinar in felis. Aenean posuere dignissim ligula, in porta ante finibus eu. Sed rhoncus lacus sit amet ligula scelerisque, sit amet eleifend velit interdum. Praesent rutrum urna eu laoreet viverra.',
    price: 5.99,
    nutrition: highProtein,
    allergy: [milk, eggs, nuts],
    category: 'Cool as Ice',
    calories: 235
  },
  {
    name: 'Blue Clue',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tempor velit. Nunc mi sapien, dictum vel tristique quis, pulvinar in felis. Aenean posuere dignissim ligula, in porta ante finibus eu. Sed rhoncus lacus sit amet ligula scelerisque, sit amet eleifend velit interdum. Praesent rutrum urna eu laoreet viverra.',
    price: 2.99,
    nutrition: noSugar,
    allergy: [milk, nuts],
    category: 'Cool as Ice',
    calories: 220
  },
  {
    name: 'Gray Anatomy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tempor velit. Nunc mi sapien, dictum vel tristique quis, pulvinar in felis. Aenean posuere dignissim ligula, in porta ante finibus eu. Sed rhoncus lacus sit amet ligula scelerisque, sit amet eleifend velit interdum. Praesent rutrum urna eu laoreet viverra.',
    price: 6.9,
    nutrition: highProtein,
    allergy: [nuts],
    category: 'Cool as Ice',
    calories: 240
  },
  {
    name: 'Puzzled Plum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tempor velit. Nunc mi sapien, dictum vel tristique quis, pulvinar in felis. Aenean posuere dignissim ligula, in porta ante finibus eu. Sed rhoncus lacus sit amet ligula scelerisque, sit amet eleifend velit interdum. Praesent rutrum urna eu laoreet viverra.',
    price: 8.37,
    nutrition: lowFat,
    allergy: [wheat],
    category: 'Cool as Ice',
    calories: 235
  }
]

export default products
