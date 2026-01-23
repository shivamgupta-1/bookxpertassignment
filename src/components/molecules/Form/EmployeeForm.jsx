import { useState } from "react";
import DatePicker from "react-datepicker";
import Switch from "@mui/material/Switch";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";
import "./EmployeeForm.scss";

const ValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),
  state: Yup.string().required("State is required"),
  dateOfBirth: Yup.date()
    .max(new Date(), "DOB cannot be in the future")
    .required("Date of birth is required"),
  gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Select a valid gender")
    .required("Gender is required"),
  profileImagePreview: Yup.mixed().required("Profile image is required"),
 // profileImage: Yup.mixed().required("Profile image is required"),
});

const EmployeeForm = ({ headerText, handleAdd, editData = {} }) => {
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Maharashtra",
    "Madhya Pradesh",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Tripura",
    "Telangana",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman & Nicobar (UT)",
    "Chandigarh (UT)",
    "Dadra & Nagar Haveli (UT)",
    "Daman & Diu (UT)",
    "Jammu & Kashmir(UT)",
    "Lakshadweep (UT)",
    "Ladakh (UT)",
    "Puducherry (UT)",
  ];
  return (
    <div className="employee-form">
      <h2>{`${headerText} Employee`}</h2>
      <Formik
        initialValues={{
          fullName: editData?.fullName || "",
          employeeId: editData?.employeeId || "",
          state: editData?.state || "",
          dateOfBirth: editData?.dateOfBirth ? new Date(editData.dateOfBirth) : null,
          gender: editData?.gender || "",
          active: editData?.active || false,
          profileImage: null,
          profileImagePreview: editData?.profileImagePreview || editData?.profileImage || null,
        }}
        enableReinitialize
        validationSchema={ValidationSchema}
        onSubmit={(values, { resetForm }) => {
          handleAdd(values);
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          setFieldValue,
          handleChange,
          handleBlur,
        }) => {
          const handleToggle = () => {
            setFieldValue("active", !values.active);
          };
          const handleImageChange = (e) => {
            const { files } = e.target;
            const file = files[0];

            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setFieldValue("profileImage", file);
                setFieldValue("profileImagePreview", reader.result);
              };
              reader.readAsDataURL(file);
            }
          };

          return (
            <Form>
              <div className="grid">
                <div className="form-field">
                  <label htmlFor="fullName">Full Name<span className="required">*</span></label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={values?.fullName}
                    placeholder="Full Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.fullName && touched.fullName ? "input-error" : ""
                    }
                    required
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="gender">Gender<span className="required">*</span></label>
                  <select
                    id="gender"
                    name="gender"
                    value={values?.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.gender && touched.gender ? "input-error" : ""
                    }
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="dob">Date of Birth<span className="required">*</span></label>
                  <DatePicker
                    selected={values?.dateOfBirth}
                    onChange={(date) =>
                      handleChange({
                        target: { name: "dateOfBirth", value: date },
                      })
                    }
                    dateFormat="yyyy-MM-dd"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    placeholderText="yyyy-mm-dd"
                    required
                    maxDate={new Date()}
                    onBlur={handleBlur}
                    className={
                      errors.dateOfBirth && touched.dateOfBirth
                        ? "input-error"
                        : ""
                    }
                  />
                  <ErrorMessage
                    name="dateOfBirth"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="profileImage">Profile Image<span className="required">*</span></label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <input
                      type="file"
                      id="profileImage"
                      name="profileImagePreview"
                      accept="image/*"
                      onChange={handleImageChange}
                      onBlur={handleBlur}
                      className={
                        errors.profileImagePreview &&
                        touched.profileImagePreview
                          ? "input-error"
                          : ""
                      }
                    />
                    {values.profileImagePreview && (
                      <div className="image-preview">
                        <img
                          src={values.profileImagePreview}
                          alt="Profile Preview"
                          style={{ maxWidth: "40px", maxHeight: "40px" }}
                        />
                      </div>
                    )}
                  </div>
                  <ErrorMessage
                    name="profileImagePreview"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="state">State<span className="required">*</span></label>
                  <select
                    id="state"
                    name="state"
                    value={values?.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.state && touched.state ? "input-error" : ""
                    }
                    required
                  >
                    <option value="">Select State</option>
                    {states &&
                      states.map((stateObj) => (
                        <option key={stateObj} value={stateObj}>
                          {stateObj}
                        </option>
                      ))}
                  </select>
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="active">Status</label>
                  <Switch
                    checked={values?.active}
                    onClick={handleToggle}
                    color="primary"
                    inputProps={{ "aria-label": "Active switch" }}
                    className={
                      errors.active && touched.active ? "input-error" : ""
                    }
                  />
                  <ErrorMessage
                    name="active"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              <button className="submit-btn" type="submit">
                {headerText === "Edit" ? "Save" : "Create"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EmployeeForm;
