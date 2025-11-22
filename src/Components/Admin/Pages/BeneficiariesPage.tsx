import "./BeneficiariesPage.css";
import { useState, useMemo } from "react";
import Apply from "../../Beneficiaries/TabsLInk/Apply";
//import { Axios } from 'axios';

// Define the structure of a beneficiary object
interface Beneficiary {
  id: string; // The generated BEN### ID, used as key
  firstName: string;
  lastName: string;
  programType: string;
  program: string;
  barangay: string;
  dob: string;
  age: string;
  sex: string;
  civilStatus: string;
  address: string; // Combination of street/house number and barangay
  idNumber: string; // The applicant's actual ID number
  contactNumber: string;
  dateApplied: string;
  actions: string;
}

// Assuming this is the FormData interface from the Apply component
interface FormData {
  firstName: string;
  lastName: string;
  dob: string;
  barangay: string;
  programType: string;
  sex: string;
  civilStatus: string;
  address: string;
  idNumber: string;
  contactNumber: string;
}

// MOCK DATA FOR INITIAL STATE
const MOCK_BENEFICIARIES: Beneficiary[] = [
  {
    id: "BEN001",
    firstName: "Maria",
    lastName: "Dela Cruz",
    programType: "tupad",
    program: "TUPAD - Community Work",
    barangay: "North Poblacion",
    dob: "1985-11-20",
    age: "40",
    sex: "Female",
    civilStatus: "Married",
    address: "018 Sampaguita St., North Poblacion",
    idNumber: "PHL-90012345",
    contactNumber: "09171234567",
    dateApplied: "10/01/2025",
    actions: "",
  },
  {
    id: "BEN002",
    firstName: "Juan",
    lastName: "Luna",
    programType: "livelihood",
    program: "Pangkabuhayan - Livelihood",
    barangay: "Aroroy",
    dob: "1998-05-15",
    age: "27",
    sex: "Male",
    civilStatus: "Single",
    address: "Purok 5, Aroroy",
    idNumber: "PHL-80067890",
    contactNumber: "09989876543",
    dateApplied: "10/05/2025",
    actions: "",
  },
];
// END MOCK DATA

