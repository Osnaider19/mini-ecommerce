import { useEffect  , useState} from "react";

export const useFech = (url) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoader(true);
    const getData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error);
        setLoader(false);
      } finally {
        setLoader(false);
      }
    };
    getData()
  }, [url]);
  return {data , loader , error};
};
