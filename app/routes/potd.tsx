import { Outlet } from "@remix-run/react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>
        <Link to="/potd">
          Pokemon of the Moment
        </Link>
      </h1>
      <div style={ { display: 'flex', flexDirection: 'row', justifyContent: 'start', gap: '12px' } }>
        <Link to="now">
          Show me a Pokemon
        </Link>
        <Link to="settings">
          Settings
        </Link>
      </div>
      <div style={ { marginTop: '12px' } }>
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;