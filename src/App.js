import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widgets from './components/widget/Widgets';
import Login from './components/login/Login';
import { useStateValue } from './components/provider/StateProvider';

function App() {
  const [{user}] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
      <>
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      </>
      )}
    </div>
  );
}

export default App;
