const reviewTotalDisplay = document.querySelector("#reviews");
const userNameDisplay = document.querySelector("#user");
const returningUserDisplay = document.querySelector("#returning-user");

export function totalReviews(value : number, reviewer: string, isLoyalty: boolean) {
    const showIcon = isLoyalty ? "⭐️" : "";
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + " " + showIcon
}

export function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}