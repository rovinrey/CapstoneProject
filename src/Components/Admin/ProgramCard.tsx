import React from 'react';

type ProgramscardProps = {
    name: string;
    status: string;
    ProjectName: string;
    Desc: string;
    BeneficiaryNum: number;
    DateRange: string; 
    Amount: number;
    Coordinator: string;
    onClick?: () => void;
};

const ProgramsCard: React.FC<ProgramscardProps> = ({ 
    name, 
    status, 
    ProjectName,
    Desc, 
    BeneficiaryNum, 
    DateRange,
    Amount, 
    Coordinator, 
    onClick 
}) => {

    // Helper function to format amount as currency (Philippine Peso)
    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat('en-PH', {
            style: 'currency',
            currency: 'PHP',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    // Helper function to determine badge color based on status
    const getStatusColor = (status: string): string => {
        const lowerStatus = status.toLowerCase();
        if (lowerStatus === 'active') return '#4caf50'; // Green
        if (lowerStatus === 'ongoing') return '#ff9800'; // Orange
        if (lowerStatus === 'completed') return '#2196f3'; // Blue
        return '#607d8b'; // Default gray
    };

    // Define the style object for the main card container
    const cardStyle = {
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '20px',
        width: '320px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        cursor: onClick ? 'pointer' : 'default', // Add pointer for clickable cards
        margintop: '15px',
    };

    // Define the style object for the status badge
    const badgeStyle: React.CSSProperties = {
        padding: '4px 8px',
        borderRadius: '12px',
        fontSize: '0.75em',
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
        minWidth: '60px',
        // Apply dynamic background color
        backgroundColor: getStatusColor(status), 
    };

    return (
        // Apply inline style to the main div
        <div 
            style={cardStyle}
            onClick={onClick}
            role="button"
            tabIndex={onClick ? 0 : -1} 
        >
            <div className="top" style={{
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: '15px', 
                paddingBottom: '8px', 
                borderBottom: '1px solid #f0f0f0',
            }}>
                <p className="program-name" style={{
                    fontSize: '1.1em',
                    fontWeight: '700',
                    color: '#1a237e'
                }}>{name}</p>
                
                {/* Apply inline style to the status badge */}
                <p style={badgeStyle}>{status.toUpperCase()}</p>
            </div>

            <h4 className="project-name" style={{
                fontSize: '1.2em',
                color: '#333',
                marginBottom: '10px',
                fontWeight: '600',
            }}>Project: {ProjectName}</h4> 
            
            <p className="description" style={{
                color: '#777',
                marginBottom: '15px',
            }}>Description: {Desc}</p>
            
            <div className="details">
                <p style={{ margin: '5px 0', fontSize: '0.95em', color: '#444' }}>
                    Beneficiaries: {BeneficiaryNum}
                </p>
                <p style={{ margin: '5px 0', fontSize: '0.95em', color: '#444' }}>
                    Date Range: {DateRange}
                </p>
                <p style={{ margin: '5px 0', fontSize: '0.95em', color: '#444' }}>
                     Budget: {formatCurrency(Amount)}
                </p> 
                <p style={{ margin: '5px 0', fontSize: '0.95em', color: '#444' }}>
                     Coordinator: {Coordinator}
                </p>
            </div>
        </div>
    );
};

export default ProgramsCard;