import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([{
    name: 'James',
    url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fa.espncdn.com%2Fcombiner%2Fi%3Fimg%3D%2Fi%2Fheadshots%2Fnba%2Fplayers%2Ffull%2F1966.png&imgrefurl=https%3A%2F%2Fwww.espn.com.br%2Fnba%2Fjogador%2F_%2Fid%2F1966%2Flebron-james&tbnid=iInuKZVltXhHvM&vet=12ahUKEwi3tbze5Nz1AhUTupUCHeacA7UQMygEegUIARC-AQ..i&docid=6_Tu6e4K9ZMfhM&w=600&h=436&q=james&ved=2ahUKEwi3tbze5Nz1AhUTupUCHeacA7UQMygEegUIARC-AQ',
    age: 36,
    note: 'random person'
  }]);

  return (
    <div className="App">
      <h1>People that I like the most</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
