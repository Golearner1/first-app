'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
export default function Navlink({href,children}){
    const path = usePathname();//it is a use client component
    return(
        <li>
            <Link href={href} className={path.startsWith(href)?'active':undefined}>{children}</Link> 
          </li>
    );
}
//children is used to pass the content of that page inside this function and the href prop conatin the path which is active i.e archive or news