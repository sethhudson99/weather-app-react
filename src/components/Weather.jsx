import React ,{ useState } from "react";
import axios from "axios";

const Weather = () => {

  const [data,setData]= useState({});
  const [location,setLocation]=useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=323b17fa3697dce9feb7a50a215523a7&units=imperial`;
  
  const searchLocation = (event) =>{
    if (event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }

  };


  return (
    <div className=" bg-gradient-to-b from-cyan-500 to-teal-500 w-full h-screen text-gray-300">
      <div className=" w-full h-screen flex flex-col items-center justify-between py-10">
        <div className=" flex flex-col items-center">
          <input type="text" placeholder="City " value={location} onChange={event => setLocation(event.target.value)} onKeyDown={searchLocation} className=" rounded-md bg-black bg-opacity-30 px-2 w-64 h-7 text-gray-300 text-lg" />
          <p className=" text-4xl py-11">{data.name}</p>
          <p className=" text-7xl py-11">{data.main ? <p>{data.main.temp.toFixed()}°F</p> : null}</p>
          <p className=" text-3xl py-6">{data.weather ? <p>{data.weather[0].main}</p> : null}</p>
        </div>
        <div className="grid grid-cols-3 gap-8 text-lg rounded-md bg-black bg-opacity-30 p-8">
          <div>
            <p>High</p>
            <p>{data.main ? <p>{data.main.temp_max.toFixed()}°F</p> : null}</p>
          </div>
          <div>
            <p>Low</p>
            <p>{data.main ? <p>{data.main.temp_min.toFixed()}°F</p> : null}</p>
          </div>
          <div>
            <p>Wind</p>
            <p>{data.wind ? <p>{data.wind.speed.toFixed()}mph</p> : null}</p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather