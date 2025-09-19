import ScheduleWidget from "../../widgets/scheduleWidget";
function WorkSchedule() {
    return(
        <div>
            <h3>Work Schedule</h3>
            <ScheduleWidget 
                name={"Community Cleaning"} 
                sector={"Sector A"} 
                time={"7:00 am - 4:00pm"} 
                location={"Juban"} 
            />
            <ScheduleWidget 
                name={"Community Cleaning"} 
                sector={"Sector B"} 
                time={"7:00 am - 4:00pm"} 
                location={"Juban"} 
            />   
            <ScheduleWidget 
                name={"Community Cleaning"} 
                sector={"Sector C"} 
                time={"7:00 am - 4:00pm"} 
                location={"Juban"} 
            />         
            <ScheduleWidget 
                name={"Community Cleaning"} 
                sector={"Sector D"} 
                time={"7:00 am - 4:00pm"} 
                location={"Juban"} 
            />           
        </div>
    );
};

export default WorkSchedule;