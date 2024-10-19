
import './App.css'

function App() {

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  const listItems = products.map((product) => {
    return <li key={product.id} style={{color:'teat', fontSize:'20px', listStyle:'none'}}>{product.title}</li>
  })
  
  return (
    <ul>{listItems}</ul>
  );
}

export default App
