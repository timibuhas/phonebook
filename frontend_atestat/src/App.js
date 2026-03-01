import './App.css'
import Contacte from "./components/Contacts"
import Grupuri from "./components/Groups"
import { useState } from 'react'
import logo from './icons/phonebook.svg'
function App() {


  const [active, setActive] = useState('contacte');

  return (
    <div>


      <div className="header">

        <div className='title'>
          <img src={logo} alt='' className='logo' />
          <h1>Agenda Telefonica</h1>
        </div>

        <div className="links">
          <h2 className={active === 'contacte' ? 'active-nav' : 'nav'} onClick={() => setActive('contacte')}> Contacte</h2>
          <p>|</p>
          <h2 className={active === 'grupuri' ? 'active-nav' : 'nav'} onClick={() => setActive('grupuri')}> Grupuri </h2>
        </div>

      </div>

      {active === 'contacte' && <Contacte />}
      {active === 'grupuri' && <Grupuri />}

    </div>
  );
}

export default App;
