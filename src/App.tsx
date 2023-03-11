import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Question from './component/question';
import ErrorBoundary from './errors/error-boundary';
import Header from './component/header';
import './App.css';

export default function App() {
  return <Router>
    <Header text='React Questions'/>
    <div className="ml-[6rem] mt-[4rem]">
      <Routes>
        <Route path='/questions' element={
          <ErrorBoundary>
            <Question />
          </ErrorBoundary>
        }/>
      </Routes>
    </div>
  </Router>
}