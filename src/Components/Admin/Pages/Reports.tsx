import React from 'react';
import DashboardCard from "../summaryCard";

function Reports() {
    // Barangay data from your list
    const barangays = [
        { no: 1, name: "Añog" },
        { no: 2, name: "Aroroy" },
        { no: 3, name: "Binanuahan" },
        { no: 4, name: "Buraburan" },
        { no: 5, name: "Cabacuhan" },
        { no: 6, name: "Calatagan" },
        { no: 7, name: "Cogon" },
        { no: 8, name: "Communal" },
        { no: 9, name: "Guintablian" },
        { no: 10, name: "Gulang-Gulang" },
        { no: 11, name: "Igang" }, // Assuming "Igang" is a typo or variant; adjust if needed
        { no: 12, name: "Inlagadian" },
        { no: 13, name: "Jamorawon" },
        { no: 14, name: "Maot" },
        { no: 15, name: "Mongpong" },
        { no: 16, name: "Murony" },
        { no: 17, name: "New Somal-ag" },
        { no: 18, name: "Old Somal-ag" },
        { no: 19, name: "Palate" },
        { no: 20, name: "Paco" },
        { no: 21, name: "Poblacion (Center)" },
        { no: 22, name: "Putho" },
        { no: 23, name: "San Isidro" },
        { no: 24, name: "San Mateo" },
        { no: 25, name: "Taboc" }
    ];

    // Sample programs to cycle through (replace with real data)
    const programs = ["Health Program", "Education Program", "Livelihood Program"];

    // Generate table data with placeholders
    const tableData = barangays.map((barangay, index) => {
        const male = Math.floor(Math.random() * 50) + 10; // Random male count (10-59)
        const female = Math.floor(Math.random() * 50) + 10; // Random female count (10-59)
        return {
            barangay: barangay.name,
            program: programs[index % programs.length], // Cycle through programs
            male,
            female,
            total: male + female
        };
    });

    // Optional: Calculate summary stats for cards (e.g., total beneficiaries)
    const totalBeneficiaries = tableData.reduce((sum, row) => sum + row.total, 0);
    const activePrograms = new Set(tableData.map(row => row.program)).size; // Unique programs

    return (
        <>
            <h2>Reports and Analytics</h2>
            <p>Comprehensive program and beneficiary insights</p>

            {/* Summary Cards */}
            <div className="summary-cards" style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '10px',
            }}>
                <DashboardCard
                    number={totalBeneficiaries} // Now dynamic
                    name={"Total Beneficiaries"}
                />
                <DashboardCard
                    number={activePrograms} // Now dynamic
                    name={"Active Programs"}
                />
                <DashboardCard
                    number={0} // Placeholder; calculate if you have distribution data
                    name={"Total Distributed"}
                />
                <DashboardCard
                    number={0} // Placeholder; calculate success rate if applicable
                    name={"Success Rate"}
                />
            </div>

            {/* Summary Table */}
            <div style={{ marginTop: '20px' }}>
                <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginTop: '10px'
                }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f2f2f2' }}>
                            <th style={{ width: '15%', border: '1px solid #ddd', padding: '8px' }}>Barangays</th>
                            <th style={{ width: '25%',border: '1px solid #ddd', padding: '8px' }}>Program</th>
                            <th style={{width: '10%',border: '1px solid #ddd', padding: '8px' }}>Male</th>
                            <th style={{ width: '10%',border: '1px solid #ddd', padding: '8px' }}>Female</th>
                            <th style={{ width: '10%',border: '1px solid #ddd', padding: '8px' }}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.barangay}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.program}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.male}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.female}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Reports;
