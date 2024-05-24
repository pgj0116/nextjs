// async function getMopvie(id: string) {
//   console.log(`Fetching movies: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// async function getVideo(id: string) {
//   console.log(`Fetching videos: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   return response.json();
// }
interface IParams {
  params: { id: string };
}
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
