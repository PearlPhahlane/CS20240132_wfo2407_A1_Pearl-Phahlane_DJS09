// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number
const propertyContainer = document.querySelector('.properties');
const footer = document.querySelector('.footer')

import { totalReviews, populateUser } from './utils';

//Reviews
const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string
}[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];


//user
const you: {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  age: number;
  stayedAt: string []

} = {
  firstName: 'Pearl',
  lastName: 'Phahlane',
  isReturning: true,
  age: 50,
  stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// properties
const properties: {
  image: string;
  title: string;
  PricePerNight: number;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  };
  contact: [ number, string];
  isAvailable: boolean;
}[] = [
  {
    image: "images/HallmarkHouse.png",
    title: "Hallmark House Hotel",
    PricePerNight: 350,
    location: {
      firstLine: "54 Siemert Road",
      city: "Johannesburg",
      code: 2094,
      country: "South Africa",
    },
    contact: [ +270101235555, "frontdesk@hallmarkhotel.co.za"],
    isAvailable: false,
  },
  {
    image: "images/Mainframe.png",
    title: "The Mainframe",
    PricePerNight: 140,
    location: {
      firstLine: "238 Main Street",
      city: "Johannesburg",
      code: 2094,
      country: "South Africa",
    },
    contact: [+270101236666, "hello@block20.co.za"],
    isAvailable: true,
  },
  {
    image: "images/artsonmain.png",
    title: "Arts on Main",
    PricePerNight: 180,
    location: {
      firstLine: "264 Fox Street",
      city: "Johannesburg",
      code: 2001,
      country: "South Africa",
    },
    contact: [+270101237777, "hello@mabonengsociety.co.za"],
    isAvailable: true,
  },
];


//functions
//function to show total number of reviews on website 
totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

//function to display the word 'back' and username
populateUser(you.isReturning, you.firstName);


//add properties to dashboard
for(let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer.appendChild(card)
    
}

//location
const currentLocation: [string, string, number] = ['Johannesburg', '16:44', 28]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + 'deg'