import OrdersCoffeeButton from "./OrdersCoffeeButton"

const OrdersSummary = ({ words  }) => {

    const TranslateSentenceArray = Array.from(words)

    return (
        <fieldset>
            {/* <h4>Translate Summary</h4> */}
            <div>
                {TranslateSentenceArray.map((item,index) =>(
                <OrdersCoffeeButton key={index} letter={item}></OrdersCoffeeButton>))}
            </div>
        </fieldset>
    )

}

export default OrdersSummary
