import Link from "next/link";

export const metadata = {
  title: "Home",
};
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return fetch(API_URL).then((response) => response.json());
}
export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
