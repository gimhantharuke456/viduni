import React, { useState } from "react";
import SideBar from "../Admin/SideBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddServices.css";

function AddServices() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    serviceID: "",
    vehicleNumber: "",
    serviceDate: "",
    serviceType: "",
    serviceStatus: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value, // Use 'name' instead of 'serviceID' or other custom attributes
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    window.alert("Service added successfully");
    // Send request to add service
    sendRequest().then(() => navigate("/Service")); // Redirect to '/Service' after successful submission
  };

  // Send POST request to backend
  const sendRequest = async () => {
    await axios
      .post("http://localhost:8080/api/maintenance", {
        serviceID: String(inputs.serviceID),
        vehicleNumber: String(inputs.vehicleNumber),
        serviceDate: new Date(inputs.serviceDate).toISOString(), // Ensure the date is properly formatted
        serviceType: String(inputs.serviceType),
        serviceStatus: String(inputs.serviceStatus),
      })
      .then((res) => res.data);
  };

  return (
    <div>
      <div className="table-container1">
        <SideBar />
        <h2>Add Services</h2>
        <form onSubmit={handleSubmit}>
          <label>Service ID</label>
          <br />
          <input
            type="text"
            name="serviceID" // Use 'name' attribute
            onChange={handleChange}
            value={inputs.serviceID}
            required
          />
          <br />
          <br />

          <label>Vehicle Number</label>
          <br />
          <input
            type="text"
            name="vehicleNumber" // Use 'name' attribute
            onChange={handleChange}
            value={inputs.vehicleNumber}
            required
          />
          <br />
          <br />

          <label>Service Date</label>
          <br />
          <input
            type="date"
            name="serviceDate" // Use 'name' attribute
            onChange={handleChange}
            value={inputs.serviceDate}
            required
          />
          <br />
          <br />

          <label>Service Type</label>
          <br />
          <input
            type="text"
            name="serviceType" // Use 'name' attribute
            onChange={handleChange}
            value={inputs.serviceType}
            required
          />
          <br />
          <br />

          <label>Service Status</label>
          <br />
          <input
            type="text"
            name="serviceStatus" // Use 'name' attribute
            onChange={handleChange}
            value={inputs.serviceStatus}
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

export default AddServices;