function BeneficiariesList() {
  // State is initialized with the mock data
  const [beneficiaries, setBeneficiaries] =
    useState<Beneficiary[]>(MOCK_BENEFICIARIES);
  const [tableContent, setTableContent] = useState<"list" | "apply">("list");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddClick = () => {
    setTableContent("apply");
  };

  const handleBackToList = () => {
    setTableContent("list");
  }; /*
    // useEffect for data fetching (replace useStateEffect)
    useEffect(() => {
        // ... API fetching logic here
    }, []);
    */

  const calculateAge = (dob: string): string => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age.toString();
  };

  const handleAddBeneficiary = (formData: FormData) => {
    // Destructure values from formData
    const {
      firstName,
      lastName,
      dob,
      barangay,
      programType,
      sex,
      civilStatus,
      address,
      idNumber,
      contactNumber,
    } = formData;

    const age = calculateAge(dob); // Generate a new ID based on the current list length + 1

    const newIdNumber = beneficiaries.length + 1;
    const newId = `BEN${String(newIdNumber).padStart(3, "0")}`; // Determine the program title

    const programTitle =
      programType === "tupad"
        ? "TUPAD - Community Work"
        : "Pangkabuhayan - Livelihood";

    const newBeneficiary: Beneficiary = {
      id: newId, // Generated system ID
      firstName,
      lastName,
      programType,
      program: programTitle,
      barangay,
      dob,
      age,
      sex,
      civilStatus,
      address: `${address}, ${barangay}`, // Combine street and barangay
      idNumber, // Applicant's ID number
      contactNumber,
      dateApplied: new Date().toLocaleDateString("en-US"),
      actions: "",
    }; // Update the state using the functional form

    setBeneficiaries((prevBeneficiaries) => [
      ...prevBeneficiaries,
      newBeneficiary,
    ]); // Switch back to the list view

    setTableContent("list");
  }; // Use useMemo for efficient filtering based on search term

  const filteredBeneficiaries = useMemo(() => {
    if (!searchTerm) {
      return beneficiaries;
    }
    const lowerCaseSearch = searchTerm.toLowerCase();

    return beneficiaries.filter(
      (beneficiary) =>
        beneficiary.firstName.toLowerCase().includes(lowerCaseSearch) ||
        beneficiary.lastName.toLowerCase().includes(lowerCaseSearch) ||
        beneficiary.program.toLowerCase().includes(lowerCaseSearch) ||
        beneficiary.barangay.toLowerCase().includes(lowerCaseSearch) ||
        beneficiary.id.toLowerCase().includes(lowerCaseSearch) ||
        beneficiary.idNumber.toLowerCase().includes(lowerCaseSearch)
    );
  }, [beneficiaries, searchTerm]);

  return (
    <div className="beneficiary-page">
      {" "}
      <div className="beneficiary-heading">
        {" "}
        <div className="beneficiary-title">
          <h2>Beneficiary Management</h2>{" "}
          <p>Manage and track program beneficiaries</p>{" "}
        </div>{" "}
        <div>
          {" "}
          {tableContent === "list" && (
            <button className="add-button" onClick={handleAddClick}>
              + Add Beneficiary{" "}
            </button>
          )}{" "}
          {tableContent === "apply" && (
            <button className="add-button" onClick={handleBackToList}>
              Go back{" "}
            </button>
          )}{" "}
        </div>{" "}
      </div>
      {/* Content Area - Conditional Rendering */}{" "}
      {/* Show the Beneficiary List */}{" "}
      {tableContent === "list" && (
        <>
          {" "}
          {filteredBeneficiaries.length === 0 && beneficiaries.length === 0 ? (
            <p style={{ marginTop: "20px", textAlign: "center" }}>
              No beneficiaries found. Click "Add Beneficiary" to start.{" "}
            </p>
          ) : filteredBeneficiaries.length === 0 && beneficiaries.length > 0 ? (
            <p style={{ marginTop: "20px", textAlign: "center" }}>
              No results found for **"{searchTerm}"**.{" "}
            </p>
          ) : (
            <table>
              {" "}
              <div className="search-controls">
                {" "}
                <input
                  className="Search"
                  type="text"
                  placeholder="Search beneficiaries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />{" "}
              </div>{" "}
              <thead>
                {" "}
                <tr>
                  <th>Name</th> 
                  <th>ID Number</th> 
                  <th>Age</th>
                  <th>Sex</th>
                  <th>Civil Status</th>
                  <th>Address</th>
                   <th>Contact Number</th>
                  <th>Program</th> 
                  <th>Date Applied</th>{" "}
                </tr>{" "}
              </thead>{" "}
              <tbody>
                {" "}
                {filteredBeneficiaries.map((beneficiary) => (
                  <tr key={beneficiary.lastName}>
                    {" "}
                    <td>
                      {beneficiary.firstName} {beneficiary.lastName}{" "}
                    </td>
                    <td>{beneficiary.idNumber}</td>
                    <td>{beneficiary.age}</td> <td>{beneficiary.sex}</td>{" "}
                    <td>{beneficiary.civilStatus}</td>{" "}
                    <td>{beneficiary.address}</td>{" "}
                    <td>{beneficiary.contactNumber}</td>{" "}
                    <td>{beneficiary.program}</td>{" "}
                    <td>{beneficiary.dateApplied}</td>{" "}
                  </tr>
                ))}{" "}
              </tbody>{" "}
            </table>
          )}{" "}
        </>
      )}
      {/* Show the Apply Form */}{" "}
      {tableContent === "apply" && (
        <Apply
          onCancel={handleBackToList}
          onSubmitData={handleAddBeneficiary}
        />
      )}{" "}
    </div>
  );
}

export default BeneficiariesList;
