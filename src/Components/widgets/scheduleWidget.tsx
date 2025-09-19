type scheduleWidgetProps = {
    name: string;
    sector: string;
    time: string;
    location: string;
}
const scheduleWidget: React.FC<scheduleWidgetProps> = ({ name, sector, time, location }) => { 
    return(
        <>
        <h5>{name}</h5> <p>{sector}</p>
        <p>{time}</p>
        <p>{location}</p>
        </>
    );
}
export default scheduleWidget;