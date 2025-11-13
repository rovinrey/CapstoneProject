import DashboardCard from "../summaryCard";

function Reports() {

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
        </>
    );
}

export default Reports;