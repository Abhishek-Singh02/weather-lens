import { useContext} from "react";
import { DataContext } from "../weatherData";

export const useData = () => {
  const context = useContext(DataContext);

  return context
} 
