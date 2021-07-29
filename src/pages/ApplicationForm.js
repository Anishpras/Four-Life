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
  console.log(applicantDateOFBirth)
  console.log(applicationType);
  console.log(distributor_id_checked);
  
const [distributorShippingAddress , setDistributorShippingAddress]= useState("")
const [distributorCity , setDistributorCity ] = useState("")
const [distributorState , setDistributorState] = useState("")
const [distributorPinCode , setDistributorPinCode] = useState("")





const [enrollerid , setEnrollerId] = useState("")
const [enrollerName , setEnrollerName] = useState("")


const [sponserId , setSponserId] = useState("")
const [sponserName , setSponserName] = useState("")

const [nameoftheBank,setNameOfTheBank ] = useState("")
const [branchNameAddress,setBranchNameAddress ] = useState("")
const [accountNumber ,setAccountNumber] = useState("")
const [bankIFSCCode ,setBankIFSCCode] = useState("")



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
        <input type="text"
        onChange={(e) => setApplicantName(e.target.value)}
        />
        <label htmlFor="">Aadhar Number</label>
        <input type="text" 
        onChange={(e) => setApplicantAadharNumber(e.target.value)}
        />
        <label htmlFor="">PAN Number</label>
        <input type="text" 
        onChange={(e)=> setApplicantPanNumber(e.target.value) }
        />
        <label htmlFor="">Co-Applicant Name</label>
        <input type="text" 
        onChange={(e)=> setCoApplicantName(e.target.value)}
        />
        <label htmlFor="">Aadhar Number</label>
        <input type="text"
        onChange={(e)=> setCoApplicantAadharName(e.target.value)}
        />
        <label htmlFor="">PAN Number</label>
        <input type="text" 
        onChange={(e)=> setCoApplicantPanNumber(e.target.value)}
        />
        <h3>
          Please submit a copy of Aadhaar Card & PAN Card for both applicants{" "}
        </h3>
        <label htmlFor="">Address</label>
        <input type="text" 
        onChange={(e)=> setAddress(e.target.value)}
        />
        Please submit Address Proof
        <label htmlFor="">City</label>
        <input type="text"
        onChange={(e)=> setCity(e.target.value)}
        />
        <label htmlFor="">State</label>
        <input type="text" 
        onChange={(e)=> setState(e.target.value)}
        />
        <label htmlFor="">Pin Code</label>
        <input type="text" 
        onChange={(e)=> setPinCode(e.target.value)}
        />
        <label htmlFor="">Date of Birth</label>
        <input
        style={{"min-height":"2rem"}}
        className="date"
          type="date"
          // id="start"
          // name="trip-start"
          // value="2018-07-22"
          // min="2018-01-01"
          // max="2018-12-31"
          value={applicantDateOFBirth}
          onChange={(e)=>setApplicantDateOFBirth(e.target.value)}
        />
        <label htmlFor="">EMAIL</label>
        <input type="email" 
        onChange={(e) => setApplicantEmail(e.target.value)}
        />
        <label htmlFor="">Home Phone</label>
        <input type="tel" name="" id="" 
        onChange={(e) => setApplicantHomePhone(e.target.value)}
        />
        <label htmlFor="">Mobile: +91</label>
        <input type="tel"
        onChange={(e) => setApplicantMobile(e.target.value)}
        
        />
        <label htmlFor="">Work Phone</label>
        <input type="tel"
        onChange={(e) => setApplicantWorkPhone(e.target.value)}
        />



        
        <h1>Distributor Shipping Address</h1>
        <label htmlFor="">Address</label>
        <input type="text" 
        onChange={(e) =>setDistributorShippingAddress(e.target.value)}
        />
        <label htmlFor="">City</label>
        <input type="text" 
        onChange={(e) => setDistributorCity(e.target.value)} 
        />
        <label htmlFor="">State</label>
        <input type="text" 
        onChange={(e) => setDistributorState(e.target.value)} 
         />
        <label htmlFor="">Pin Code</label>
        <input type="text"
        onChange={(e) =>   setDistributorPinCode(e.target.value)}
        />



        <h1>Enroller Information</h1>
        <label htmlFor="">Enroller's id</label>
        <input type="text" 
        onChange={(e) => setEnrollerId(e.target.value) }
        />
        <label htmlFor="">Name</label>
        <input type="text"
        onChange={(e) => setEnrollerName(e.target.value)}
        />


        <h1>Sponser Information</h1>
        <label htmlFor="">Sponser's id</label>
        <input type="text" 
        onChange={(e) => setSponserId(e.target.value) }
        
        />
        <label htmlFor="">Name</label>
        <input type="text" 
        onChange={(e) => setSponserName(e.target.value)}
        />
        <h1>Commision Payment Information</h1>
        <label htmlFor="">Name of the Bank</label>
        <input type="text"  
        onChange={(e) => setNameOfTheBank(e.target.value) }
        />
        <label htmlFor="">Branch Name & Address</label>
        <input type="text" 
        onChange={(e) =>  setBranchNameAddress(e.target.value)}
        />
        <label htmlFor="">Account Number</label>
        <input type="text"
        onChange={(e) => setAccountNumber(e.target.value)}
        />
        <label htmlFor="">Bank IFSC Code:</label>
        <input type="text" 
        onChange={(e) => setBankIFSCCode(e.target.value)}
        /> 
        {/* Please attch copy of cancelled cheque */}
      </form>
    </div>
  );
};

export default ApplicationForm;
