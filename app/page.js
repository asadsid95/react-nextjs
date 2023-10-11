import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center my-auto">
      <form>
        <div>
          <label>Username:</label>
          <input placeholder="Username" />
        </div>
        <div>
          <label>Email:</label>
          <input placeholder="email" />
        </div>
        <div>
          <label>Password:</label>
          <input placeholder="password" />
        </div>
      </form>
    </div>
  );
}
