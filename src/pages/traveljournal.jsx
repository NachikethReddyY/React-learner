import "../styles/journal.css";
import travelData from "../Data/travel";
import GlobeIcon from "../assets/globe.svg";

const TravelJournal = () => {
    return (
        <main className="travel-journal-page">
            <div className="travel-journal-header">
                <p className="eyebrow"><img src={GlobeIcon} alt="Globe Icon" className="globe-icon" /> The Travel Journal</p>
            </div>
            <div className="travel-journal-content">
                {travelData.map((entry) => (
                    <div key={entry.id} className="travel-entry">
                        <img src={entry.img.src} alt={entry.img.alt} className="travel-image" />
                        <div className="travel-details">
                            <h2>{entry.title}</h2>
                            <p className="travel-country">{entry.country}</p>
                            <a href={entry.googleMapsLink} target="_blank" rel="noopener noreferrer" className="google-maps-link">View on Google Maps</a>
                            <p className="travel-dates">{entry.dates}</p>
                            <p className="travel-description">{entry.text}</p>
                        </div>
                    </div>
                ))} 
            </div>
        </main>
    );
}

export default TravelJournal;