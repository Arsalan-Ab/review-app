import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Globallayout from 'layouts/global-layout';
import Reviews from 'pages/reviews';
import Sign from './pages/sign';
import NewReview from './pages/new-review';
import ReviewSummary from './pages/review-summary';
import ReviewSetting from './pages/settings/review-setting';
import SettingLayout from './layouts/setting-layout';
import NewImport from 'pages/new-import';
import ScreenReferences from 'pages/screen-references';
import TitleScreningLayout from 'layouts/title-screening-layout';

function App() {
  return (
    <div className='main-background'>

      <Routes>
        <Route element={<Globallayout />}>
          <Route path='/' element={<Sign />} />
          <Route path='/reviews' element={<Reviews />}></Route>
          <Route path='/new-review' element={<NewReview />}></Route>
          <Route path='review-summary' element={<ReviewSummary />}></Route>
          <Route path='new-import' element={<NewImport />}></Route>
          <Route element={<TitleScreningLayout />}>
            <Route path='screen-references' element={<ScreenReferences />}/>            
          </Route>
          <Route element={<SettingLayout />}>
            <Route path='/setting' element={<ReviewSetting />}></Route>
          </Route>
        </Route>

      </Routes>

    </div>
  );
}

export default App;
