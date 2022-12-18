import { Link } from 'react-router-dom';

function Goruntule() {
  return (
    <div className="navbar">
      <h2 className="title">Goruntule Menusu</h2>
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

export default Goruntule;
