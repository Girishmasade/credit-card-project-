import hero from "./hero.svg";
import airmiles from "./airmiles.png";
import forex from "./forex.png";
import fuel from "./fuel.png";
import movie from "./movie.png";
import travel from "./travel.png";
import dining from "./dining.png";
import lifetime from "./lifetime.png";
import lounge from "./lounge.png";
import rupay from "./rupay.png";
import secured from "./secured.png";
import shopping from "./shopping.jpg";
import cashback from "./cashback.png";

// card categories img 2
import travelCreditCard from './cardCategories/Besttravel.jpg'
import fuelCreditCard from './cardCategories/FuelCreditCards.jpg'
import forexCreditCard from './cardCategories/CreditCardsForex.jpg'
import movieCreditCard from './cardCategories/Best Credit Cards For Movies.jpg'
import airCreditCard from './cardCategories/Best Air Miles Credit Cards.jpg'
import shoppingCreditCard from './cardCategories/Best Credit Cards For Shopping.jpg'
import diningCreditCard from './cardCategories/Best Dining Credit Cards.jpg'
import cashbackCreditCard from './cardCategories/Best Cashback Credit Cards.jpg'
import lifetimeCreditCard from './cardCategories/Best Lifetime Free Credit Cards.jpg'
import rupayCreditCard from './cardCategories/Best Rupay Credit Cards.jpg'
import securedCreditCard from './cardCategories/secured Credit Card.jpg'
import loungeaccessCreditCard from './cardCategories/Best Credit Cards For Lounge Access .jpg'


import gridbg from "./gridbg.png";

import axis from "./axis.svg";
import amex from "./amex.svg";
import au from "./au.svg";
import hdfc from "./hdfc.svg";
import icici from "./icici.svg";
import hsbc from "./hsbc.svg";
import idfc from "./idfc.svg";
import indusind from "./indusind-.svg";
import kotak from "./kotak.svg";
import sbicard from "./sbi-card-.svg";
import standard from "./standard.svg";
import yes from "./yes.svg";
import federal from "./federal.png";
import fintech from "./j.png";
import bobcard from "./bobcard.png";

// Card
import hdfmillcard from './card/hdfcmill.jpg'
import idfcmillenia from './card/idfcmillenia.jpg'
import idfcselectcard from './card/idfcselectcard.jpg'
import idfcwealth from './card/idfcwealth.png'
import rating from './rating.png'

// Blog
import credit1 from './Blog/Credit1.jpg'
import credit2 from './Blog/Credit2.jpg'
import credit3 from './Blog/Credit3.jpg'
import credit4 from './Blog/Credit4.jpg'
import credit5 from './Blog/Credit5.jpg'


export const assets = {
  hero,
  airmiles,
  forex,
  fuel,
  movie,
  travel,
  dining,
  gridbg,
  axis,
};

export const cardData = [
  {
    id: 1,
    title: "Travel",
    img: [travel],
    img2: [travelCreditCard]
  },

  {
    id: 2,
    title: "Fuel",
    img: [fuel],
    img2: [fuelCreditCard]
  },
  {
    id: 3,
    title: "Forex",
    img: [forex],
    img2: [forexCreditCard]
  },
  {
    id: 4,
    title: "Movie",
    img: [movie],
    img2: [movieCreditCard]
  },
  {
    id: 5,
    title: "Air Miles",
    img: [airmiles],
    img2: [airCreditCard]
  },
  {
    id: 6,
    title: "Dining",
    img: [dining],
    img2: [diningCreditCard]
  },
  {
    id: 7,
    title: "Cashback",
    img: [cashback],
    img2: [cashbackCreditCard]
  },
  {
    id: 8,
    title: "Lifetime Free",
    img: [lifetime],
    img2: [lifetimeCreditCard]
  },
  {
    id: 9,
    title: "Lounge Access",
    img: [lounge],
    img2: [loungeaccessCreditCard]
  },
  {
    id: 10,
    title: "Shopping",
    img: [shopping],
    img2: [shoppingCreditCard]
  },
  {
    id: 11,
    title: "Secured Credit Cards",
    img: [secured],
    img2: [securedCreditCard]
  },
  {
    id: 12,
    title: "Rupay",
    img: [rupay],
    img2: [rupayCreditCard]
  },
];

export const issueSubMenu = [
  {
    _id: 1,
    title: "HSBC",
    img: [hsbc],
  },
  {
    _id: 2,
    title: "IndusInd",
    img: [indusind],
  },
  {
    _id: 3,
    title: "Axis",
    img: [axis],
  },
  {
    _id: 4,
    title: "American Express",
    img: [amex],
  },
  {
    _id: 5,
    title: "IDFC First Bank",
    img: [idfc],
  },
  {
    _id: 6,
    title: "ICICI Bank",
    img: [icici],
  },
  {
    _id: 8,
    title: "SBI Card",
    img: [sbicard],
  },
  {
    _id: 9,
    title: "Federal Bank",
    img: [federal],
  },
  {
    _id: 10,
    title: "Fintech Card",
    img: [fintech],
  },
  {
    _id: 11,
    title: "BOB Card",
    img: [bobcard],
  },
  {
    _id: 12,
    title: "Kotak Mahindra",
    img: [kotak],
  },
  {
    _id: 13,
    title: "AU Bank",
    img: [au],
  },
  {
    _id: 14,
    title: "Yes Bank",
    img: [yes],
  },
  {
      _id: 15,
      title: 'HDFC',
      img: [hdfc],
  },
     {
      _id: 16,
      title: 'Standard Charated',
      img: [standard],
  },
];

