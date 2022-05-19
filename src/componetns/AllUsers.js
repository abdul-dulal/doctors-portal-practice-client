import React from "react";
import { useQuery } from "react-query";
import Loading from "../componetns/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {
    isLoading,
    error,
    refetch,
    data: user,
  } = useQuery("repoData", () =>
    fetch(`http://localhost:4000/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-2xl">All Users:{user?.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <UserRow key={user._id} user={user} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
