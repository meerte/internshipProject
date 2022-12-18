import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { Link } from 'react-router-dom';

function FacilityGoruntule() {
  const [employees, setEmployees] = useState();

  const getAllEmployees = async () => {
    const response = await axios.get(BASE_URL + 'facilities', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setEmployees(response.data);
  };

  const deleteFacility = async (id) => {
    await axios.delete(BASE_URL + 'facilities/' + id, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    alert('Facility deleted, id = ' + id);
    window.location.reload();
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  return (
    <div className="tableContainer">
      <Link to={'/'} style={{ backgroundColor: 'pink', height: 20, width: 200, color: 'red' }}>
        Go to Home Page
      </Link>
      <table className="infoTable">
        <thead>
          <tr>
            <th>Facility ID</th>
            <th>Facility Name</th>
            <th>Executive ID</th>
            <th>Executive Name</th>
            <th>Executive Email</th>
          </tr>
        </thead>
        <tbody>
          {employees &&
            employees.map((employee) => (
              <tr key={employee.facilityId} onClick={() => deleteFacility(employee.facilityId)}>
                <td>{employee.facilityId}</td>
                <td>{employee.facilityName}</td>
                <td>{employee.executiveId}</td>
                <td>{employee.executiveName}</td>
                <td>{employee.executiveEmail}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <h3 style={{ color: 'red' }}>Click the facility you want to delete</h3>
    </div>
  );
}

export default FacilityGoruntule;
