import React from "react";
import MovieSlider from "../../common/MovieSlider";
import { responsive } from "../../constants/responsive";
import { useUpcomingMoviesQuery } from "../../hooks/useUpcomingMovies";

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();
  // console.log("Upcoming DATA", data);

  if (isLoading) {
    return null;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (error) {
    console.log("error occurred from UpcomingMovieSlide");
  }

  return (
    <div>
      <MovieSlider
        title="Upcoming Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcomingMovieSlide;
