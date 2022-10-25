import axios, {AxiosInstance} from "axios";

const instance:AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "755de0b2b985bbdfd73a875606ba9274",
    language: "ko-KR",
  },
});

export default instance;