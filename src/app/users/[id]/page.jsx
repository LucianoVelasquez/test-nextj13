import Image from "next/image";
import { fetchUsers } from "../page.jsx";

async function getUsers(id) {
  const users = await fetchUsers();
  const findUser = users.find((e) => e.id === id);
  return findUser;
}

async function userDetail({ params }) {
  //Params recibe el ID de la ruta.
  const { id } = params;
  const userDetail = await getUsers(Number(id));

  return (
    <div className="flex flex-col text-center items-center">
      <h1 className="text-3xl mt-8 mb-8">
        User {userDetail.first_name}{" "}
      </h1>
      <Image className="object-cover rounded-xl" src={userDetail.avatar} width={350} height={100}></Image>
    </div>
  );
}

export default userDetail;
