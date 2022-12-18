import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { BASE_URL } from '../../constants';

function EnrollmentPersonal() {
  const { facilityId } = useParams();
  const navigate = useNavigate();

  const [enrollments, setEnrollments] = useState([]);

  const getPersonalEnrollmentData = async () => {
    const response = await axios.get(BASE_URL + `enrollments?facilityId=${facilityId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setEnrollments(response.data);
  };

  const deleteByEnrollmentId = async (enrollmentId) => {
    await axios.delete(BASE_URL + `enrollments/${enrollmentId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    alert('Enrollment deleted, facility id = ' + enrollmentId);
    navigate('/goruntule/enrollment');
  };

  useEffect(() => {
    getPersonalEnrollmentData();
  }, []);

  return (
    <div className="tableContainer">
      <Link to={'/'} style={{ backgroundColor: 'pink', height: 20, width: 200, color: 'red' }}>
        Go to Home Page
      </Link>
      <table className="infoTable">
        <thead>
          <tr>
            <th>Enrollment ID</th>
            <th>Facility ID</th>
            <th>Facility Name</th>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Email</th>
          </tr>
        </thead>
        <tbody>
          {enrollments &&
            enrollments.map((enrollment) => (
              <tr key={enrollments.id}>
                <td>{enrollment.enrollmentId}</td>
                <td>{enrollment.facilityId}</td>
                <td>{enrollment.facilityName}</td>
                <td>{enrollment.employeeId}</td>
                <td>{enrollment.employeeName}</td>
                <td>{enrollment.employeeEmail}</td>
                <button className="btn-danger" onClick={() => deleteByEnrollmentId(enrollment.enrollmentId)}>
                  Delete
                </button>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default EnrollmentPersonal;
