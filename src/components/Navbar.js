import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Navbar.css";

function Navbar({
  sectionOneRef,
  sectionTwoRef,
  sectionThreeRef,
  scrollDown,
  setGenResume,
}) {
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    addSticky();
  };

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function addSticky() {
    // Get the navbar
    var navbar = document.getElementById("myTopnav");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  return (
    <div className="topnav" id="myTopnav">
      <a
        href="#"
        onClick={() => {
          setGenResume(false);
          scrollDown(sectionOneRef);
        }}
        className="active"
      >
        Home
      </a>

      <a
        href="#"
        onClick={() => {
          setGenResume(false);
          scrollDown(sectionTwoRef);
        }}
      >
        Education
      </a>
      <a
        href="#"
        onClick={() => {
          setGenResume(false);
          scrollDown(sectionThreeRef);
        }}
      >
        Experience
      </a>
      <a
        href="#"
        onClick={() => {
          setGenResume(true);
        }}
      >
        Preview Resume
      </a>
      <a
        href="#"
        onClick={() => {
          window.print();
        }}
      >
        Print Screen
      </a>
      <a href="#" className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </a>
      <ToastContainer />
    </div>
  );
}

export default Navbar;
