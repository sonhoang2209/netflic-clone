import { useRouter } from "next/router";
import React from "react";
import { IFilmProps } from "../../../../types/IProps";
import StarRate from "../../atoms/StarRate";

type IFilmItemProps = Pick<
  IFilmProps,
  "title" | "poster_path" | "vote_average" | "id"
>;
const FilmItem: React.FC<IFilmItemProps> = ({
  title,
  poster_path,
  vote_average,
  id,
}) => {
  const router = useRouter();
  const handleDetailFilm = () => {
    router.push(`/movie/${id}`);
  };
  return (
    <div onClick={handleDetailFilm} className="flex my-2 cursor-pointer">
      <img className="mr-3 w-14 h-14" src={poster_path} alt="" />
      <div>
        <p className="text-textColor hover:text-secondColor">{title}</p>
        <StarRate edit={false} size={18} star={vote_average} />
      </div>
    </div>
  );
};

export default FilmItem;
