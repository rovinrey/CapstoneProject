import PaymentPageCard from "../Admin/PaymentPageCard";
function PaymentPage () {
    return(
        <>
        <div className="payment-page">
            <h2>Payment Tracking</h2>
            <p>Monitor and Manage beneficiary payments</p>
        </div>
        <div className="payment-card">
            <PaymentPageCard 
                name={"Total Disbured"} 
                amount={18795} 
            />
            <PaymentPageCard
                name={"Pending Payment"} 
                amount={1200} 
            />
            <PaymentPageCard 
                name={"Completed this month"} 
                amount={0} 
            />
            <PaymentPageCard 
                name={"Pending Count"} 
                amount={0} 
            />
        </div>
        <table>
            <tr>
                <th>Payment ID</th>
                <th>BeneficiaRy</th>
                <th>Program</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Payment Method</th>
                <th>Date</th>
            </tr>

            <tr>
                <td>PAY001</td>
                <td>Maria Santos</td>
                <td>TUPAD Communoty cleaning</td>
                <td>P 2,500</td>
                <td>completed</td>
                <td>Gcash</td>
                <td>2024-02-15</td>
            </tr>

            <tr>
                <td>PAY002</td>
                <td>Juan luna</td>
                <td>Pangkabuhayan - sewing training</td>
                <td>P 3,750</td>
                <td>completed</td>
                <td>Gcash</td>
                <td>2024-02-15</td>
            </tr>
        </table>
        </>
    );
}
export default PaymentPage;