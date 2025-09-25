import './DashboardCard.css'
import DashboardCard from './DashboardCard';
import Recent from './RecentActivities'
function Dashboard() {
   

    return (  
        <div>  
            <div className="heading">
                <h2>Dashboard</h2>
                <p>Overview of TUPAD and Pangkabuhayan programs</p>          
            </div>
            <div className='dashboard-card-container'>
                <DashboardCard number={0} name={'Total Beneficiaries'} />
                <DashboardCard number={0} name={'Active Programs'} />
                <DashboardCard number={0} name={'Total Distributed'} />
                <DashboardCard number={0} name={'Employment Rate'} />
            </div>

            <div className='recent-activity'>
                <Recent />

            </div>
        </div> 

    );
}

export default Dashboard;