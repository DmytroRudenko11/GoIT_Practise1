const API = "https://api.pexels.com/v1/search";
const KEY = "FUF46zmaymVZvGw1wx0nala6QHuqbE1w0kI9oWyzHnobGgsDvb6qlK4J";
export const fetchPhotos = async (query, page = 1, perPage = 15) => {
  const result = await fetch(
    `${API}?query=${query}&size=small&page=${page}&per_page=${perPage}`,
    {
      headers: {
        Authorization: KEY,
      },
    }
  );
  const { photos } = await result.json();
  return photos;
};
