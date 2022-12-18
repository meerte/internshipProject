import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { EmployeeEkle, EmployeeGoruntule, EmployeePersonal } from './pages/Employee';
import { EnrollmentEkle, EnrollmentGoruntule, EnrollmentPersonal } from './pages/Enrollment';
import { ExecutiveEkle, ExecutiveGoruntule, ExecutivePersonal } from './pages/Executive';
import { FacilityEkle, FacilityGoruntule } from './pages/Facility';

import Home from './pages/Home';
import Ekle from './pages/Ekle';
import Goruntule from './pages/Goruntule';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ekle" element={<Ekle />} />
        <Route path="goruntule" element={<Goruntule />} />
        <Route path={`goruntule/employee`} element={<EmployeeGoruntule />} />
        <Route path={`goruntule/employee/:id`} element={<EmployeePersonal />} />
        <Route path={`goruntule/executive`} element={<ExecutiveGoruntule />} />
        <Route path={`goruntule/executive/:id`} element={<ExecutivePersonal />} />
        <Route path={`goruntule/enrollment`} element={<EnrollmentGoruntule />} />
        <Route path={`goruntule/enrollment/:facilityId/*`} element={<EnrollmentPersonal />} />
        <Route path={`goruntule/facility`} element={<FacilityGoruntule />} />
        <Route path={`ekle/employee`} element={<EmployeeEkle />} />
        <Route path={`ekle/executive`} element={<ExecutiveEkle />} />
        <Route path={`ekle/enrollment`} element={<EnrollmentEkle />} />
        <Route path={`ekle/facility`} element={<FacilityEkle />} />
      </Routes>
    </Router>
  );
}

export default App;
