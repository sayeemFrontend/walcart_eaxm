import {
  bookS,
  bookS2,
  elecA,
  fastF,
  homeA,
  homeL,
  lapDesk,
  moreC,
} from "../assets";
import slide1 from "./slide-assets/pic5.png";
import slide2 from "./slide-assets/pico2.png";
import slide3 from "./slide-assets/pic03.png";
import slide4 from "./slide-assets/pic04.png";

export const categories = [
  {
    id: 1,
    title: "Laptop and Desktop",
    subCategory: [
      { id: 1, title: "Laptop and Desktop" },
      { id: 2, title: "Home Living" },
      {
        id: 3,
        title: "Book and Stationary",
        subCategory: [
          {
            id: 1,
            title: "Laptop and Desktop",
          },
          { id: 2, title: "Home Living" },
          {
            id: 3,
            title: "Book and Stationary",
          },
          { id: 4, title: "Home Appliances" },
        ],
      },
      { id: 4, title: "Home Appliances" },
      { id: 5, title: "Book and Stationary" },
      {
        id: 6,
        title: "Electronics Appliances",
      },
      { id: 7, title: "Fast Food and Snacks" },
      { id: 8, title: "More Categories " },
    ],
    icon: lapDesk,
  },
  { id: 2, title: "Home Living", icon: homeL },
  {
    id: 3,
    title: "Book and Stationary",
    subCategory: [
      { id: 1, title: "Laptop and Desktop" },
      { id: 2, title: "Home Living" },
      {
        id: 3,
        title: "Book and Stationary",
        subCategory: [
          {
            id: 1,
            title: "Laptop and Desktop",
          },
          { id: 2, title: "Home Living" },
          {
            id: 3,
            title: "Book and Stationary",
          },
          { id: 4, title: "Home Appliances" },
        ],
      },
      { id: 4, title: "Home Appliances" },
      { id: 5, title: "Book and Stationary" },
      {
        id: 6,
        title: "Electronics Appliances",
      },
      { id: 7, title: "Fast Food and Snacks" },
      { id: 8, title: "More Categories " },
    ],
    icon: bookS,
  },
  {
    id: 4,
    title: "Home Appliances",
    subCategory: [
      { id: 1, title: "Laptop and Desktop" },
      { id: 2, title: "Home Living" },
      {
        id: 3,
        title: "Book and Stationary",
        subCategory: [
          {
            id: 1,
            title: "Laptop and Desktop",
          },
          { id: 2, title: "Home Living" },
          {
            id: 3,
            title: "Book and Stationary",
          },
          { id: 4, title: "Home Appliances" },
        ],
      },
      { id: 4, title: "Home Appliances" },
      { id: 5, title: "Book and Stationary" },
      {
        id: 6,
        title: "Electronics Appliances",
      },
      { id: 7, title: "Fast Food and Snacks" },
      { id: 8, title: "More Categories " },
    ],
    icon: homeA,
  },
  { id: 5, title: "Book and Stationary", icon: bookS2 },
  {
    id: 6,
    title: "Electronics Appliances",
    subCategory: [
      { id: 1, title: "Laptop and Desktop" },
      { id: 2, title: "Home Living" },
      {
        id: 3,
        title: "Book and Stationary",
        subCategory: [
          {
            id: 1,
            title: "Laptop and Desktop",
          },
          { id: 2, title: "Home Living" },
          {
            id: 3,
            title: "Book and Stationary",
          },
          { id: 4, title: "Home Appliances" },
        ],
      },
      { id: 4, title: "Home Appliances" },
      { id: 5, title: "Book and Stationary" },
      {
        id: 6,
        title: "Electronics Appliances",
      },
      { id: 7, title: "Fast Food and Snacks" },
      { id: 8, title: "More Categories " },
    ],
    icon: elecA,
  },
  { id: 7, title: "Fast Food and Snacks", icon: fastF },
  {
    id: 8,
    title: "More Categories ",
    subCategory: [
      { id: 1, title: "Laptop and Desktop" },
      { id: 2, title: "Home Living" },
      {
        id: 3,
        title: "Book and Stationary",
        subCategory: [
          {
            id: 1,
            title: "Laptop and Desktop",
          },
          { id: 2, title: "Home Living" },
          {
            id: 3,
            title: "Book and Stationary",
          },
          { id: 4, title: "Home Appliances" },
        ],
      },
      { id: 4, title: "Home Appliances" },
      { id: 5, title: "Book and Stationary" },
      {
        id: 6,
        title: "Electronics Appliances",
      },
      { id: 7, title: "Fast Food and Snacks" },
      { id: 8, title: "More Categories " },
    ],
    icon: moreC,
  },
];
export const slideImages = [
  { id: 1, url: slide1 },
  { id: 2, url: slide2 },
  { id: 3, url: slide3 },
  { id: 4, url: slide4 },
];
