const getDataFromApi = async url => {
  const response = await fetch(url);
  const data = response.json();
  return data;
};

export default getDataFromApi;
