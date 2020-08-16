import React from 'react';
import './App.css';
import { Component } from 'react';
import axios from 'axios';
import  { Header, Icon, List}  from 'semantic-ui-react';


class App extends Component {

  state = {
    values: [

    ]
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/values').then((response: any) => {
      
      this.setState({
        values: response.data
      });
    });
    
  }
  render() {
    return (
      <div>
        
          <Header as='h2'>
            <Icon name='users'/>
            <Header.Content>Reactivities</Header.Content>
          </Header>
        
          <List>
            {
              this.state.values.map(
                (it: {id: number, name: string }) => {
                  return <List.Item key={it.id}>{it.name}</List.Item>
                }
              )
            }
          </List>
        
      </div>
    );
  }
  
}

export default App;