import Button from "./components/Button/";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup/";
import Like from "./components/Like";
import { produce } from "immer";
import { useState } from "react";
import NavBar from "./components/navBar";
import Cart from "./components/cart";
import Expand from "./components/expand";

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
      
      <Expand>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, minus. Vel veritatis, quasi magnam ullam dolores fugiat quod impedit odit natus libero illum temporibus deleniti totam molestiae praesentium modi atque sit voluptate velit accusantium cumque labore quisquam quaerat tempore! Praesentium, laudantium vero obcaecati vitae sapiente error quia facilis minima aperiam dolor maiores a atque cupiditate natus aliquam magni. Mollitia eveniet quo facere iure id harum iste omnis eos! Id, illum magni quae natus soluta eos labore minus necessitatibus incidunt exercitationem adipisci. Impedit, quia quo suscipit quibusdam dolores dolorem recusandae nam ipsa voluptatum ratione quas harum laudantium eligendi corrupti praesentium rem.
      </Expand>
    </div>
  );
}

export default App;
