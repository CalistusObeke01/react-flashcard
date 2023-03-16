import Question from './component/question';
import ErrorBoundary from './errors/error-boundary';
import Header from './component/header';
import './App.css';

export default function App() {
  return <div>
    <Header text='React Questions'/>
    <div className="ml-[6rem] mt-[4rem]">
      <ErrorBoundary>
        <Question />
      </ErrorBoundary>
    </div>
  </div>
}