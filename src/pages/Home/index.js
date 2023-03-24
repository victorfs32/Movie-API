import { Container, Movie, MovieList } from "./styles";
import { APIKey } from "../../config/key";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${searchQuery}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));

    setSearchQuery("");
  };

  return (
    <Container>
      <Navbar />
      <h1>FILMES POPULARES</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Digite o nome do filme"
        />
        <button type="submit">Pesquisar</button>
      </form>
      <MovieList>
        {/* map usado para retorno o codigo pra cada interaçao */}
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/Detalhes/${movie.id}`}>
                <img src={`${image_path}${movie.poster_path}`} />
              </Link>

              <span>{movie
