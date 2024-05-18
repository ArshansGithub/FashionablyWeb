import "../globals.css";

export default function StartButton() {
  return (
    <div className="w-full align-middle text-center ">
      <button 
        className="border-solid border-[0.25vw] border-[--foreground-rgb] rounded-[1vw]
        w-[10vw] h-[5vw] text-[3vw]"
      >
        <strong>START</strong>
      </button>
    </div>
    
  );
}