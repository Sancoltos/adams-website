import SearchBar from "../components/searchbar";
import CopyRight from "../components/copyright";

export default function About() {


    return (
        <div>
            <SearchBar />

            {/* Biography Section */}
            <div className="bio-title">
                <h1>Biography</h1>
            </div>
            <div className="bio-text">
                <p>
                    Adam Walters is a 32-year-old aspiring software developer who spent 15 years as a 
                    technical director in theater before embarking on a career change.
                </p>
                <p>
                    Born in the UK and raised in Montreal, Adam moved to Toronto in 2023 to pursue 
                    his new path.
                </p>
                <p>
                    His background blends creativity and technical expertise, shaping a unique perspective 
                    on problem-solving and innovation.
                </p>
            </div>

            {/* Background Video */}
            <div className="video-container">
                <video autoPlay muted loop id="backgroundVideo">
                    <source src="/Videos/nature.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Footer */}
            <CopyRight />
        </div>
    );
}
    