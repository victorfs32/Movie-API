import { Container, Movie, MovieList } from "./styles";
import { APIKey } from "../../config/key";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Alta() {
  const [movies, setMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Container>
      <Navbar />
      <h1>LANÇAMENTOS</h1>
      <MovieList>
        {/* map usado para retorno o codigo pra cada interaçao */}
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/Detalhes/${movie.id}`}>
                <img src={`${image_path}${movie.poster_path}`} />
              </Link>

              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}

export default Alta;