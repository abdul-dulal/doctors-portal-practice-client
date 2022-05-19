import React, { useEffect } from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    if (email) {
      fetch(`http://localhost:4000/user/admin/${email}`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 403) {
            toast.error("faild to make admin");
          }
          return res.json();
        })
        .then((data) => {
          if (data.modifiedCount > 0) {
            refetch();
            toast("successfully make an admin");
          }
        });
    }
  };
  return (
    <div className="table w-full">
      <tr>
        <td>{email}</td>
        <td>
          {role === "admin" ? (
            <p className="btn btn-primary">Admin</p>
          ) : (
            <button onClick={makeAdmin} class="btn btn-xs">
              MakeAdmin
            </button>
          )}
        </td>
        <td>
          <button class="btn btn-xs">RemoveUser</button>
        </td>
      </tr>
    </div>
  );
};

export default UserRow;
