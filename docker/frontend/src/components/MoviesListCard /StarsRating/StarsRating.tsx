import React, {FC, useState} from 'react';

import './StarsRating.css'

const StarsRating: FC = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div>
            <div className="rating">
                {[...Array(7)].map((star, index) => {
                    index++;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hover || rating) ? "off" : "on"}
                            onClick={() => setRating(index)}
                            onTouchMove={() => setHover(rating)}

                            onMouseEnter={() => setHover(index)}>
                            <span className={'stars'}>&#9733;</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default StarsRating;