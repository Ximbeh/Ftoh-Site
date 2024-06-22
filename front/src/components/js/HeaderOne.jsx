const HeaderOne = () => {

    return (
        <>
        <div className="flex space-x-4 my-3 ml-3 bg-white">
            <img className="h-6 opacity-40 mr-2
            before: relative before: bg-blue-500 before: 
            " src="https://www.formula1.com/etc/designs/fom-website/images/fia_logo.png " alt="FIA"/>
            <div className="flex space-x-4 items-center font-formula-bold text-xs">
                <a><span className="opacity-40 hover:opacity-100 hover:cursor-pointer">F1-Classic</span></a>
                <a><span className="opacity-40 hover:opacity-100 hover:cursor-pointer">F2-Classic</span></a>
                <a><span className="opacity-40 hover:opacity-100 hover:cursor-pointer">F1-Super</span></a>
            </div>
        </div>
        </>
    )
}

export default HeaderOne