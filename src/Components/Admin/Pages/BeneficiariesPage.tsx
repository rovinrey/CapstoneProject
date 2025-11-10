import './BeneficiariesPage.css'
import { useState } from 'react';
import Apply from '../../Beneficiaries/TabsLInk/Apply'

 // Simple data for demonstration (will be dynamic later)
    const beneficiariesData = [
        
        {
            id: 'BEN001',
            name: 'maria santos',
            program: 'TUPAD- Community Cleaning',
            status: 'Completed',
            dateApplied: 'March 10, 2024',
            totalEarning: 'P15,000',
            actions: 'Active'
        },

        {
            id: 'BEN002',
            name: 'juan dela cruz',
            program: 'TUPAD- Community Cleaning',
            status: 'Completed',
            dateApplied: 'March 10, 2024',
            totalEarning: 'P1000',
            actions: 'Active'
        }
            
    ];

function Beneficiaries() {

    // 1. Initialize state to track the active view
    const [tableContent, setTableContent] = useState('list'); 
    //const [beneficiaries, setBeneficiaries] = useState(data);

    const handleAddClick = () => {
        setTableContent('apply'); 
    };

    const handleBackToList = () => {
        setTableContent('list');
    }
    
    return (
        <div className="beneficiary-page">
            {/* Header */}
            <div className="beneficiary-heading">
                <div className='beneficiary-title'>
                    <h2>Beneficiary Management</h2>
                    <p>Manage and track program beneficiaries</p>   
                </div>
                
                <div>
                    {/* Button to switch to the Apply form */}
                    {tableContent === 'list' && (
                        <button className='add-button' onClick={handleAddClick}> + Add Beneficiaries </button>
                    )}
                    {/* Button to go back, shown only on Apply screen */}
                    {tableContent === 'apply' && (
                        <button className='add-button' onClick={handleBackToList}> Go back </button>
                    )}
                </div>
            </div>

           

            {/* Content Area - Conditional Rendering */}
            
            {/* Show the Beneficiary List */}
            {tableContent === 'list' && (
                <>
                    <table>
                         <input className="Search" type="text" placeholder="search beneficiaries"></input>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Program</th>
                                <th>Status</th>
                                <th>Date applied</th>
                                <th>Total Earning</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* Map through data to render rows */}
                            {beneficiariesData.map((beneficiary) => (
                                <tr key={beneficiary.id}>
                                    <td>{beneficiary.id}</td>
                                    <td>{beneficiary.name}</td>
                                    <td>{beneficiary.program}</td>
                                    <td>{beneficiary.status}</td>
                                    <td>{beneficiary.dateApplied}</td>
                                    <td>{beneficiary.totalEarning}</td>
                                    <td>{beneficiary.actions}</td>
                                </tr> 
                            ))}
                        </tbody>
                    </table>
                </>
            )}

            {/* Show the Apply Form */}
            {tableContent === 'apply' && (
                <Apply onCancel={handleBackToList} /> // Pass a prop to allow Apply to close itself
            )}
        </div>
    );
}
export default Beneficiaries;