import React, { useState } from "react";
import firebase from "firebase";
import { db, storage } from "../firebase";
import "./Application.css";
const ApplicationForm = () => {
  // const [name, setName] = useState("");
  // const [profileImage, setProfileImage] = useState(null);
  // const [progress, setProgress] = useState(0);

  const [distributor_id_checked, setDistributor_Id_checked] = useState("No");
  const [oldDistributorID, setOldDistributorID] = useState("");
  const [fssai_reg_check, setFssai_reg_check] = useState("No");
  const [fssaiRegistrationNumber, setFssaiRegistrationNumber] = useState("");

  const [applicationType, setApplicationType] = useState("Individual");
  console.log(applicationType);
  console.log(distributor_id_checked);
  // const handleProfileUpload = (e) => {
  //   if (e.target.files[0]) {
  //     setProfileImage(e.target.files[0]);
  //   }
  // };
  // const handleSubmit = () => {
  //   const uploadTask = storage
  //     .ref(`profile-images/${profileImage.name}`)
  //     .put(profileImage);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       // progress function ...
  //       const progress = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(progress);
  //     },
  //     (error) => {
  //       // Error function ...
  //       console.log(error);
  //       alert(error.message);
  //     },
  //     () => {
  //       // complete function ...
  //       storage
  //         .ref("profile-images")
  //         .child(profileImage.name)
  //         .getDownloadURL()
  //         .then((url) => {
  //           // post image inside db
  //           db.collection("applications").add({
  //             timestamp: firebase.firestore.FieldValue.serverTimestamp(),

  //             imageUrl: url,
  //             username: name,
  //           });

  //           setProfileImage(null);
  //         });
  //     }
  //   );
  // };
  return (
    <div className="form">
      <form action="" className="form">
        {/* <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <progress value={progress} max="100" />
      <input onChange={handleProfileUpload} type="file" name="" id="" />
      <button onClick={handleSubmit}>Submit</button> */}
        {/* <label htmlFor="distributor_id">DistributorId</label>
        <input type="text" /> */}
        <label htmlFor="4life_distributor_ID_check">
          Have you ever held a 4life distributor ID?{" "}
        </label>
        <select onChange={(e) => setDistributor_Id_checked(e.target.value)}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
        {distributor_id_checked === "yes" && (
          <>
            <label htmlFor="old_id">If Yes, Old Id</label>
            <input
              type="text"
              value={oldDistributorID}
              onChange={(e) => setOldDistributorID(e.target.value)}
            />
          </>
        )}
        <label htmlFor="4life_fssai_reg_check">
          Do you have a FSSAI registration no ?{" "}
        </label>
        <select onChange={(e) => setFssai_reg_check(e.target.value)}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
        {fssai_reg_check === "yes" && (
          <>
            <label htmlFor="old_id">If Yes, FSSAI registration No.</label>
            <input
              type="text"
              value={fssaiRegistrationNumber}
              onChange={(e) => setFssaiRegistrationNumber(e.target.value)}
            />
          </>
        )}
        {/* ----------------------------- */}
        <h1>Applicant Information</h1>
        {/* <input type="checkbox" name="" id="" />
        <label htmlFor="">Individual</label>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Company*</label> */}
        <select onChange={(e) => setApplicationType(e.target.value)}>
          <option value="Individual">Individual</option>
          <option value="Company">Company*</option>
        </select>
        <label htmlFor="">Applicant Name</label>
        <input type="text" />
        <label htmlFor="">Aadhar Number</label>
        <input type="text" />
        <label htmlFor="">PAN Number</label>
        <input type="text" />
        <label htmlFor="">Co-Applicant Name</label>
        <input type="text" />
        <label htmlFor="">Aadhar Number</label>
        <input type="text" />
        <label htmlFor="">PAN Number</label>
        <input type="text" />
        <h3>
          Please submit a copy of Aadhaar Card & PAN Card for both applicants{" "}
        </h3>
        <label htmlFor="">Address</label>
        <input type="text" />
        Please submit Address Proof
        <label htmlFor="">City</label>
        <input type="text" />
        <label htmlFor="">State</label>
        <input type="text" />
        <label htmlFor="">Pin Code</label>
        <input type="text" />
        <label htmlFor="">Date of Birth</label>
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        />
        <label htmlFor="">EMAIL</label>
        <input type="email" />
        <label htmlFor="">Home Phone</label>
        <input type="tel" name="" id="" />
        <label htmlFor="">Mobile: +91</label>
        <input type="tel" />
        <label htmlFor="">Work Phone</label>
        <input type="tel" />
        {/*
        <h1>Distributor Shipping Address</h1>
        <label htmlFor="">Address</label>
        <input type="text" />
        <label htmlFor="">City</label>
        <input type="text" />
        <label htmlFor="">State</label>
        <input type="text" />
        <label htmlFor="">Pin Code</label>
        <input type="text" />
        <h1>Enroller Information</h1>
        <label htmlFor="">Enroller's id</label>
        <input type="text" />
        <label htmlFor="">Name</label>
        <input type="text" />
        <h1>Sponser Information</h1>
        <label htmlFor="">Sponser's id</label>
        <input type="text" />
        <label htmlFor="">Name</label>
        <input type="text" />
        <h1>Commision Payment Information</h1>
        <label htmlFor="">Name of the Bank</label>
        <input type="text" />
        <label htmlFor="">Branch Name & Address</label>
        <input type="text" />
        <label htmlFor="">Account Number</label>
        <input type="text" />
        <label htmlFor="">Bank IFSC Code:</label>
        <input type="text" /> */}
        {/* Please attch copy of cancelled cheque */}
      </form>
    </div>
  );
};

export default ApplicationForm;
