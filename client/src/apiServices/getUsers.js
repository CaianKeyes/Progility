export async function getUsers(arr) {
  const res = await fetch(`http://localhost:3003/users/[${arr}]`);

  const json = await res.json();
  return json;
}