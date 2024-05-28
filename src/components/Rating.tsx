import { StarHalf, StarIcon } from "lucide-react";
import React from "react";

interface RatingProps {
    rating: number;
}

const Rating = ({ rating }: RatingProps) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
        <div className="flex items-center">
            {[...Array(fullStars)].map((_, index) => (
                <StarIcon key={index} className="text-yellow-500 fill-yellow-500" size={12} />
            ))}
            {halfStar === 1 && <StarHalf className="text-yellow-500 fill-yellow-500" size={12} />}
            {[...Array(emptyStars)].map((_, index) => (
                <StarIcon key={index} size={12} />
            ))}
        </div>
    );
};

export default Rating;
