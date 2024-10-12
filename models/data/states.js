import "dotenv/config.js"
import  "../../config/database.js";
import States from "../States.js";

let states = [
    {
      name: "New York",
      capital: false,
      country: "USA",
      population: 8419600,
      area: 783.8,
      democracy: true
    },
    {
      name: "Tokyo",
      capital: true,
      country: "Japan",
      population: 13929286,
      area: 2194.07,
      democracy: true
    },
    {
      name: "Paris",
      capital: true,
      country: "France",
      population: 2148327,
      area: 105.4,
      democracy: true
    },
    {
      name: "Berlin",
      capital: true,
      country: "Germany",
      population: 3669491,
      area: 891.8,
      democracy: true
    },
    {
      name: "Moscow",
      capital: true,
      country: "Russia",
      population: 11920000,
      area: 2561.5,
      democracy: false
    },
    {
      name: "Buenos Aires",
      capital: true,
      country: "Argentina",
      population: 3075646,
      area: 203.3,
      democracy: true
    },
    {
      name: "Beijing",
      capital: true,
      country: "China",
      population: 21710000,
      area: 16410.5,
      democracy: false
    },
    {
      name: "London",
      capital: true,
      country: "United Kingdom",
      population: 8982000,
      area: 1572,
      democracy: true
    },
    {
      name: "Sydney",
      capital: false,
      country: "Australia",
      population: 5312163,
      area: 12368,
      democracy: true
    },
    {
      name: "Rio de Janeiro",
      capital: false,
      country: "Brazil",
      population: 6748000,
      area: 1200,
      democracy: true
    }
  ];

  States.insertMany(states)