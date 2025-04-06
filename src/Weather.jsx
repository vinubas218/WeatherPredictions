import React, { useEffect, useState } from 'react'
import { GoSearch } from "react-icons/go";

const Weather = () => {
    const [weather, setWeather] = useState(null)
    const [city, setCity] = useState('Bangalore')

    useEffect(() => {
        fetchWeather()
    }, [])

    const fetchWeather = async () => {
        try {
            const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cf319db61d25350ce853a4c8e5080cde`)
            const response = await fetchData.json()
            console.log("response", response)
            setWeather(response)
        } catch (error) {
            console.warn(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    return (
        <div className="bg-[url('/bg.jpg')] bg-cover bg-center min-h-screen w-full">
            <div className='flex flex-col items-center justify-center py-12 md:py-28'>
                <form onSubmit={handleSubmit}>
                    <div className=' relative pb-5'>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter city name"
                            className="border-2 w-full sm:w-96 border-blue-700 px-5 py-2 font-semibold rounded-full outline-none"
                        />
                        <button type="submit" className="ml-2 p-2 absolute right-5 top-1 text-white text-xl">
                            <GoSearch />
                        </button>
                    </div>
                </form>
                {
                    weather && (
                        <div className='flex flex-col gap-2 py-5 px-3'>
                            <div className='flex items-center justify-center gap-6 flex-wrap'>
                                <p className='uppercase text-5xl'>{weather.name},</p>
                                <p className='uppercase text-5xl'>{weather.sys.country}</p>
                            </div>
                            <p className='text-7xl text-center py-3'>{weather.main.temp}°C</p>
                            <p className='uppercase text-2xl text-center'>{weather.weather[0].description}</p>
                            <div className='flex flex-col md:flex-row gap-6 pt-6'>
                                <div className='flex flex-col gap-3 backdrop-brightness-95 p-5'>
                                    <p><strong className='font-semibold'>Latitude:</strong> {weather.coord.lat}</p>
                                    <p><strong className='font-semibold'>Longitude:</strong> {weather.coord.lon}</p>
                                </div>
                                <div className='flex flex-col gap-3 backdrop-brightness-95 p-5 '>
                                    <p><strong className='font-semibold'>Wind Gust:</strong> {weather.wind.gust} m/s</p>
                                    <p><strong className='font-semibold'>Wind Speed:</strong> {weather.wind.speed} m/s</p>
                                </div>
                                <div className='flex flex-col gap-3 backdrop-brightness-95 p-5 '>
                                    <p><strong className='font-semibold'>Humidity:</strong> {weather.main.humidity}%</p>
                                    <p><strong className='font-semibold'>Pressure:</strong> {weather.wind.speed} hPa</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Weather
