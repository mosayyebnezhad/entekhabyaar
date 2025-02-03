
import { More } from "@/Components/more"
import Nav from "@/Components/nav"
import WebApp from "@twa-dev/sdk"
import { Divide } from "iconoir-react"




const Home = () => {
    let theme = WebApp.themeParams





    return (


        <div className="bg-[#1C1B31] w-full h-screen flex justify-center">
            <div className="absolute z-10">
                <Nav />
                <Hompage />
                {window.innerWidth <= 576
                    &&

                    <div className="flex justify-center mx-auto mt-12 gap-2">
                        <More />
                    </div>
                }
            </div>
            <div className="bg-[rgba(217,217,217,.1)] backdrop-blur-3xl absolute w-full h-screen flex justify-center"></div>
            <img src="./rucket.svg" className="h-screen" alt="" />


        </div>


    )
}

export default Home




const Hompage = () => {

    return (
        <div className="w-3/5 mx-auto" >
            <img src="./shoar.svg" className="mx-auto" alt="" />

            <p className="mt-12 text-xs leading-5 md:leading-7 md:text-base w-4/5 mx-auto text-justify">
                این یک سیستم متن‌باز و رایگان است که فرآیند انتخاب واحد (انتخاب استاد) را برای دانشجویان تسهیل می‌کند. با جمع‌آوری لیست اساتید یک دانشگاه و دریافت آرای دانشجویان درباره ویژگی‌های تدریس، این سیستم به دانشجویان کمک می‌کند تا با آگاهی بیشتری استادان خود را انتخاب کنند. هدف این پلتفرم ارتقای کیفیت آموزشی و ایجاد شفافیت در جامعه علمی است.
            </p>

        </div>
    )
}