export const creditCardData = [
  {
    id: 1,
    img: [hdfmillcard],
    title: 'HDFC Bank Millennia Credit Card',
    rating: [rating],
        p1: "Joining Fee: ₹1,000 + GST",
        p2: "Renewal Fee: ₹1,000 + GST",
        p3: "Reward Type: Cashback",
    category: 'hdfc',
    subCategory: 'indian-oil'
  },
  {
    id: 2,
    img: [idfcmillenia],
    title: 'HDFC Bank Millennia Credit Card 2',
    rating: [rating],
    p1: "Joining Fee: ₹1,000 + GST",
    p2: "Renewal Fee: ₹1,000 + GST",
    p3: "Reward Type: Cashback",
    category: 'hdfc',
    subCategory: 'indian-oil'
  },
  {
    id: 3,
    img: [idfcselectcard],
    title: 'HDFC Bank Millennia Credit Card 2',
    rating: [rating],
    p1: "Joining Fee: ₹1,000 + GST",
    p2: "Renewal Fee: ₹1,000 + GST",
    p3: "Reward Type: Cashback",
    category: 'hdfc',
    subCategory: 'indian-oil'
  },
  {
    id: 4,
    img: [idfcwealth],
    title: 'HDFC Bank Millennia Credit Card 2',
    rating: [rating],
    p1: "Joining Fee: ₹1,000 + GST",
    p2: "Renewal Fee: ₹1,000 + GST",
    p3: "Reward Type: Cashback",
    category: 'hdfc',
    subCategory: 'indian-oil'
  }
]

export const blogData = [
   {
     id: 1,
     img: credit1,
     title: 'Credit Cards in India: A Comprehensive Guide to Choosing the Best Card for Your Needs',
     Introduction : {
      context : 'In India, credit cards are increasingly becoming a crucial financial tool. They provide convenience, rewards, and financial flexibility, making them popular for daily transactions, online shopping, and big purchases. However, with a wide variety of options available, choosing the right credit card can be overwhelming.',
      purpose : 'This comprehensive guide will help you understand the different types of credit cards available in India, their benefits, and how to choose the best card based on your spending habits and financial needs.',
    }
  },
  {
    id: 2,
    img: credit2,
    title: 'Credit Cards in India: A Comprehensive Guide to Choosing the Best Card for Your Needs',
    Introduction : {
     context : 'In India, credit cards are increasingly becoming a crucial financial tool. They provide convenience, rewards, and financial flexibility, making them popular for daily transactions, online shopping, and big purchases. However, with a wide variety of options available, choosing the right credit card can be overwhelming.',
     purpose : 'This comprehensive guide will help you understand the different types of credit cards available in India, their benefits, and how to choose the best card based on your spending habits and financial needs.',
   }
 },
 {
  id: 3,
  img: credit3,
  title: 'Credit Cards in India: A Comprehensive Guide to Choosing the Best Card for Your Needs',
  Introduction : {
   context : 'In India, credit cards are increasingly becoming a crucial financial tool. They provide convenience, rewards, and financial flexibility, making them popular for daily transactions, online shopping, and big purchases. However, with a wide variety of options available, choosing the right credit card can be overwhelming.',
   purpose : 'This comprehensive guide will help you understand the different types of credit cards available in India, their benefits, and how to choose the best card based on your spending habits and financial needs.',
 }
},

{
  id: 4,
  img: credit4,
  title: 'Credit Cards in India: A Comprehensive Guide to Choosing the Best Card for Your Needs',
  Introduction : {
   context : 'In India, credit cards are increasingly becoming a crucial financial tool. They provide convenience, rewards, and financial flexibility, making them popular for daily transactions, online shopping, and big purchases. However, with a wide variety of options available, choosing the right credit card can be overwhelming.',
   purpose : 'This comprehensive guide will help you understand the different types of credit cards available in India, their benefits, and how to choose the best card based on your spending habits and financial needs.',
 }
},

{
  id: 5,
  img: credit5,
  title: 'Credit Cards in India: A Comprehensive Guide to Choosing the Best Card for Your Needs',
  Introduction : {
   context : 'In India, credit cards are increasingly becoming a crucial financial tool. They provide convenience, rewards, and financial flexibility, making them popular for daily transactions, online shopping, and big purchases. However, with a wide variety of options available, choosing the right credit card can be overwhelming.',
   purpose : 'This comprehensive guide will help you understand the different types of credit cards available in India, their benefits, and how to choose the best card based on your spending habits and financial needs.',
 }
},
    
]