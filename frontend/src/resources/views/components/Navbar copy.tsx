import { AiOutlineMenu } from "react-icons/ai"
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom"
import logo from "../../img/logo.png"

const username = "@guanabee_007"

export const Navbar = () => {
    if (2 > 0) {
        return (
            <header className="flex items-center py-2 px-[10%] bg-transparent shadow-md justify-between text-white">
                <Link to="/" id="logo" className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="logo_image"
                        width={60}
                        loading="lazy"
                    />
                    <h1 className="text-semibold text-2xl">Systeminha</h1>
                </Link>
                <nav>
                    <ul className="flex gap-10">
                        <li><Link to="/" className="transtition duration-200 hover:text-shadow-2xs font-extralight hover:text-shadow-white">Home</Link></li>
                        <li><Link to="/devs" className="transtition duration-200 hover:text-shadow-2xs font-extralight hover:text-shadow-white">Devs</Link></li>
                        <li><Link to="/about" className="transtition duration-200 hover:text-shadow-2xs font-extralight hover:text-shadow-white">Sobre</Link></li>
                    </ul>
                </nav>
                <ul className="flex gap-4">
                    <li>
                        <Link to="/login"
                            className="
                                transitio duration-300
                                rounded-sm
                                px-4 py-2 bg-gradient-to-br 
                                from-[#1084ff] to-[#03eaff] via-[#64f2ff]
                                bg-clip-text
                                text-transparent
                                hover:text-shadow-2xs
                        ">Faça login</Link>
                    </li>
                    <li>
                        <Link to="/register"
                            className="
                                transitio duration-300
                                border-2 border-white
                                rounded-sm
                                px-4 py-2 
                                hover:border-transparent
                                hover:bg-[#1084ff]
                        ">Cadastre-se </Link>
                    </li>
                </ul>
                <div className="hidden">
                    <AiOutlineMenu className="text-2xl" />
                </div>
            </header>
        )
    } else {
        return (
            <header className="flex items-center py-2 px-[10%] bg-transparent shadow-md justify-between text-white">
                <Link to="/" id="logo" className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="logo_image"
                        width={60}
                        loading="lazy"
                    />
                    <h1 className="text-semibold text-2xl">Systeminha</h1>
                </Link>
                 <nav>
                    <ul className="flex gap-10">
                        <li><Link to="/" className="transtition duration-200 hover:text-shadow-2xs font-extralight hover:text-shadow-white">Home</Link></li>
                        <li><Link to="/devs" className="transtition duration-200 hover:text-shadow-2xs font-extralight hover:text-shadow-white">Devs</Link></li>
                        <li><Link to="/about" className="transtition duration-200 hover:text-shadow-2xs font-extralight hover:text-shadow-white">Sobre</Link></li>
                    </ul>
                </nav>
                <div className="flex gap-4 items-center">
                <span id="user" className="mr-[5rem]">{username}</span>
                    <button className="
                        transition duration-300
                        border-2 border-white
                        rounded-sm
                        px-4 py-2 
                        hover:border-transparent
                        hover:bg-[#1084ff]
                        flex items-center gap-3

                    ">Terminar Sessão
                        <MdLogout />
                    </button>
                </div>
                <div className="hidden">
                    <AiOutlineMenu className="text-2xl" />
                </div>
            </header>
        )
    }
}

