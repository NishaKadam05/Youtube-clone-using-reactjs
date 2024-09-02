import React from "react";
import './youtube.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoYoutube } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { BsEmojiLaughing } from "react-icons/bs";
import { FaLaptop } from "react-icons/fa6";
import { IoRocketOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaWandMagicSparkles } from "react-icons/fa6";
import vid1 from './images/vid1.png';
import vid2 from './images/vid2.png';
import vid3 from './images/vid3.png';
import vid4 from './images/vid4.png';
import vid5 from './images/vid5.png';
import vid6 from './images/vid6.png';
import vid7 from './images/vid7.png';
import vid8 from './images/vid8.png';
import vid9 from './images/vid9.png';
import vid10 from './images/vid10.png';
import vid11 from './images/vid11.png';
import vid12 from './images/vid12.png';


function Youtube(){
    return(
        <div>
            <div className="nav">
                <span className="toggle"><GiHamburgerMenu /></span>
                <span className="youtube"><span className="youtube-icon"><IoLogoYoutube /></span><span className="title">YouTube</span></span>
                <span className="search-bar"><input placeholder="   Search"></input><button><FaSearch /></button></span>
            </div>
            <div className="main-content">
                <div className="sidebar">
                    <p><IoMdHome /></p>
                    <p><SiYoutubeshorts /></p>
                    <p><IoMusicalNotesSharp /></p>
                    <p><BsEmojiLaughing /></p>
                    <p><FaLaptop /></p>
                    <p><IoRocketOutline /></p>
                    <p><AiOutlineLike /></p>
                    <p><FaWandMagicSparkles /></p>
                </div>
                <div>
                    <div className="videos">
                        <div className="sec">
                            <img src={vid1}></img>
                            <h3>How to actually Learn to code...? Roadmaps for 2023</h3>
                            <span>Fireship</span><br></br>
                            <span>1 year ago</span>
                        </div>
                        <div className="sec">
                            <img src={vid2}></img>
                            <h3>How I Learned to Code in 4 Months & Got a Job! (No CS Degree, No Bootcamp)</h3>
                            <span>Tim Kim</span><br></br>
                            <span>1 year ago</span>
                        </div>
                        <div className="sec">
                            <img src={vid3}></img>
                            <h3>Software Development Course 2024 [2024 Updated]</h3>
                            <span>Simplilearn</span><br></br>
                            <span>2 years ago</span>
                        </div>
                        <div className="sec">
                            <img src={vid4}></img>
                            <h3>Beyond Coding Podcast</h3>
                            <span>Beyond Coding</span><br></br>
                            <span>1 year ago</span>
                        </div>
                    </div>
                    <div className="videos">
                        <div className="sec">
                            <img src={vid5}></img>
                            <h3>How I'd Learn Web Development (If I Could Start Over)</h3>
                            <span>Dylan Cole</span><br></br>
                            <span>1 year ago</span>
                        </div>
                        <div className="sec">
                            <img src={vid6}></img>
                            <h3>Programming vs Coding - What's the difference?</h3>
                            <span>Aaron Jack</span><br></br>
                            <span>3 years ago</span>
                        </div>
                        <div className="sec">
                            <img src={vid7}></img>
                            <h3>Mindset of Successful Programmers</h3>
                            <span>bigboxSWE</span><br></br>
                            <span>1 year ago</span>
                        </div>
                        <div className="sec">
                            <img src={vid8}></img>
                            <h3>This video will change the way you think when coding</h3>
                            <span>Sahil & Sarra</span><br></br>
                            <span>1 year ago</span>
                        </div>
                    </div>
                    <div className="videos">
                        <div className="sec">
                            <img src={vid9}></img>
                            <h3>How Can GitHub Copilot Revolutionize Your Development World</h3>
                            <span>Dylan Cole</span><br></br>
                            <span>1 year ago</span>
                        </div>
                        <div className="sec">
                            <img src={vid10}></img>
                            <h3>How to Start Coding? Learn Programming for Beginners</h3>
                            <span>Apna College</span><br></br>
                            <span>2 years ago</span>
                        </div>
                        <div className="sec">
                            <img src={vid11}></img>
                            <h3>Reality of Software Development</h3>
                            <span>bigboxSWE</span><br></br>
                            <span>1 year ago</span>
                        </div>
                        <div className="sec">
                            <img src={vid12}></img>
                            <h3>How to get rich as a solo software developer - The Ultimate</h3>
                            <span>Fireship</span><br></br>
                            <span>1 year ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Youtube;