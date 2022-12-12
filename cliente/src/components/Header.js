import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';


const Header = () => {
    return (
        <Navbar
        className=""
        style={{ backgroundSize: "0", backgroundColor: "#343e51" }}
        dark
      >
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="https://pilandina.com.bo/wp-content/uploads/2019/04/logo_pil.png"
            style={{
              height: 37,
              width: 60
            }}
          />
                <Link className={'mx-3 text-decoration-none text-light'} to={"/1"}>Ver Productos</Link>
                <Link className={'mx-3 text-decoration-none text-light'} to={"/name"}>Buscar Por Nombre</Link>
        </NavbarBrand>
      </Navbar>
    );
}

export default Header;
