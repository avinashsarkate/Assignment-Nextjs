"use client";
import { useState } from "react";
import Userform from "@/component/user-from";
import Footer from "@/component/footer";
import Header from "@/component/Header";


interface User {
  id: number;
  firstName: string;
  lastName: string;
}
const InitialValue = [
  {
    firstName: "Avinash",
    lastName: "sarkate",
    id: 1,
  },
  {
    firstName: "Avi",
    lastName: "Patil",
    id: 2,
  },
];

export default function Home() {
  const [users, setUsers] = useState<User[]>(InitialValue);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const[readOnly , setReadOnly] =useState<boolean>(false)
  const[isFormOpen , setIsFormOpen] =useState<boolean>(false)

  const handleDelete = (id: number) => {
    const value = users.filter((user) => user.id !== id);
    setUsers(value);
  };

  const addUser = () => {
    setIsFormOpen(true)
    setSelectedUser({ id: 0, firstName: '', lastName: ''});
  };

  const editUser = (user: User) => {
    setIsFormOpen(true)
    setSelectedUser(user);
  };
  const viewUser = (user: User) => {
    setIsFormOpen(true)
    setSelectedUser(user);
    setReadOnly(true)
  };


  return (
    <>
     <Header/>
    <main className=" min-h-screen  py3">
      <div className="flex  justify-between p-4">
        <h2 className="text-2xl font-semibold">User List</h2>
        <button
          className="bg-blue-500 px-2 py-1 rounded text-white"
          onClick={addUser}
        >
          {" "}
          Add User
        </button>
      </div>
      <div className="flex justify-center shadow-md border-gray-700 mb-2 py-3 ">
        {isFormOpen && <Userform  
        user={selectedUser || { id: 0, firstName: '', lastName: '' }}  setUsers={setUsers} setSelectedUser={setSelectedUser} 
         readOnly= {readOnly}
          setIsFormOpen={setIsFormOpen}
        />}
      </div>

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mb-4 p-2">
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center border-b last:border-none">
              <td className="py-2">{user.firstName}</td>
              <td className="py-2">{user.lastName}</td>
              <td className="py-2 px-4 space-x-2">
                <button
                  className="bg-green-500 text-white p-2 mx-1"
                  onClick={() => viewUser(user)}
                >
                  View
                </button>
                <button
                  className="bg-yellow-500 text-white p-2 mx-1"
                  onClick={() => editUser(user)}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white p-2 mx-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
    <Footer/>
    </>
  );
}
