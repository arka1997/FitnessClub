import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';

function App() {
  return (
    <div className="App">
      {/* these are the components, and I can resuse it as many times as possible */}
          <Hero/>
          <Programs/>
    </div>
  );
}

export default App;
