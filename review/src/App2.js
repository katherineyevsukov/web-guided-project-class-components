import React from 'react';


// const Person = (props)=> {
//     return(<div>
//         <h1>Hello {props.name}. You are {props.age} years old.</h1>
//         <h2> You are how many years old? {props.age}! But you look so Good!!</h2>
//     </div>)
// }

class Person extends React.Component {
    render() {
        return(<div>
            <h1>Hello {this.props.name}. You are {this.props.age} years old.</h1>
            <h2> You are how many years old? {this.props.age}! But you look so Good!!</h2>
        </div>)
    }
}

class App2 extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "allison",
            age: 11
        }
    }

    handleClick = ()=> {
        this.setState({
            ...this.state,
            name: "Warren",
            age: 22
        });
    }

    render() {
        return(<div>
            <Person name={this.state.name} age={this.state.age}/>
            <button onClick={this.handleClick}>Let's change some things!!</button>
        </div>);
    }
}

export default App2;