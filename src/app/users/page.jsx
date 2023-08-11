import UserContainer from "@/components/usersContainer";

export async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();

  return data.data;
}
//La funcion anterior esta funcionando desde el lado del servidor.

async function User() {
  const dataUsers = await fetchUsers();
  return (
    <>
      <h1 className="text-3xl text-center mt-5 mb-5">Users</h1>
      <UserContainer dataUsers={dataUsers} />
    </>
  );
}

export default User;
