const BASE_URL =
  "https://failteireland.azure-api.net/opendata-api/v1/attractions?$filter=search.ismatch(%27Churches%27,%27tags%27)";

export const GET = async (query) => {
  const res = await fetch(`${BASE_URL}${query}`);
  const data = await res.json();

  return data;
};
