import React, { PureComponent } from 'react';
import { Spinner } from 'react-bootstrap';
import {
  PieChart, Pie, Cell,
} from 'recharts';

const COLORS = [
  // '#0088FE', 
'#ffc107', '#29a744', '#dc3644'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class CountryTotalChart extends PureComponent {
  constructor() {
    super()
    this.state = {
        data: [],
        loaded: false 
      }    
  }

  componentDidMount() {
    return fetch('https://corona.azure-api.net/all')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        data: [
          // {
          //   name: 'Confirmed', value: responseJson[0].countryData[165].US.Summary.Confirmed
          // },
          {
            name: 'Active', value: responseJson[0].countryData[165].US.Summary.Active
          },
          {
            name: 'Recovered', value: responseJson[0].countryData[165].US.Summary.Recovered
          },
          {
            name: 'Deaths', value: responseJson[0].countryData[165].US.Summary.Deaths
          }
        ]
        
    
    })
    this.setState({ loaded: true })
    // console.log("thisCountry", responseJson, this.state.data)

  })

};

   

  render() {
    if (this.state.loaded === false)
    return (
      <Spinner animation="border" variant="danger" role="status">
      <span className="sr-only">Loading...</span>
      </Spinner>)
    else 
    return (
      <PieChart width={350} height={350}>
      <Pie
        data={this.state.data}
        cx={100}
        cy={100}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {
          this.state.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
      </PieChart>
        );
      }
    }
