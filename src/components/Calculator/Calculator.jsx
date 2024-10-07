import React, { useState } from 'react';
import axios from 'axios';
import './calculator.css';
import { useNavigate } from 'react-router-dom';
function Calculator() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        temple: '',
        seva: '',
        dharshan: 'General',
        adults: 1,
        children: 0,
        accomodation: 'Yes',
        date: '',
    });
    //const [,set]=useState(0);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const calculateFare = () => {
        const BASE_FARE = 500;
        let multiplier = 1;

        switch (formData.dharshan) {
            case 'VIP':
                multiplier = 2;
                break;
            case 'Special':
                multiplier = 1.5;
                break;
            case 'General':
                multiplier = 1;
                break;
            default:
                break;
        }

        let fareForAdults = formData.adults * BASE_FARE * multiplier;
        let fareForChildren = formData.children * (BASE_FARE * multiplier * 0.5);

        let totalFare = fareForAdults + fareForChildren;

        if (formData.accomodation === 'Yes') {
            totalFare *= 2;
        }

        return totalFare;
    }

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
      async function checkoutHandler(fare) {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
    
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
    
        // creating a new order
        const result = await axios.post("https://tms-be-cmce.onrender.com/custom_pay",{
          amount: fare
        });
    
        if (!result) {
            alert("Server error. Are you online?");
            return;
        }
    
        // Getting the order details back
        const { amount, id: order_id, currency } = result.data;
    
        const options = {
            key: "rzp_test_zpcvSUNJXUqrLv", // Enter the Key ID generated from the Dashboard
            currency: currency,
            name: "Test Corp.",
            description: "Test Transaction",
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };
                navigate('/');
            },
            theme: {
                color: "#61dafb",
            },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        // Validation Checks
        if (formData.temple === formData.seva) {
            alert("Temple and Seva cannot be the same.");
            return;
        }

        if (!formData.temple || formData.temple === "-- Select --") {
            alert("Please select a valid Temple.");
            return;
        }

        if (!formData.seva || formData.seva === "-- Select --") {
            alert("Please select a valid Seva.");
            return;
        }
        // If all validations pass, calculate the fare
        const fare = calculateFare();
        alert(`The ticket fare is Rs${fare}`);
        const response = await axios.post(`https://tms-be-cmce.onrender.com/b/${fare}`, formData);
        await checkoutHandler(fare);
        console.log("ki");
        if (response.data.user) {
        console.log("ko");
        } else {
          alert("Fill all the fields")
        }
        
    };

    return (
        <div class="booking-page">
        <div className="booking-container">
            <h2>Book Your Dharshan Tickets</h2>
            <form onSubmit={handleSubmit}>
                {/* Temple */}
                <div className="form-group">
                    <label >Temple :</label>
                    <select name="temple" value={formData.temple} onChange={handleInputChange}>
                        <option value="-- Select --">-- Select --</option>
                        <option value="Srivari temple">Srivari temple</option>
                        <option value="Padmavati temple">Padmavati temple</option>
                        <option value="Govindaraja temple">Govindaraja temple</option>
                        <option value="Kapila Theertham">Kapila Theertham</option>
                        <option value="Venkateshwara temple">Venkateshwara temple</option>
                        <option value="Kodandarama temple">Kodandarama temple</option>
                     
                    </select>
                </div>

                {/* Seva */}
                <div className="form-group">
                    <label>Seva:</label>
                    <select name="seva" value={formData.seva} onChange={handleInputChange}>
                        <option value="-- Select --">-- Select --</option>
                        <option value="Unjal Seva">Unjal Seva</option>
                        <option value="Arjitha Brahmotsavam">Arjitha Brahmotsavam</option>
                        <option value="Kalyanotsavam">Kalyanotsavam</option>
                        <option value="Subrapatham">Subrapatham</option>
                        <option value="Thomala Seva">Thomala Seva</option>
                        <option value="Ekanta Seva">Ekanta Seva</option>
                       
                    </select>
                </div>

                {/* Dharshan */}
                <div className="form-group">
                    <label>Dharshan:</label>
                    <select name="dharshan" value={formData.dharshan} onChange={handleInputChange}>
                        <option value="General">General</option>
                        <option value="Special">Special</option>
                        <option value="VIP">VIP</option>
                    </select>
                </div>

                {/* Adults */}
                <div className="form-group">
                    <label>No. of Adults:</label>
                    <input type="number" name="adults" value={formData.adults} onChange={handleInputChange} />
                </div>

                {/* Children */}
                <div className="form-group">
                    <label>No. of Children:</label>
                    <input type="number" name="children" value={formData.children} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        /></div>

                {/* Accomodation */}
                <div className="form-group">
                    <label>Accomodation Needed:</label>
                    <select name="accomodation" value={formData.accomodation} onChange={handleInputChange}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                {/* Date */}
                <div className="form-group">
                    <label>Date:</label>
                    <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
                </div>

                {/* Submit Button */}
                <div className="form-group">
                    <button type="submit">Book Ticket</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Calculator;
