import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";

const Trending = () => {
  const movies = useSelector(selectTrending);

  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {/* {movie.id} */}
              <Link to={`/details/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 2.6rem;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  gap: 2.5rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  border-radius: 1rem;
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgba(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  width: 100%;
  border: 5px solid transparent;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 1);
  position: relative;

  img {
    height: 100%;
    width: 100%;
  }

  &:hover {
    border-color: white;
    transform: scale(1.05);
  }
`;

export default Trending;
