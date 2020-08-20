import React, { useState, useEffect } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
// import { covidDataCurrent } from '../utils/API'



const genericData = [
  {
    name: 'Page A', deaths: 4000,
  },
  {
    name: 'Page B', deaths: 3000, active: 1398, confirmed: 2210,
  },
  {
    name: 'Page C', deaths: 2000, active: 9800, confirmed: 2290,
  },
  {
    name: 'Page D', deaths: 2780, active: 3908, confirmed: 2000,
  },
  {
    name: 'Page E', deaths: 1890, active: 4800, confirmed: 2181,
  },
  {
    name: 'Page F', deaths: 2390, active: 3800, confirmed: 2500,
  },
  {
    name: 'Page G', deaths: 3490, active: 4300, confirmed: 2100,
  },
];

function Chart() {
  const jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  const [apiData, setApiData] = useState({});

  // comment
  useEffect(() => {
    componentDidMount()
  }, []
  )



  async function componentDidMount() {
    const api = "https://corona.azure-api.net/all";
    const response = await fetch(api);
    const data = await response.json();
    console.log(data)


    // comment
    setApiData(
      [{
        name: "USA",
        deaths: data[0].countryData[165].US.Summary.Deaths,
        active: data[0].countryData[165].US.Summary.Active,
        confirmed: data[0].countryData[165].US.Summary.Confirmed,
      }, {
        name: "Global",
        deaths: data[0].globalData.Deaths,
        active: data[0].globalData.Active,
        confirmed: data[0].globalData.Confirmed,
      }
      ]
    )




  }


  return (

    < div >
      {/* comment */}
      {apiData ? (<BarChart
        width={500}
        height={300}
        data={
          // comment
          apiData
        }
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }
        }
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="active" fill="#8884d8" />
        <Bar dataKey="deaths" fill="#82ca9d" />
        <Bar dataKey="confirmed" fill="#111" />

      </BarChart >) : null
      }


    </div >
  )
}

export default Chart;