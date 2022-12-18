import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { Link } from 'react-router-dom';

function Enrollment() {
  const [id, setId] = useState('');
  const [employee, setEmployee] = useState('');
  const [facility, setFacility] = useState('');

  const body = {
    id,
    employeeId: employee,
    facilityId: facility,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(BASE_URL + 'enrollments/enroll/employee', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    alert('Enrollment added');
    console.log(response);
    setId('');
    setEmployee('');
    setFacility('');
  };

  const handleReset = (e) => {
    e.preventDefault();
    setId('');
    setEmployee('');
    setFacility('');
  };

  return (
    <div className="container">
      <Link to={'/'} style={{ backgroundColor: 'pink', height: 20, width: 200, color: 'red' }}>
        Go to Home Page
      </Link>
      <h1 className="title">Enrollment Information</h1>
      <div class="table">
        <form>
          <div>
            <label for="employee_number">Employee ID: </label>
            <input
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
              type="number"
              id="employee_number"
              name="employee_number"
              min="1"
            />
          </div>
          <div>
            <label for="name">Employee: </label>
            <input
              value={employee}
              onChange={(e) => {
                setEmployee(e.target.value);
              }}
              type="text"
              id="employee"
              name="employee"
            />
          </div>
          <div>
            <label for="surname">Facility: </label>
            <input
              value={facility}
              onChange={(e) => {
                setFacility(e.target.value);
              }}
              type="text"
              id="facility"
              name="facility"
            />
          </div>
          <div className="buttonsEdit">
            <button className="btn" onClick={handleSubmit}>
              Submit
            </button>
            <button className="btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Enrollment;
