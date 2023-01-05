import React, { useContext, useEffect, useState, useRef } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { WeatherService } from "../Service/WeatherService";
const cityDb = ["istanbul", "ankara", "bursa"];
function Weather() {
  const { theme, setWeatherState, weatherState } = useContext(GlobalContext);

  const { city, loading, error, data } = weatherState;

  const ref = useRef();

  const weatherService = new WeatherService();

  const getCityWeather = async () => {
    if (city && city.trim().length > 3) {
      if (cityDb.includes(city.trim())) {
        setWeatherState((prevState) => ({
          ...prevState,
          loading: true,
        }));
        const res = await weatherService.getByData(city);
        setWeatherState((prevState) => ({
          ...prevState,
          loading: false,
          data: res,
        }));
      } else {
        alert(
          "yanlis bir sehir ismi yazdiniz, lutfen bu sehirlerden birini secin" +
            cityDb.join(", ")
        );
      }
    }
  };

  useEffect(() => {
    (async () => {
      if (
        !loading &&
        city &&
        city.trim().length > 3 &&
        cityDb.includes(city.trim().toLowerCase())
      ) {
        await getCityWeather();
      }
    })();
  }, [city]);

  return (
    <div className={theme}>
      {error ? (
        <div>
          <h1>{error}</h1>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="city"
            value={city ?? ""}
            autoFocus={true}
            ref={ref}
            onSubmit={() => {
              setWeatherState((prevState) => ({
                ...prevState,
                city: null,
              }));
            }}
            onChange={(e) => {
              setWeatherState((prevState) => ({
                ...prevState,
                city: e.target.value,
              }));
            }}
          />
          {/* <button onClick={getCityWeather}>ara</button> */}
          reg
          {loading === false ? (
            <>
              {data && (
                <>
                  <h4>
                    Sıcaklık:
                    {data.main.temp}
                    <span className="derece">°</span>
                  </h4>
                  <h4>
                    Max Sıcaklık: {data.main.temp_max}
                    <span className="derece">°</span>
                  </h4>
                  <h4>
                    Min Sıcaklık: {data.main.temp_min}
                    <span className="derece">°</span>
                  </h4>
                  <h4>
                    Hisedilen Sıcaklık: {data.main.feels_like}
                    <span className="derece">°</span>
                  </h4>
                  <h4>
                    Basınç: {data.main.pressure}
                    <span className="derece">P</span>
                  </h4>
                  <h4>
                    Nem:{data.main.humidity}
                    <span className="derece"> %RH</span>
                  </h4>
                </>
              )}
            </>
          ) : (
            <p>Loading....</p>
          )}
        </div>
      )}
    </div>
  );
}
export default Weather;
