import './header.css'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = ({type}) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          
          key: 'selection'
        }
      ]);
      
      const [openOptions, setOpenOptions] = useState(false)
      const[options,setOptions]=useState({
        adult:1,
        children:0,
      });

      const navigate = useNavigate()

      const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] -1,
          };
        });
      };

      const handleSearch = ()=>{
          navigate("/bookings", { state: { destination, date, options } });
      }
    return(
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                <i class="fa-solid fa-train"></i>
                <span>Temples</span>
                </div>

                <div className="headerListItem">
                <i class="fa-solid fa-mountain"></i>
                <span>Pilgrim Services</span>
                </div>

                <div className="headerListItem">
                <i class="fa-solid fa-arrows-up-to-line"></i>
                <span>Online Services</span>
                </div>

                <div className="headerListItem">
                <i class="fa-solid fa-newspaper"></i>
                <span>News and Events</span>
                </div>

                <div className="headerListItem">
                <i class="fa-solid fa-mountain-sun"></i>
                <span>Gallery</span>
                </div>
                
                <div className="headerListItem">
                <i class="fa-solid fa-circle-info"></i>
                <span>General Information</span>
                </div></div>
            {type !== "list" &&
              <><h1 className="headerTitle">Tirumala Tirupati Devasthanam</h1>
            <p className="headerDesc">Elevate Your Experience, Reserve Your Devotion.</p>
                <Link to={'\T'}>
                  <button className="navButton" >Book Ticket</button>
                  </Link>
                  
                   
            <div className="headerSearch">
                 <div className="headerSearchItem">
                 <i class="fa-solid fa-location-dot"></i>
                 <input type="text" placeholder="Where to book Dharshan?" className="headerSearchInput" onChange={e=>setDestination(e.target.value)}/>
                 </div>
                 <div className="headerSearchItem">
                 <i class="fa-solid fa-calendar"></i>
                 <span onClick={()=>setOpenDate(!openDate)}className="headerSearchText">{`${format(date[0].startDate, "mm/dd/yyyy")}  `}</span>
                {openDate && (<DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date"
  minDate={new Date()}
/>)}
                 </div>
                 <div className="headerSearchItem">
                 <i class="fa-solid fa-person"></i>
                 <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children`} </span>
                    {openOptions && <div className="options">
                        <div className="optionItem">
                          <span className="optionText">Adult</span>
                          <div className="optionCounter">
                          <button disabled={options.adult<=1} className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
                          <span className="optionCounterNumber">{options.adult}</span>
                          <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                        </div>
                        </div>
                        <div className="optionItem">
                          <span className="optionText">Children</span>
                          <div className="optionCounter">
                          <button  disabled={options.children<1}className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
                          <span className="optionCounterNumber">{options.children}</span>
                          <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                        </div>
                        </div>
                      </div> }
                </div>
                 <div className="headerSearchItem">
                 <button className="headerBtn" onClick={handleSearch}>Search</button>
                 
                 </div>
            </div></>}
        </div>
    </div>
    );
};
export default Header