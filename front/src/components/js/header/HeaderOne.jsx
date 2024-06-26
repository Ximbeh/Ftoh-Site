import "../../css/header.css"
const HeaderOne = () => {

    return (
        <div className="bg-white hidden lg:flex">
        <div className="flex space-x-4 my-3 ml-10 max-w-screen-lg ml-10 relative">
            <img className="h-6 opacity-40 mr-6" src="https://www.formula1.com/etc/designs/fom-website/images/fia_logo.png " alt="FIA"/>
            <span className="before: absolute before: bg-black before: opacity-40 before:left-10 before: flex w-px h-6 left-12"></span>
            <div className="flex space-x-4 items-center font-formula-bold text-xs">
                <a>
                    <span className="hover:opacity-100 hover:cursor-pointer">F1-Classic</span>
                    <span className="before: absolute before: bg-red-600 before: flex triangulo-baixo"></span>
                </a>
                <a><span className="opacity-40 hover:opacity-100 hover:cursor-pointer">F2-Classic</span></a>
                <a><span className="opacity-40 hover:opacity-100 hover:cursor-pointer">F1-Super</span></a>
            </div>
        </div>
        </div>
    )
}

export default HeaderOne