import './Apply.css'
function ApplicationForm () {
    return(
        <>
            <h3>Submit New Application</h3>
            <p>Apply for additional TUPAD or Pangkabuhayan</p>

        {/*Progress bar here*/}
            <div className="personal-information-container">
                <form>
                    <label>
                        First Name*
                        <input type="text" />
                    </label>

                    <label>
                        Last name*
                        <input type="text" />
                    </label>
                    <label>
                        Middle Name*
                        <input type="text" />
                    </label>


                    <label>
                        Date of Birth*
                        <input type="text" />
                    </label>
                    <label>
                        Age*
                        <input type="text" />
                    </label>
                    <label>
                        Gender*
                        <input type="text" />
                    </label>
                    <label>
                        Civil Status*
                        <input type="text" />
                    </label>

                    <label>
                        Contact number*
                        <input type="text" />
                    </label>

                    <label>
                        Email Address*
                        <input type="text" />
                    </label>


                </form>
            </div>
        </>
    );
}
export default ApplicationForm;