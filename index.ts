// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number
import { totalReviews, populateUser } from './utils'

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



const you = {
  username: 'Pearl',
  isReturning: true,
}




//functions
//function to show total number of reviews on website 
totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

//function to display the word 'back' and username
populateUser(you.isReturning, you.username);
