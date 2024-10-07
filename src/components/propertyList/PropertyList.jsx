import './propertyList.css'

const PropertyList=()=>{
    return(
        
        <div className="pList">
             <marquee direction="left">

            <div className="pListItem">
                <img src="https://t4.ftcdn.net/jpg/05/30/52/75/360_F_530527537_ivZCcQClE5grZ5on0Bf364QZMPYgYHV8.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                   <h1>Sevas</h1>
                </div>
    
            </div>
            <div className="pListItem">
<div className="pListTitles">
<img src="https://media.gettyimages.com/id/79260017/photo/statues-carved-on-a-temple-tirupati-tirumala-venkateswara-temple-tirumala-andhra-pradesh-india.jpg?s=612x612&w=0&k=20&c=oZdgV-UoLCipzKTK4bs_GWLobHHl-ZVg3H1FOgoMpXU=" alt="" className="pListImg" />
                   <h1>Darshan</h1>
                </div>
    
            </div>
            <div className="pListItem">
                <img src="https://www.tirumala.org/NewImages/Banner1.png" alt="" className="pListImg" />
                <div className="pListTitles">
                   <h1>Panchakavya Products</h1>
                </div>
    
            </div>
            <div className="pListItem">
                <img src="https://media.gettyimages.com/id/170975782/photo/pushkarani-during-brahmotsavam-tirupati-andhra-pradesh-india.jpg?s=612x612&w=0&k=20&c=0jEFQyqlyZhXlDBgnF9scdSRsetfDEIpCjLz42b1IOs=" alt="" className="pListImg" />
                <div className="pListTitles">
                   <h1>Schemes/Trusts</h1>
                </div>
    
            </div>
            <div className="pListItem">
                <img src="https://www.kayak.co.in/rimg/himg/37/d6/cd/hotelsdotcom-489526-6eb41c8f_w-387662.jpg?width=1366&height=768&crop=true" alt="" className="pListImg" />
                <div className="pListTitles">
                   <h1>Accomodations</h1>
                </div>
    
            </div>
            </marquee>
        </div>
    )
}

export default PropertyList