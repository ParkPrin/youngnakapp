import React, {useState, useEffect} from "react";
import { useRef } from 'react';
import "./Nav.css"

function useMoveScrool(): {element: React.RefObject<HTMLDivElement>, onMoveToElement:Function} {
  const element = useRef<HTMLDivElement>(null);
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return { element, onMoveToElement};
}

const Nav = ():JSX.Element => {
  const [show, setShow] = useState(false);
  useMoveScrool();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(`scrollY: ${window.scrollY}`);
      if(window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () =>  {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const positionChange = () => {

  }
  
  return (
    <nav className={`nav ${show && "nav__black"} `}>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/150px-Netflix_2015_logo.svg.png"
        className="nav__logo"
        onClick={() => window.location.reload()}
      />
      <img
        alt="User logged"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        className="nav__avatar"
        onClick={() => positionChange}
      />
    </nav>
  );
}

export default Nav;