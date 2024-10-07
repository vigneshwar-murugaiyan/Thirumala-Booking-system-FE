import Header from "../../../components/header/Header"
import Navbar from "../../../components/navbar/Navbar"
import "./booking.css"
import MailList from "../../../components/mailList/MailList"
import Footer from "../../../components/footer/Footer"

const Booking = () => {

    const photos=[
        {
            src:"https://www.kayak.co.in/rimg/himg/89/f6/99/expediav2-9578154-a39155-413008.jpg?width=968&height=968&crop=true"
        },
        {
            src:"https://www.kayak.co.in/rimg/himg/5f/54/cf/expediav2-9578154-63911e-426591.jpg?width=968&height=968&crop=true"
        },
        {
            src:"https://www.kayak.co.in/rimg/himg/99/f2/9c/expediav2-9578154-8f2dfb-541201.jpg?width=968&height=968&crop=true"
        },
        {
            src:"https://www.kayak.co.in/rimg/himg/f4/f7/90/expediav2-9578154-eb2914-364738.jpg?width=968&height=968&crop=true"
        },
        {
            src:"https://www.hilton.com/im/en/MAAHIHI/4800954/hilton-chennai-lobby-low-res.jpg?impolicy=crop&cw=4000&ch=1679&gravity=NorthWest&xposition=0&yposition=349&rw=1920&rh=806"
        },
        {
            src:"https://www.hilton.com/im/en/MAAHIHI/4813244/vintage-bank-2-.jpg?impolicy=crop&cw=3000&ch=1259&gravity=NorthWest&xposition=0&yposition=365&rw=1920&rh=806"
        },
    ];
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                <div className="slider">
                    
                </div>
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Golden Tulip Tirupati</h1>
                    <div className="hotelAddress">
                    <i class="fa-solid fa-location-dot"></i>
                        <span>Ward No 20 Tirumala Bye pass Road , Shiva Jyoti Nagar Tirupati 517507 ,  Andhra Pradesh, India </span>
                        <span className="hotelDistance">Excellent Location - 1 km from Station</span>
                        <span className="hotelPriceHighlight">Book a stay over Rs 4650 at this property and get a free Railway Taxi</span>
                        <div className="hotelImages">
                           {photos.map(photo=>(
                            <div className="hotelImgWrapper">
                                  <img src={photo.src} alt="" className="hotelImg" /> 
                             </div>   
                              ))}
                        </div>
                        <div className="hotelDetails">
                            <div className="hotelDetailsTexts">
                                <h1 className="hotelTitle">Stay in the heart of Tirupati</h1>
                                <p className="hotelDesc">
                                Set in Tirupati, 36 km from Srikalahasti Temple, Golden Tulip Tirupati offers accommodation with a fitness centre, free private parking, a garden and a restaurant. With free WiFi, this 4-star hotel offers room service and a 24-hour front desk. The property is non-smoking and is located 12 km from Renigunta Junction.

All guest rooms at the hotel come with air conditioning, a seating area, a flat-screen TV with satellite channels, a safety deposit box and a private bathroom with a shower, free toiletries and a hairdryer. At Golden Tulip Tirupati the rooms come with bed linen and towels.

                                </p>
                            </div>
                            <div className="hotelDetailsPrice">
                                <h1>Perfect for a 5-night stay</h1>
                                <span>
                                    Located in the real heart of Tirupati, This property has an excellent location score of 9.8!
                                </span>
                                <h2>
                                    <b>Rs 2500 per night</b>
                                </h2>
                                <button>Reserve or Book Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}
export default Booking;