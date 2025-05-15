import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/textForm">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          
          <div className="d-flex align-items-center me-3">
            <strong><p className="my-1 mx-3" style={{color: props.mode === 'dark' ? '#f8f9fa' : '#212529'}}>Dark modes:</p></strong>
            <div className="position-relative" style={{ width: '40px', height: '40px' }}>
            <div
              onClick={() => document.getElementById('themeColorPicker').click()}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                cursor: 'pointer',
                border: '2px solid white',
                background: `conic-gradient( #2c3e50, #4a235a, #0b5345)`                
              }}>
            </div>
              <input
                id="themeColorPicker"
                type="color"
                value={props.themeColor}
                onChange={(e) => props.darkMode(e.target.value)}
                style={{ position: 'absolute', left: 0, top: 0, opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }}
              />
            </div>


            <button
              onClick={props.lightMode}
              className="btn btn-sm btn-light ms-3"
            >
              Light
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
