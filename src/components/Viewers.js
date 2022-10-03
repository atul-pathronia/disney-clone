import styled from "styled-components";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="./images/viewers-disney.png" alt="disney logo" />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          src="./videos/1564674844-disney.mp4"
        ></video>
      </Wrap>
      <Wrap>
        <img src="./images/viewers-marvel.png" alt="marvel logo" />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          src="./videos/1564676115-marvel.mp4"
        ></video>
      </Wrap>
      <Wrap>
        <img
          src="./images/viewers-national.png"
          alt="national geographic logo"
        />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          src="./videos/1564676296-national-geographic.mp4"
        ></video>
      </Wrap>
      <Wrap>
        <img src="./images/viewers-pixar.png" alt="pixar logo" />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          src="./videos/1564676714-pixar.mp4"
        ></video>
      </Wrap>
      <Wrap>
        <img src="./images/viewers-starwars.png" alt="starwars logo" />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          src="./videos/1608229455-star-wars.mp4"
        ></video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  margin-top: 3rem;
  grid-gap: 2.5rem;
  padding: 3rem 0 2.6rem;
  gap: 2.5rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  } ;
`;

const Wrap = styled.div`
  border-radius: 1rem;
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgba(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  width: 100%;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 1);
  position: relative;

  img {
    height: 100%;
    width: 100%;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 0;
    border-radius: 1rem;
  }

  &:hover {
    border-color: white;
    transform: scale(1.05);

    video {
      opacity: 1;
      z-index: -1;
    }
  }
`;

export default Viewers;
