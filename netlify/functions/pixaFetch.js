//mockback the shape of your data, and have your lambda function return the mocked up data

console.log("I am in the pixafetch file, but not the function!");

exports.handler = async function (event, context) {
    console.log(event);
    console.log(context);
    console.log(event.queryStringParameters);
    console.log("I am in pixafetch, but before the api call");
    const {term} = event.queryStringParameters;
    console.log(term);

   //const URL = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`;
   //

   try {
    const { term } = event.queryStringParameters;
      console.log(term);

      const response = await fetch('http://localhost:3000/hits');

      //shape of the data!! 
      const data = await response.json();
      const images = data;

      //both the below are being logged as 'undefined'
      console.log(response);
      console.log(images);
      return data;

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