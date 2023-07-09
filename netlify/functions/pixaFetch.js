//mockback the shape of your data, and have your lambda function return the mocked up data

console.log("I am in the pixafetch file, but not the function!");

// require("dotenv").config();
const axios = require("axios"); 

exports.handler = async function (event, context) {
  console.log(event);
  console.log(context);
  //  console.log(event.queryStringParameters);
  console.log("I am in pixafetch, but before the api call");
   const {term} = event.queryStringParameters;
   console.log(term);

   const URL = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`;

   try {
    const { term } = event.queryStringParameters;
      console.log(term);
      const response = await axios.get(
        URL,
        {
          headers: { Accept: "application/json", "Accept-Encoding": "identity" },
          params: { trophies: true },
        },

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