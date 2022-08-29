import { useForm } from "react-hook-form"


const OrderForm =({onOrder}) =>{

    const {register, handleSubmit} = useForm()

    const onSubmit = (orderNotes) =>{onOrder(orderNotes)}
    
    return(
        <form onSubmit={ handleSubmit(onSubmit) }>
        <fieldset>
            <label htmlFor="order-notes">Translation </label>
            <input type="text" {...register('orderNotes')}
             placeholder="Hello" />
        </fieldset>
        <button type="submit">Translate!</button>
        </form>
    )
}
export default OrderForm