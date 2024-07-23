import { useState } from "react"
import HeaderOne from "./HeaderOne"
import HeaderTwo from "./HeaderTwo"
import React from "react"
import HeaderMobile from "./headerMobile"

const Header= ({championshipColorHex}) => {


    return (
       <header className="sticky top-0 z-[20]">
        <HeaderOne championshipColorHex={championshipColorHex}></HeaderOne>
        <HeaderTwo championshipColorHex={championshipColorHex}></HeaderTwo>
        <HeaderMobile championshipColorHex={championshipColorHex}></HeaderMobile>
       </header>
    )
}

export default Header