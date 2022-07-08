import { createContext, useEffect, useState } from "react"
import { useFetch } from "./Hooks/useFetch"

export const DataContext = createContext()

export function DataProvider({ children }) {


    const [url, setURL] = useState(
      `https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=3bce4b93d8b9662fb50a58f4f0945ad1`
    );

    const { data, loading, error } = useFetch(url)

    const [url2, setURL2] = useState(null)
    const [url3, setURL3] = useState(null)
    useEffect(() => {
        data &&
          setURL2(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${data && data.coord.lat }&lon=${data && data.coord.lon }&exclude=hourly,minutely&appid=3bce4b93d8b9662fb50a58f4f0945ad1`
          );

          data &&
            setURL3(
              `https://timezone.abstractapi.com/v1/current_time/?api_key=7556dbc9febf41128a662fa6e6b0c7cc&location=${
                data && data.coord.lat
              },${data && data.coord.lon}`
            );
    }, [data])

    const { data: foreCastData} = useFetch(url2)

    const {data:localTime}= useFetch(url3)

    return(
        <DataContext.Provider value={{ data, foreCastData, loading, error, setURL ,localTime }}>
            { children }
        </DataContext.Provider>
    )
}