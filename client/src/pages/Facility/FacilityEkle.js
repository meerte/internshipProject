import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { Link } from 'react-router-dom';

function Facility() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const body = {
    id,
    name,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(body);
    const response = await axios.post(BASE_URL + 'facilities', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    alert('Facility added');
    console.log(response);
    setId('');
    setName('');
  };

  const handleReset = (e) => {
    e.preventDefault();
    setId('');
    setName('');
  };

  return (
    <div className="container">
      <Link to={'/'} style={{ backgroundColor: 'pink', height: 20, width: 200, color: 'red' }}>
        Go to Home Page
      </Link>
      <h1 className="title">Facility Information</h1>
      <div className="table">
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
            <label for="name">Name: </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              id="name"
              name="name"
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

export default Facility;
