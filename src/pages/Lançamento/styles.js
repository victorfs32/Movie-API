import styled from "styled-components";

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');


  h1 {
    text-align: center;
    margin: 4rem 0;
    font-family: 'Poppins', sans-serif;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    border-radius: 16px;
    margin-bottom: 2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    font-family: 'Poppins', sans-serif;
    text-align: center;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`;
