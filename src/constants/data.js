import images from './images';

const wines = [
  {
    title: 'Vin rouge de Bordeaux',
    price: '66€',
    tags: 'FR | Bouteille, 75cl',
  },
  {
    title: 'Vin rosé Espagnol',
    price: '44€',
    tags: 'ES | Bouteille, 75cl',
  },
  {
    title: 'Irish Guinness',
    price: '16€',
    tags: 'IRL | 50cl',
  },
];

const cocktails = [
  {
    title: 'Entrée',
    price: '28€',
    tags: 'Fois gras de canard bio',
  },
  {
    title: "Plat",
    price: '55€',
    tags: 'Saumon français grillé au feu de bois',
  },
  {
    title: 'Dessert',
    price: '18€',
  },
];


const awards = [
  {
    imgUrl: images.award01,
    title: 'N°1 des Bib Gourmand',
  },
  {
    imgUrl: images.award02,
    title: 'Restaurant 2 étoiles michelin',
  },
  {
    imgUrl: images.award05,
    title: 'Noté 5 étoiles sur Trip Advisor',
  },
  {
    imgUrl: images.award03,
    title: 'Meilleur ouvrier de France 2022',
  },
];

export default { wines, cocktails, awards };
