import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const App = () => {

  const [currentUser, set_currentUser] = useState(null);
  const [renderController] = useState(null);


  useEffect(() => {
      const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            set_currentUser({ id: snapShot.id, ...snapShot.data() })
          })
        }
        else {
          set_currentUser(userAuth);
        }
      });
      return () => unsubscribeFromAuth();
  },[renderController]);


  

  return (
    <>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </>
  );
}

export default App;
