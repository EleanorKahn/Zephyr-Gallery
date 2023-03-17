import React from 'react';

const ImageCard = ({ image }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* for the correct property name for image url, go to pixabay docs */}
            <img className='w-full' src={image.webformatURL} alt="for now, a cat" />
            <div className='px-6 py-4'>
                <div className="font-bold text-purple-500">
                Photo by John Doe
                </div>
                <ul>
                <li>
                    <strong>Views: </strong>
                    4000
                </li>
                <li>
                    <strong>Downloads: </strong>
                    300
                </li>
                <li>
                    <strong>Likes: </strong>
                    400
                </li>
                </ul>
            </div>
            <div className='px-6 py-4'>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#tag1</span>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#tag2</span>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#tag3</span>
            </div>
        </div>
    );
};

export default ImageCard;