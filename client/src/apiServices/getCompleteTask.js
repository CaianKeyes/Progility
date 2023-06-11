export async function getCompletedTasks(arr) {
  const res = await fetch(`http://localhost:3003/tasks/complete/[${arr}]`);

  const json = await res.json();
  return json;
}