import { useState } from 'react';

export default function FiveStar({ onRate }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (index) => {
        setRating(index);
        if (onRate) {
            onRate(index);
        }
    };

    return (
        <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    fill={star <= (hover || rating) ? '#facc15' : 'gray'}
                    className="cursor-pointer transition-colors duration-300"
                    onClick={() => handleClick(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                >
                    <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                </svg>
            ))}
        </div>
    );
}
