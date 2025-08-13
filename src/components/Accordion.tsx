import AccordionItem from "./AccordionItem"
import "../css/accordion.css"

type Faqs = {
    num?: number
    title: string
    text: string
}

type DataProps = {
    data: Faqs[]
}

function Accordion ({data}: DataProps) {

    
    return (
        
        <div className="accordion-container">
            {data.map((item, i) => <AccordionItem key={i+1} num={i+1} title={item.title} text={item.text} />)}
        </div>

    )

}

export default Accordion