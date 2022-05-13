import React from "react";
import ReactStars from "react-stars";

interface IStarProps {
  star: number;
  size: number;
  edit: boolean;
  onChange?: (newRating: number) => void;
}
const StarRate: React.FC<IStarProps> = ({ star, size, edit, onChange }) => {
  return (
    <ReactStars
      count={10}
      size={size}
      value={star}
      edit={edit}
      color2={"#ffd700"}
      onChange={onChange}
    />
  );
};

export default StarRate;
