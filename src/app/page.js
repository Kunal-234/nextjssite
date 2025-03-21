
export default function Home() {
  return (
    <div>
      <nav className="flex justify-between  sm:mx-0 sm:px-0 gap-22 mx-9 px-9 m-3 p-1 ">
        <div>
          <h2 className="text-2xl"> Demo Website</h2>
        </div>
        <ul className="flex justify-end sm:justify-start sm:gap-3 gap-22">
          <li>Home</li>
          <li>About </li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="flex justify-center my-[24vh]">
        <h1 className="text-6xl sm:text-4xl">Welcome to my first website</h1>
      </div>
    </div>
  );
}
