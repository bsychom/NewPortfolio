import Link from 'next/link'
import {RxHamburgerMenu} from 'react-icons/rx'


const Header = () =>{
    return (
        
                    <nav className=" container mx-auto flex justify-between items-center  " >
                    <div data-aos="fade-right" data-aos-duration="1000" className="w-20 py-5 text-color-secondary font-extrabold  text-3xl z-20  ">
                        <Link href="/"><span className="text-lst">M</span>haddaou.</Link>
                    </div>
                    <div >
                        <ul className={`hidden lg:flex items-center space-x-6 font-bold  text-lg`}>
                            <li data-aos="fade-up" data-aos-duration="500"> <Link href="#" className="links shadow-2xl">  Home </Link></li>
                            <li data-aos="fade-up" data-aos-duration="1000">
        <Link href="#about" className="links shadow-2xl">About</Link>
        </li>
                            <li data-aos="fade-up" data-aos-duration="1500"> <Link href="#services" className="links shadow-2xl">  Services </Link></li>
                            <li data-aos="fade-up" data-aos-duration="2000"> <Link href="#skills" className="links shadow-2xl transition-transform">  Skills </Link></li>
                            <li data-aos="fade-up" data-aos-duration="2500"> <Link href="#notYet" className="links shadow-2xl">  Contact </Link></li>
                            <li data-aos="fade-up" data-aos-duration="3000"> <Link href="#notYet" className="links shadow-2xl">  Console </Link></li>
                        </ul>
                    </div>
                    <div className="dropdown lg:hidden pr-2  dropdown-left cursor-pointer">    
                        <RxHamburgerMenu className="text-lst text-xl " tabIndex={0}/>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 font-bold  mr-4 rounded-box w-52 bg-thr text-white shadow-xl shadow-lst ">
                        <li> <Link href="#"    className="links hover:text-black">  Home </Link></li>
                            <li> <Link href="#about" className="links hover:text-black">  About </Link></li>
                            <li> <Link href="#services" className="links hover:text-black">  Services </Link></li>
                            <li> <Link href="#skills" className="links hover:text-black">  Skills </Link></li>
                            <li> <Link href="#notYet" className="links hover:text-black">  Contact </Link></li>
                            <li> <Link href="#notYet" className="links hover:text-black">  Console </Link></li>
                        
                        </ul>
                    </div>
                </nav>
        
    )
}

export default Header;