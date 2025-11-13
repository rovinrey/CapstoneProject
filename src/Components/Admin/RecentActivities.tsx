import { useState, useEffect } from "react";
import axios from "axios";

function RecentActivities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://your-api.com/api/recent") // replace with your actual endpoint
      .then((response) => {
        setActivities(response.data.activities || []);
      })
      .catch((error) => {
        console.error("Error fetching recent activities:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="recent-activities">
      <h4>Recent Activities</h4>
      {loading ? (
        <p>Loading...</p>
      ) : activities.length > 0 ? (
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>New beneficiary registered: {activity}</li>
          ))}
        </ul>
      ) : (
        <p>No recent activity</p>
      )}
    </div>
  );
}

export default RecentActivities;
