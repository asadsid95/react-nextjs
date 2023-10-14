"use client";

import axios from "axios";
import { useState } from "react";
// import { cookies } from "next/headers";

export default function AuthSession() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const refined_formData = Object.fromEntries(formData.entries());

    // console.log(refined_formData);
    try {
      await axios.post("/api/auth_session", refined_formData);

      console.log(document.cookie);
    } catch (err) {
      console.log("[ROUTE_HANDLER_ERROR]: ", err);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center "
    >
      <div>
        <label>Email</label>
        <input
          name="email"
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label>Username</label>
        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
      </div>
      <div>
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>
      <button type="submit" className="p-4 bg-purple-600">
        Submit
      </button>
    </form>
  );
}
