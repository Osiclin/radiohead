import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Partners from './components/Partners/Partners';
import Playlist from './components/Playlist/Playlist';
import Radiohead from './components/Radiohead/Radiohead';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Partners/>
      <Featured/>
      <Playlist/>
      <Radiohead/>
      <Footer/>
    </div>
  );
}

export default App;