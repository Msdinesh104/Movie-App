import React, { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WatchListContext } from "../Context/WatchListcontext";

const Moviecard = ({ movie }) => {
  const { watchlist, toggledWatchlist } = useContext(WatchListContext);

  const inWatchList = watchlist.some((m) => m.id === movie.id);

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white relative">
      <img
        src={posterUrl}
        alt={movie.title}
        className="w-full aspect-[2/3] object-cover rounded-sm"
      />

      <h3 className="text-lg font-bold mt-4">{movie.title}</h3>
      <p className="text-sm text-gray-400">{movie.release_date}</p>

      <button
        className="absolute top-3 right-3 z-20 text-red-500 text-2xl bg-black/40 p-1 rounded-full backdrop-blur"
        onClick={() => toggledWatchlist(movie)}
      >
        {inWatchList ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default Moviecard;
