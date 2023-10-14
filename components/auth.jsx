"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function Auth() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  // For user authentication
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // constructs set of k/v pairs of form fields and values
      const formData = new FormData(e.target);

      const refined_formData = Object.fromEntries(formData.entries());

      console.log(refined_formData);

      const response = await axios.post("/api/auth", refined_formData);

      console.log(response);
    } catch (err) {
      console.log(err);
    }

    response();

    /* This is to try sending formData interface to route handler    
 try {
      const data = new FormData(e.target);

      const response = await axios.post("/api/auth", data);
    } catch (err) {
      console.log(err);
    }
 */
    setFormData({
      username: "",
      email: "",
      password: "",
    });

    router.replace("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col items-center justify-center my-auto">
        <div>
          <label>Username:</label>
          <input
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={(e) => {
              setFormData({
                ...formData,
                username: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            placeholder="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={(e) => {
              setFormData({
                ...formData,
                password: e.target.value,
              });
            }}
          />
        </div>
        <button className="bg-blue-600 p-3 " type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
