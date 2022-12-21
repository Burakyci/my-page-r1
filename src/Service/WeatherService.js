import { async } from "@firebase/util";
import axios from "axios";
import { APP_ID } from "../ApiConfig/App_Id";

// export const ApiService = async (city) => {
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${APP_ID}&lang=tr&units=metric`;
//   const url = `${apiUrl}&q=${city}`;
//   const { data } = await axios(url);
//   setWeather(data);
// };

// .finally(() => setloading(true));
export class WeatherService {
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${APP_ID}&lang=tr&units=metric`;
  async getByData(city) {
    try {
      const url = `${this.apiUrl}&q=${city}`;
      console.log(url);
      const { data } = await axios(url);
      return data;
    } catch (error) {
      console.log("hata:", error);
    }
  }
}

export class WeatherConpService {
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=148f508fe5d9a656fc6efef7e2d98666&lang=tr&units=metric`;
  async getByDtata(lat, lon) {
    try {
      const url = `${this.apiUrl}&lat=${lat}&lon=${lon}`;
      const { data } = await axios(url);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

// export class WeatherService {
//   apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${APP_ID}&lang=tr&units=metric`;
//   async getByData(city) {
//     try {
//       const url = `${this.apiUrl}&q=${city}`;
//       const { data } = await axios(url);
//       return data;
//     } catch (error) {
//       console.log("hata:", error);
//     }
//   }
// }
