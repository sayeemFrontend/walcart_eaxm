import Bottom from "./sections/bottom/Bottom";
import Middle from "./sections/middle/Middle";
import Top from "./sections/top/Top";

export default function Navbar(params) {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="pt-2">
          <Top />
        </div>
        <div className="my-9">
          <Middle />
        </div>
        <Bottom />
      </div>
    </div>
  );
}
