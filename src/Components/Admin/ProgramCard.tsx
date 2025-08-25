type ProgramscardProps = {
    name: string;
    status: string;
    ProjectName: string;
    Desc: string;
    BeneficiaryNum: number;
    DateRange: number;
    Amount: number;
    Coordinator: string;
    Location: string;
};

const ProgramsCard: React.FC<ProgramscardProps> = ({name, status, ProjectName,
    Desc, BeneficiaryNum, DateRange, Amount, Coordinator, Location
}) => {
    return(
        <>
        <div className="program-card">
            <div className="top">
                <p>{name}</p>
                <p>{status}</p>
            </div>
                <h4>{ProjectName}</h4>
                <p>{Desc}</p>
                <p>{BeneficiaryNum}</p>
                <p>{DateRange}</p>
                <p>{Amount}</p>
                <p>{Coordinator}</p>
                <p>{Location}</p>
        </div>

        </>
    );
};
export default ProgramsCard;