import React, { useState } from "react";
import axios from "axios";

//FontAwsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { fetchApi } from "../../config/axiosInstance";

const UsersList = ({ user, setUsers }) => {
  const [adminChange, setAdminChange] = useState(user.admin);

  async function handleAdmin() {
    await fetchApi({
      method: "put",
      url: `/api/users/toggleAdmin/${user.id}`,
    });
    setAdminChange(!adminChange);
  }

  async function handleDelete() {
    await fetchApi({
      method: "delete",
      url: `/api/users/deleteUser/${user.id}`,
    });
    const delete1 = await fetchApi({
      method: "get",
      url: "/api/users",
    });
    setUsers(delete1.data);
  }

  return (
    <tbody className="text-gray-600 text-sm font-light">
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <div className="mr-2">{/* { Aca va icono del usuario} */}</div>
            <span className="font-medium">{user.id}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-left">
          <div className="flex items-center">
            <div className="mr-2">
              <img
                className="w-6 h-6 rounded-full"
                src="https://randomuser.me/api/portraits/men/1.jpg"
              />
            </div>
            <span>{user.name + " " + user.lastname}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex items-center justify-center">
            <span>{user.email}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          {adminChange ? (
            <span className="bg-green-400 text-black-600 py-1 px-3 rounded-full text-xs">
              TRUE
            </span>
          ) : (
            <span className="bg-red-400 text-black-600 py-1 px-3 rounded-full text-xs">
              FALSE
            </span>
          )}
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              <button onClick={handleAdmin}>
                <FontAwesomeIcon icon={faUserShield} />
              </button>
            </div>
            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              <button onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"></div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default UsersList;
