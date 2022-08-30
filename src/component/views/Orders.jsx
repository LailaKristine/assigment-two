import { useState } from "react"
import { orderAdd } from "../../api/order"
import { useUser } from "../../context/UserContext"
import withAuth from "../../hoc/withAuth"
import { storageSave } from "../../utils/storage"
import OrderForm from "../Orders/OrderForm"
import OrdersSummary from "../Orders/OrdersSummary"

const Orders = () => {

    const { user, setUser } = useUser();
    const [theWord, setTheWord] = useState();

    const handleOrderClicked = async (word) => {
        if (!word) {
            alert("Please write something")
            return
        }
        const [error, updatedUser] = await orderAdd(word, word.orderNotes.trim)
        console.log( word.orderNotes," orders.jsx");
        setTheWord(word.orderNotes);
        if (error !== null) {
            return
        }
        console.log(updatedUser);
        //Keep UI state and server  state in
        storageSave("user", updatedUser)
        //update context state
        setUser(updatedUser)

        console.log("Error", error);
        console.log("updated User", updatedUser);
    
    }

    return (
        <>
            <section>
                <h1>Translate</h1>
                <OrderForm
                    onOrder={handleOrderClicked}
                ></OrderForm>
            </section>
            <section>
            <p>Translation: </p>
            {theWord !== ""  &&(
                <OrdersSummary words={ theWord} />
            )}
                {theWord === "" &&(
                <OrdersSummary words={""}/>)}
            </section>

        </>
    )
}

export default withAuth(Orders)