import Button from "./components/Button/";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup/";
import Like from "./components/Like";
import { produce } from "immer";
import { useState } from "react";
import NavBar from "./components/navBar";
import Cart from "./components/cart";
import Expand from "./components/expand";
import Form from "./components/Form";
function App() {
  const [game , setGame] = useState({
    id: 1,
    player: {
      name: 'john',
    },
  });

 const updateGame = () => {
  setGame({
    ...game,
    player: {...game.player, name:'mebbe'}
  })

  const [pizza, setPizza] = useState ({
    name: ' pizza1',
    toppings: ['svamp']
  });

  const updatePizza = () => {
    setPizza({...pizza, toppings : [...pizza.toppings , 'kebab']})
  }


  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "P1", quantitiy: 1 },
      { id: 2, title: "P2", quantitiy: 1 },
    ],
  });

  const updateCart = () => {
    setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantitiy +1} : item)})
  }

 }
  return (
    <div>
      <Form></Form>
    </div>
  );
}

export default App;
