import './PaymentPageCard.css'
type PaymentPageProps = {
        name: string;
        amount: number;
    };
const PaymentPageCard: React.FC<PaymentPageProps> = ({ name, amount }) => { 
     return(
        <>
            <p>{name}</p>
            <h4>{amount}</h4>
        </>
     );
};
export default PaymentPageCard;