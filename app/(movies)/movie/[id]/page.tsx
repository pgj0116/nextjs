import { API_URL } from "../../../(home)/page";
async function getMopvie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMopvie(id);
  return <h1>{movie.title}</h1>;
}
