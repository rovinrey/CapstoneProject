import { FaCheckCircle } from 'react-icons/fa';
import { FaPesoSign } from 'react-icons/fa6'
import { IoIosBriefcase } from 'react-icons/io'

import './BeneficiaryWidget.css'
function widget(props:any) {
    return(
        <>
        <div className="widget-card">
            <div className='Application-id'> 
                <FaCheckCircle />
                <p>Application ID</p>
                <p>BEN001</p>
            </div>

            <div className='Total-earnings'>
                <FaPesoSign />
                <p>Total Earnings</p>
                <p><FaPesoSign /> 2,000</p>
            </div>

            <div className='Program'>
                <IoIosBriefcase />
                <p>Program</p>
                <p>TUPAD - Community Cleaning</p>
            </div>
        </div>
        </>
    );
};
export default widget;