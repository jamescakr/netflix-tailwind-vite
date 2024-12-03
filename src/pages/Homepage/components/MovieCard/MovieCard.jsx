import React from "react";
import { Check, X, Plus, ThumbsUp, ThumbsDown } from "lucide-react";

const MovieCard = ({ movie, index }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}')`,
        }}
        className="bg-cover cursor-pointer w-40 h-60 hover:scale-150 duration-200 delay-200 rounded-t-md group hover:-translate-y-10"
      >
        <div className="bg-[rgba(43,41,41,0.5)] opacity-0 hover:opacity-100 duration-200 delay-200 w-full h-full">
          <h1 className="text-2xl h-16">{movie.title}</h1>
          {/* {movie.genre_ids.map((id) => (
          <div className="text-white">{id}</div>
        ))} */}
          <div>
            <div>{movie.adult ? "over18" : "under18"}</div>
            <div>{movie.original_language}</div>
            <div>{movie.popularity}</div>
          </div>
        </div>

        {/* icons setting */}
        <div className="flex opacity-0 group-hover:opacity-100 group-hover:bg-[rgb(40,40,40)] duration-200 delay-200 h-14 rounded-b-lg">
          {/* 이거 아닌듯 수정필요 */}
          {<Plus /> ? "" : <Check />}
          <button className="flex items-center justify-center border-2 border-[rgb(147,147,147)] hover:border-white rounded-full w-9 h-9 mt-3 mx-2">
            <Plus className="h-5 w-5" strokeWidth={3} />
          </button>
          <button className="flex items-center justify-center border-2 border-[rgb(147,147,147)] hover:border-white rounded-full w-9 h-9 mt-3 mx-2">
            <X className="h-5 w-5" strokeWidth={3} />
          </button>
          <button className="flex items-center justify-center border-2 border-[rgb(147,147,147)] hover:border-white rounded-full w-9 h-9 mt-3 mx-2">
            <ThumbsUp className="h-4 w-4" strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
