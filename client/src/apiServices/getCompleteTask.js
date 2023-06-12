export async function getCompletedTasks(arr) {
  try {
    const res = await fetch(`http://localhost:3003/tasks/complete/[${arr}]`);
  
    const json = await res.json();
    return json;
  } catch(err) {
    console.error(err);
    return 'data retrieval failed';
  }
}