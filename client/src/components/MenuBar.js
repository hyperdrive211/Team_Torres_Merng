import React,  {useState, useContext} from 'react'; 
import {Menu} from 'semantic-ui-react'; 
import {Link} from 'react-router-dom'; 
import {AuthContext} from '../context/auth';


function MenuBar(){
    const {user, logout} = useContext(AuthContext); 
    const pathname = window.location.pathname;
    const path = pathname === '/' ? 'home' : pathname.substring(1); 
    const [activeItem, setActiveItem] = useState(path);

   const handleItemClick = (e, {name}) => setActiveItem(name);  
    
   const menuBar = user ? (
    <Menu pointing secondary size="massive" color="teal">
    <Menu.Item
      name={user.username}
      active
      onClick={handleItemClick}
      as={Link}
      to='/'
    >
        {user.username}
    </Menu.Item>
    <Menu.Menu position='right'>
    <Menu.Item 
      name = 'addContent'
      as={Link}
      to='/content'
    >
     Add Lesson
    </Menu.Item>
    <Menu.Item
      name='logout'
      onClick={logout}
      as={Link}
      to=''
    >
      Logout
    </Menu.Item>
    </Menu.Menu>
  </Menu>
   ) : 
   (<Menu pointing secondary size="massive" color="teal">
   <Menu.Item
     name="Home"
     active = {activeItem === 'Home'}
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
 </Menu>); 

   return menuBar; 
}

export default MenuBar; 