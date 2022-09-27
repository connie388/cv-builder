import React from "react";
import { v4 } from "uuid";
import wwwIcon from "../images/www.png";
import "../styles/GenerateResume.css";

function GenerateResume({ generalInfo, edRecord, expRecord }) {
  const Skills = ({ data }) => {
    if (data) {
      const myArray = data.split("\n");
      return myArray.map((obj) => {
        const newArray = obj.split("|");
        let skill = newArray[0];
        let level = newArray[1] || "";
        return (
          <div key={v4()}>
            <div>{skill}</div>
            <div className={"skills skill" + level}>{level}%</div>
          </div>
        );
      });
    }
  };

  const Certificates = ({ data }) => {
    if (data) {
      const myArray = data.split("\n");
      return myArray.map((obj) => {
        const newArray = obj.split("|");
        let certificate = newArray[0];
        let year = newArray[1] || "";
        return (
          <div
            key={v4()}
            className="d-flex flex-column flex-md-row justify-content-around mb-2"
          >
            <div className="col-md-8">{certificate}</div>
            <div className="col-md-4 font-italic">{year}</div>
          </div>
        );
      });
    }
  };

  const Tasks = ({ data }) => {
    if (data) {
      const myArray = data.split("\n");

      return myArray.map((obj) => (
        <div key={v4()}>
          <li>{obj}</li>
        </div>
      ));
    }
  };

  return (
    <div className="resume-container">
      <h1 className="text-center mt-5 mb-5">Resume</h1>
      <div className="parent">
        <div className="child1">
          {generalInfo.imagePhoto ? (
            <img
              className="profile-photo"
              id="output"
              src={generalInfo.imagePhoto}
              alt="personal profile"
            />
          ) : (
            <></>
          )}
          <h2>{generalInfo.name}</h2>
          {generalInfo.email.length === 0 ? (
            <></>
          ) : (
            <div>
              <i className="icon fa fa-envelope-open-o" aria-hidden="true"></i>
              {generalInfo.email}
            </div>
          )}

          {generalInfo.phone.length === 0 ? (
            <></>
          ) : (
            <div>
              <i className="icon fa fa-phone" aria-hidden="true"></i>
              {generalInfo.phone}
            </div>
          )}

          {generalInfo.linkedin.length === 0 ? (
            <></>
          ) : (
            <div>
              <i className="icon fa fa-linkedin" aria-hidden="true"></i>
              {generalInfo.linkedin}
            </div>
          )}
          {generalInfo.twitter.length === 0 ? (
            <></>
          ) : (
            <div>
              <i className="icon fa fa-twitter" aria-hidden="true"></i>
              {generalInfo.twitter}
            </div>
          )}
          {generalInfo.www.length === 0 ? (
            <></>
          ) : (
            <div>
              <img className="icon" src={wwwIcon} alt="website icon" />
              {generalInfo.www}
            </div>
          )}
          {generalInfo.skills.length === 0 ? (
            <></>
          ) : (
            <>
              <div className="left-title ">
                <i className="icon fa fa-asterisk" aria-hidden="true"></i>
                Skills
              </div>
              <Skills data={generalInfo.skills} />
            </>
          )}

          <h2>
            <i className="icon fa fa-graduation-cap" aria-hidden="true"></i>
            Education
          </h2>

          {edRecord.length === 0
            ? "No Education History Added"
            : edRecord.map((obj) => {
                return (
                  <div key={v4()} className="mb-2">
                    <div> {obj.schoolName}</div>
                    <div className="font-italic">
                      {obj.title} - {obj.year}
                    </div>
                  </div>
                );
              })}
        </div>
        <div className="child2">
          <div className="form-floating mt-2">
            <h2>
              <i className="icon fa fa-user-circle" aria-hidden="true"></i>
              About Me:
            </h2>
            <hr />
            <p>{generalInfo.summary}</p>
            <h2 className="mt-4">
              <i className="icon fa fa-briefcase" aria-hidden="true"></i>
              Working Experience
            </h2>
            {expRecord.length === 0
              ? "No Working Experience Added"
              : expRecord.map((obj) => {
                  return (
                    <div key={v4()} className="mb-2">
                      <div>
                        <h5>
                          {obj.title} / {obj.companyName}
                        </h5>
                        <div className="font-italic">
                          <i
                            className="icon fa fa-calendar"
                            aria-hidden="true"
                          ></i>
                          {obj.fromDate} - {obj.toDate ? obj.toDate : "Now"}
                        </div>
                        <div> {obj.jobDescription}</div>
                      </div>
                      <div>
                        <Tasks data={obj.mainTasks} />
                      </div>
                    </div>
                  );
                })}
          </div>
          {generalInfo.certificate.length === 0 ? (
            <></>
          ) : (
            <>
              <h2 className="mt-4">
                <i className="icon fa fa-certificate" aria-hidden="true"></i>
                Certificates
              </h2>
              <Certificates data={generalInfo.certificate} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default GenerateResume;
