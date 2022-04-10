import { Card } from "../components/home/Card";
import { Header } from "../components/home/Header";
import { Main } from "../components/home/Main";

export const Home = () => {
    return (
        <div className="bg-gray-900 w-full min-h-screen p-10">
            <Header />
            <div className="flex justify-between mt-10">
                <Main />
                <Card />
            </div>
        </div>
    );
}