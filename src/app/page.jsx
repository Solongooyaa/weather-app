"use client";
import { SearchIcon } from "@/components/SearchIcon";
import { Card } from "@/components/Card";
import { SearchInput } from "@/components/SearchInput";
import { useEffect, useState } from "react";
import { Corner } from "@/components/Corner";

const API_KEY = "77953522cf0e4027b4f73033241312";

export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [dayWeather, setDayWeather] = useState({});

  const onChangeText = (e) => {
    setSearch(e.target.value);
  };
  const onPressEnter = (e) => {
    if (e.code === "Enter") {
      setCity(search);
    }
  };
  console.log(city);
  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setDayWeather({
          temperature: data.forecast.forecastday[0].day.maxtemp_c,
          condition: data.forecast.forecastday[0].day.condition.text,
          nightTemperature: data.forecast.forecastday[0].day.mintemp_c,
          date: data.forecast.forecastday[0].date,
        });
      });
  }, [city]);
  console.log(data);

  return (
    <div className="w-full h-screen flex ">
      <div className="w-[50%] h-full bg-[#F3F4F6]  rounded-tl-[2.5rem] rounded-bl-[2.5rem] p-8">
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
        <div className="w-[400px] h-[400px] absolute border rounded-full -left-[200px] top-[380px] "></div>
        <div className="w-[600px] h-[600px] absolute border rounded-full -left-[290px] top-[280px] "></div>
        <div className="w-[800px] h-[800px] absolute border rounded-full -left-[380px] top-[180px] "></div>
        <div className="w-[1000px] h-[1000px] absolute border rounded-full -left-[470px] top-[80px] "></div>
      </div>
    </div>
  );
}
