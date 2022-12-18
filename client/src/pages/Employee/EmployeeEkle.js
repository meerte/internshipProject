import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { Link } from 'react-router-dom';

function Employee() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [mission, setMission] = useState('');
  const [birthdayDate, setBirthdayDate] = useState('');
  const [startedDate, setStartedDate] = useState('');
  const [nationalId, setNationalId] = useState('');

  const body = {
    id,
    name,
    surname,
    phoneNumber,
    email,
    school,
    mission,
    birthdayDate,
    startedDate,
    nationalId,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(BASE_URL + 'employees', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    alert('Employee added');
    console.log(response);
    setId('');
    setName('');
    setSurname('');
    setPhoneNumber('');
    setEmail('');
    setSchool('');
    setMission('');
    setBirthdayDate('');
    setStartedDate('');
    setNationalId('');
  };

  const handleReset = (e) => {
    e.preventDefault();
    setId('');
    setName('');
    setSurname('');
    setPhoneNumber('');
    setEmail('');
    setSchool('');
    setMission('');
    setBirthdayDate('');
    setStartedDate('');
    setNationalId('');
  };

  return (
    <div className="container">
      <Link to={'/'} style={{ backgroundColor: 'pink', height: 20, width: 200, color: 'red' }}>
        Go to Home Page
      </Link>
      <h1 className="title">Employee Information</h1>
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
          <div>
            <label for="surname">Surname: </label>
            <input
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value);
              }}
              type="text"
              id="surname"
              name="surname"
            />
          </div>
          <div>
            <label for="national_id">National ID: </label>
            <input
              value={nationalId}
              onChange={(e) => {
                setNationalId(e.target.value);
              }}
              type="number"
              id="national_id"
              name="national_id"
            />
          </div>
          <div>
            <label for="phone_number">Phone Number: </label>
            <input
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              type="number"
              id="phone_number"
              name="phone_number"
            />
          </div>
          <div>
            <label for="email">E-Mail: </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              id="email"
              name="email"
            />
          </div>
          <div>
            <label for="school">School: </label>
            <input
              value={school}
              onChange={(e) => {
                setSchool(e.target.value);
              }}
              type="text"
              id="school"
              name="school"
            />
          </div>
          <div>
            <label for="birthday">Birthday: </label>
            <input
              value={birthdayDate}
              onChange={(e) => {
                setBirthdayDate(e.target.value);
              }}
              type="text"
              id="birthday"
              name="birthday"
            />
          </div>
          <div>
            <label for="start_date">Job Start Date: </label>
            <input
              value={startedDate}
              onChange={(e) => {
                setStartedDate(e.target.value);
              }}
              type="text"
              id="start_date"
              name="start_date"
            />
          </div>
          <div>
            <label for="mission">Mission: </label>
            <input
              value={mission}
              onChange={(e) => {
                setMission(e.target.value);
              }}
              type="text"
              id="mission"
              name="mission"
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

export default Employee;
