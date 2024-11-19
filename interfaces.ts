import { LoyaltyUser } from "./enums";
import { Title, Price } from "./type";

//implement interface to clean up repetitions
export interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}


export interface Properties {
  image: string;
  title: Title;
  PricePerNight: Price;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  };
  contact: [number, string];
  isAvailable: boolean;
}