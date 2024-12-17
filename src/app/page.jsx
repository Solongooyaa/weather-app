"use client";
import { SearchIcon } from "@/components/SearchIcon";
import { Card } from "@/components/Card";
import { SearchInput } from "@/components/SearchInput";
import { useEffect, useState } from "react";
import { Corner } from "@/components/Corner";
import { Circles } from "@/components/Circles";

const API_KEY = "77953522cf0e4027b4f73033241312";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [dayWeather, setDayWeather] = useState({
    temperature: 0,
    condition:'',
    nightTemperature:0,
    date:''
  });

  const onChangeText = (e) => {
    setSearch(e.target.value);
  };
  const onPressEnter = (e) => {
    if (e.code === "Enter") {
      setCity(search);
    }
  };
  
  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setDayWeather({
          temperature: data.forecast.forecastday[0].day.maxtemp_c,
          condition: data.forecast.forecastday[0].day.condition.text.trim(),
          nightTemperature: data.forecast.forecastday[0].day.mintemp_c,
          date: data.forecast.forecastday[0].date,
        });
      });
  }, [city]);

  return (
    <div className="w-full h-screen flex relative justify-center items-center">
      
    
      <div className="w-[50%] h-full bg-[#F3F4F6] rounded-tl-[2.5rem] rounded-bl-[2.5rem] p-8">
        <SearchInput
          search={search}
          onChangeText={onChangeText}
          onPressEnter={onPressEnter}
        />
        <Card
          value={"day"}
          temperature={dayWeather.temperature}
          condition={dayWeather.condition}
          cityName={city}
          date={dayWeather.date}
        
        />
      </div>

      <div className="w-[50%] h-full bg-[#0F141E] rounded-tr-[2.5rem] rounded-br-[2.5rem] p-8 justify-center items-center relative ">
        <Card
          value="night"
          temperature={dayWeather.nightTemperature}
          condition={dayWeather.condition}
          cityName={city}
          date={dayWeather.date}
        />
        <Corner />
        <Circles/>
      
       
      </div>
    </div>
  );
}
