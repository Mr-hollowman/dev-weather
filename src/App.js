import React, { useEffect, useState } from 'react';
import "./App.css"
import axios from 'axios';
export default function App() {
  const [data, setData] = useState({ "cod": "200", "message": 0, "cnt": 40, "list": [{ "dt": 1685739600, "main": { "temp": 15.21, "feels_like": 14.41, "temp_min": 12.38, "temp_max": 15.21, "pressure": 1023, "sea_level": 1023, "grnd_level": 1021, "humidity": 62, "temp_kf": 2.83 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 3 }, "wind": { "speed": 4.12, "deg": 46, "gust": 8.03 }, "visibility": 10000, "pop": 0, "sys": { "pod": "n" }, "dt_txt": "2023-06-02 21:00:00" }, { "dt": 1685750400, "main": { "temp": 12.03, "feels_like": 11.17, "temp_min": 9.73, "temp_max": 12.03, "pressure": 1023, "sea_level": 1023, "grnd_level": 1021, "humidity": 72, "temp_kf": 2.3 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 4 }, "wind": { "speed": 3.4, "deg": 36, "gust": 9.91 }, "visibility": 10000, "pop": 0, "sys": { "pod": "n" }, "dt_txt": "2023-06-03 00:00:00" }, { "dt": 1685761200, "main": { "temp": 8.44, "feels_like": 6.5, "temp_min": 8.44, "temp_max": 8.44, "pressure": 1024, "sea_level": 1024, "grnd_level": 1021, "humidity": 82, "temp_kf": 0 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04n" }], "clouds": { "all": 62 }, "wind": { "speed": 3.23, "deg": 25, "gust": 9.43 }, "visibility": 10000, "pop": 0, "sys": { "pod": "n" }, "dt_txt": "2023-06-03 03:00:00" }, { "dt": 1685772000, "main": { "temp": 10.52, "feels_like": 9.61, "temp_min": 10.52, "temp_max": 10.52, "pressure": 1024, "sea_level": 1024, "grnd_level": 1020, "humidity": 76, "temp_kf": 0 }, "weather": [{ "id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d" }], "clouds": { "all": 45 }, "wind": { "speed": 4.02, "deg": 32, "gust": 8.47 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-03 06:00:00" }, { "dt": 1685782800, "main": { "temp": 16.92, "feels_like": 16.21, "temp_min": 16.92, "temp_max": 16.92, "pressure": 1024, "sea_level": 1024, "grnd_level": 1020, "humidity": 59, "temp_kf": 0 }, "weather": [{ "id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d" }], "clouds": { "all": 30 }, "wind": { "speed": 4.64, "deg": 43, "gust": 6.73 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-03 09:00:00" }, { "dt": 1685793600, "main": { "temp": 21.12, "feels_like": 20.38, "temp_min": 21.12, "temp_max": 21.12, "pressure": 1023, "sea_level": 1023, "grnd_level": 1020, "humidity": 42, "temp_kf": 0 }, "weather": [{ "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d" }], "clouds": { "all": 23 }, "wind": { "speed": 5.34, "deg": 56, "gust": 6.76 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-03 12:00:00" }, { "dt": 1685804400, "main": { "temp": 21.44, "feels_like": 20.68, "temp_min": 21.44, "temp_max": 21.44, "pressure": 1022, "sea_level": 1022, "grnd_level": 1019, "humidity": 40, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 6 }, "wind": { "speed": 5.61, "deg": 63, "gust": 6.72 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-03 15:00:00" }, { "dt": 1685815200, "main": { "temp": 18.68, "feels_like": 17.88, "temp_min": 18.68, "temp_max": 18.68, "pressure": 1023, "sea_level": 1023, "grnd_level": 1020, "humidity": 49, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 5 }, "wind": { "speed": 5.32, "deg": 57, "gust": 6.84 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-03 18:00:00" }, { "dt": 1685826000, "main": { "temp": 13.94, "feels_like": 13.19, "temp_min": 13.94, "temp_max": 13.94, "pressure": 1024, "sea_level": 1024, "grnd_level": 1021, "humidity": 69, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 4.16, "deg": 49, "gust": 9.37 }, "visibility": 10000, "pop": 0, "sys": { "pod": "n" }, "dt_txt": "2023-06-03 21:00:00" }, { "dt": 1685836800, "main": { "temp": 11.28, "feels_like": 10.37, "temp_min": 11.28, "temp_max": 11.28, "pressure": 1024, "sea_level": 1024, "grnd_level": 1021, "humidity": 73, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 3.34, "deg": 42, "gust": 9.86 }, "visibility": 10000, "pop": 0, "sys": { "pod": "n" }, "dt_txt": "2023-06-04 00:00:00" }, { "dt": 1685847600, "main": { "temp": 9.75, "feels_like": 8.15, "temp_min": 9.75, "temp_max": 9.75, "pressure": 1024, "sea_level": 1024, "grnd_level": 1021, "humidity": 76, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 3 }, "wind": { "speed": 3.11, "deg": 32, "gust": 9.49 }, "visibility": 10000, "pop": 0, "sys": { "pod": "n" }, "dt_txt": "2023-06-04 03:00:00" }, { "dt": 1685858400, "main": { "temp": 11.61, "feels_like": 10.63, "temp_min": 11.61, "temp_max": 11.61, "pressure": 1025, "sea_level": 1025, "grnd_level": 1022, "humidity": 69, "temp_kf": 0 }, "weather": [{ "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d" }], "clouds": { "all": 12 }, "wind": { "speed": 3.87, "deg": 45, "gust": 8.14 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-04 06:00:00" }, { "dt": 1685869200, "main": { "temp": 17.25, "feels_like": 16.18, "temp_min": 17.25, "temp_max": 17.25, "pressure": 1025, "sea_level": 1025, "grnd_level": 1022, "humidity": 44, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 7 }, "wind": { "speed": 4.87, "deg": 57, "gust": 6.82 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-04 09:00:00" }, { "dt": 1685880000, "main": { "temp": 20.49, "feels_like": 19.56, "temp_min": 20.49, "temp_max": 20.49, "pressure": 1025, "sea_level": 1025, "grnd_level": 1021, "humidity": 37, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 8 }, "wind": { "speed": 5, "deg": 63, "gust": 6.11 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-04 12:00:00" }, { "dt": 1685890800, "main": { "temp": 21, "feels_like": 20.15, "temp_min": 21, "temp_max": 21, "pressure": 1024, "sea_level": 1024, "grnd_level": 1021, "humidity": 38, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 6 }, "wind": { "speed": 5.11, "deg": 61, "gust": 5.99 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-04 15:00:00" }, { "dt": 1685901600, "main": { "temp": 18.58, "feels_like": 17.67, "temp_min": 18.58, "temp_max": 18.58, "pressure": 1024, "sea_level": 1024, "grnd_level": 1021, "humidity": 45, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 3 }, "wind": { "speed": 5.12, "deg": 55, "gust": 6.37 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-04 18:00:00" }, { "dt": 1685912400, "main": { "temp": 13.82, "feels_like": 13.01, "temp_min": 13.82, "temp_max": 13.82, "pressure": 1026, "sea_level": 1026, "grnd_level": 1023, "humidity": 67, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 4 }, "wind": { "speed": 3.74, "deg": 51, "gust": 7.87 }, "visibility": 10000, "pop": 0, "sys": { "pod": "n" }, "dt_txt": "2023-06-04 21:00:00" }, { "dt": 1685923200, "main": { "temp": 10.81, "feels_like": 9.96, "temp_min": 10.81, "temp_max": 10.81, "pressure": 1026, "sea_level": 1026, "grnd_level": 1023, "humidity": 77, "temp_kf": 0 }, "weather": [{ "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02n" }], "clouds": { "all": 12 }, "wind": { "speed": 3.1, "deg": 42, "gust": 8.44 }, "visibility": 10000, "pop": 0, "sys": { "pod": "n" }, "dt_txt": "2023-06-05 00:00:00" }, { "dt": 1685934000, "main": { "temp": 9.24, "feels_like": 7.75, "temp_min": 9.24, "temp_max": 9.24, "pressure": 1025, "sea_level": 1025, "grnd_level": 1022, "humidity": 85, "temp_kf": 0 }, "weather": [{ "id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03n" }], "clouds": { "all": 27 }, "wind": { "speed": 2.76, "deg": 33, "gust": 8.21 }, "visibility": 10000, "pop": 0, "sys": { "pod": "n" }, "dt_txt": "2023-06-05 03:00:00" }, { "dt": 1685944800, "main": { "temp": 10.89, "feels_like": 10.07, "temp_min": 10.89, "temp_max": 10.89, "pressure": 1026, "sea_level": 1026, "grnd_level": 1022, "humidity": 78, "temp_kf": 0 }, "weather": [{ "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d" }], "clouds": { "all": 16 }, "wind": { "speed": 3.68, "deg": 40, "gust": 7.59 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-05 06:00:00" }, { "dt": 1685955600, "main": { "temp": 16.56, "feels_like": 15.6, "temp_min": 16.56, "temp_max": 16.56, "pressure": 1025, "sea_level": 1025, "grnd_level": 1022, "humidity": 51, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 1 }, "wind": { "speed": 4.27, "deg": 42, "gust": 5.94 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-05 09:00:00" }, { "dt": 1685966400, "main": { "temp": 20.61, "feels_like": 19.77, "temp_min": 20.61, "temp_max": 20.61, "pressure": 1024, "sea_level": 1024, "grnd_level": 1021, "humidity": 40, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 1 }, "wind": { "speed": 4.48, "deg": 43, "gust": 5.43 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-05 12:00:00" }, { "dt": 1685977200, "main": { "temp": 21.74, "feels_like": 21.07, "temp_min": 21.74, "temp_max": 21.74, "pressure": 1023, "sea_level": 1023, "grnd_level": 1020, "humidity": 42, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 4.92, "deg": 40, "gust": 5.56 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-05 15:00:00" }, { "dt": 1685988000, "main": { "temp": 18.5, "feels_like": 17.76, "temp_min": 18.5, "temp_max": 18.5, "pressure": 1023, "sea_level": 1023, "grnd_level": 1020, "humidity": 52, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 1 }, "wind": { "speed": 5.54, "deg": 43, "gust": 6.62 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-05 18:00:00" }, { "dt": 1685998800, "main": { "temp": 13.22, "feels_like": 12.58, "temp_min": 13.22, "temp_max": 13.22, "pressure": 1025, "sea_level": 1025, "grnd_level": 1022, "humidity": 76, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 1 }, "wind": { "speed": 4.4, "deg": 43, "gust": 9.66 }, "visibility": 10000, "pop": 0, "sys": { "pod": "n" }, "dt_txt": "2023-06-05 21:00:00" }, { "dt": 1686009600, "main": { "temp": 10.69, "feels_like": 10.03, "temp_min": 10.69, "temp_max": 10.69, "pressure": 1025, "sea_level": 1025, "grnd_level": 1022, "humidity": 85, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 2 }, "wind": { "speed": 3.88, "deg": 42, "gust": 11.12 }, "visibility": 10000, "pop": 0, "sys": { "pod": "n" }, "dt_txt": "2023-06-06 00:00:00" }, { "dt": 1686020400, "main": { "temp": 9.43, "feels_like": 7.63, "temp_min": 9.43, "temp_max": 9.43, "pressure": 1024, "sea_level": 1024, "grnd_level": 1021, "humidity": 88, "temp_kf": 0 }, "weather": [{ "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02n" }], "clouds": { "all": 16 }, "wind": { "speed": 3.35, "deg": 43, "gust": 10.24 }, "visibility": 10000, "pop": 0, "sys": { "pod": "n" }, "dt_txt": "2023-06-06 03:00:00" }, { "dt": 1686031200, "main": { "temp": 11.11, "feels_like": 10.31, "temp_min": 11.11, "temp_max": 11.11, "pressure": 1025, "sea_level": 1025, "grnd_level": 1021, "humidity": 78, "temp_kf": 0 }, "weather": [{ "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d" }], "clouds": { "all": 11 }, "wind": { "speed": 4.25, "deg": 47, "gust": 9.6 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-06 06:00:00" }, { "dt": 1686042000, "main": { "temp": 17.01, "feels_like": 16.1, "temp_min": 17.01, "temp_max": 17.01, "pressure": 1024, "sea_level": 1024, "grnd_level": 1021, "humidity": 51, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 5.06, "deg": 52, "gust": 7.14 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-06 09:00:00" }, { "dt": 1686052800, "main": { "temp": 20.87, "feels_like": 20.08, "temp_min": 20.87, "temp_max": 20.87, "pressure": 1023, "sea_level": 1023, "grnd_level": 1020, "humidity": 41, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 5.25, "deg": 56, "gust": 6.47 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-06 12:00:00" }, { "dt": 1686063600, "main": { "temp": 21.45, "feels_like": 20.72, "temp_min": 21.45, "temp_max": 21.45, "pressure": 1023, "sea_level": 1023, "grnd_level": 1019, "humidity": 41, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 5.24, "deg": 61, "gust": 5.94 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-06 15:00:00" }, { "dt": 1686074400, "main": { "temp": 18.29, "feels_like": 17.53, "temp_min": 18.29, "temp_max": 18.29, "pressure": 1023, "sea_level": 1023, "grnd_level": 1020, "humidity": 52, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 5.29, "deg": 58, "gust": 6.17 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-06 18:00:00" }, { "dt": 1686085200, "main": { "temp": 13.16, "feels_like": 12.49, "temp_min": 13.16, "temp_max": 13.16, "pressure": 1024, "sea_level": 1024, "grnd_level": 1021, "humidity": 75, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 4.49, "deg": 54, "gust": 8.21 }, "visibility": 10000, "pop": 0, "sys": { "pod": "n" }, "dt_txt": "2023-06-06 21:00:00" }, { "dt": 1686096000, "main": { "temp": 10.03, "feels_like": 9.2, "temp_min": 10.03, "temp_max": 10.03, "pressure": 1025, "sea_level": 1025, "grnd_level": 1021, "humidity": 81, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 4.08, "deg": 48, "gust": 9.87 }, "visibility": 10000, "pop": 0, "sys": { "pod": "n" }, "dt_txt": "2023-06-07 00:00:00" }, { "dt": 1686106800, "main": { "temp": 8.78, "feels_like": 6.9, "temp_min": 8.78, "temp_max": 8.78, "pressure": 1024, "sea_level": 1024, "grnd_level": 1021, "humidity": 82, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 3.25, "deg": 43, "gust": 9.31 }, "visibility": 10000, "pop": 0, "sys": { "pod": "n" }, "dt_txt": "2023-06-07 03:00:00" }, { "dt": 1686117600, "main": { "temp": 10.51, "feels_like": 9.68, "temp_min": 10.51, "temp_max": 10.51, "pressure": 1024, "sea_level": 1024, "grnd_level": 1021, "humidity": 79, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 4.24, "deg": 50, "gust": 9.03 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-07 06:00:00" }, { "dt": 1686128400, "main": { "temp": 16.38, "feels_like": 15.43, "temp_min": 16.38, "temp_max": 16.38, "pressure": 1024, "sea_level": 1024, "grnd_level": 1021, "humidity": 52, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 4.86, "deg": 59, "gust": 6.68 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-07 09:00:00" }, { "dt": 1686139200, "main": { "temp": 20.56, "feels_like": 19.72, "temp_min": 20.56, "temp_max": 20.56, "pressure": 1023, "sea_level": 1023, "grnd_level": 1020, "humidity": 40, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 4.75, "deg": 61, "gust": 5.72 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-07 12:00:00" }, { "dt": 1686150000, "main": { "temp": 21.4, "feels_like": 20.64, "temp_min": 21.4, "temp_max": 21.4, "pressure": 1022, "sea_level": 1022, "grnd_level": 1019, "humidity": 40, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 5.18, "deg": 65, "gust": 5.92 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-07 15:00:00" }, { "dt": 1686160800, "main": { "temp": 18.53, "feels_like": 17.8, "temp_min": 18.53, "temp_max": 18.53, "pressure": 1022, "sea_level": 1022, "grnd_level": 1019, "humidity": 52, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 5.26, "deg": 71, "gust": 6.62 }, "visibility": 10000, "pop": 0, "sys": { "pod": "d" }, "dt_txt": "2023-06-07 18:00:00" }], "city": { "id": 2643743, "name": "London", "coord": { "lat": 51.5085, "lon": -0.1257 }, "country": "GB", "population": 1000000, "timezone": 3600, "sunrise": 1685677721, "sunset": 1685736511 } });

  const [todayData, setTodayData] = useState({})
  useEffect(() => {
    // axios("https://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=7342a97aecf05c166038b4340067c653&units=metric").then((res) => setData(res.data))
    getTodayData()
  }, [])
  // console.log('data', data)  
  const getTodayData = ()=>{
    var today = {
      city: data.city.name,
      date: data.list[0].dt,
      date2: data.list[0].dt_txt,
      desc: data.list[0].weather[0].main,
      deg:data.list[0].main.temp,
      pressure:data.list[0].main.pressure,
      humidity: data.list[0].main.humidity,
      windSpeed:data.list[0].wind.speed,
    }
    console.log(today,"today");
  }
  return (
    <div>

    </div>
  )
}
