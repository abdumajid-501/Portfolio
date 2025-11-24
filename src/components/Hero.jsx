import MyImage from '../assets/my-img.png'
import Github from '../assets/svg/github.svg'
import Linkedin from '../assets/svg/linkedin.svg'
import Telegram from '../assets/svg/tg.svg'

function Hero() {
  return (
    <section className="bg-linear-to-t h-full from-[#0F0F1E] to-[#1A1A2E] pt-[155px]">
      <div className="flex items-start justify-between container mx-auto">
        
        <div>
          <div className="py-2.5 px-[17px] max-w-[201px] rounded-2xl border border-[#7C3AED1A] bg-[rgba(124,58,237,0.3)] mb-8 text-[#7C3AED] text-center">
            👋 Hello, I'm Asadbek
          </div>

          <h1 className="text-7xl leading-[72px] text-white w-[365px] mb-[13px]">
            Frontend Developer
          </h1>

          <p className="text-white leading-8 text-2xl mb-8">
            I build interactive and responsive web experiences.
          </p>

          <div className="flex items-center gap-4 mb-9">
            <a href="#">
              <button className="py-3.5 px-[31px] bg-[#7C3AED] text-white rounded-2xl">
                View My Work
              </button>
            </a>

            <a href="#">
              <button className="py-3.5 px-[31px] border border-[#7C3AED] bg-white text-[#7C3AED] rounded-2xl">
                Contact Me
              </button>
            </a>
          </div>

          <div className="flex items-center gap-6 mt-4">
            <a href="#"><img src={Github} alt="github" className="w-8" /></a>
            <a href="#"><img src={Linkedin} alt="linkedin" className="w-8" /></a>
            <a href="#"><img src={Telegram} alt="telegram" className="w-8" /></a>
          </div>
        </div>

        <div className="w-[512px]">
          <img className='rounded-[50%]' src={MyImage} alt="Asadbek" width={506} height={504} />
        </div>

      </div>
    </section>
  )
}

export default Hero
