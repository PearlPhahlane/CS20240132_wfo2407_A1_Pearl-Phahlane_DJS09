// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number
const reviewTotalDisplay = document.querySelector("#reviews");
const userNameDisplay = document.querySelector("#user");
const returningUserDisplay = document.querySelector("#returning-user")

const reviews = [
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

//function to show total number of reviews on website 
function totalReviews(value : number, reviewer: string, isLoyalty: boolean) {
    const showIcon = isLoyalty ? "⭐️" : "";
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + " " + showIcon
}
totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

const you = {
  username: 'Pearl',
  isReturning: true,
}

function populateUser (isReturning: boolean, userName: string) {
  if(isReturning) {
    returningUserDisplay.innerHTML = 'back'
  }
  userNameDisplay.innerHTML = userName
}
populateUser(you.isReturning, you.username)