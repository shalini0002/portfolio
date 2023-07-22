
import './assets/scss/app.css';
import '../src/assets/scss/app.scss'

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
