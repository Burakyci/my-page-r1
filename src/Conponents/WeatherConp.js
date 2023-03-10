import React, { useContext, useEffect } from "react";
import { WeatherConpService } from "../Service/WeatherService";
import { usePosition } from "use-position";
import { GlobalContext } from "../Context/GlobalContext";

function WeatherConp() {
  const watch = true;
  const { weatherConp, setWeatherConp } = useContext(GlobalContext);
  const { data, error, loading } = weatherConp;
  const { latitude, longitude } = usePosition(watch, {
    enableHighAccuracy: true,
  });

  console.log(latitude, longitude);

  const getByData = new WeatherConpService();

  const getByWeather = async () => {
    setWeatherConp((prev) => ({
      ...prev,
      loading: true,
    }));
    const res = await getByData.getByDtata(latitude, longitude);
    setWeatherConp((prev) => ({
      ...prev,
      data: res,
      loading: false,
    }));
    console.log(res);
  };

  useEffect(() => {
    latitude && longitude && getByWeather();
  }, [latitude, longitude]);

  return (
    <div>
      <h1>WeatherConp</h1>
      {loading === false ? (
        <>
          {data && (
            <>
              <>
                <h1>{data.name}</h1>
              </>
              <h4>
                Sıcaklık:
                {data.main.temp}
                <span className="derece">°</span>
              </h4>
              <h4>
                Kordinat:
                {data.coord.lat}-{data.coord.lon}
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
  );
}

export default WeatherConp;
