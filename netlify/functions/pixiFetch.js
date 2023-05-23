exports.handler = async function (event, context) {
   console.log(event);
   console.log(context);
   console.log(event.queryStringParameters);

   try {
   const { term } = event.queryStringParameters;
      console.log(term);
      const response = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`);
      const images = response.data.hits;
      console.log(response);
      console.log(images);
      return {
        statusCode: 200,
        body: JSON.stringify({ images }),
      };
   } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error })
    }
   }
};