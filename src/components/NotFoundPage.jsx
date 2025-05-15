import { Link } from "react-router-dom";
import GameIcon from '../assets/img/icons/shed.svg';
import { useGameState } from "@/stores/GameState";

export function NotFoundPage() {
    const {version} = useGameState();
    return (
        <nav className="w-full h-screen flex flex-col justify-center items-center bg-blue-300">
            <img className="w-16" src={GameIcon} alt="Game Icon" />
            <h1 className="text-white font-bold text-6xl">
                Survive React
            </h1>
            <h2 className="text-white text-5xl my-4 animate-bounce">
                404 - Page Not Found
            </h2>
            <p className="text-white text-lg mb-8">
                Oups ! Cette page n'existe pas ou a été déplacée.
            </p>
            <div className="flex flex-col items-center gap-2">
                <Link 
                    to="/game" 
                    className="bg-white text-blue-500 font-semibold rounded px-4 py-2 w-40 text-center shadow hover:bg-blue-100 transition"
                >
                    Rejouer
                </Link>
                <Link 
                    to="/" 
                    className="bg-white text-blue-500 font-semibold rounded px-4 py-2 w-40 text-center shadow hover:bg-blue-100 transition"
                >
                    Retour à l'accueil
                </Link>
            </div>
            <p className="text-white mt-8">v{version}</p>
        </nav>
    );
}
