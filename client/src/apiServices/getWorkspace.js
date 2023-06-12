export async function getWorkspace(user) {
  try {
    const res = await fetch(`http://localhost:3003/workspaces/${user.workspaceId}`);
  
    const json = await res.json();
    return json;
  } catch(err) {
    console.error(err);
    return 'data retrieval failed'
  }
}