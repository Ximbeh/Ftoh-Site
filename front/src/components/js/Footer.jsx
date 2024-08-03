
import tohaxLogo from '../../../img/logo/tohax.png'
import '../css/Calendar.css'
const Footer = () => {


  return (
    <div className="p-8" style={{backgroundColor: 'rgb(21, 21, 30)'}}>
      <div className="flex mb-4 justify-center items-center gap-4">
        <img src="" alt="" />
        <h3 className="text-lg text-white font-formula-bold">Nossos parceiros</h3>
      </div>
      <div className="flex justify-center items-center gap-8 flex-wrap text-white text-2xl">
        <a href="https://discord.gg/28JutpeCjX" target="_blank">
          <img src={tohaxLogo} className='gray cursor-pointer w-32' alt="tohax" />
        </a>
      </div>
    </div>
  )
}

export default Footer
