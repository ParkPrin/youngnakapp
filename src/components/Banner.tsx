import React, {useEffect, useState} from 'react';
import requests from "../api/requests";
import axios from "../api/axios";
import "./Banner.css"

const Banner = ():JSX.Element => {
  const [movie, setMovie]: any = useState({});
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {

    // 현재 상영중인 영화 정보를 가져오(여러 영화

    const request = await axios.get(requests.fetchNowPlaying)
    const movieId = request.data.results[
      Math.floor(Math.random() * request.data.results.length)
    ].id;
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_reponse: "videos"}
    });
    console.log(movieDetail);
    setMovie(movieDetail)
  }
  const truncate:Function = (str:any, n:number):string => {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h1>

        <div className="banner__buttons">
          <button
            className="banner__button play"
          >
            Play
          </button>
          <button className="banner__button info">More Information</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie.overview, 100)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;