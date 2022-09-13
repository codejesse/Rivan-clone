import styled from "styled-components";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Hero from "./Components/Hero";
import Models from "./Components/Models";
import Notification from "./Components/Notification";
import Services from "./Components/Services";
import Video from "./Components/Video";

const AppWrapper = styled.div`
   background-image: url('/background.png');
   background-repeat: repeat;
   height: auto;
   font-family: 'Roboto Mono', sans-serif;
`;
function App() {
  return (
    <AppWrapper>
      {/* <Notification /> */}
      <Hero />
      <About />
      <Models />
      <Video />
      <Services />
      <Gallery />
    </AppWrapper>
  );
}

export default App;
