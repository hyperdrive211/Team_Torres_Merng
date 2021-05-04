import React from 'react'; 
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import {Container} from 'semantic-ui-react'; 

import 'semantic-ui-css/semantic.min.css'; 
import './App.css';

import {AuthProvider} from './context/auth'; 
import AuthRoute from './util/authRoute'; 
import AuthRouteUser from './util/authRouteUser'; 

import Home from './pages/Home'; 
import Login from './pages/Login'; 
import Content from './pages/Content'
import Register from './pages/Register'; 
import MenuBar from './components/MenuBar'; 
import LessonForm from './components/LessonForm'; 

function App() {
  return (
    <AuthProvider>
    <Router>
      <Container>
      <MenuBar /> 
      <Route exact path='/' component={Home}/>
      <AuthRoute exact path='/login' component={Login} /> 
      <AuthRoute exact path='/register' component={Register}/>
      <AuthRouteUser exact path='/addContent' component={LessonForm}/> 
      <AuthRouteUser exact path='/content' component={Content} /> 
      </Container>
    </Router>
    </AuthProvider>
  );
}

export default App;
