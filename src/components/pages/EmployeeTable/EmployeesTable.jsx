import React, { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import { useStore } from "../../../store/Rootstore";
import { observer } from "mobx-react-lite";
import "./EmployeesTable.scss";

ModuleRegistry.registerModules([AllCommunityModule]);

const EmployeesTable = observer(({ handleEdit, handleDelete, setGridApi }) => {
  const { store } = useStore();
  const employees = store.getTotalEmployees();

  const rowData = employees
    ? employees.map((emp, index) => ({
        employeeId:
          emp.employeeId || `EMP${String(index + 1).padStart(3, "0")}`,
        profileImagePreview:
          emp.profileImagePreview || "https://via.placeholder.com/40",
        fullName: emp.fullName,
        gender: emp.gender,
        dateOfBirth: emp.dateOfBirth
          ? new Date(emp.dateOfBirth).toLocaleDateString("en-CA")
          : "",
        state: emp.state,
        active: emp.active,
      }))
    : [];

  const [colDefs] = useState([
    { field: "employeeId", headerName: "Employee ID" },
    {
      field: "profileImagePreview",
      headerName: "Profile Image",
      cellRenderer: (params) => (
        <div className="profile-image-cell">
          <img src={params.value} alt="Profile" />
        </div>
      ),
      sortable: false,
      filter: false,
    },
    { field: "fullName", headerName: "Full Name" },
    { field: "gender", headerName: "Gender" },
    { field: "dateOfBirth", headerName: "Date of Birth (DOB)" },
    { field: "state", headerName: "State" },
    {
      field: "active",
      headerName: "Active / Inactive",
      cellRenderer: (params) => (
        <div className="status-cell">
          <span
            className={`status-badge ${params.value ? "active" : "inactive"}`}
          >
            {params.value ? "Active" : "Inactive"}
          </span>
        </div>
      ),
    },
    {
      headerName: "Action",
      field: "action",
      cellRenderer: (params) => (
        <div className="action-buttons">
          <button
            className="edit-btn"
            id="edit"
            data-action="edit"
            onClick={() => {
              handleEdit(params.data);
            }}
          >
            Edit
          </button>
          <button
            className="delete-btn"
            id="delete"
            data-action="delete"
            onClick={() => {
              handleDelete(params.data);
            }}
          >
            Delete
          </button>
        </div>
      ),
      sortable: false,
      filter: false,
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      filter: true,
      sortable: true,
      floatingFilter: true,
    };
  }, []);

  return (
    <div className="employees-table-wrapper">
      <div className="ag-theme-quartz" style={{ height: 600, width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20, 50]}
          rowHeight={80}
          headerHeight={80}
          onGridReady={(params) => setGridApi(params.api)}
        />
      </div>
    </div>
  );
});

export default EmployeesTable;
