import { createContext, useEffect, useState } from "react";
import { useFetch } from "./Hooks/useFetch";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const OW_API_KEY = process.env.REACT_APP_OW_API_KEY;
  const TZ_API_KEY = process.env.REACT_APP_TZ_API_KEY;

  const [url, setURL] = useState(
    `https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=${OW_API_KEY}`,
  );

  const { data, loading, error } = useFetch(url);

  const [url2, setURL2] = useState(null);
  // const [url3, setURL3] = useState(null);
  useEffect(() => {
    data &&
      setURL2(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${
          data && data.coord.lat
        }&lon=${
          data && data.coord.lon
        }&exclude=hourly,minutely&appid=${OW_API_KEY}`,
      );

    // data &&
    //   setURL3(
    //     `https://timezone.abstractapi.com/v1/current_time/?api_key=${TZ_API_KEY}&location=${
    //       data && data.coord.lon
    //     },${data && data.coord.lat}`,
    //   );
  }, [data]);

  const { data: foreCastData } = useFetch(url2);

  // const { data: localTime } = useFetch(url3);

  return (
    <DataContext.Provider
      value={{
        data,
        foreCastData,
        loading,
        error,
        setURL,
        localTime: new Date(),
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
