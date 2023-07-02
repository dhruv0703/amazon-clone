import React from 'react'
import{Link} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search" ;
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
function Header() {
  return (
    <nav className="header">
    <Link to = "/login" >
      <img
        className="header__logo"
        src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817"
        alt=""
      />
      </Link>
      {/* /*Search box*/ }
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon"/>
      </div>
      {/* 3 links */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to ="/login" className="header__link">
        <div className = "header__option">
        <span className="header__optionLineone">
          Hello User
         </span>
         <span className="header__optionLineTwo">
          Sign in
         </span>
        </div>
         
        </Link>

        {/* 2nd link */}
        <Link to ="/" className="header__link">
        <div className = "header__option">
        <span className="header__optionLineone">
          Returns
         </span>
         <span className="header__optionLineTwo">
          & Orders
         </span>
        </div>
         
        </Link>

          {/* 3rd link */}
          <Link to ="/" className="header__link">
        <div className = "header__option">
        <span className="header__optionLineone">
       your
         </span>
         <span className="header__optionLineTwo">
          Prime
         </span>
        </div>
         
        </Link>


           {/* 4th link */}
       <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
         <ShoppingBasketIcon/>
          <span className="header__optionLineTwo header__basketcount" >0</span>
        </div>
       </Link>

      </div>
     
    </nav>
  );
}

export default Header;
