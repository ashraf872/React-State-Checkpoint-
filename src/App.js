import Profile from './Profile/Profile';
import './App.css';
import React from 'react';

class App extends React.Component {

  state ={
    me:{
    fullName: 'Ashraf Ben Khemis',
    bio:'student',
    src: './Ashraf.png',
    profession:'Engineer'
    },
    show: true,
    count:0
  };

 handleShow = () =>{
  this.setState({show: !this.state.show});
 }
 handleCount = () =>{
   this.setState({count: this.state.count+1})
 }
componentDidMount(){
  setInterval(()=> this.handleCount(),1000);
}

  render() {
  return (
        <div className="App">
        <button className="btn" onClick={this.handleShow}>{this.state.show ? 'Hide':'Show'}</button>
        {this.state.show ?  this.state.show && <><p>{this.state.count}</p> <Profile/> </>: null} 

    </div>
  );
}
}

export default App;
