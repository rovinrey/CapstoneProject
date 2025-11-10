import DashboardCard from "../summaryCard";

function Reports() {
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

    return (
        <>
            <h2>Reports and Analytics</h2>
            <p>Comprehensive program and beneficiary insights</p>

            {/*Summary Cards*/}
            <div className="summary-cards" style={{ marginTop: 20 }}>
                <DashboardCard
                    number={0}
                    name={"Total Beneficiaries"}
                />
                <DashboardCard
                    number={0}
                    name={"Active Programs"}
                />
                <DashboardCard
                    number={0}
                    name={"Total Distributed"}
                />
                <DashboardCard
                    number={0}
                    name={"Success Rate"}
                />



            </div>
            <table>
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
    );
}

export default Reports;