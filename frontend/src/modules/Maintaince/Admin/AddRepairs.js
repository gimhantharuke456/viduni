import React, { useState } from "react";
import SideBar from "../Admin/SideBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddRepairs.css";

function AddRepairs() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    repairID: "",
    repairNumber: "",
    repairDate: "",
    partReplace: "",
    repairCost: "",
    repairStatus: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    window.alert("Repair added successfully");
    sendRequest().then(() => navigate("/admin/Repair"));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:8080/api/repair", {
        repairID: String(inputs.repairID),
        repairNumber: String(inputs.repairNumber),
        repairDate: new Date(inputs.repairDate).toISOString(),
        partReplace: String(inputs.partReplace),
        repairCost: Number(inputs.repairCost),
        repairStatus: String(inputs.repairStatus),
      })
      .then((res) => res.data);
  };

  return (
    <div>
      <div className="table-container1">
        <h2>Add Repairs</h2>
        <form onSubmit={handleSubmit}>
          <label>Repair ID</label>
          <br />
          <input
            type="text"
            name="repairID"
            onChange={handleChange}
            value={inputs.repairID}
            required
          />
          <br />
          <br />

          <label>Vehicle Number</label>
          <br />
          <input
            type="text"
            name="repairNumber"
            onChange={handleChange}
            value={inputs.repairNumber}
            required
          />
          <br />
          <br />

          <label>Repair Date</label>
          <br />
          <input
            type="date"
            name="repairDate"
            onChange={handleChange}
            value={inputs.repairDate}
            required
          />
          <br />
          <br />

          <label>Part Replaced</label>
          <br />
          <input
            type="text"
            name="partReplace"
            onChange={handleChange}
            value={inputs.partReplace}
            required
          />
          <br />
          <br />

          <label>Repair Cost</label>
          <br />
          <input
            type="number"
            name="repairCost"
            onChange={handleChange}
            value={inputs.repairCost}
            required
          />
          <br />
          <br />

          <label>Repair Status</label>
          <br />
          <input
            type="text"
            name="repairStatus"
            onChange={handleChange}
            value={inputs.repairStatus}
            required
          />
          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddRepairs;
