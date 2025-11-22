import './Programs.css' // css of this page
import { useState, useMemo } from 'react';
import ProgramsCard from '../ProgramCard'; // Assuming this component is correct

// 1. DEFINE PROGRAM DATA ARRAY
const PROGRAM_DATA = [
    {
        id: 'P001',
        name: 'TUPAD',
        status: 'Active',
        projectName: 'Community Cleaning Initiative',
        desc: 'Street cleaning and beautification program for urban areas.',
        beneficiaryNum: 60,
        dateRange: '07/01/2025 - 09/30/2025', // Assuming this is needed
        amount: 0,
        coordinator: 'Carmenta Sotto',
    },
    {
        id: 'P002',
        name: 'Pangkabuhayan',
        status: 'Active',
        projectName: 'Skills Training and Seed Capital',
        desc: 'Provides livelihood training and initial capital for small business ventures.',
        beneficiaryNum: 45,
        dateRange: 'Ongoing',
        amount: 50000,
        coordinator: 'Rovin Jalmasco',
    },
    {
        id: 'P003',
        name: 'GIP',
        status: 'Active',
        projectName: 'Government Internship Program ',
        desc: 'Provides short-term work experience to young high school/college graduates.',
        beneficiaryNum: 10,
        dateRange: '11/01/2025 - 04/30/2026',
        amount: 0,
        coordinator: 'Maria Rodriguez',
    },
    {
        id: 'P004',
        name: 'SPES',
        status: 'Active',
        projectName: 'Special Program for Employment of Students',
        desc: 'Aims to help poor but deserving students finish their education by providing income.',
        beneficiaryNum: 45, // Corrected from 45/60
        dateRange: 'Summer 2026',
        amount: 0,
        coordinator: 'Maria Rodriguez',
    },
    {
        id: 'P005',
        name: 'JOB SEEKERS',
        status: 'Ongoing',
        projectName: 'Local Job Fair and Referrals',
        desc: 'Registration and referral service connecting local job seekers with municipal and private vacancies.',
        beneficiaryNum: 80,
        dateRange: 'Year-Round',
        amount: 0,
        coordinator: 'Maria Rodriguez',
    },
];
// ---

// Define the structure of a Program (optional, but good practice if using TypeScript)
// interface Program {
//     id: string;
//     name: string;
//     status: string;
//     projectName: string;
//     desc: string;
//     beneficiaryNum: number;
//     dateRange: string;
//     amount: number;
//     coordinator: string;
// }


function Programs() {
    // 2. INITIALIZE STATE WITH PROGRAM DATA
    const [programs, setPrograms] = useState(PROGRAM_DATA);
    const [searchTerm, setSearchTerm] = useState('');

    // 3. IMPLEMENT SEARCH FILTERING
    const filteredPrograms = useMemo(() => {
        if (!searchTerm) {
            return programs;
        }
        const lowerCaseSearch = searchTerm.toLowerCase();

        return programs.filter(program =>
            program.name.toLowerCase().includes(lowerCaseSearch) ||
            program.projectName.toLowerCase().includes(lowerCaseSearch) ||
            program.desc.toLowerCase().includes(lowerCaseSearch) ||
            program.coordinator.toLowerCase().includes(lowerCaseSearch)
        );
    }, [programs, searchTerm]);


    return (
        <>
            <div className="program-page">
                <div>
                    <h2>Program Management </h2>
                    <p>Manage TUPAD, Pangkabuhayan, and other employment programs.</p>
                </div>

                <div className="program-controls">
                    <input 
                        className='search-program' 
                        type='text' 
                        placeholder='Search Programs...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                   
                </div>

            </div>

            <div className='program-list'>
                {/* 4. DYNAMICALLY MAP PROGRAM DATA TO CARDS */}
                {filteredPrograms.length > 0 ? (
                    filteredPrograms.map((program) => (
                        <ProgramsCard
                            // Use a unique key for list items
                            key={program.id} 
                            name={program.name}
                            status={program.status}
                            ProjectName={program.projectName}
                            Desc={program.desc}
                            BeneficiaryNum={program.beneficiaryNum}
                            DateRange={program.dateRange}
                            Amount={program.amount}
                            Coordinator={program.coordinator}
                            // Assuming ProgramsCard needs an onClick for management details
                            // onClick={() => console.log('View details for:', program.name)}
                        />
                    ))
                ) : (
                    // Display message if no programs match the search
                    <p style={{ padding: '20px', textAlign: 'center' }}>
                        No programs found matching **"{searchTerm}"**.
                    </p>
                )}
            </div>
        </>
    );
}

export default Programs;