import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Service(props) {
  const {
    _id,
    serviceID,
    vehicleNumber,
    serviceDate,
    serviceType,
    serviceStatus,
  } = props.maintenances;

  const history = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:8080/api/maintenance/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/Service"));
  };

  return (
    <tr>
      <td>{serviceID}</td>
      <td>{vehicleNumber}</td>
      <td>{new Date(serviceDate).toLocaleDateString()}</td>
      <td>{serviceType}</td>
      <td>{serviceStatus}</td>

      <td>
        <Link to={`/admin/Service/${_id}`}>
          <button>Update</button>
        </Link>
        <button className="delete" onClick={deleteHandler}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Service;
