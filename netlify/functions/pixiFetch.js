exports.handler = async function (event, context) {
   console.log(event);
   console.log(context);
   console.log(event.queryStringParameters);

   try {
    const { term } = event.queryStringParameters;
      console.log(term);
      const response = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`);
      const data = await response.json();
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