import { BsFillMoonStarsFill } from 'react-icons/bs';

const Navbar = () => {
    return (
        <nav className="bg-red-300 p-8 flex justify-between">
            <h1>Amit Megidish</h1>
            <BsFillMoonStarsFill />
        </nav>
    );
};

export default Navbar;