import CopyRight from "@/components/copyright";
import SearchBar from "../components/searchbar";

export default function Home() {
  return (
    <div>
      <div>
      <SearchBar />
      <div className="title">
      <h1>Welcome to Adams First React Website</h1>
      </div>
      <div className="welcomeMessage">
        <p>Hello My name is Adam please enjoy your stay</p>
      </div>
      <CopyRight />
      </div>
      <div className="video-container">
        <video autoPlay muted loop id="backgroundVideo">
          <source src="/Videos/Background_Video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}