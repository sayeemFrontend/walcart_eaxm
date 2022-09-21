import "./App.css";
import Navbar from "./components/common/navbar/Navbar";
import Layout from "./layout/Layout";
import Home from "./pages/home";

export default function App() {
  return (
    <div className="bg-[#F5F5F5]">
      <Navbar />
      <div className="body ">
        <Layout />
        <div>
          <Home />
        </div>
      </div>
    </div>
  );
}
