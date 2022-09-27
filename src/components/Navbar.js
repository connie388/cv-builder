import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Navbar.css";

function Navbar({
  sectionOneRef,
  sectionTwoRef,
  sectionThreeRef,
  scrollDown,
  setGenResume,
  generalInfo,
  edRecord,
  expRecord,
  setGeneralInfo,
  setEdRecord,
  setExpRecord,
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

  const importData = () => {
    fetch("./user-info.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setGeneralInfo(myJson.general);
        setEdRecord(myJson.education);
        setExpRecord(myJson.experience);

        toast.success("User information imported.", {
          position: toast.POSITION.TOP_LEFT,
          autoClose: false,
          closeOnClick: true,
          toastId: "customId",
        });
      });
  };

  const exportData = () => {
    const generalStr = JSON.stringify(generalInfo);
    const educationStr = JSON.stringify(edRecord);
    const experienceStr = JSON.stringify(expRecord);
    const userInfo =
      '{"general":' +
      generalStr +
      ',"education":' +
      educationStr +
      ',"experience":' +
      experienceStr +
      "}";

    const blob = new Blob([userInfo], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "user-info.json";
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

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
        Preview
      </a>
      <a
        href="#"
        onClick={() => {
          window.print();
        }}
      >
        Print
      </a>
      <a
        href="#"
        onClick={() => {
          importData();
        }}
      >
        Import
      </a>
      <a
        href="#"
        onClick={() => {
          exportData();
        }}
      >
        Export
      </a>

      <a href="#" className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </a>
      <ToastContainer />
    </div>
  );
}

export default Navbar;
