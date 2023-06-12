export async function getUsers(arr) {
  try {
    const res = await fetch(`http://localhost:3003/users/[${arr}]`);
  
    const json = await res.json();
    return json;
  } catch(err) {
    console.error(err);
    return 'data retrieval failed'
  }
};