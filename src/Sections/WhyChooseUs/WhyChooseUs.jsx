import React from 'react'
import './whychooseus.css'
import { MdPayment } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoPricetags } from "react-icons/io5";

const WhyChooseUs = () => {
    return (
        <div>
            <div className="whychooseus">
                <div>
                    <h1><MdPayment /></h1>
                    <span>100% Payment Secured</span>
                </div>
                <div>
                    <h1><IoWallet /></h1>
                    <span>Support lots of Payments</span>
                </div>
                <div>
                    <h1><MdSupportAgent /></h1>
                    <span>24hours/7days Support</span>
                </div>
                <div>
                    <h1><CiDeliveryTruck /></h1>
                    <span>Fast Delivery All Over Pakistan</span>
                </div>
                <div>
                    <h1><IoPricetags /></h1>
                    <span>Best Price Guaranteed</span>
                </div>

            </div>
        </div>
    )
}

export default WhyChooseUs
