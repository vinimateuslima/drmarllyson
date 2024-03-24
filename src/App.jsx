import {Outlet} from 'react-router-dom'

import Menu from './components/Menu';
import Logo from './components/Logo';

function App() {

  return (
    <>
    <Logo/>
    <Menu/>
    <Outlet/>
    </>
  );
}

export default App;