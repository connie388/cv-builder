import "./styles/App.css";
import React, { useRef, useState } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";
import Navbar from "./components/Navbar";
import GenerateResume from "./components/GenerateResume";
import ImportData from "./components/ImportData";

export default function App() {
  const sectionOneRef = useRef(null); // Home
  const sectionTwoRef = useRef(null); // Education
  const sectionThreeRef = useRef(null); // Experience

  const scrollDown = (ref) => {
    if (genResume === "home") {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    twitter: "",
    www: "",
    skills: "",
    certificate: "",
    summary: "",
    imagePhoto: "",
  });

  // To take track of all education entered
  const [edRecord, setEdRecord] = useState([]);

  // To take track of all working experience entered
  const [expRecord, setExpRecord] = useState([]);

  const [genResume, setGenResume] = useState("home");

  return (
    <>
      <Navbar
        sectionOneRef={sectionOneRef}
        sectionTwoRef={sectionTwoRef}
        sectionThreeRef={sectionThreeRef}
        scrollDown={scrollDown}
        setGenResume={setGenResume}
        generalInfo={generalInfo}
        edRecord={edRecord}
        expRecord={expRecord}
        setGeneralInfo={setGeneralInfo}
        setEdRecord={setEdRecord}
        setExpRecord={setExpRecord}
      />

      {genResume === "home" ? (
        <div className="content">
          <div ref={sectionOneRef} id="sectionOne" className="form-container">
            <br />
            <br />
            <GeneralInfo formData={generalInfo} setFormData={setGeneralInfo} />
          </div>
          <br />
          <div ref={sectionTwoRef} id="sectionTwo" className="form-container">
            <br />
            <br />
            <Education edRecord={edRecord} setEdRecord={setEdRecord} />
          </div>
          <br />
          <div ref={sectionThreeRef}  id="sectionThree" className="form-container">
            <br />
            <br />
            <Experience expRecord={expRecord} setExpRecord={setExpRecord} />
          </div>
        </div>
      ) : genResume === "resume" ? (
        <GenerateResume
          generalInfo={generalInfo}
          edRecord={edRecord}
          expRecord={expRecord}
        />
      ) : (
        <ImportData
          setGeneralInfo={setGeneralInfo}
          setEdRecord={setEdRecord}
          setExpRecord={setExpRecord}
        />
      )}
    </>
  );
}
