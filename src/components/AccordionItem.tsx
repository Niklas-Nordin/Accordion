import { useState } from "react"
import "../css/accordionItem.css"

type AccordionProps = {
    num: number
    title: string
    text: string
}

function AccordionItem({num, title, text}: AccordionProps) {

    const [isOpen, setIsOpen] = useState(false)

    function handleToggle() {
        setIsOpen(prev => !prev)
    }

    return(
        <div className={`container ${isOpen ? "open-border" : "" }`} onClick={handleToggle}>
            <div className="unOpen-container">
                <h2 className={`num ${isOpen ? "open-textColor" : ""}`}>{num <= 9 ? `0${num}` : num}</h2>
                <h2 className="title">{title}</h2>
                <p className="icon" >{isOpen ? "-" : "+" }</p>
            </div>

            {isOpen && <p className="text">{text}</p>}
        </div>
    )
}

export default AccordionItem