import React from 'react'
import "./trustbanner.css"
import { MdPayment } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoPricetags } from "react-icons/io5";

const Trustbanner = () => {
    return (
        <div className='trustbanner-section'>
            <div>
                <h2><MdPayment /></h2>
                <span>100% Payment <br /> Secured</span>
            </div>
            <div>
                <h2><IoWallet /></h2>
                <span>Support lots <br /> of Payments</span>
            </div>
            <div>
                <h2><MdSupportAgent /></h2>
                <span>24hours/7days <br /> Support</span>
            </div>
            <div>
                <h2><CiDeliveryTruck /></h2>
                <span>Fast Delivery <br /> All Over Pakistan</span>
            </div>
            <div>
                <h2><IoPricetags /></h2>
                <span>Best Price <br />Guaranteed</span>
            </div>
            
        </div>
    )
}

export default Trustbanner
