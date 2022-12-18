import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { BASE_URL } from '../../constants';

function ExecutivePersonal() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [mission, setMission] = useState('');
  const [birthdayDate, setBirthdayDate] = useState('');
  const [startedDate, setStartedDate] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [age, setAge] = useState('');

  const [userImage, setUserImage] = useState('');

  const getEmployeeInfo = async () => {
    const response = await axios.get(BASE_URL + 'executives/' + id, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setName(response.data.name);
    setSurname(response.data.surname);
    setPhoneNumber(response.data.phoneNumber);
    setEmail(response.data.email);
    setSchool(response.data.school);
    setMission(response.data.mission);
    setBirthdayDate(response.data.birthdayDate);
    setStartedDate(response.data.startedDate);
    setNationalId(response.data.nationalId);
    setAge(response.data.age);
  };

  // const deleteExecutive = async () => {
  //   await axios.delete(BASE_URL + 'executives/' + id, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   alert('Executive deleted');
  //   navigate('/goruntule/executive');
  // };

  useEffect(() => {
    getEmployeeInfo();
    try {
      setUserImage(require(`../../user-images/${id}.jpeg`));
    } catch (error) {
      console.log('Error ', error);
      try {
        setUserImage(require(`../../user-images/${id}.png`));
      } catch (error) {
        setUserImage(require(`../../user-images/0.jpeg`));
      }
    }
  }, []);

  return (
    <div className="container">
      <Link to={'/'} style={{ backgroundColor: 'pink', height: 20, width: 200, color: 'red' }}>
        Go to Home Page
      </Link>
      <div className="table">
        <div>Employee Id: {id}</div>
        <div>Name: {name}</div>
        <div>Surname: {surname}</div>
        <div>Phone Number: {phoneNumber}</div>
        <div>Email: {email}</div>
        <div>School: {school}</div>
        <div>Mission: {mission}</div>
        <div>Birthday Date: {birthdayDate}</div>
        <div>Age: {age}</div>
        <div>Started Date: {startedDate}</div>
        <div>National Id: {nationalId}</div>
        <div>
          User Image: <img src={userImage} alt="userImage" style={{ width: 80 }} />
        </div>
      </div>
    </div>
  );
}

export default ExecutivePersonal;
