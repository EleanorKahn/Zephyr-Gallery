import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("roses");
  //handling errors in the UI, and/or displaying errors in the UI?
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPixi() {
      const URL = `/netlify/functions/pixiFetch?q=${term}`;
      try {
        setIsLoading(true);
        const response = await fetch(URL);
        const data = await response.json();
        setIsLoading(false);
        setImages(data.hits);
        return data;
      } catch (err) {
        console.log(err);
        setError("An error occured while fetching the data.");
      } finally {
        console.log('I am in the finally block');
      }
    }
    fetchPixi();
  }, [term]);

  

  if (error) {
    return <div>Error: {error}</div>
  }
  
  return (
    <div className='container mx-auto'>
      <h1 className="max-w-sm text-center mx-auto mt-10 text-2xl text-purple-500 font-bold">Zephyr Gallery</h1>
      <h2 className="max-w-sm text-center mx-auto text-purple-500 opacity-60">Explore where the wind takes you...</h2>
      <ImageSearch searchText={(text) => setTerm(text)}/>
      {!isLoading && images.length === 0 && <h1 className='text-4xl text-center mx-auto mt-32'>No Images Found</h1> }
      {isLoading 
        ? <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1> 
        : <div className='grid grid-cols-3 gap-4'>
            {images.map((image) => {
              return <ImageCard key={image.id} image={image} />
            })}
          </div>
      }
    </div>
  );
}

export default App;
