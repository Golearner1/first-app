"use client";
import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from "./MainHeader.module.css"
import Image from "next/image";
import MainHeaderbackground from "./MainHeader-Background";
import { usePathname } from "next/navigation";
export default function Mainheader(){
     const path =usePathname();
    return <>
    <MainHeaderbackground />
    <header className={classes.header}>
        <Link className={classes.logo} href="/" >
        <Image src={logo} alt="A plate with food on it" priority/>
        NextLevel Food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/meals" className={path.startsWith('/meals')?classes.active:undefined}>Browse Meals</Link>
                </li>
                {/* </ul>
                <ul> */}
                <li>
                    <Link href="/community"className={path.startsWith('/community')?classes.active:undefined}>Foodies Community</Link>
                </li>
                </ul>
        </nav>
    </header>
    </>
}