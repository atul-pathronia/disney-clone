import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const username = useSelector(selectUserName);
  const userphoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        Navigate("/home");
      }
    });
  }, [username]);

  const handleAuth = () => {
    if (!username) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result);
          setUser(result.user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          Navigate("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        {username ? (
          <Link to="/home">
            <img src="./images/logo.svg" alt="disney+ logo" srcset="" />
          </Link>
        ) : (
          <Link to="/">
            <img src="./images/logo.svg" alt="disney+ logo" srcset="" />
          </Link>
        )}
      </Logo>

      {!username ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <ul>
              <li>
                <a href="#">
                  <img src="./images/home-icon.svg" alt="" srcset="" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./images/search-icon.svg" alt="" srcset="" />
                  <span>Search</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./images/watchlist-icon.svg" alt="" srcset="" />
                  <span>Recommended</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./images/original-icon.svg" alt="" srcset="" />
                  <span>Originals</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./images/movie-icon.svg" alt="" srcset="" />
                  <span>Movies</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./images/Series-icon.svg" alt="" srcset="" />
                  <span>Series</span>
                </a>
              </li>
            </ul>
          </NavMenu>
          <Signout>
            <UserImg src={userphoto} alt={username}></UserImg>
            <DropDown>
              <span onClick={handleAuth}>Sign Out</span>
            </DropDown>
          </Signout>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 7rem;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 3;
`;

const Logo = styled.a`
  width: 8rem;
  max-width: 100%;
  display: block;
  cursor: pointer;
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: 2.5rem;
  justify-content: flex-end;
  height: 100%;
  flex-flow: row nowrap;
  ul {
    display: flex;
    list-style: none;
    li {
      margin-right: 2rem;
      a {
        display: flex;
        align-items: center;
        img {
          width: 2rem;
          margin-right: 0.2rem;
        }
        span {
          font-size: 1.5rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.3rem;
          border-bottom: 0.1rem solid transparent;
          transition: all;
          &:hover {
            color: lightgray;
            border-bottom-color: white;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.8rem 1.6rem;
  text-transform: uppercase;
  letter-spacing: 1.5;
  border: 1px solid #f9f9f9;
  border-radius: 0.4rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: #f9f9f9;
    color: rgba(0, 0, 0, 0.6);
    border-color: rgba(0, 0, 0, 0.6);
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 4.8rem;
  right: 0;
  background-color: rgb(19, 19, 19);
  border-radius: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 0.4rem;
  padding: 1rem;
  text-align: center;
  letter-spacing: 0.3rem;
  font-size: 1.2rem;
  opacity: 0;
  width: 10rem;
`;

const Signout = styled.div`
  position: relative;
  height: 4.8rem;
  width: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${UserImg} {
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
