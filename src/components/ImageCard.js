import React from 'react';

const ImageCard = ({ image }) => {
const tags = image.tags.split(",");

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* for the correct property name for image url, go to pixabay docs */}
            <img className='w-full' src={image.webformatURL} alt="for now, a cat" />
            <div className='px-6 py-4'>
                <div className="font-bold text-purple-500">
                Photo by {image.user}
                </div>
                <ul>
                <li>
                    <strong>Views: </strong>
                    {image.views}
                </li>
                <li>
                    <strong>Downloads: </strong>
                    {image.downloads}
                </li>
                <li>
                    <strong>Likes: </strong>
                    {image.likes}
                </li>
                </ul>
            </div>
            <div className='px-6 py-4'>
                {tags.map((tag, index) => {
                    return <span key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#{tag}</span>
                })}
            </div>
        </div>
    );
};

export default ImageCard;