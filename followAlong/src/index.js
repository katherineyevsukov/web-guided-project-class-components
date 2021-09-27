import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
  {
    name: 'Torillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groceries: groceries
    }
  }
  
  //Feature 1: Toggle Item to be purchased or not purchased
  handleToggleComplete = (id) => {
    this.setState({
      ...this.state,
      groceries: this.state.groceries.map((grocery)=> {
        if (grocery.id === id) {
          return({
              ...grocery,
              purchased: !grocery.purchased
            });
        } else {
          return(grocery);
        }
      })
    });
  }

  //Feature 2: Add an Item to groceries
  handleAdd = (name) => {
    const newGrocery = {
      name: name,
      id: Date.now(),
      purchased: false
    };

    this.setState({
      ...this.state,
      groceries: [...this.state.groceries, newGrocery]
    });
  }

  //Feature 3: Clear all groceries that have been purchased
  handleClear = () => {
    //1. setState
    //2. spread state
    //3. groceries should be set to all groceries that have not been purchased
    this.setState({
      ...this.state,
      groceries: this.state.groceries.filter((item)=> {
        return(item.purchased === false);
      })
    });
  }


  // Class methods to update state
  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           <ListForm handleAdd={this.handleAdd}/>
         </div>
        <GroceryList handleClear={this.handleClear} handleToggleComplete={this.handleToggleComplete} groceries={this.state.groceries} />
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement); 