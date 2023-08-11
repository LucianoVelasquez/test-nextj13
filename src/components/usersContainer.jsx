"use client";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardBody, CardFooter,Image } from "@nextui-org/react";

function UserContainer({ dataUsers }) {
  const router = useRouter();

  return (
    <div className="dark flex flex-row flex-wrap justify-center">
      {dataUsers.map((e) => {
        return (
          <Card className="py-4 w-80 h-96 m-5" key={e.id}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{e.first_name}</p>
              <small className="text-default-500">{e.last_name}</small>
              <h4 className="font-bold text-large">{e.email}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl hover:cursor-pointer"
                onClick={()=> router.push(`/users/${e.id}`)}
                src={e.avatar}
                width={270}
              />
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}
export default UserContainer;
