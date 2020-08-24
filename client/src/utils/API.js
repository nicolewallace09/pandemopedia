// search for covid data by State
export const searchByState = (query) => {
  console.log(query);
  return fetch(`https://corona.azure-api.net/country/us/${query}`);
  
};

// searcg fir covid data by city (not being used at this time)
export const searchByCity = (query, cityQuery) => {
  console.log(query);
  console.log(cityQuery);
  return fetch(`https://corona.azure-api.net/country/us/${query}/${cityQuery}`); 
};