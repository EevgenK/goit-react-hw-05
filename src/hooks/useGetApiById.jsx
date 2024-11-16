import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetApiById = (callback) => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getDetails = async () => {
      try {
        setIsLoading(true);
        const result = await callback();
        console.log("hello effect");
        console.log(result);
        setDetails(result);
      } catch (err) {
        console.error(err.message);
        toast.error("Something went wrong! Please try again later");
      } finally {
        setIsLoading(false);
      }
    };
    getDetails();
  }, [setIsLoading, callback]);
  return { details, isLoading };
};
export default useGetApiById;
