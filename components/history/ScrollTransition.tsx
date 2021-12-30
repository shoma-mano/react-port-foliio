import { Children, cloneElement, createRef, useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

export const ScrollTransition = ({children,isVisible}: { children: React.ReactNode,isVisible?:boolean })=>{

    const box = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        if(isVisible)box.current!.style.opacity="1"
        window.addEventListener("scroll",(e)=>{
            let dist;
            if(box.current){dist=window.scrollY+box.current.getBoundingClientRect().top;}
            else return;
            if(dist+box.current.clientHeight<=window.scrollY+window.innerHeight*0.9){
                box.current.style.opacity="1"
            }
        })
        }
    )

    return(
        <>
            <Box
            ref={box}
            opacity={0}
            transition={"all 0.8s"}
            >
                {children}
            </Box>
        </>
    )
}