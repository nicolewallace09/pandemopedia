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
        console.log(data)


        // comment
        setApiData(
            [{
                name: data[30].date,
                Positive: data[30].positiveIncrease,
            }, {
                Positive: data[29].positiveIncrease,
            }, {
                Positive: data[28].positiveIncrease,
            }, {
                Positive: data[27].positiveIncrease,
            }, {
                Positive: data[26].positiveIncrease,
            }, {
                Positive: data[25].positiveIncrease,
            }, {
                Positive: data[24].positiveIncrease,
            }, {
                Positive: data[23].positiveIncrease,
            }, {
                Positive: data[22].positiveIncrease,
            }, {
                Positive: data[21].positiveIncrease,
            }, {
                Positive: data[20].positiveIncrease,
            }, {
                Positive: data[19].positiveIncrease,
            }, {
                Positive: data[18].positiveIncrease,
            }, {
                Positive: data[17].positiveIncrease,
            }, {
                Positive: data[16].positiveIncrease,
            }, {
                Positive: data[15].positiveIncrease,
            }, {
                Positive: data[14].positiveIncrease,
            }, {
                Positive: data[13].positiveIncrease,
            }, {
                Positive: data[12].positiveIncrease,
            }, {
                Positive: data[11].positiveIncrease,
            }, {
                Positive: data[10].positiveIncrease,
            }, {
                Positive: data[9].positiveIncrease,
            }, {
                Positive: data[8].positiveIncrease,
            }, {
                Positive: data[7].positiveIncrease,
            }, {
                Positive: data[6].positiveIncrease,
            }, {
                Positive: data[5].positiveIncrease,
            }, {
                Positive: data[4].positiveIncrease,
            }, {
                Positive: data[3].positiveIncrease,
            }, {
                Positive: data[2].positiveIncrease,
            }, {
                Positive: data[1].positiveIncrease,
            }, {
                name: "Today",
                Positive: data[0].positiveIncrease,
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
                <Line dataKey="Positive" fill="#008000" />

            </LineChart >) : null
            }


        </div >
    )
}

export default Chart;