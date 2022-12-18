import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { BASE_URL } from '../../constants';

function EnrollmentsGoruntule() {
  const [facilityId, setFacilityId] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [employees, setEmployees] = useState();
  const [filteredEnrollments, seFilteredEnrollments] = useState();
  const navigate = useNavigate();

  const getAllEmployees = async () => {
    const response = await axios.get(BASE_URL + 'enrollments', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setEmployees(response.data);
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  const handleClick = (e) => {
    const modifiedArr = employees.filter((employee) => employee.facilityId.toString() === facilityId);
    if (modifiedArr.length === 0) alert("Bu Facility ID'ye sahip bir enrollment bulunamadı.");
    seFilteredEnrollments(modifiedArr);
  };

  const handleClickForEmployeeID = (e) => {
    const modifiedArr = employees.filter((employee) => employee.employeeId.toString() === employeeId);
    if (modifiedArr.length === 0) alert("Bu Employee ID'ye sahip bir enrollment bulunamadı.");
    seFilteredEnrollments(modifiedArr);
  };

  return (
    <div className="tableContainer">
      <Link to={'/'} style={{ backgroundColor: 'pink', height: 20, width: 200, color: 'red' }}>
        Go to Home Page
      </Link>
      <button
        onClick={() => {
          seFilteredEnrollments([]);
        }}
      >
        Reset Tablo
      </button>
      <div
        className="buttonsEdit"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '70%',
          marginBottom: '20px',
        }}
      >
        <label for="facilityId">Facility ID</label>
        <input
          style={{ padding: '5px 10px' }}
          name="facilityId"
          value={facilityId}
          onChange={(e) => setFacilityId(e.target.value)}
        />
        <button className="btn" onClick={handleClick}>
          Search by Facility ID
        </button>
        <label for="employeeId">Employee ID</label>
        <input
          style={{ padding: '5px 10px' }}
          name="employeeId"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <button className="btn" onClick={handleClickForEmployeeID}>
          Search by Employee ID
        </button>
      </div>
      <table className="infoTable">
        <thead>
          <tr>
            <th>Enrollment ID</th>
            <th>Facility Id</th>
            <th>Facility Name</th>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredEnrollments && filteredEnrollments.length > 0
            ? filteredEnrollments.map((employee) => (
                <tr
                  key={employee.enrollmentId}
                  onClick={() => navigate(`/goruntule/enrollment/${employee.facilityId}`)}
                >
                  <td>{employee.enrollmentId}</td>
                  <td>{employee.facilityId}</td>
                  <td>{employee.facilityName}</td>
                  <td>{employee.employeeId}</td>
                  <td>{employee.employeeName}</td>
                  <td>{employee.employeeEmail}</td>
                </tr>
              ))
            : employees &&
              employees.length > 0 &&
              employees.map((employee) => (
                <tr
                  key={employee.enrollmentId}
                  onClick={() => navigate(`/goruntule/enrollment/${employee.facilityId}`)}
                >
                  <td>{employee.enrollmentId}</td>
                  <td>{employee.facilityId}</td>
                  <td>{employee.facilityName}</td>
                  <td>{employee.employeeId}</td>
                  <td>{employee.employeeName}</td>
                  <td>{employee.employeeEmail}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default EnrollmentsGoruntule;
