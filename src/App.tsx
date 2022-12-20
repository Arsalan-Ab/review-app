import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import PrimaryNavigation from './components/primary-navigation/primary-navigation';
import Globallayout from './layouts/global-layout';
import Reviews from './pages/reviews';
import { Fragment } from 'react';
import Sign from './pages/sign';
import NewReview from './pages/new-review';
import ReviewId from './pages/review-id';

function App() {
  return (
    <div className='main-background vh-100'>
      <Globallayout>
        <Routes>
          <Route path='/' element={<Sign />} />
          <Route path='/reviews' element={<Reviews />}></Route>
          <Route path='/new-review' element={<NewReview />}></Route>
          <Route path='review-id' element={<ReviewId/>}></Route>
        </Routes>
      </Globallayout>


    </div>
  );
}

export default App;
