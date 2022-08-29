import OrdersCoffeeButton from "./OrdersCoffeeButton"

const OrdersSummary = ({ words }) => {

    if(words){
        const TranslateSentenceArray = Array.from(words)
        return (
            <fieldset>
                <div>
                    {TranslateSentenceArray.map((item,index) =>(
                    <OrdersCoffeeButton key={index} letter={item}></OrdersCoffeeButton>))}
                </div>
            </fieldset>
        )
        
    }

}

export default OrdersSummary
