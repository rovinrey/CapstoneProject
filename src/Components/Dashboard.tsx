import DashboardCard from "./DashboardCard";
//import Table from './Table'

function Dashboard() {
    const dashboardData = [
        { id: 1, number: 0, name: 'total beneficiaries' },
        { id: 2, number: 0, name: 'Active beneficiaries' },
        { id: 3, number: 0, name: 'Pending transactions' },
        { id: 4, number: 0, name: 'success transaction' }
    ];

    return (
    
      
        <div className="dashboard-card-container">
            {dashboardData.map(card => (
                <DashboardCard
                    key={card.id}
                    number={card.number}
                    name={card.name}
                />  
            ))}

            
        </div>
       

    );
}

export default Dashboard;