function Beneficiaries() {
    return (
        <div className="beneficiary-page">
        <div className="beneficiary-heading">
            <h2>Beneficiary Management</h2>
            <p>Manage and track program beneficiaries</p>

            <button> + Add Beneficiaries</button>

        </div>

        <div className="beneficiary-list">
            <input type="text" placeholder="search beneficiaries"></input>
        </div>
        </div>
    );
}
export default Beneficiaries;