const axios = require("axios");
const cheerio = require("cheerio");
const siteUrl = "https://surfer.com/";
const Current = require('../models/Current');

const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};

const $ = await fetchData();
const article = $('.article > .article-standard-ct').text();
console.log(article)

//some conditions to help filter through the text
