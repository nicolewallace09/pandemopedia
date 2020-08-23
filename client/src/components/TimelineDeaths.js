import React, { useState, useEffect } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


function Chart() {
    const [apiData, setApiData] = useState([]);

    // comment
    useEffect(() => {
        componentDidMount()
    }, []
    )


    async function componentDidMount() {
        const api = "https://api.covidtracking.com/v1/us/daily.json";
        const response = await fetch(api);
        const data = await response.json();
        //console.log(data)


        // comment
        setApiData(
            [{
                Deaths: data[60].deathIncrease,
            }, {
                Deaths: data[59].deathIncrease,
            }, {
                Deaths: data[58].deathIncrease,
            }, {
                Deaths: data[57].deathIncrease,
            }, {
                Deaths: data[56].deathIncrease,
            }, {
                Deaths: data[55].deathIncrease,
            }, {
                Deaths: data[54].deathIncrease,
            }, {
                Deaths: data[53].deathIncrease,
            }, {
                Deaths: data[52].deathIncrease,
            }, {
                Deaths: data[51].deathIncrease,
            }, {
                Deaths: data[50].deathIncrease,
            }, {
                Deaths: data[49].deathIncrease,
            }, {
                Deaths: data[48].deathIncrease,
            }, {
                Deaths: data[47].deathIncrease,
            }, {
                Deaths: data[46].deathIncrease,
            }, {
                Deaths: data[45].deathIncrease,
            }, {
                Deaths: data[44].deathIncrease,
            }, {
                Deaths: data[43].deathIncrease,
            }, {
                Deaths: data[42].deathIncrease,
            }, {
                Deaths: data[41].deathIncrease,
            }, {
                Deaths: data[40].deathIncrease,
            }, {
                Deaths: data[39].deathIncrease,
            }, {
                Deaths: data[38].deathIncrease,
            }, {
                Deaths: data[37].deathIncrease,
            }, {
                Deaths: data[36].deathIncrease,
            }, {
                Deaths: data[35].deathIncrease,
            }, {
                Deaths: data[34].deathIncrease,
            }, {
                Deaths: data[33].deathIncrease,
            }, {
                Deaths: data[32].deathIncrease,
            }, {
                Deaths: data[31].deathIncrease,
            }, {
                Deaths: data[30].deathIncrease,
            }, {
                Deaths: data[29].deathIncrease,
            }, {
                Deaths: data[28].deathIncrease,
            }, {
                Deaths: data[27].deathIncrease,
            }, {
                Deaths: data[26].deathIncrease,
            }, {
                Deaths: data[25].deathIncrease,
            }, {
                Deaths: data[24].deathIncrease,
            }, {
                Deaths: data[23].deathIncrease,
            }, {
                Deaths: data[22].deathIncrease,
            }, {
                Deaths: data[21].deathIncrease,
            }, {
                Deaths: data[20].deathIncrease,
            }, {
                Deaths: data[19].deathIncrease,
            }, {
                Deaths: data[18].deathIncrease,
            }, {
                Deaths: data[17].deathIncrease,
            }, {
                Deaths: data[16].deathIncrease,
            }, {
                Deaths: data[15].deathIncrease,
            }, {
                Deaths: data[14].deathIncrease,
            }, {
                Deaths: data[13].deathIncrease,
            }, {
                Deaths: data[12].deathIncrease,
            }, {
                Deaths: data[11].deathIncrease,
            }, {
                Deaths: data[10].deathIncrease,
            }, {
                Deaths: data[9].deathIncrease,
            }, {
                Deaths: data[8].deathIncrease,
            }, {
                Deaths: data[7].deathIncrease,
            }, {
                Deaths: data[6].deathIncrease,
            }, {
                Deaths: data[5].deathIncrease,
            }, {
                Deaths: data[4].deathIncrease,
            }, {
                Deaths: data[3].deathIncrease,
            }, {
                Deaths: data[2].deathIncrease,
            }, {
                Deaths: data[1].deathIncrease,
            }, {
                name: "Today",
                Deaths: data[0].deathIncrease,
            }

            ]
        )


    }

    return (

        < div >
            {/* comment */}
            {apiData ? (<LineChart
                width={600}
                height={300}
                data={
                    // comment
                    apiData
                }
                margin={{
                    top: 5, right: 30, left: 40, bottom: 5,
                }
                }
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line dataKey="Deaths" fill="#FF0000" />

            </LineChart >) : null
            }


        </div >
    )
}

export default Chart;