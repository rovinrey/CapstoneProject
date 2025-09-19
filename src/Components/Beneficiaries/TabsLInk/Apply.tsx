import './Apply.css'
function ApplicationForm () {
    return(
        <>
            <h3>Submit New Application</h3>
            <p>Apply for additional TUPAD or Pangkabuhayan</p>

            {/*Progress bar here*/}
            <div className="personal-information-container">
                <form>
                    <label>First Name* <input type="text" /></label>
                    <label>Last name*<input type="text" /></label>
                    <label>Middle Name*<input type="text" /></label>

                    <label>Date of Birth*<input type="text" /></label>
                    <label>Age*<input type="text" /></label>
                    <label>Gender*<input type="text" /></label>

                    <label>Civil Status*<input type="text" /></label>
                    <label>Contact number*<input type="text" /></label>
                    <label>Email Address*<input type="text" /></label>
                </form>
            </div>

            <div className='Address-information'>
                <form>
                    <label>Home number/ unit* <input type="text" /></label>
                    <label>Barangay* <input type="text" /></label>
                    <label>Province* <input type="text" /></label>

                    <label>Street* <input type="text" /></label>
                    <label>Municipal/City* <input type="text" /></label>
                    <label>Zip Code* <input type="text" /></label>
                </form>
            </div>

            <div className='program-information'>
                <p>Program type*</p>
                <p>TUPAD Tulong Pangkabuhayan sa Ating Displaced/ Disadvantage Workers</p>
                <p>Pangkabuhayan Livelihood Programs</p>

                <label>Availability*</label>
                    <select>
                        <option value={0}>Full timw</option>
                        <option value={1}>Part time</option>
                        <option value={2}>Weekends only </option>
                        <option value={3}>Flexible Schedule</option>
                    </select>

                    <form>
                        <label>relevant expercience <input type='text'/></label>
                    </form>
            </div>
        </>
    );
}
export default ApplicationForm;