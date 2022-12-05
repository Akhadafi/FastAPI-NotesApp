import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Note from './pages/Note';
import Notes from './pages/Notes';

import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={'/'} element={<Notes />} exact />
          <Route path={'/:id'} element={<Note />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
