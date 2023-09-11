import Navbar from './components/Navbar';
import Userlist from './components/Userlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Adduser from './components/Adduser';
import Update from './components/Update';
import Delete from './components/Delete';

function App() {
  return (
    <>
    <div className='container p-4'>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Adduser />}></Route>
        <Route path='/user-list' element={<Userlist />}></Route>
        <Route path='/update-user/:id' element={<Update />}></Route>
        <Route path='/delete-user/:id' element={<Delete />}></Route>
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
