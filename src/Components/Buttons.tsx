import { CheckCircleSolid, Iconoir, XmarkCircleSolid } from "iconoir-react"

interface IButton {
    text?: string,
    Icon?: typeof Iconoir,
    theme?: "light" | "dark" | "danger" | "success"
}

export const Button = (prop: IButton) => {
    const { text } = prop
    let { theme } = prop
    let { Icon } = prop
    if (!theme) theme = "light"

    const themebg = theme == "light" ? "#5f5774" :
        theme == "dark" ? "#222032" :
            theme == "success" ? "#28443e" : "#601f1f"

    const border = theme == "success" ? "#395833" : theme == "danger" ? "#E25757" : "none"

    const DefIcon = !Icon && (theme == "danger" || theme == "success") ?
        theme == "danger" ? XmarkCircleSolid : CheckCircleSolid : Icon

    return (
        <button className="h-[40px] flex gap-3 px-4 items-center rounded-xl cursor-pointer"

            style={{
                background: themebg,
                border: `2.5px solid ${border}`
            }}


        >

            {text
                &&
                < p
                    className="max-w-26 truncate"
                    style={{
                        color: border != "none" ? border : "#C7CEFF"
                    }}>{text}</p>
            }


            {
                DefIcon &&
                <div className="flex justify-center items-center">
                    <DefIcon color={border != "none" ? border : "#C7CEFF"} width={28} height={28} />
                </div>
            }
        </button >
    )
}


