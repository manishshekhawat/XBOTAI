import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { History } from './components/History'; // Your history page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<Home showHistory={true}/>} />
      </Routes>
    </Router>
  );
}

export default App;
