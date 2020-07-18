const cheerio = require("cheerio");
const axios = require("axios");
const siteUrl = "https://surfer.com/";
const title = new Set();
const image = new Set();
const text = new Set();
const author = new Set();
const url = new Set();

const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};
const getResults = async () => {
  const $ = await fetchData();

  $(".article__title").each((index, element) => {
    title.add($(element).text());
    console.log(title);
  });



  /* $(".ok-thumb").each((index, element) => {
   image.add($(element).text());
   console.log(image);
  });
  $(".article__subtitle").each((index, element) => {
   text.add($(element).text());
   console.log(text);
  });

  $(".article__meta").each((index, element) => {
    author.add($(element).text());
    console.log(author);
   });

   $("a").each((index, element) => {
    url.add($(element).text());
    console.log(url);
   }); */


//Convert to an array to sort the results

return {
  title: [...title].sort()
/*   image: [...image].sort(),
  text: [...text].sort(),
  author: [...author].sort(),
  url: [...url].sort() */
 };
};


module.exports = getResults;