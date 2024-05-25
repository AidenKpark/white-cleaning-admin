import React, {useState} from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import COLORS from "@/styles/colors";
import SIZES from "@/styles/sizes";

interface LogoLinkProps {
    src: string;
    href: string;
    alt: string;
}

const a = Array(10).fill(1).map((v,i)=> i+1);


const x = Array(10).fill(10).reduce((a,c)=>a+c);










const c = [{name:"americano",price:2500},{name:"latte",price:3500}].map((v)=>{
    v.name = v.name.toUpperCase();
    v.price = v.price > 3000 ? v.price + 1000 : v.price - 1000;
    return v
})

const d = ["are","you","happy","now"].filter((v)=> !v.includes("a"))

const e = !!""


const LogoLink: React.FC<LogoLinkProps> = ({href, src, alt}) => {
    return (
        <Link sx={{backgroundColor: COLORS.BG.DEFAULT, padding: SIZES.SPACING.EXTRA_LARGE, borderBottom:`1px solid ${COLORS.BORDER.PRIMARY}`}} href={href} underline="none">
            <Box sx={{width: "100%", height: "100%", objectFit: "contain"}} component="img" src={src} alt={alt}/>
        </Link>
    );
};

export default LogoLink;
