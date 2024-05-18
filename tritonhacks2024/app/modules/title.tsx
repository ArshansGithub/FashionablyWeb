import "../globals.css";

export default function TitleBar() {
  return (
    <div>
      <div className="w-full align-middle text-center font-sans rounded-[2vw] text-black font-semibold">
        <p className="text-[5vw] mt-16">
          Fashionably
        </p>
        <p className="italic">
          Fashionably sustainable, Fashionably you
        </p>
      </div>

      <div className="flex justify-center">
        <span className="w-10/12 border-b-4 rounded-xl">wahoo</span> 
      </div>
    </div>
  );
}