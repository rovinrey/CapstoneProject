import './DashboardCard.css'

function DashboardCard({ number, name }: { number: number; name: string }) {
    return ( 
        
        <div className='container'>
            <div className='dashboard-card'>
                 <p>{name}</p>
                <h3>{number}</h3>
                <img alt="" />           
            </div>
        </div>
      
    );
}

export default DashboardCard;