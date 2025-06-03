import React, { useEffect, useState } from 'react'
import { generateMockData } from '../utils/mockData'
import LineChart from '../components/LineChart';
function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(prevData => {
        const newData = generateMockData();
        return [...prevData, newData].slice(-10);
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <h1>Real-Time Dashboard</h1>
      <LineChart data={data}/>
    </div>
  )
}

export default Dashboard
