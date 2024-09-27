import React from "react";
import styled from "styled-components";
import Header from "../Atoms/Header";
import NavBar from "../Atoms/Navbar";
import Footer from "../Atoms/Footer";
import { Route, Routes } from "react-router-dom";
import BookingPage from "../../modules/Bookings/BookingPage";
import Login from "../../modules/Auth/Login";
import Register from "../../modules/Auth/Register";
import Profile from "../../modules/Profile/Profile";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  flex: 1;
  background-image: url("bgimg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(240, 240, 240, 0.8);
`;

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <NavBar />
      <Container>
        <Routes>
          <Route element={<BookingPage />} path="/make-booking" />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Home;
