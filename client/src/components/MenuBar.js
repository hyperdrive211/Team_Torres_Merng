import React,  {useState} from 'react'; 
import {Menu} from 'semantic-ui-react'; 
import {Link} from 'react-router-dom'; 

function MenuBar(){
    const [activeItem, setActiveItem] = useState('');

   const handleItemClick = (e, {name}) => setActiveItem(name);  
        return (
            <Menu pointing secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
          as={Link}
          to='/'
        >
            Home
        </Menu.Item>
        <Menu.Menu position='right'>
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={handleItemClick}
          as={Link}
          to='/login'
        >
          Login
        </Menu.Item>

        <Menu.Item
          name='register'
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as={Link}
          to='/register'
        >
          Register
        </Menu.Item>
        </Menu.Menu>
      </Menu>
        );
}

export default MenuBar; 