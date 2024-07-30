import { useState } from "react"
import HeaderOne from "./HeaderOne"
import HeaderTwo from "./HeaderTwo"
import React from "react"
import HeaderMobile from "./headerMobile"

const Header= () => {


    return (
       <header className="sticky top-0 z-[20]">
        <HeaderOne ></HeaderOne>
        <HeaderTwo ></HeaderTwo>
        <HeaderMobile ></HeaderMobile>
       </header>
    )
}

export default Header