
import { Link } from "react-router-dom";



const youtubeUrl = [
  { id: "tt0371746", url: "https://www.youtube.com/watch?v=8ugaeA-nMTc "},
  { id: "tt1300854", url: "https://www.youtube.com/watch?v=Ke1Y3P9D0Bc" },
  { id: "tt0145487", url: "https://www.youtube.com/watch?v=t06RUxPbp_c" },
  { id: "tt1228705", url: "https://www.youtube.com/watch?v=wKtcmiifycU" },
  { id: "tt10872600", url: "https://www.youtube.com/watch?v=JfVOs4VSpmA" },
  { id: "tt0770828", url: "https://www.youtube.com/watch?v=wArmHSPIvlQ" },
  { id: "tt0478970", url: "https://www.youtube.com/watch?v=ZlNFpri-Y40" },
  { id: "tt2250912", url: "https://www.youtube.com/watch?v=rk-dF1lIbIg" },
  { id: "tt0316654", url: "https://www.youtube.com/watch?v=nq1M_Wc4FIc" },
  { id: "tt0948470", url: "https://www.youtube.com/watch?v=-tnxzJ0SSOw" },
  { id: "tt4633694", url: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ" },
  { id: "tt0413300",url: "https://www.youtube.com/watch?v=e5wUilOeOmg" },
  { id: "tt6320628",url: "https://www.youtube.com/watch?v=Nt9L1jCKGnE" },
  { id: "tt0352248",url: "https://www.youtube.com/watch?v=e5wUilOeOmg" },
  { id: "tt0095953",url: "https://www.youtube.com/watch?v=mlNwXuHUA8I" },
  { id: "tt1872181",url: "https://www.youtube.com/watch?v=nbp3Ra3Yp74" },
  { id: "tt5095030",url: "https://www.youtube.com/watch?v=ZlNFpri-Y40" },
  { id: "tt0454848",url: "https://www.youtube.com/watch?v=sDC6ioDV4uc" },
  { id: "tt0328107",url: "https://www.youtube.com/watch?v=ALKCTuH79iE" },
  { id: "tt1068680",url: "https://www.youtube.com/watch?v=dDh1l3qVNoY" },
  { id: "tt1638355",url: "https://www.youtube.com/watch?v=-x08iNZ8Mfc" },
];

function Trailer({movie}) {
  
  return (
    <div>
    {youtubeUrl.map((item, i) => {
      if (movie.imdbID === item.id) {
       
        return (
          <div className="container-name" key={i}>
            <Link className="example_b" target="_blank" to={item.url}>
              Watch Trailer Now
            </Link>
          </div>
        );
      } else {
        return null;
      }
    })}
  </div>
  );


  
}

export default Trailer;
