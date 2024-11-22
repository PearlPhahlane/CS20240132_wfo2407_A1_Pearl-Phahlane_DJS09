// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number


//Modules
const propertyContainer = document.querySelector('.properties');
const footer = document.querySelector('.footer');
const reviewContainer = document.querySelector(".reviews");
const container = document.querySelector(".container");
const button = document.querySelector("button");

import { totalReviews, populateUser, showDetails, getTopTwoReviews } from './utils';
import { LoyaltyUser, Permissions } from './enums';
import { Review, Properties } from './interfaces';
import MainImage from './classes';

//let isLoggedIn: boolean; commented it out because it's not used in the code



//Reviews
const reviews: Review[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
  },
];


//user
const you = {
  firstName: 'Pearl',
  lastName: 'Phahlane',
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 50,
  stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}



// properties
const properties: Properties[] = [
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
    contact: [+270101235555, "frontdesk@hallmarkhotel.co.za"],
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
  {
    image: "images/theOnyx.png",
    title: "The Onyx",
    PricePerNight: 200,
    location: {
      firstLine: "254 Fox Street",
      city: "Johannesburg",
      code: 2001,
      country: "South Africa",
    },
    contact: [+27818656545, "hello@mabonengsociety.co.za"],
    isAvailable: true,
  },
];


//functions
//function to show total number of reviews on website 
totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

//function to display the word 'back' and username
populateUser(you.isReturning, you.firstName);



//let authorityStatus: any;

//isLoggedIn = false

//add properties to dashboard
for(let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    showDetails(you.permissions, card, properties[i].PricePerNight)
    propertyContainer!.appendChild(card);
    
}

let count = 0;
function addReviews(array: Review[]) : void {
  if (!count) {
    count++;
    const topTwo = getTopTwoReviews(array);
    for (let i = 0; i < topTwo.length; i++) {
      const card = document.createElement("div");
      card.classList.add("review-card");
      card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
      reviewContainer!.appendChild(card); //The ! tells TypeScript that I am  certain the element is not null.
    }
    container!.removeChild(button!);
  }
}

button!.addEventListener("click", () => addReviews(reviews));

//location
const currentLocation: [string, string, number] = ['Johannesburg', '16:44', 28]
footer!.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '℃'


const yourMainImage = new MainImage(
  "images/Maboneng.png",
  'Maboneng Johannesburg',
  [{
        name: 'Tina',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '12-04-2021'
    }] )

const mainImageContainer = document.querySelector('.main-image');
const image = document.createElement('img')
image.setAttribute('src', yourMainImage.src)
mainImageContainer!.appendChild(image)
