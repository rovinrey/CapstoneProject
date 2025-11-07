import './BeneficiariesPage.css'
function Beneficiaries() {
    return (
        <div className="beneficiary-page">
            {/*header*/}
            <div className="beneficiary-heading">
                <div className='beneficiary-title'>
                    <h2>Beneficiary Management</h2>
                    <p>Manage and track program beneficiaries</p>   
                </div>
               
                <div>
                    <button className='add-button'> + Add Beneficiaries</button>
                </div>
            </div>

            {/*table*/}
            <table>
                <div className="beneficiary-list">
                    {/* search bar*/}
                    <input className="Search" type="text" placeholder="search beneficiaries"></input>
                </div>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Program</th>
                    <th>Status</th>
                    <th>Date applied</th>
                    <th>Total Earning</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>BEN001</td>
                    <td>maria santos</td>
                    <td>TUPAD- Community Cleaning</td>
                    <td>Completed</td>
                    <td>March 10, 2024</td>
                    <td>P15,000</td>
                    <td>Active</td>
            
                </tr>
                <tr>
                    <td>BEN001</td>
                    <td>maria santos</td>
                    <td>TUPAD- Community Cleaning</td>
                    <td>Completed</td>
                    <td>March 10, 2024</td>
                    <td>P15,000</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>BEN001</td>
                    <td>maria santos</td>
                    <td>TUPAD- Community Cleaning</td>
                    <td>Completed</td>
                    <td>March 10, 2024</td>
                    <td>P15,000</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>BEN001</td>
                    <td>maria santos</td>
                    <td>TUPAD- Community Cleaning</td>
                    <td>Completed</td>
                    <td>March 10, 2024</td>
                    <td>P15,000</td>
                    <td>Active</td>
                </tr>
                 <tr>
                    <td>BEN001</td>
                    <td>maria santos</td>
                    <td>TUPAD- Community Cleaning</td>
                    <td>Completed</td>
                    <td>March 10, 2024</td>
                    <td>P15,000</td>
                    <td>Active</td>
                </tr>
                 <tr>
                    <td>BEN001</td>
                    <td>maria santos</td>
                    <td>TUPAD- Community Cleaning</td>
                    <td>Completed</td>
                    <td>March 10, 2024</td>
                    <td>P15,000</td>
                    <td>Active</td>
                </tr>
                
            </table>
        </div>
    );
}
export default Beneficiaries;