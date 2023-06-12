export async function getActiveTasks(arr) {
  try {
    const res = await fetch(`http://localhost:3003/tasks/[${arr}]`);
  
    const json = await res.json();
    return json;
  } catch(err) {
    console.error(err);
    return 'data retrieval failed'
  }
}