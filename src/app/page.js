
export default function Home() {
  return (
    <div>
      <nav className="flex justify-between w-screen  sm:m-0 sm:p-0 sm:gap-0 gap-22 mx-9 px-9 m-3 p-1 ">
        <div>
          <h2 className="text-2xl"> Demo Website</h2>
        </div>
        <ul className="flex justify-end sm:justify-between sm:gap-0 gap-22">
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="flex justify-center my-[24vh]">
        <h1 className="text-6xl sm:text-4xl">Welcome to my first website</h1>
        <p>this is a demo website created using nextjs.......</p>
      </div>
    </div>
  );
}
