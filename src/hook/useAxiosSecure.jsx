import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://mamonur-rashid-server.vercel.app", 
});

const useAxiosSecure = () => {
    
    return axiosSecure;
};

export default useAxiosSecure;