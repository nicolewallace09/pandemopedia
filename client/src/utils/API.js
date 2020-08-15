// example from book-search api
// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
// export const searchGoogleBooks = (query) => {
//     return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
//   };


export const covidDataCurrent = () => {
  return fetch ()
}



export const getCovidDetails = () => {

var apiUrlAllData1 = "https://corona.azure-api.net/all";

fetch(apiUrlAllData1)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    // verify api data
    console.log(data);
    
    // total cases (world)
    const totalCasesWorld = data[0].globalData.Confirmed;
    console.log('total global cases', totalCasesWorld);
  
    // total active cases (world)
    const totalActiveCasesWorld = data[0].globalData.Active;
    console.log('total global active cases', totalActiveCasesWorld);
  
    // new daily cases (world)
    const newCasesWorld = data[0].globalData.NewConfirmed;
    console.log('new global cases', newCasesWorld);
  
    // new daily deaths (world)
    const newDeathsWorld = data[0].globalData.NewDeaths;
    console.log('new global deaths', newDeathsWorld); 
  
    // total deaths (world)
    const totalDeathsWorld = data[0].globalData.Deaths;
    console.log('total global deaths', totalDeathsWorld);
  
    // new recovered (world)
    const newRecoveredWorld = data[0].globalData.NewRecovered;
    console.log('new global recovered', newRecoveredWorld);
  
    // total recovered (world)
    const totalRecoveredWorld = data[0].globalData.Recovered;
    console.log('total global recovered', totalRecoveredWorld);
  
    // timestamp for latest update (world)
    const lastUpdateTime = data[0].globalData.Last_Update;
    console.log('last update', lastUpdateTime);

})

};


  