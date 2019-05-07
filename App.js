import React from 'react';
import Home from './src/components/Home'
import Chat from './src/components/Chat'

import {
  Router,
  Scene,
} from 'react-native-router-flux';

class App extends React.Components{
  render(){
    return(
      <Router>
        <Scene key='root'>
        <Scene key='home' components={Home} title='Home'/>
        <Scene key='chat' components={Chat} title='Chat'/>

        </Scene>
      </Router>
    )
  }
}