import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,400;1,700&display=swap");

  margin: 3rem;
  padding: 3rem 0;

  h1 {
    margin: 3rem 0;
    color: white;
    font-family: "Lato", sans-serif;
  }

  .movie {
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    display: flex;
    padding: 40px;
  }

  img {
    width: 300px;
    border-radius: 1rem;
  }

  .detalhes {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;
  }

  button {
    background-color: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    font-size: 100%;
    font-family: "Lato", sans-serif;
  }

  button:hover {
    background-color: #5848c2;
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
    color: white;
    font-family: "Lato", sans-serif;
  }

  release-date {
    opacity: 0.5;
  }
`;
