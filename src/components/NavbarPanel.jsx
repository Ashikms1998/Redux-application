import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

const NavbarPanel = () => {

const cartProducts = useSelector(state=>state.cart)

  return (
    <Navbar bg='light' expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#">Redux Project</Navbar.Brand>
        <Nav>
            <Nav.Link to='/' as={Link}>Products</Nav.Link>
        </Nav>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-contet-end'>
          <Navbar.Text>
               <Nav.Link to='/cart' as={Link}>My Bag {cartProducts.length}</Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarPanel