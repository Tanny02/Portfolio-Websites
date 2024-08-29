import styled from "styled-components";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Works from "./components/Works";
import Contact from "./components/Contact";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  return (
    <Container>
      <Hero />
      <Profile />
      <Works />
      <Contact />
    </Container>
  );
};

export default App;
