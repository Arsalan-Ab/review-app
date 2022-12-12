import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import PrimaryNavigation from './components/primary-navigation/primary-navigation';
import Globallayout from './layouts/global-layout';
import Reviews from './pages/reviews/reviews';

function App() {
  return (
    <Globallayout>
      <Routes>
        <Route path="/" element={<Reviews />} />
      </Routes>
    </Globallayout>
  );
}

export default App;
