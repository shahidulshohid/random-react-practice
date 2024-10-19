
import './App.css'
import AdminPanel from './cmoponents/AdmiPanel';
import LoginForm from './cmoponents/LoginForm';
// import AboutPage from './cmoponents/AboutPage'
// import MyButton from './cmoponents/MyButton'
import myImg from './images/Mask Group.png'

function App() {
  const user = {
    name: 'Hedy Lamarr',
    imageSize: 90,
  };

  let isLoggedIn = false

  return (
    <>
      {/* <h1>Welcome to my app</h1>
      <MyButton></MyButton>
      <AboutPage></AboutPage> */}
    

    <h2>{user.name}</h2>
    <img src={myImg} alt="" style={{width:user.imageSize, height:user.imageSize}}/>

    {/* condition rendering  */}
    {
      // isLoggedIn ? <AdminPanel></AdminPanel> : <LoginForm></LoginForm>
    }

    {
      isLoggedIn ? <LoginForm></LoginForm> : <AdminPanel></AdminPanel>
    }
    </>
  )
}

export default App
