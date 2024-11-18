const reviewTotalDisplay = document.querySelector("#reviews");
const userNameDisplay = document.querySelector("#user");
const returningUserDisplay = document.querySelector("#returning-user");
import { LoyaltyUser } from "./enums";

export function totalReviews(value : number, reviewer: string, isLoyalty: LoyaltyUser) {
    const showIcon = LoyaltyUser.GOLD_USER ? "⭐️" : "";
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + " " + showIcon
}

export function populateUser(isReturning: boolean, firstName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = firstName;
}