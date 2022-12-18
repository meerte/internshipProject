import { Link } from 'react-router-dom';

function Ekle() {
  return (
    <div className="navbar">
      <h2 className="title">Ekle Menusu</h2>
      <div className="buttons">
        <Link to="employee" className="link">
          Employee
        </Link>
        <Link to="executive" className="link">
          Executive
        </Link>
        <Link to="facility" className="link">
          Facility
        </Link>
        <Link to="enrollment" className="link">
          Enrollment
        </Link>
      </div>
    </div>
  );
}

export default Ekle;
