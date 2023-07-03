console.log("I am in the pixifetch file, but not the function!");

require("dotenv").config();
const axios = require("axios"); 

exports.handler = async function (event, context) {
   console.log(event);
   console.log(context);
   console.log(event.queryStringParameters);
   console.log("I am in pixifetch, but before the api call");

   try {
    const { term } = event.queryStringParameters;
      console.log(term);
      const response = await axios.get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`,
        {
          headers: { Accept: "application/json", "Accept-Encoding": "identity" },
          params: { trophies: true },
        }
      );

      const data = response.json();
      const images = data.hits;
      console.log(response);
      console.log(images);
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ images }),
      };
   } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error })
    }
   }
};