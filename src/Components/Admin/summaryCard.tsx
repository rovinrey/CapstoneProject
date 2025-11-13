import './summaryCard.css'

function DashboardCard({ number, name , icon}: { number: number; name: string, icon?: React.ReactNode }) {
    return ( 
        
        <div className='container'>
            <div className='dashboard-card'>
                <p>{name}</p>
                <h3>{number}</h3>
                <p className='icon'>{icon}</p>
                      
            </div>
        </div>
      
    );
}

export default DashboardCard;