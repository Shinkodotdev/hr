import BackgroundMusic from "./components/BackgroundMusic";
import Hearts from "./components/Hearts";
import Intro from "./components/Intro";
import Memories from "./components/Memories";
import Message from "./components/Message";
import Finale from "./components/Finale";

function App() {
  return (
    <>
      <BackgroundMusic />
      <Hearts />
      <Intro />
      <Message />
      <Memories/> 
      <Finale />
    </>
  );
}

export default App;