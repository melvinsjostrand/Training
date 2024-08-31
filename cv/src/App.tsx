import Button from "./components/Button/Index";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup/";
import Like from "./components/Like";

import { useState } from "react";
function App() {
  const [drink, setDrink] = useState({
    title: "cola",
    price: 5,
  });

  const [arr, setArr] = useState(['happy', 'sad'])

  const updateArr = () => {

    setArr([...arr, 'hello']);

    setArr(arr.filter(arr => arr !== 'happy'))

    setArr(arr.map(arr => arr === 'happy' ? 'happ' : arr))

  }


  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
  };
  const [isLoading, setLoading] = useState(false);
  const items = ["New York", "Los Angeles", "San Francisco"];
  const [alertVisible, setAlertVisibiliy] = useState(false);
  return (
    <div>
      <button onClick={handleClick}></button>
      {drink.price}

      <Like onClick={() => console.log("Click")} />
      <ListGroup heading="Maimi" items={items} onSelectItem={() => {}} />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibiliy(false)}>My alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibiliy(true)}>
        my button
      </Button>
    </div>
  );
}

export default App;
