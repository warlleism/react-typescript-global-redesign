import Cooca from "../../assets/imgs/brands/cooca.png"
import Fort from "../../assets/imgs/brands/fort.png"
import Grupo from "../../assets/imgs/brands/grupo.png"
import Kara from "../../assets/imgs/brands/kara.png"
import Petz from "../../assets/imgs/brands/petz.png"
import Wine from "../../assets/imgs/brands/wine.png"
import Reserva from "../../assets/imgs/brands/reserva.png"
import Vix from "../../assets/imgs/brands/vix.png"
import Will from "../../assets/imgs/brands/will.png"
import { StyledContainer, StyledLink } from "../../styles/styledComponents/styledComponents"
import { IoIosArrowForward } from "react-icons/io"

export default function Brands() {


    return (
        <StyledContainer>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-5 lg:gap-0 overflow-hidden">
                <div className="flex flex-col gap-5 w-full lg:w-[40%]  hidden sm:block ">
                    <div className="flex flex-row justify-between">
                        <img className="w-[80px] lg:w-[120px] transition-all duration-300 hover:scale-110" src={Cooca} alt="" />
                        <img className="w-[80px] lg:w-[120px] transition-all duration-300 hover:scale-110" src={Fort} alt="" />
                        <img className="w-[80px] lg:w-[120px] transition-all duration-300 hover:scale-110" src={Grupo} alt="" />
                    </div>
                    <div className="flex flex-row justify-between">
                        <img className="w-[80px] lg:w-[120px] transition-all duration-300 hover:scale-110" src={Kara} alt="" />
                        <img className="w-[80px] lg:w-[120px] transition-all duration-300 hover:scale-110" src={Petz} alt="" />
                        <img className="w-[80px] lg:w-[120px] transition-all duration-300 hover:scale-110" src={Wine} alt="" />
                    </div>
                    <div className="flex flex-row justify-between">
                        <img className="w-[80px] lg:w-[120px] transition-all duration-300 hover:scale-110" src={Reserva} alt="" />
                        <img className="w-[80px] lg:w-[120px] transition-all duration-300 hover:scale-110" src={Vix} alt="" />
                        <img className="w-[80px] lg:w-[120px] transition-all duration-300 hover:scale-110" src={Will} alt="" />
                    </div>
                </div>
                <div className="w-full lg:w-[49%] flex flex-col justify-center items-center lg:items-start lg:justify-between gap-5">
                    <div className="text-[1.5rem] font-bold text-[#0000007d]">MARCAS PERCEIRAS</div>
                    <div className="mt-5">
                        <div className="text-[1.3rem] lg:text-[2.7rem] text-center lg:text-start font-bold text-[#212121] tracking-[-2px]">MOVA-SE MAIS RÁPIDO COM COM PARCEIRA <span className="text-[#0096FB] font-black">GLOBALSYS</span></div>
                        <div className="text-[1.3rem] lg:text-[1.4rem] text-center lg:text-start font-bold">ENTRE EM CONTATO COM A GENTE!</div>
                    </div>
                    <div className="mt-5 text-lg w-full w-[80%]">
                        <div className="text-[#4d4d4d] text-[.9rem] lg:text-[1.2rem] text-center lg:text-start">
                            Nosso especialista está pronto para esclarecer suas dúvidas e ajudá-lo a encontrar as
                            <span className="font-bold text-[#0096FB]"> melhores soluções </span>
                            para o seu sucesso. Com experiência e dedicação, oferecemos
                            <span className="font-bold text-[#0096FB]"> suporte personalizado </span>
                            para guiá-lo no caminho certo.
                        </div>
                    </div>
                    <StyledLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" style={{ width: 300, height: 50 }}>
                        <div>Entre em contato</div>
                        <div> <IoIosArrowForward color="#fff" size={20} className="animate-pulse" style={{ marginTop: 2 }} /></div>
                    </StyledLink>
                </div>

                <div className="flex flex-row gap-5 w-full lg:w-[40%] block sm:hidden overflow-x-auto scroll-smooth" >
                    <img className="w-[150px] transition-all duration-300 hover:scale-110" src={Cooca} alt="" />
                    <img className="w-[150px] transition-all duration-300 hover:scale-110" src={Fort} alt="" />
                    <img className="w-[150px] transition-all duration-300 hover:scale-110" src={Grupo} alt="" />
                    <img className="w-[150px] transition-all duration-300 hover:scale-110" src={Kara} alt="" />
                    <img className="w-[150px] transition-all duration-300 hover:scale-110" src={Petz} alt="" />
                    <img className="w-[150px] transition-all duration-300 hover:scale-110" src={Wine} alt="" />
                    <img className="w-[150px] transition-all duration-300 hover:scale-110" src={Reserva} alt="" />
                    <img className="w-[150px] transition-all duration-300 hover:scale-110" src={Vix} alt="" />
                    <img className="w-[150px] transition-all duration-300 hover:scale-110" src={Will} alt="" />
                </div>

            </div>
        </StyledContainer >
    )
}