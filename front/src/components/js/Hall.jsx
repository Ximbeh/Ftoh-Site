
import Header from "./header/header"
import Footer from "./footer"

const Hall = () => {
    return (
        <div >
            <Header/>
            <div className="bg-gray-200">
                <div className="px-4 m-auto max-w-lg md:max-w-5xl lg:max-w-7xl">
                    <h1 className="text-center font-formula-bold text-2xl md:text-4xl mb-10 pt-10">Hall da Fama - Os campeões</h1>
                    <div className="grid grid-cols-2 gap-2 pb-10 lg:grid-cols-4">
                        <div className="bg-white hover:bg-grayTotal hover:text-white hover:pb-5 duration-500 cursor-pointer ">
                            <img className="w-full mb-10" src="https://media.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/d05bra1308.jpg.img.320.medium.jpg" alt="" />
                            <p className="px-2 font-formula text-lg mb-10 text-center">Leonardo Alonso - 2023</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Hall
