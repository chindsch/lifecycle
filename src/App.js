import React, {Component} from 'react';

class LifeCycle extends Component{
  constructor(){
    super();
    this.state = {
      items: [],
      isLoaded:false,
    };
  };

// This is where methods live, above render below constructor
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    })
//Response is in json format
    .then(data => {
      console.log(data);
      this.setState({
        isLoaded: true,
        items:data,
      });
    });
}
  render(){
    var {isLoaded, items} = this.state;
    if (!isLoaded){
      return <div> Loading... </div>
    } else {
      return (
      <div className = "App">
        <div className = "Names">
          <ul>
          {items.map(el => {
            return (
              <li key={el.id}>
              Name: {el.name} | UserName: {el.username} | {" "}
              <a href={`https://${el.website}`}>Website </a>
              </li>
            )
          })}
          </ul>
        </div>
      </div>
    );
  };
};
};

export default LifeCycle;
