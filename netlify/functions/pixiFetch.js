exports.handler = async function (event, context) {
    console.log(event);
    console.log(context);
    console.log(event.queryStringParameters);

    const { term } = event.queryStringParameters.q;
        await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
          .then((res) => {
            console.log(res);
            return {
                statusCode: 200,
                body: JSON.stringify({ title: res.data.title }),
            };
          })
          .catch(err => console.log(err))
};