import './BeneficiariesPage.css'
function Beneficiaries() {
    return (
        <div className="beneficiary-page">
            <div className="beneficiary-heading">
                <h2>Beneficiary Management</h2>
                <p>Manage and track program beneficiaries</p>

                <div className='add-button'>
                    <button> + Add Beneficiaries</button>
                </div>

            </div>

            <table>
                <div className="beneficiary-list">
                    <input className="Search" type="text" placeholder="search beneficiaries"></input>
                </div>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Program</th>
                    <th>Status</th>
                    <th>Total Earning</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>BEN001</td>
                    <td>maria santos</td>
                    <td>TUPAD- Community Cleaning</td>
                    <td>Active</td>
                    <td>P12,500</td>
                    <td>BEN001</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
                <tr>
                    <td>Adam</td>
                    <td>Johnson</td>
                    <td>67</td>
                </tr>
            </table>
        </div>
    );
}
export default Beneficiaries;