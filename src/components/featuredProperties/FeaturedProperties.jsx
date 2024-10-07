import "./featuredProperties.css"

const FeaturedProperties = () =>{
    return (
        <div className="fp">
            <div className="fpItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/fa/e0/29/tirumala-temple.jpg?w=1000&h=-1&s=1" alt="" className="fpImg" />
            <span className="fpName">Tirumala Temple</span>
            <span className="fpCity">Historic Sites.Temples</span>
            
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/98/33/ae/view-while-walking.jpg?w=1000&h=800&s=1" alt="" className="fpImg" />
            <span className="fpName">Srivari Mettu</span>
            <span className="fpCity">Religious Sites</span>
            
            <div className="fpRating">
                <button>7.6</button>
                <span>Good</span>
            </div>
         </div>
         <div className="fpItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/e4/0e/d2/arch.jpg?w=1000&h=-1&s=1" alt="" className="fpImg" />
            <span className="fpName">Silathoranam</span>
            <span className="fpCity">Geological Formations</span>
            
            <div className="fpRating">
                <button>7.2</button>
                <span>Better</span>
            </div>
            </div>
            <div className="fpItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/50/b4/a5/photo8jpg.jpg?w=1000&h=800&s=1" alt="" className="fpImg" />
            <span className="fpName">Talakona Waterfall</span>
            <span className="fpCity">Waterfalls</span>
            
            <div className="fpRating">
                <button>9.0</button>
                <span>Excellent</span>
            </div>
         </div>
            <div className="fpItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/89/3b/f3/another-view-of-rock.jpg?w=1000&h=800&s=1" alt="" className="fpImg" />
            <span className="fpName">Rock Garden</span>
            <span className="fpCity">Gardens</span>
            
            <div className="fpRating">
                <button>8.5</button>
                <span>Fair</span>
            </div>
            </div> 
        </div>
    )
}

export default FeaturedProperties