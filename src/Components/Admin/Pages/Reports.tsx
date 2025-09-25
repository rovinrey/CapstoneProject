import DashboardCard from "../DashboardCard";
function Reports () {
    return(
        <>
            <h2>Reports and Analytics</h2>
            <p>Comprehensive program and beneficiary insights</p>

            {/*Summary Cards*/}
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
        </>
    );
};
export default Reports;