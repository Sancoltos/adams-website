import CopyRight from "@/components/copyright"; //This is the main page or the website  importing the copyright and searchbar components
import SearchBar from "../components/searchbar";

export default function Home() { //exporting the default function for everything to be house in
  return (
    <div>
      <div>
      <SearchBar /> {/**rending the searchbar for you to use then after we have some text for the welcome page */}
      <div className="title">
      <h1>Welcome to Adams First React Website</h1>
      </div>
      <div className="welcomeMessage">
        <p>Hello My name is Adam please enjoy your stay</p>
      </div>
      <CopyRight />
      </div>
      <div className="video-container"> {/**this is my video that I have to play in the background so that its more visualy appealing */}
        <video autoPlay muted loop id="backgroundVideo">
          <source src="/Videos/Background_Video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}