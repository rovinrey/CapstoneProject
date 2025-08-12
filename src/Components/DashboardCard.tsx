import './DashboardCard.css'

function DashboardCard({ number, name }: { number: number; name: string }) {
    return ( 
        <div>
            <div className='container'>
                <div className='dashboard-card'>
                    <h3>{number}</h3>
                    <img alt="" />
                    <p>{name}</p>
                </div>
            </div>
        </div>
      
    );
}

export default DashboardCard;