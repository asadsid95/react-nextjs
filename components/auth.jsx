"use client";

import axios from "axios";

// import { useState } from "react";

export default function Auth() {
  // const [formData, setFormData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  const onSubmit = (e) => {
    e.preventDefault();

    // how to send form data to route handler at '/api/auth'

    // setFormData({
    //   username: "",
    //   email: "",
    //   password: "",
    // });

    // console.log(e);

    const response = async () => {
      try {
        await axios.get("/api/auth");
      } catch (err) {
        console.log(err);
      }
    };

    response();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col items-center justify-center my-auto">
        <div>
          <label>Username:</label>
          <input
            placeholder="Username"
            name="username"
            // onChange={(e) => {
            //   setFormData({
            //     ...formData,
            //     username: e.target.value,
            //   });
            // }}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            placeholder="email"
            name="email"
            // onChange={(e) => {
            //   setFormData({
            //     ...formData,
            //     email: e.target.value,
            //   });
            // }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            placeholder="password"
            name="password"
            // onChange={(e) => {
            //   setFormData({
            //     ...formData,
            //     password: e.target.value,
            //   });
            // }}
          />
        </div>
        <button className="bg-blue-600 p-3 " type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
