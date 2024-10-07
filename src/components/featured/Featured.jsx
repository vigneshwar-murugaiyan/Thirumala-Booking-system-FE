import "./featured.css"

const Featured = () => {
    return(
        <div className="featured">
            <div className="featuredItem">
                <img src ="https://www.tirumala.org/ALBUMS/Brahmotsavam.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h2 className="bg">
                        Brahmotsava
                    </h2>
                    
                </div>           
            </div>
            <div className="featuredItem">
                <img src ="https://www.tirumala.org/ALBUMS/Nature-Image.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h2 className="bg">
                      <center>Nature</center>  
                    </h2>
                
                </div>           
            </div>
            <div className="featuredItem">
                <img src ="https://www.tirumala.org/ALBUMS/xyz/Theppotsavam%20Main.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h2 className="bg">
                       <center>    Sevas</center>
                    </h2>
                    
                </div>           
            </div>
            <div className="featuredItem">
                <img src ="https://www.tirumala.org/ALBUMS/TempleImage.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h2 className="bg">
                       Temple
                    </h2>
                    
                </div>           
            </div>
            <div className="featuredItem">
                <img src ="https://www.tirumala.org/ALBUMS/Culturals.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h2 className="bg">
                    Culturals
                    </h2>
                    
                </div>           
            </div>
            
        </div>
    )
}

export default Featured