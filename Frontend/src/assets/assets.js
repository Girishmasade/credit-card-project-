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
  },

  {
    id: 2,
    title: "Fuel",
    img: [fuel],
  },
  {
    id: 3,
    title: "Forex",
    img: [forex],
  },
  {
    id: 4,
    title: "Movie",
    img: [movie],
  },
  {
    id: 5,
    title: "Air Miles",
    img: [airmiles],
  },
  {
    id: 6,
    title: "Dining",
    img: [dining],
  },
  {
    id: 7,
    title: "Cashback",
    img: [cashback],
  },
  {
    id: 8,
    title: "Lifetime Free",
    img: [lifetime],
  },
  {
    id: 9,
    title: "Lounge Access",
    img: [lounge],
  },
  {
    id: 10,
    title: "Shopping",
    img: [shopping],
  },
  {
    id: 11,
    title: "Secured Credit Cards",
    img: [secured],
  },
  {
    id: 12,
    title: "Rupay",
    img: [rupay],
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