import YouTube from 'react-youtube';
import { useEffect, useState } from 'react';
import movieTrailer from 'movie-trailer'

function Trailer({ movie = {} }) {
  const [videoId, setVideoId] = useState(null);

  // useEffect(() => {
  //   const fetchTrailer = async () => {
  //     const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(movie.Title)}+trailer&key=AIzaSyC0mkL-HcOesvJRmOhbfRS0nGtrlZMC4oI`);
  //     const data = await response.json();
  //     setVideoId(data.items[0]?.id?.videoId || null);
  //   };

  //   fetchTrailer();
  // }, [movie.Title]);

  useEffect(() => {
    movieTrailer(movie.Title)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setVideoId(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
  }, [movie.Title]);

  return videoId ? (
    <div className="container-name" >
      <YouTube style={{marginRight: '35px'}} videoId={videoId}
       opts={{ playerVars: { autoplay: 1, fs: 1 },
       width: '600px',
       height: '400px'
       } }


        />
    </div>
  ) : null;
}

export default Trailer;
