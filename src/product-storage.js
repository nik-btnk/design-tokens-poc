// Allergy Icons
import iconEggs from './assets/icons/health/Icon=allergy-egg.png'
import iconFish from './assets/icons/health/Icon=allergy-fish.png'
import iconMilk from './assets/icons/health/Icon=allergy-milk.png'
import iconNuts from './assets/icons/health/Icon=allergy-nuts.png'
import iconWheat from './assets/icons/health/Icon=allergy-wheat.png'

// Nutrition Icons
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
    subtitle: 'Fancy a bit of the ultra-flavor?',
    description:
      'Brownie bits peanut butter blueberries cookies and cream mint marshmallows cake batter. Peanut butter cups vanilla french vanilla, chocolate chip cookie dough chocolate syrup cake batter rainbow sprinkles neopolitan kitkat. Chocolate sprinkles chocolate chip cookie dough cookies and cream.',
    price: 4.99,
    nutrition: highProtein,
    allergy: [milk, eggs],
    category: "Hot 'n Spicy",
    calories: 220,
    id: 465505,
    quantity: 0
  },
  {
    name: 'Red Planet',
    subtitle: 'The rockiest road.',
    description:
      'Mint chocolate chip neopolitan french vanilla peanut butter strawberry chocolate. Cookies and cream Mint chocolate chip strawberry, dark chocolate pistachio mint peanut butter french vanilla chocolate chocolate chip vanilla mint chocolate vanilla french vanilla. Strawberry cake batter chocolate cookies and cream, mint chocolate chip neopolitan vanilla mint chocolate chip chocolate peanut butter.',
    price: 9.99,
    nutrition: noSugar,
    allergy: null,
    category: "Hot 'n Spicy",
    calories: 175,
    id: 857537,
    quantity: 0
  },
  {
    name: 'Green Land',
    subtitle: 'Because "Ice Cream Land" attracts Vikings.',
    description:
      'Peanut butter coffee neopolitan dark chocolate, vanilla mint french vanilla. Rocky road mint peanut butter vanilla pistachio neopolitan coffee dark chocolate dark chocolate chocolate chip cookie dough cookies and cream mint chocolate chip rocky road cake batter. Mint chocolate chip rocky road cake batter, pistachio strawberry.',
    price: 7.99,
    nutrition: lowFat,
    allergy: [milk, nuts, wheat],
    category: "Hot 'n Spicy",
    calories: 275,
    id: 273168,
    quantity: 0
  },
  {
    name: 'Yellow Submarine',
    subtitle: "Hey Jude, don't get us sued...",
    description:
      'Chocolate chip cookie dough cookies and cream coffee rocky road strawberry french vanilla. Coffee vanilla peanut butter dark chocolate rocky road neopolitan chocolate chip. Vanilla cake batter mint chocolate chip dark chocolate, mint chocolate chip mint rocky road dark chocolate cake batter.',
    price: 4.2,
    nutrition: lowFat,
    allergy: [fish],
    category: "Hot 'n Spicy",
    calories: 195,
    id: 939085,
    quantity: 0
  },
  {
    name: 'Vivacious Violet',
    subtitle: 'Veni, vidi, violeti!',
    description:
      'Pistachio vanilla mint chocolate chip, peanut butter chocolate mint chocolate chip neopolitan dark chocolate. Vanilla rocky road strawberry french vanilla mint chocolate chip. Neopolitan Pistachio rocky road, coffee chocolate chip rocky road rocky road french vanilla cookies and cream chocolate chocolate chip cookie dough. Pistachio peanut butter dark chocolate peanut butter peanut butter.',
    price: 2.99,
    nutrition: highProtein,
    allergy: null,
    category: "Hot 'n Spicy",
    calories: 205,
    id: 942287,
    quantity: 0
  },
  {
    name: 'Pink Panther',
    subtitle: 'No dead ants here.',
    description:
      'Coffee vanilla dark chocolate, mint strawberry french vanilla peanut butter pistachio chocolate chip. Mint chocolate dark chocolate coffee. Strawberry strawberry pistachio, cake batter french vanilla rocky road strawberry french vanilla peanut butter rocky road peanut butter. Dark chocolate chocolate chip pistachio, chocolate mint chocolate chip coffee dark chocolate.',
    price: 4.99,
    nutrition: lowFat,
    allergy: [milk, eggs],
    category: 'Cool as Ice',
    calories: 210,
    id: 991571,
    quantity: 0
  },
  {
    name: 'Feeling Blue',
    subtitle: 'Let Scoops cheer you up!',
    description:
      'Pistachio coffee dark chocolate, neopolitan cookies and cream cake batter mint chocolate chip rocky road. Peanut butter dark chocolate french vanilla, mint chocolate chip cookie dough coffee mint cookies and cream chocolate strawberry coffee french vanilla pistachio. Neopolitan Pistachio strawberry, strawberry chocolate chip cookie dough.',
    price: 5.99,
    nutrition: highProtein,
    allergy: [milk, eggs, nuts],
    category: 'Cool as Ice',
    calories: 235,
    id: 197156,
    quantity: 0
  },
  {
    name: 'Blue Clue',
    subtitle: 'We just got a lawsuit, we just got a lawsuit!',
    description:
      'Cake batter chocolate chip peanut butter, vanilla french vanilla pistachio rocky road coffee. Neopolitan chocolate peanut butter peanut butter vanilla, Cake batter rocky road cookies and cream coffee chocolate dark chocolate mint chocolate chip strawberry mint mint chocolate chip. Neopolitan strawberry chocolate peanut butter cookies and cream vanilla.',
    price: 2.99,
    nutrition: noSugar,
    allergy: [milk, nuts],
    category: 'Cool as Ice',
    calories: 220,
    id: 467522,
    quantity: 0
  },
  {
    name: 'Gray Anatomy',
    subtitle: 'A more appealing color than skin-toned.',
    description:
      'Chocolate chip cookie dough mint strawberry cookies and cream mint chocolate chip chocolate. Chocolate chip cookie dough peanut butter rocky road, mint chocolate chip neopolitan pistachio chocolate cookies and cream mint french vanilla french vanilla neopolitan strawberry chocolate chip mint chocolate chip.',
    price: 6.9,
    nutrition: highProtein,
    allergy: [nuts],
    category: 'Cool as Ice',
    calories: 240,
    id: 948055,
    quantity: 0
  },
  {
    name: 'Puzzled Plum',
    subtitle: 'What do you mean, we forgot plum?',
    description:
      'French vanilla dark chocolate peanut butter pistachio chocolate chip coffee neopolitan strawberry cookies and cream cake batter chocolate. Peanut butter mint cookies and cream chocolate chip cookie dough strawberry rocky road. Mint chocolate chip cookies and cream mint chocolate chip, chocolate chip pistachio rocky road neopolitan strawberry.',
    price: 8.37,
    nutrition: lowFat,
    allergy: [wheat],
    category: 'Cool as Ice',
    calories: 235,
    id: 847737,
    quantity: 0
  }
]

export default products
