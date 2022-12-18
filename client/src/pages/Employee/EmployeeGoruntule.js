import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants';

function Employee() {
  const [employeeId, setEmployeeId] = useState('');
  const [mission, setMission] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState();
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const getAllEmployees = async () => {
    const response = await axios.get(BASE_URL + 'employees', {
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
    const modifiedArr = employees.filter((employee) => employee.id.toString() === employeeId);
    if (modifiedArr.length === 0) alert("Bu ID'ye ait bir çalışan bulunamadı.");
    setFilteredEmployees(modifiedArr);
  };

  const handleClickForMission = (e) => {
    const modifiedArr = employees.filter((employee) => employee.mission.toLowerCase() === mission.toLowerCase());
    if (modifiedArr.length === 0) alert('Bu görevle ilgili bir çalışan bulunamadı.');
    setFilteredEmployees(modifiedArr);
  };

  return (
    <div className="tableContainer">
      <Link to={'/'} style={{ backgroundColor: 'pink', height: 20, width: 200, color: 'red' }}>
        Go to Home Page
      </Link>
      <button
        onClick={() => {
          setFilteredEmployees([]);
        }}
      >
        Reset Tablo
      </button>
      <label for="employeeId">Employee ID</label>
      <input
        style={{ padding: '5px 10px' }}
        name="employeeId"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <button className="btn" onClick={handleClick}>
        Search by EmployeeID
      </button>
      <label for="mission">Mission</label>
      <input
        style={{ padding: '5px 10px' }}
        name="mission"
        value={mission}
        onChange={(e) => setMission(e.target.value)}
      />
      <button className="btn" onClick={handleClickForMission}>
        Search by Mission
      </button>
      <table className="infoTable">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Mission</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees && filteredEmployees.length > 0
            ? filteredEmployees.map((employee) => (
                <tr key={employee.id} onClick={() => navigate(`${employee.id}`)}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.surname}</td>
                  <td>{employee.mission}</td>
                </tr>
              ))
            : employees &&
              employees.length > 0 &&
              employees.map((employee) => (
                <tr key={employee.id} onClick={() => navigate(`${employee.id}`)}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.surname}</td>
                  <td>{employee.mission}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
