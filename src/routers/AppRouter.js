import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { firebase } from "../firebase/firebaseConfig";
import { login } from "../actions/auth";
import { Loading } from "../components/loading/Loading";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        console.log("No existe un usuario logeado actualmente");
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    // return ( <h1> cargando ... </h1>  )
    return <Loading></Loading>;
  }

  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/auth" component={AuthRouter} />
            <Route exact path="/" component={JournalScreen} />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    </>
  );
};
