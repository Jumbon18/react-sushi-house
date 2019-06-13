import React from 'react';
import './Navbar.css';
import Button from "../../UI/Button/Button";
import userImg from "../../../images/user.png";
import cart from "../../../images/shopping.png";
import {Link, NavLink} from "react-router-dom";
import CartDrawer from "../../UI/CartDrawer/CartDrawer";

const Navbar = props => {
  return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="">Sushi House</a>
      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <li className="nav-item active">
                  <Link to={{pathname:`/menu/sets`}} className="nav-link" onClick={() => props.changeCategory('sets')}>Sets</Link>
              </li>
              <li className="nav-item active">
                  <Link to={{pathname:`/menu/sushi`}} className="nav-link" onClick={() => props.changeCategory('sushi')}>Sushi</Link>
              </li>
              <li className="nav-item active">
                  <Link to={{pathname:`/menu/rolls`}} className="nav-link" onClick={() => props.changeCategory('rolls')}>Rolls</Link>
              </li>
              <NavLink to="/auth">
              <Button
                  typeBtn="btn nav-btn"
              > <img src={userImg} width="40px" height="40px"/></Button>
              </NavLink>
              <Button
                  typeBtn="btn cart-btn"
                  onClick={()=>props.close()}
              > <img src={cart}/></Button>
          </ul>
          <CartDrawer
              onClose={props.close}
              isOpen={props.menu}
          />
      </div>
  </nav>)
};

export default Navbar;