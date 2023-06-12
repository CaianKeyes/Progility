function StatsHeader ({onData}) {

  const handleChange = e => {
    onData(e.target.value);
  }

  return <>
  <form className='stats_header'>
    <h2 className='form' >Select Stats:</h2>
    <select className="dropdown" onChange={handleChange}>
      <option value='1a'>Group - All Time</option>
      <option value='2a'>Group - Monthly</option>
      <option value='3a'>Group - Weekly</option>
      <option value='4a'>Group - Members</option>
    </select>
  </form>
  </>
}

export default StatsHeader;