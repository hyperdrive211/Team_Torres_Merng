import React,  {useState, useContext} from 'react'; 
import {Menu, Dropdown, Icon} from 'semantic-ui-react'; 
import {Link} from 'react-router-dom'; 
import {AuthContext} from '../context/auth';


function MenuBar(){
    const {user, logout} = useContext(AuthContext); 
    const pathname = window.location.pathname;
    const path = pathname === '/' ? 'home' : pathname.substring(1); 
    const [activeItem, setActiveItem] = useState(path);

   const handleItemClick = (e, {name}) => setActiveItem(name);  
    
   const menuBar = user ? (
    <Menu  size="massive" inverted>
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
     <Dropdown item text='Content'>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} name='content' to='/content' icon='eye' text='View Content'></Dropdown.Item>
        
        <Dropdown.Item as={Link} name='addcontent' to='/addcontent' icon='add' text='Add Content'></Dropdown.Item>
        <Dropdown.Item as={Link} name='reviewcontent' to='' icon='edit' text="Review Content"></Dropdown.Item>
      </Dropdown.Menu>
     </Dropdown>
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
   (<Menu  size="massive" inverted>
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