import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="navbar">
        <h2 className="title">Trakya Birlik Entegre Tesisleri Yönetim Paneli</h2>
        <div className="buttons">
          <Link to="/ekle" className="link">
            Ekle
          </Link>
          <Link to="/goruntule" className="link">
            Goruntule
          </Link>
        </div>
      </div>
      <div className="logo" />
    </>
  );
}

export default Home;
