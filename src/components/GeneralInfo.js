import React from "react";
import "../styles/App.css";
import blankProfileImg from "../images/no-photo.png";
import { useEffect } from "react";

function GeneralInfo({ formData, setFormData }) {
  useEffect(() => {
    console.log(JSON.stringify(formData));
  }, [formData]);

  const changeHandler = (event) => {
    // setFormData({
    //   ...formData,
    //   imagePhoto: URL.createObjectURL(event.target.files[0]),
    // });

    //   URL.revokeObjectURL(photoImage.src); // free memory

    var reader = new FileReader();
    reader.onload = function () {
      setFormData({
        ...formData,
        imagePhoto: reader.result,
      });
    };

    const file = event.target.files[0];
    if (file) reader.readAsDataURL(file);
  };

  const clearPhotoImage = (event) => {
    setFormData({
      ...formData,
      imagePhoto: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <div>
        <h1 className="text-center">General Information</h1>
        <div className="d-flex flex-column flex-md-row justify-content-around">
          <div className="col-md-4">
            <div className="form-floating mx-2">
              <input
                id="name"
                type="text"
                className="form-control fs-10 mb-2"
                autoFocus
                required
                onChange={(e) => handleChange(e)}
                value={formData.name || ""}
              />
              <label htmlFor="name mb-1">Name</label>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-floating mx-2">
              <input
                id="email"
                type="email"
                className="form-control fs-10 mb-2"
                required
                onChange={(e) => handleChange(e)}
                value={formData.email || ""}
              />
              <label htmlFor="email mb-1">Email</label>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-floating mx-2">
              <input
                id="phone"
                type="text"
                className="form-control fs-10 mb-2"
                required
                onChange={(e) => handleChange(e)}
                value={formData.phone || ""}
              />
              <label htmlFor="phone mb-1">Phone</label>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-around">
          <div className="col-md-4">
            <div className="form-floating mx-2">
              <input
                id="linkedin"
                type="text"
                className="form-control fs-10 mb-2"
                onChange={(e) => handleChange(e)}
                value={formData.linkedin || ""}
              />
              <label htmlFor="linkedin mb-1">Linkedin</label>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-floating mx-2">
              <input
                id="twitter"
                type="text"
                className="form-control fs-10 mb-2"
                onChange={(e) => handleChange(e)}
                value={formData.twitter || ""}
              />
              <label htmlFor="twitter mb-1">Twitter</label>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-floating mx-2">
              <input
                id="www"
                type="text"
                className="form-control fs-10 mb-2"
                onChange={(e) => handleChange(e)}
                value={formData.www || ""}
              />
              <label htmlFor="www mb-1">WWW</label>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-around">
          <div className="col-md-6">
            <div className=" mx-2">
              <textarea
                id="skills"
                className="gen-text form-control fs-10 mb-2"
                rows="8"
                onChange={(e) => handleChange(e)}
                value={formData.skills || ""}
                placeholder="Skills: e.g. Javascript|90"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className=" mx-2">
              <textarea
                id="certificate"
                className="gen-text form-control fs-10 mb-2"
                rows="8"
                onChange={(e) => handleChange(e)}
                value={formData.certificate || ""}
                placeholder="Certificates: e.g. Sun Certified Java Developer|Sun Microsystems"
              />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-around">
          <div className="col-md-12">
            <div className="mx-2">
              <textarea
                id="summary"
                className="gen-text form-control fs-10 mb-2"
                rows="5"
                onChange={(e) => handleChange(e)}
                value={formData.summary || ""}
                placeholder="How would you describe yourself?"
              />
              <label htmlFor="summary mb-1">Summary</label>
            </div>
          </div>
        </div>
      </div>

      <br />
      <hr />
      <br />
      <div>
        <h2 className="text-center mt-30">
          Do you want to include profile picture in your resume?
        </h2>
        <div className="d-flex justify-content-center">
          <div>
            <div>
              <label
                id="label-filename"
                className="btn btn-primary mb-2"
                htmlFor="filename"
              >
                {formData.imagePhoto
                  ? "Change a photo"
                  : "Click me to upload image"}
              </label>
              <input
                id="filename"
                type="file"
                onChange={changeHandler}
                accept="image/x-png,image/gif,image/jpeg"
              />
            </div>
            <div>
              <button
                id="no-profile-photo"
                className="btn btn-primary mb-2"
                onClick={clearPhotoImage}
              >
                No Profile Photo
              </button>
            </div>
          </div>
          <div className="mx-3">
            <img
              className="profile-photo"
              src={formData.imagePhoto ? formData.imagePhoto : blankProfileImg}
              alt="personal profile img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
