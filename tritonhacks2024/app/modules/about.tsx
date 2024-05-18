import "../globals.css";

export default function About() {
  return (
    <div className="flex color-[--foreground-rgb]">
      <p className="w-[60%] text-[1vw]">
        About the creators: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <img className="w-[40%] border-solid border-[0.25vw] border-[--foreground-rgb] rounded-[1vw]" 
      src="../images/aboutUs.png">
      </img>
    </div>
  );
}