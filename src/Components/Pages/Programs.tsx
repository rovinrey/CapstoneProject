import './Programs.css' // css of this page
import ProgramsCard from '../Admin/ProgramCard';
function Programs() {
    return(
        <>
        <div className="program-page">
            <div>
                <h2>Program Management</h2>
                <p>Manage TUPAD and Pangkabuhayan programs</p>
            </div>

            <input className='search-program' type='text' placeholder='Search Programs'></input>
            
        </div>
        <div className='program-list'>
            <ProgramsCard 
                name={'TUPAD'} 
                status={'active'} 
                ProjectName={'Community Cleaning Initiative'} 
                Desc={'Street cleaning and beautification program for urban areas'} 
                BeneficiaryNum={45/60} 
                DateRange={0} 
                Amount={0} 
                Coordinator={'Maria Rodriguez'} 
                Location={'Juban Sorsogon'}
            />
            <ProgramsCard 
                name={'TUPAD'} 
                status={'active'} 
                ProjectName={'Community Cleaning Initiative'} 
                Desc={'Street cleaning and beautification program for urban areas'} 
                BeneficiaryNum={45/60} 
                DateRange={0} 
                Amount={0} 
                Coordinator={'Maria Rodriguez'} 
                Location={'Juban Sorsogon'}
            />
            <ProgramsCard 
                name={'TUPAD'} 
                status={'active'} 
                ProjectName={'Community Cleaning Initiative'} 
                Desc={'Street cleaning and beautification program for urban areas'} 
                BeneficiaryNum={45/60} 
                DateRange={0} 
                Amount={0} 
                Coordinator={'Maria Rodriguez'} 
                Location={'Juban Sorsogon'}
            />
        </div>
        </>
    );
}
export default Programs;