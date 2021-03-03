import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';
import Home from '../components/pages/Home';
import Container from 'react-bootstrap/Container';

const Layout = () => {
    return (
        <Router>
            <Navbar bg='light' variant='light' expand='lg'>
                <Navbar.Brand href='/'>React App</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <NavLink to='/' className='nav-link'>
                            Home
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path='/' exact component={Home} />
                </Switch>
            </Container>
        </Router>
    );
};

export default Layout
