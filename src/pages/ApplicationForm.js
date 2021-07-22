import React from "react";

const ApplicationForm = () => {
  return (
    <>
      <label htmlFor="distributor_id">DistributorId</label>
      <input type="text" />
      <label htmlFor="4life_distributor_ID_check">
        Have you ever held a 4life distributor ID?{" "}
      </label>
      <label htmlFor="yes_distributor_id">Yes</label>
      <input type="checkbox" name="" id="" />
      <label htmlFor="no_distributor_id">No</label>
      <input type="checkbox" name="" id="" />
      <label htmlFor="old_id">If Yes, Old Id</label>
      <input type="text" />

      <label htmlFor="4life_fssai_reg_check">
        Do you have a FSSAI registration no ?{" "}
      </label>
      <label htmlFor="yes_fssai_reg">Yes</label>
      <input type="checkbox" name="" id="" />
      <label htmlFor="no_fssai_reg">No</label>
      <input type="checkbox" name="" id="" />
      <label htmlFor="old_id">If Yes, FSSAI registration No.</label>
      <input type="text" />
    </>
  );
};

export default ApplicationForm;
