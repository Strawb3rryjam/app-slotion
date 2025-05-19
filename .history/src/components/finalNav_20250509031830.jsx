import NavBar from "../components/NavBar.jsx";
import ClosetButton from "./closet/closetPageButton.jsx";   


export default function FinalNav() {
    return (
        <div className="nav-container">
            <NavBar />
            <ClosetButton />
        </div>
    );
}