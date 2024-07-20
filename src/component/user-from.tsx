import { useEffect, useState } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

interface UserFormProps {
  user: User;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>;
  readOnly: boolean;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Userform({
  user,
  setUsers,
  setSelectedUser,
  readOnly,
  setIsFormOpen,
}: UserFormProps) {
  const [formUser, setFormUser] = useState<User>(user);
  const [disable, setDisable] = useState<boolean>(false);

  useEffect(() => {
    setFormUser(user);
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormUser((prevUser) => {
      const updatedUser = { ...prevUser, [name]: value };
      setDisable(
        updatedUser.firstName !== user.firstName ||
          updatedUser.lastName !== user.lastName
      );
      return updatedUser;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formUser.id === 0) {
      setUsers((prevUsers) => [...prevUsers, { ...formUser, id: Date.now() }]);
    } else {
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === formUser.id ? formUser : u))
      );
    }
    setSelectedUser(null);
    setIsFormOpen(false);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex p-2 mt-4  justify-between">
        <div className="space-x-2 ">
          <label className=" text-gray-700 mb-2">First Name :</label>
          <input
            data-testid="firstName"
            type="text"
            name="firstName"
            value={formUser.firstName}
            onChange={handleChange}
            readOnly={readOnly}
            className=" p-2 border-2 border-gray-300 rounded-lg "
            required
          />
          <label className=" text-gray-700 mb-2 ml-1">Last Name :</label>
          <input
            data-testid="lastName"
            type="text"
            name="lastName"
            value={formUser.lastName}
            onChange={handleChange}
            readOnly={readOnly}
            className=" p-2 border-2 border-gray-700 rounded-lg "
            required
          />
        </div>
        <div className="flex px-4 space-x-2">
          <button
            className="bg-green-500 text-white p-2 mx-1"
            onClick={handleCancel}
          >
            cancel
          </button>
          <button
            className="bg-blue-500 text-white p-2 mx-1"
            type="submit"
            disabled={!disable}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
