import React, { Fragment, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Email from './components/Mail/Email';
import EmailList from './components/EmailList/EmailList';
import SendMail from './components/SendMaiil/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/counter/mailSlice';
import { login, selectUser } from './features/counter/userSlice';
import Login from './components/Login/Login';
import { auth } from './components/Firebase';



function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        //the user is logged in
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      }
      else{

      }
    })
  },[])

  return (
    <Fragment>
      <Router>
        {!user ? (
          <Login />
        ) : 
        (
          <div className="app">
            <Header />
            <div className="app__body">
              <Sidebar />
              {/* <EmailList /> */}
              <Routes>
                <Route path="/Mail" element={<Email />} />
                <Route path="/" element={<EmailList />} />
              </Routes>
            </div>
            <div className="sendMessage">
              {sendMessageIsOpen && <SendMail />}
            </div>
          </div>
        )}
      </Router>
    </Fragment>
  );
}

export default App;
