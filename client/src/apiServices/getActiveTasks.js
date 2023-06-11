export async function getActiveTasks(arr) {
  const res = await fetch(`http://localhost:3003/tasks/[${arr}]`);

  const json = await res.json();
  return json;
}