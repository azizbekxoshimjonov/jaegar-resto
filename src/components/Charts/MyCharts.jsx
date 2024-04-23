import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Hot Dishes',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: 'Cold Dishes',
    uv: 26.69,
    pv: 4567,
    fill: '#55968f',
  },
  {
    name: 'Soup',
    uv: 15.69,
    pv: 1398,
    fill: 'rgb(255, 124, 163)',
  },
  {
    name: 'Grill',
    uv: 8.22,
    pv: 9800,
    fill: 'rgb(255, 181, 114)',
  },
  {
    name: 'Appetizar',
    uv: 20.63,
    pv: 3908,
    fill: 'rgb(101, 176, 246)',
  },
  {
    name: 'Desert',
    uv: 20.63,
    pv: 3908,
    fill: 'rgb(101, 176, 246)',
  },
 
 
];

const style = {
  top: '50%',
  right: 200,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

function MyChart(){

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={20} data={data}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }

  export default MyChart