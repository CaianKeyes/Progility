export async function getWorkspace(user) {
  const res = await fetch(`http://localhost:3003/workspaces/${user.workspaceId}`);

  const json = await res.json();
  return json;
}