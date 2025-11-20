import "./summaryCard.css";
import DashboardCard from "./summaryCard";
//import { useBeneficiaryContext } from '../../context/beneficiary';

function Dashboard() {
  //const { totalBeneficiaries } = useBeneficiaryContext();
  // Barangay data from your list
  const barangays = [
    { no: 1, name: "Añog" },
    { no: 2, name: "Aroroy" },
    { no: 3, name: "Binanuahan" },
    { no: 4, name: "Buraburan" },
    { no: 5, name: "Cabacuhan" },
    { no: 6, name: "Calatagan" },
    { no: 7, name: "Cogon" },
    { no: 8, name: "Communal" },
    { no: 9, name: "Guintablian" },
    { no: 10, name: "Gulang-Gulang" },
    { no: 11, name: "Igang" }, // Assuming "Igang" is a typo or variant; adjust if needed
    { no: 12, name: "Inlagadian" },
    { no: 13, name: "Jamorawon" },
    { no: 14, name: "Maot" },
    { no: 15, name: "Mongpong" },
    { no: 16, name: "Murony" },
    { no: 17, name: "New Somal-ag" },
    { no: 18, name: "Old Somal-ag" },
    { no: 19, name: "Palate" },
    { no: 20, name: "Paco" },
    { no: 21, name: "Poblacion (Center)" },
    { no: 22, name: "Putho" },
    { no: 23, name: "San Isidro" },
    { no: 24, name: "San Mateo" },
    { no: 25, name: "Taboc" },
  ];

  // Sample programs to cycle through (replace with real data)
  const programs = [
    "Health Program",
    "Education Program",
    "Livelihood Program",
  ];

  // Generate table data with placeholders
  const tableData = barangays.map((barangay, index) => {
    const male = Math.floor(Math.random() * 50) + 10; // Random male count (10-59)
    const female = Math.floor(Math.random() * 50) + 10; // Random female count (10-59)
    return {
      barangay: barangay.name,
      program: programs[index % programs.length], // Cycle through programs
      male,
      female,
      total: male + female,
    };
  });

  // Optional: Calculate summary stats for cards (e.g., total beneficiaries)
  return (
    <div>
      <div>
        <h2>Dashboard</h2>
        <p>Overview of TUPAD and Pangkabuhayan programs</p>
      </div>

      <div className="dashboard-card-container">
        <DashboardCard number={20} name="Total Beneficiaries" />
        <DashboardCard number={5} name="Active Programs" />
        <DashboardCard number={103} name="Total Distributed" />
        <DashboardCard number={75} name="Employment Rate" />
      </div>

      {/* Summary Table */}
      <div style={{ marginTop: "20px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th
                style={{
                  width: "15%",
                  border: "1px solid #ddd",
                  padding: "8px",
                }}
              >
                Barangays
              </th>
              <th
                style={{
                  width: "25%",
                  border: "1px solid #ddd",
                  padding: "8px",
                }}
              >
                Program
              </th>
              <th
                style={{
                  width: "10%",
                  border: "1px solid #ddd",
                  padding: "8px",
                }}
              >
                Male
              </th>
              <th
                style={{
                  width: "10%",
                  border: "1px solid #ddd",
                  padding: "8px",
                }}
              >
                Female
              </th>
              <th
                style={{
                  width: "10%",
                  border: "1px solid #ddd",
                  padding: "8px",
                }}
              >
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {row.barangay}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {row.program}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {row.male}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {row.female}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {row.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
