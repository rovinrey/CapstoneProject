import { useState } from "react";
function RecentActivities() {
    const [recent, setrecent] = useState('');
    return(
        <>
        <div className="recent-activities">
            <h4>Recent Activites</h4>

            <p>New beneficiary registered: {recent} </p>
        </div>
        
        </>

    );
}
export default RecentActivities;