export const metadata = {
  title: "Home",
};
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return fetch(URL).then((response) => response.json());
}
export default async function Tomato() {
  // const [movies, setMovies] = useState();
  // const getMovies = async () => {
  //   const response = await fetch(

  //   );
  //   const json = await response.json();
  //   setMovies(json);
  // };
  // useEffect(() => {
  //   getMovies();
  // }, []);
  const response = await getMovies();
  return <div>{JSON.stringify(response)}</div>;
}
