
import { useState } from 'react';
import './App.css'
import MyButton from './cmoponents/MyButton';
// import MyProducts from './cmoponents/myProducts';
// import ShoppingList from './cmoponents/ShoppingList';

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1)
  }
  
  return (
    <div>
      {/* <MyProducts></MyProducts> */}
      {/* <ShoppingList></ShoppingList> */}

      <h1>Counters that update separately</h1>
      <MyButton count={count} onClick={handleClick}></MyButton>
      <MyButton count={count} onClick={handleClick}></MyButton>
    </div>
  );
}

export default App
