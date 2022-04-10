import { Logo } from "../Logo"

export const Header = () => {
    return (
        <div className="header flex justify-between relative">
            <Logo />
            <div className="cone absolute right-5 -top-20" />
        </div>
    );
}