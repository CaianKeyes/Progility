function UserStats ({users}) {
  return <div>
    <div className="stats_block">
      <h2 className="user_stat1">Username</h2>
      <h2 className="user_stat2">Tasks</h2>
      <h2 className="user_stat3">Hours </h2>
    </div>
    <div className="divider"></div>
    {users.map((user, index) => (
      <div key={index}>
        <div className="stats_block">
          <h2 className="user_stat1">{user.username}</h2>
          <h2 className="user_stat2">{user.tasksCompleted}</h2>
          <h2 className="user_stat3">{user.hoursCompleted}</h2>
        </div>
        <div className="divider"></div>
      </div>
    ))}
  </div>
}

export default UserStats;