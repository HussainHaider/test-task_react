import React, { Suspense, lazy } from 'react';
import {Route,Switch} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Welcome from "./components/Welcome/Welcome";

const SignUp = lazy(() => import('./containers/SignUp/SignUp'));
const Login = lazy(() => import('./containers/Login/Login'));
const Profile = lazy(() => import('./containers/Profile/Profile'));

function App() {
  return (<>
      <Suspense fallback={<Loader type="Rings" color="#64a19d" height={700} width={200} style={{display:'flex',justifyContent: 'center'}}
      />}>
          <Switch>
              <Route path="/signUp" component={SignUp}/>
              <Route path="/login" component={Login}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/" exact component={Welcome}/>
          </Switch>
      </Suspense>
  </>);
}

export default App;
