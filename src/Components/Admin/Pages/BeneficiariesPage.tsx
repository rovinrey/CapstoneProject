import './BeneficiariesPage.css'
import { useState } from 'react';
import Apply from '../../Beneficiaries/TabsLInk/Apply'

// Define the structure of a beneficiary object for better type safety
interface Beneficiary {
    id: string;
    name: string;
    firstName: string;
    lastName: string;
    programType: string;
    program: string;
    barangay: string;
    dob: string;
    age: string;
    sex: string;
    civilStatus: string;
    address: string;
    idNumber: string;
    contactNumber: string;
    dateApplied: string;
    actions: string;
}

// Assuming this is the FormData interface from the Apply component (updated to include new fields)
interface FormData {
    firstName: string;
    lastName: string;
    dob: string;
    barangay: string;
    programType: string;
    sex: string;
    civilStatus: string;
    address: string;
    idNumber: string;
    contactNumber: string;
}

function BeneficiariesList() {
    // State to hold the dynamic list of beneficiaries
    const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([]);
    const [tableContent, setTableContent] = useState('list');

    const handleAddClick = () => {
        setTableContent('apply');
    };

    const handleBackToList = () => {
        setTableContent('list');
    }

    const handleAddBeneficiary = (formData: FormData) => {
        // Extract values from formData
        const { firstName, lastName, dob, barangay, programType, sex, civilStatus, address, idNumber, contactNumber } = formData;

        // Calculate age from Date of Birth (dob)
        const calculateAge = (dob: string) => {
            const birthDate = new Date(dob);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age.toString();
        };
        const age = calculateAge(dob);

        // Generate a new ID based on the current list length
        const newIdNumber = beneficiaries.length + 1;
        const newId = `BEN${String(newIdNumber).padStart(3, '0')}`;

        // Determine the program title
        const programTitle = programType === 'tupad'
            ? 'TUPAD - Community Work'
            : 'Pangkabuhayan - Livelihood';

        const newBeneficiary: Beneficiary = {
            id: newId,
            name: `${firstName} ${lastName}`, // Combine first and last name
            firstName,
            lastName,
            programType,
            program: programTitle,
            barangay,
            dob,
            age,
            sex,
            civilStatus,
            address,
            idNumber,
            contactNumber,
            dateApplied: new Date().toLocaleDateString('en-US'),
            actions: '' // Placeholder, can be updated if needed
        };

        // Update the state
        setBeneficiaries((prevBeneficiaries) => {
            return [...prevBeneficiaries, newBeneficiary];
        });

        // Switch back to the list view
        setTableContent('list');
    };

    return (
        <div className="beneficiary-page">

            <div className="beneficiary-heading">
                <div className='beneficiary-title'>
                    <h2>Beneficiary Management</h2>
                    <p>Manage and track program beneficiaries</p>
                </div>

                <div>
                    {tableContent === 'list' && (
                        <button className='add-button' onClick={handleAddClick}> + Add Beneficiaries </button>
                    )}
                    {tableContent === 'apply' && (
                        <button className='add-button' onClick={handleBackToList}> Go back </button>
                    )}
                </div>
            </div>

            {/* Content Area - Conditional Rendering */}

            {/* Show the Beneficiary List */}
            {tableContent === 'list' && (
                <>
                    {beneficiaries.length === 0 ? (
                        // Display message if the list is empty
                        <p style={{ marginTop: '20px', textAlign: 'center' }}>
                            No beneficiaries found.
                        </p>
                    ) : (
                        <>
                            {/* Move search input outside the table for valid HTML */}


                            {/* Display the table if data exists */}
                            <table>
                                {/* Header of the table */}
                                <input className="Search" type="text" placeholder="search beneficiaries"></input>

                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Birthday</th>
                                        <th>Sex</th>
                                        <th>Civil Status</th>
                                        <th>Address</th>
                                        <th>Contact number</th>
                                        <th>Program</th>
                                        <th>Date applied</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {beneficiaries.map((beneficiary) => (
                                        <tr key={beneficiary.id}>
                                            <td>{beneficiary.id}</td>
                                            <td>{beneficiary.firstName} {beneficiary.lastName}</td> {/* Full name */}
                                            <td>{beneficiary.age}</td>
                                            <td>{beneficiary.dob}</td>
                                            <td>{beneficiary.sex}</td>
                                            <td>{beneficiary.civilStatus}</td>
                                            <td>{beneficiary.address}</td>
                                            <td>{beneficiary.contactNumber}</td>
                                            <td>{beneficiary.program}</td>
                                            <td>{beneficiary.dateApplied}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    )}
                </>
            )}

            {/* Show the Apply Form */}
            {tableContent === 'apply' && (
                <Apply
                    onCancel={handleBackToList}
                    onSubmitData={handleAddBeneficiary}
                />
            )}
        </div>
    );
}

export default BeneficiariesList;
