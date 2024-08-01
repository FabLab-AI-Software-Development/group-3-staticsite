import logo from './logo.svg';
import './App.css';
import Dropdown from './components/navigation/dropdown';
import { Person } from './pages/person';

function App() {
  return (
    <div>
        <Dropdown />

        <h1>Home</h1>
        <p>Welcome to the home page!</p>

    </div>
  );
}

export default App;
