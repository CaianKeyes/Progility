function StatsHeader ({users, onData}) {

  const handleChange = e => {
    onData(e.target.value);
  }

  return <>
  <form>
    <h2>Select Stats:</h2>
    <select className="dropdown" onChange={handleChange}>
      <option value='1a'>Group - All Time</option>
      <option value='2a'>Group - Monthly</option>
      <option value='3a'>Group - Weekly</option>
      <option value='4a'>Group - Members</option>
      {users.map(user => (
            <option key={user.id} value={user.id}>{user.username}</option>
          ))}
    </select>
  </form>
  </>
}

export default StatsHeader;