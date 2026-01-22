import React, { useState, useLayoutEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import EmployeesTable from "../EmployeeTable/EmployeesTable";
import AlertMsg from "../../atoms/AlertMsg";
import EmployeeForm from "../../molecules/Form/EmployeeForm";
import { useStore } from "../../../store/Rootstore";
import "./DashBoards.scss";
import Modal from "../../atoms/Modal";
import { toJS } from "mobx";

const DashBoards = observer(() => {
  const navigate = useNavigate();
  const { store } = useStore();
  const { getTotalEmployees, getActiveEmployees, getInactiveEmployees } = store;
  const [msgLabel, setMsgLabel] = useState({ label: "", variant: "" });
  const [isActive, setIsActive] = useState("list");
  const [editData, setEditData] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [deleteEmpId, setDeleteEmpId] = useState("");
  const [gridApi, setGridApi] = useState(null);

  const handleAdd = (employeeData) => {
    if (isEdit) {
      store.editEmployee(employeeData);
      setMsgLabel({
        label: `${employeeData.fullName} updated successfully!`,
        variant: "success",
      });
      setIsActive("list");
      setIsEdit(false);
    } else {
      store.addEmployee(employeeData);
      setMsgLabel({
        label: `${employeeData.fullName} added successfully!`,
        variant: "success",
      });
      setIsActive("add");
    }
  };

  const handleEdit = (updatedData) => {
    setIsEdit(true);
    setEditData(updatedData);
  };

  const handleDelete = (employeeId) => {
    setIsDelete(true);
    setDeleteEmpId(employeeId);
  };

  useLayoutEffect(() => {
    if (!localStorage.getItem("bookxpert_user")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="dashboard">
      {msgLabel.label && (
        <AlertMsg variant={msgLabel?.variant} setMsgLabel={setMsgLabel}>
          {msgLabel?.label}
        </AlertMsg>
      )}
      <h2 className="dash-header">Dashboard</h2>
      <div className="dash-tab">
        <div className="dash-card">
          <h3>Total Employees</h3>
          <p>{getTotalEmployees()?.length}</p>
        </div>
        <div className="dash-card">
          <h3>Active Employees</h3>
          <p>{getActiveEmployees()}</p>
        </div>
        <div className="dash-card">
          <h3>Inactive Employees</h3>
          <p>{getInactiveEmployees()}</p>
        </div>
      </div>
      <div className="dash-tabBar">
        <div
          className={`dash-tab-card ${isActive == "add" ? "active" : ""}`}
          onClick={() => setIsActive("add")}
        >
          <span>Add Employee</span>
        </div>
        <div
          className={`dash-tab-card ${isActive == "list" ? "active" : ""}`}
          onClick={() => setIsActive("list")}
        >
          <span>Employees List</span>
        </div>
      </div>
      {isActive == "add" ? (
        <div className="dash-content">
          <EmployeeForm headerText="Add" handleAdd={handleAdd} />
        </div>
      ) : (
        <>
          <div className="printBtn">
            <button
              className="print-btn"
              onClick={() => gridApi?.exportDataAsCsv()}
            >
              Print Employee List
            </button>
          </div>
          <EmployeesTable
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            setGridApi={setGridApi}
          />
        </>
      )}
      <Modal
        isOpen={isEdit}
        title="Edit Employee"
        onClose={() => setIsEdit(false)}
      >
        <EmployeeForm
          headerText="Edit"
          handleAdd={handleAdd}
          editData={editData}
        />
      </Modal>
      <Modal
        isOpen={isDelete}
        title="Delete Employee"
        onClose={() => setIsDelete(false)}
      >
        <div className="delete-modal">
          <p>
            Are you sure you want to delete Employee{" "}
            <strong>{deleteEmpId?.fullName}</strong>?
          </p>
          <div className="delete-actions">
            <button
              className="confirm-btn"
              onClick={() => {
                store.deleteEmployee(deleteEmpId?.employeeId);
                setIsDelete(false);
                setIsActive("list");
              }}
            >
              Delete
            </button>
            <button className="cancel-btn" onClick={() => setIsDelete(false)}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
});

export default DashBoards;
