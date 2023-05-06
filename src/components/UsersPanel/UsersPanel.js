import React, { useEffect, useState } from "react";
import axios from "axios";
import UsersList from "./UsersList";
import { fetchApi } from "../../config/axiosInstance";

const UsersPanel = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const users = await fetchApi({
      method:"get",
      url:"/api/users",
    })
    setUsers(users.data)
  }
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen flex items-start justify-center bg-gray-100 font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">ID</th>
                  <th className="py-3 px-6 text-left">NAME</th>
                  <th className="py-3 px-6 text-center">EMAIL</th>
                  <th className="py-3 px-6 text-center">ADMIN</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              {users.map((user, i) => (
                <UsersList key={i} user={user} setUsers={setUsers} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPanel;
