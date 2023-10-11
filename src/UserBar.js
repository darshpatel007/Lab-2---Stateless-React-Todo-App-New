import Logout from "./Logout";
import Register from "./Register";
import Login from "./Login";

export default function UserBar({ user, setUser }) {
  function handleLogin(username, password) {
    setUser(username);
  }
  function handleRegister(username, password, passwordRepeat) {
    setUser(username);
  }
  function handleLogout(username, password) {
    setUser("");
  }

  if (user) {
    return <Logout user={user} performLogout={handleLogout} />;
  } else {
    return (
      <>
        <Login performLogin={handleLogin} />
        <Register performRegister={handleRegister} />
      </>
    );
  }
}
