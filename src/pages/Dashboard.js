import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUser,
  deleteUser,
  updateUserData,
} from "../store/actions/userActions";

export default function Dashboard() {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [edit, setEdit] = useState(false);

  const users = useSelector((state) => state.user.users);

  const addUser = (e) => {
    // e.preventDefault();
    dispatch(createUser({ name, age }));
  };

  const removeUser = (id) => {
    dispatch(deleteUser(id));
    setName("");
    setAge("");
  };

  const editUser = (id) => {
    setEdit(true);
    setUserId(id);
    let index = users.findIndex((user) => user.id === id);
    setName(users[index].name);
    setAge(users[index].age);
  };

  const updateUser = () => {
    dispatch(updateUserData({ id: userId, name, age }));
    setName("");
    setAge("");
    setUserId(null);
    setEdit(false);
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Users</h1>
        <div className="col-8 offset-2">
          <form>
            <div className="form-group">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                type="number"
                placeholder="Age"
                className="form-control"
              />
            </div>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => (edit ? updateUser() : addUser())}
            >
              {edit ? "Update" : "Save"}
            </button>
          </form>
        </div>
      </div>
      <div className="row mt-5 text-center">
        <div className="col-8 offset-2">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length &&
                users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.age}</td>
                      <td>
                        <button
                          className="btn btn-info"
                          onClick={() => editUser(user.id)}
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeUser(user.id)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
