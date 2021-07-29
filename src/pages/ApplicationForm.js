import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { db, storage } from "../firebase";
import "./Application.css";
const ApplicationForm = () => {
  // const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  // const [progress, setProgress] = useState(0);
  // const [progressAadhar, setProgressAadhar] = useState(0);
  const [applicantAadhar, setApplicantAadhar] = useState(null);
  const [applicantPAN, setApplicantPAN] = useState(null);
  const [coApplicantAadhar, setCoApplicantAadhar] = useState(null);
  const [coApplicantPAN, setCoApplicantPAN] = useState(null);
  const [addressProof, setAddressProof] = useState(null);
  const [chequeOrPassbook, setChequeOrPassbook] = useState(null);
  const [applicantSignature, setApplicantSignature] = useState(null);
  const [coApplicantSignature, setCoApplicantSignature] = useState(null);

  const [distributor_id_checked, setDistributor_Id_checked] = useState("No");
  const [oldDistributorID, setOldDistributorID] = useState("");
  const [fssai_reg_check, setFssai_reg_check] = useState("No");
  const [fssaiRegistrationNumber, setFssaiRegistrationNumber] = useState("");

  const [applicationType, setApplicationType] = useState("Individual");
  const [applicantName, setApplicantName] = useState("");
  const [applicantAadharNumber, setApplicantAadharNumber] = useState("");
  const [applicantPanNumber, setApplicantPanNumber] = useState("");
  const [coApplicantName, setCoApplicantName] = useState("");
  const [coApplicantAadharName, setCoApplicantAadharName] = useState("");
  const [coApplicantPanNumber, setCoApplicantPanNumber] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [applicantDateOFBirth, setApplicantDateOFBirth] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantHomePhone, setApplicantHomePhone] = useState("");
  const [applicantMobile, setApplicantMobile] = useState("");
  const [applicantWorkPhone, setApplicantWorkPhone] = useState("");

  const [distributorShippingAddress, setDistributorShippingAddress] =
    useState("");
  const [distributorCity, setDistributorCity] = useState("");
  const [distributorState, setDistributorState] = useState("");
  const [distributorPinCode, setDistributorPinCode] = useState("");

  const [enrollerid, setEnrollerId] = useState("");
  const [enrollerName, setEnrollerName] = useState("");

  const [sponserId, setSponserId] = useState("");
  const [sponserName, setSponserName] = useState("");

  const [nameoftheBank, setNameOfTheBank] = useState("");
  const [branchNameAddress, setBranchNameAddress] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankIFSCCode, setBankIFSCCode] = useState("");

  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [profileImageString, setProfileImageString] = useState("");
  console.log(profileImageUrl);
  console.log(profileImage);
  const handleProfileUpload = (e) => {
    if (e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };
  const handleApplicantAadharUpload = (e) => {
    if (e.target.files[0]) {
      setApplicantAadhar(e.target.files[0]);
    }
  };
  const handleApplicantPANUpload = (e) => {
    if (e.target.files[0]) {
      setApplicantPAN(e.target.files[0]);
    }
  };
  const handleCoApplicantPANUpload = (e) => {
    if (e.target.files[0]) {
      setCoApplicantPAN(e.target.files[0]);
    }
  };
  const handleCoApplicantAadharUpload = (e) => {
    if (e.target.files[0]) {
      setCoApplicantAadhar(e.target.files[0]);
    }
  };

  const handleAddressProofUpload = (e) => {
    if (e.target.files[0]) {
      setAddressProof(e.target.files[0]);
    }
  };

  const handleChequeOrPassbookUpload = (e) => {
    if (e.target.files[0]) {
      setChequeOrPassbook(e.target.files[0]);
    }
  };
  const handleApplicantSignatureUpload = (e) => {
    if (e.target.files[0]) {
      setApplicantSignature(e.target.files[0]);
    }
  };
  const handleCoApplicantSignatureUpload = (e) => {
    if (e.target.files[0]) {
      setCoApplicantSignature(e.target.files[0]);
    }
  };

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  function generateString(length) {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
  useEffect(() => {
    setProfileImageString(generateString(5));
  }, []);

  const profileImageUpload = (e) => {
    e.preventDefault();

    const uploadProfileImageTask = storage
      .ref(`profile-images/${profileImageString}`)
      .put(profileImage);

    uploadProfileImageTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        // Error function ...
        console.log(error);
        alert(error.message);
      },
      () => {
        // complete function ...
        storage
          .ref("profile-images")
          .child(profileImageString)
          .getDownloadURL()
          .then((url) => {
            setProfileImageUrl(url);
          });
      }
    );
  };
  return (
    <div className="form">
      <form action="" className="form">
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
        <h3>
          <h3>Upload Profile Image</h3>
          <input onChange={handleProfileUpload} type="file" name="" id="" />
          <button onClick={profileImageUpload}>Upload</button>
        </h3>
        {/* ----------------------------- */}
        <h1>Applicant Information</h1>
        <select onChange={(e) => setApplicationType(e.target.value)}>
          <option value="Individual">Individual</option>
          <option value="Company">Company*</option>
        </select>
        <label htmlFor="">Applicant Name</label>
        <input
          type="text"
          value={applicantName}
          onChange={(e) => setApplicantName(e.target.value)}
        />
        <label htmlFor="">Aadhar Number</label>
        <input
          type="text"
          value={applicantAadharNumber}
          onChange={(e) => setApplicantAadharNumber(e.target.value)}
        />
        <label htmlFor="">PAN Number</label>
        <input
          type="text"
          value={applicantPanNumber}
          onChange={(e) => setApplicantPanNumber(e.target.value)}
        />
        <label htmlFor="">Co-Applicant Name</label>
        <input
          type="text"
          value={coApplicantName}
          onChange={(e) => setCoApplicantName(e.target.value)}
        />
        <label htmlFor="">Aadhar Number</label>
        <input
          type="text"
          value={coApplicantAadharName}
          onChange={(e) => setCoApplicantAadharName(e.target.value)}
        />
        <label htmlFor="">PAN Number</label>
        <input
          type="text"
          value={coApplicantPanNumber}
          onChange={(e) => setCoApplicantPanNumber(e.target.value)}
        />
        <h3>
          Please submit a copy of Aadhaar Card & PAN Card for both applicants.
          <h3>Upload Applicant Aadhar</h3>
          {/* <progress value={progressAadhar} max="100" /> */}
          <input
            onChange={handleApplicantAadharUpload}
            type="file"
            name=""
            id=""
          />
          <h3>Upload Applicant PAN</h3>
          <input
            onChange={handleApplicantPANUpload}
            type="file"
            name=""
            id=""
          />
          <h3>Upload Co-Applicant Aadhar</h3>
          <input
            onChange={handleCoApplicantAadharUpload}
            type="file"
            name=""
            id=""
          />
          <h3>Upload Co-Applicant PAN</h3>
          <input
            onChange={handleCoApplicantPANUpload}
            type="file"
            name=""
            id=""
          />
        </h3>
        <label htmlFor="">Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <h3>
          Submit Address Proof
          <h3>Upload Address proof</h3>
          <input
            onChange={handleAddressProofUpload}
            type="file"
            name=""
            id=""
          />
        </h3>
        <label htmlFor="">City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label htmlFor="">State</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <label htmlFor="">Pin Code</label>
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPinCode(e.target.value)}
        />
        <label htmlFor="">Date of Birth</label>
        <input
          style={{ "min-height": "2rem" }}
          type="date"
          value={applicantDateOFBirth}
          onChange={(e) => setApplicantDateOFBirth(e.target.value)}
        />
        <label htmlFor="">EMAIL</label>
        <input
          type="email"
          value={applicantEmail}
          onChange={(e) => setApplicantEmail(e.target.value)}
        />
        <label htmlFor="">Home Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          value={applicantHomePhone}
          onChange={(e) => setApplicantHomePhone(e.target.value)}
        />
        <label htmlFor="">Mobile: +91</label>
        <input
          type="tel"
          value={applicantMobile}
          onChange={(e) => setApplicantMobile(e.target.value)}
        />
        <label htmlFor="">Work Phone</label>
        <input
          type="tel"
          value={applicantWorkPhone}
          onChange={(e) => setApplicantWorkPhone(e.target.value)}
        />
        <h1>Distributor Shipping Address</h1>
        <label htmlFor="">Address</label>
        <input
          type="text"
          value={distributorShippingAddress}
          onChange={(e) => setDistributorShippingAddress(e.target.value)}
        />
        <label htmlFor="">City</label>
        <input
          type="text"
          value={distributorCity}
          onChange={(e) => setDistributorCity(e.target.value)}
        />
        <label htmlFor="">State</label>
        <input
          type="text"
          value={distributorState}
          onChange={(e) => setDistributorState(e.target.value)}
        />
        <label htmlFor="">Pin Code</label>
        <input
          type="text"
          value={distributorPinCode}
          onChange={(e) => setDistributorPinCode(e.target.value)}
        />
        <h1>Enroller Information</h1>
        <label htmlFor="">Enroller's id</label>
        <input
          type="text"
          value={enrollerid}
          onChange={(e) => setEnrollerId(e.target.value)}
        />
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={enrollerName}
          onChange={(e) => setEnrollerName(e.target.value)}
        />
        <h1>Sponser Information</h1>
        <label htmlFor="">Sponser's id</label>
        <input
          type="text"
          value={sponserId}
          onChange={(e) => setSponserId(e.target.value)}
        />
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={sponserName}
          onChange={(e) => setSponserName(e.target.value)}
        />
        <h1>Commision Payment Information</h1>
        <label htmlFor="">Name of the Bank</label>
        <input
          type="text"
          value={nameoftheBank}
          onChange={(e) => setNameOfTheBank(e.target.value)}
        />
        <label htmlFor="">Branch Name & Address</label>
        <input
          type="text"
          value={branchNameAddress}
          onChange={(e) => setBranchNameAddress(e.target.value)}
        />
        <label htmlFor="">Account Number</label>
        <input
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <label htmlFor="">Bank IFSC Code:</label>
        <input
          type="text"
          value={bankIFSCCode}
          onChange={(e) => setBankIFSCCode(e.target.value)}
        />
        <h3>
          Please attch copy of cancelled cheque or bank passbook
          <h3>Upload copy of cancelled cheque of bank passbook</h3>
          <input
            onChange={handleChequeOrPassbookUpload}
            type="file"
            name=""
            id=""
          />
        </h3>
        <h3>
          Applicant Signature
          <h3>Upload Applicant Signature</h3>
          <input
            onChange={handleApplicantSignatureUpload}
            type="file"
            name=""
            id=""
          />
        </h3>
        <h3>
          Co-Applicant Signature
          <h3>Upload Co-Applicant Signature</h3>
          <input
            onChange={handleCoApplicantSignatureUpload}
            type="file"
            name=""
            id=""
          />
        </h3>
        {/* <button type="submit" onClick={handleSubmit}>
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default ApplicationForm;
