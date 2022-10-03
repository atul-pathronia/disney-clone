import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Recommended from "./Recommended";
import Viewers from "./Viewers";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "./firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
// import { load } from "firebase-tools/lib/commands";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const [loading, setLoading] = useState(true);

  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            if (recommends) {
            }
            break;

          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      if (originals && recommends && trending && newDisney) {
        setLoading(false);
      }

      dispatch(
        setMovies({
          recommended: recommends,
          newDisney: newDisney,
          originals: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  if (loading) {
    return (
      <div>
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Loading...</h1>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <Container>
          <ImgSlider></ImgSlider>
          <Viewers></Viewers>
          <Recommended></Recommended>
          <NewDisney></NewDisney>
          <Trending></Trending>
          <Originals></Originals>
        </Container>
      </div>
    );
  }
};

const Container = styled.main`
  overflow: hidden;
  background-image: url("./images/home-background.png");
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 7rem;
  padding: 0 2rem;
`;

export default Home;
