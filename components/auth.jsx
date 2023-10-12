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

  const onSubmit = (e) => {
    e.preventDefault();

    // how to send form data to route handler at '/api/auth'

    // constructs set of k/v pairs of form fields and values
    const formData = new FormData(e.target);

    console.log(Object.fromEntries(formData.entries()));

    const response = async () => {
      try {
        await axios.post("/api/auth", formData);
      } catch (err) {
        console.log(err);
      }
    };

    response();

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
