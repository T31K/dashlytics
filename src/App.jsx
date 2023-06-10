// import Login from './components/auth/Login.jsx';
import 'flowbite';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import MainNav from './components/MainNav';
import MainHeader from './components/MainHeader';

import Home from './pages/Home';
import New from './pages/New';
import Login from './pages/Login';

import NewCard from './components/forms/NewCard';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [newCardModal, setNewCardModal] = useState(false);
  const { isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <Router>
          <div className="flex w-screen h-screen text-gray-700">
            <MainNav />
            <div className="flex flex-col flex-grow">
              <MainHeader
                newCardModal={newCardModal}
                setNewCardModal={setNewCardModal}
              />
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/new"
                  element={<New />}
                />
              </Routes>
            </div>
            <NewCard
              newCardModal={newCardModal}
              setNewCardModal={setNewCardModal}
            />
          </div>
        </Router>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
