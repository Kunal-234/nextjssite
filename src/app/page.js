import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="flex justify-between  gap-22 mx-9 px-9 m-3 p-1 ">
        <div>
          <h2 className="text-2xl"> Demo Website</h2>
        </div>
        <ul className="flex justify-end gap-22">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="flex justify-center my-[24vh]">
        <h1 className="text-6xl">Welcome to my nextjs website</h1>
      </div>
    </div>
  );
}
