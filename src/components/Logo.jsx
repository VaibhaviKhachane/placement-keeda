import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <div>
            <Link to="/">
                <h1 role="link" className="leaf font-semibold text-white text-2xl p-2">
                    Placement Keeda
                </h1>
            </Link>
        </div>
    );
}