import './SideBar.css';
import iconSwimming from '../../../assets/icon-swimming.png'
import iconYoga from '../../../assets/icon-yoga.png'
import iconCycling from '../../../assets/icon-cycling.png'
import iconBodybuilding from '../../../assets/icon-bodybuilding.png'

function SideBar() {
    return (
        <div className='sidebar'>
            <div className="side-menu">
                <img src={iconSwimming} alt="icon swimming" />
                <img src={iconYoga} alt="icon yoga" />
                <img src={iconCycling} alt="icon cycling" />
                <img src={iconBodybuilding} alt="icon bodybuilding" />
            </div>
            <p className='copyright'>Copyright, SportSee 2020</p>
        </div>
    );
}

export default SideBar;
