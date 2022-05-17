import { Form, TextSection, ThanksDiv } from "./style"
import Button from "../../Button/index"
import { useForm } from "react-hook-form";
import { postFeedback } from "../../../services/users/users";
import { useMenu } from "../../../providers/menu/menu";

const ThanksModal = () => {

    const { register, handleSubmit } = useForm();
    const { setIsPaymentModalOpen } = useMenu();

    const getCurrentDate = (data) => {

        if (data.review.length > 0) {
            let newDate = new Date()
            let day = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();

            const formattedDate = `${day}.${month < 10 ? `0${month}` : `${month}`}.${year}`
            console.log(formattedDate)

            const datas = {
                date: formattedDate,
                review: data.review
            }

            postFeedback(datas)
        }

        console.log(data)
        console.log("ZERAR O CARRINHO!")
        setIsPaymentModalOpen(false)

    }

    return (
        <ThanksDiv>
            <h2>Agradecemos a preferência!</h2>
            <Form onSubmit={handleSubmit(getCurrentDate)}>
                <label>Sinta-se a vontade em deixar um feedback.</label>
                <TextSection>
                    <textarea cols="60" rows="5" {...register("review")}></textarea>
                    <Button bgBlack type="submit">Confirmar</Button>
                </TextSection>
            </Form>
        </ThanksDiv>
    )
}
export default ThanksModal