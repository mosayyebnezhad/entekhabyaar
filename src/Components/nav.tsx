import { ProfileCircle } from "iconoir-react"
import { Button } from "./Buttons"
import { More } from "./more"

const Nav = () => {
    return (
        <nav className="w-5/6 mx-auto my-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <img src="./par.svg" alt="" />
                <h1 className="text-2xl md:text-3xl font-black">انتخاب‌یار</h1>
            </div>
            <div className="flex gap-2">
                
                {window.innerWidth > 576 &&

                    <More />
                }
                <Button Icon={ProfileCircle} text="mohammad" theme="light" />
            </div>
        </nav>
    )

}


export default Nav