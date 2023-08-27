//mockback the shape of your data, and have your lambda function return the mocked up data
import fetch from 'node-fetch';
console.log("I am in the pixafetch file, but not the function!");

exports.handler = async function (event, context) {
    console.log("I am in pixafetch, but before the api call");
    const term = event.queryStringParameters.q;
    //const { q } = event.queryStringParameters
    //could do const q as "etc"
    //on 14 would be &${q}

   try {
      const URL = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`;

      const response = await fetch(URL);

      //shape of the data!! 
      const data = await response.json();
      const images = {
          statusCode: 200,
          body: JSON.stringify(data)
      }

      return images;

   } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error })
    }
   }
};