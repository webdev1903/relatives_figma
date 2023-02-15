import { data } from "./configs/data";
import Display from "./components/display";
import "./App.css";

function App() {
  return (
    <div className="bg-purple w-screen h-screen">
      <div className="flex w-max justify-center items-center gap-x-4 absolute top-28 left-10">
        <img src="./icons/activity.png" className="w-4 h-4" />
        <p className="font-tomorrow non-italic font-semibold font-lbase uppercase text-trend opacity-90 tracking-tightest">
          Trending Assets
        </p>
      </div>
      <Display data={data} />
    </div>
  );
}

export default App;
