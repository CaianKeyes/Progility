import { logOut } from "../apiService"

function Logout () {
  const handleClick = () => {
    logOut();
  }

  return <>
    <button onClick={handleClick}>Log out</button>
  </>
}

export default Logout;