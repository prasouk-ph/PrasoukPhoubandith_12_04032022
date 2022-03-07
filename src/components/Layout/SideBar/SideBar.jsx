import './SideBar.css';
import iconSwimming from '../../../assets/swimming-icon.png'
import iconYoga from '../../../assets/yoga-icon.png'
import iconCycling from '../../../assets/cycling-icon.png'
import iconBodybuilding from '../../../assets/bodybuilding-icon.png'

function SideBar() {
    return (
        <div className='sidebar'>
            <div className="side-menu">
                <img className='icon' src={iconSwimming} alt="icon swimming" />
                <img className='icon' src={iconYoga} alt="icon yoga" />
                <img className='icon' src={iconCycling} alt="icon cycling" />
                <img className='icon' src={iconBodybuilding} alt="icon bodybuilding" />
            </div>
            <p className='copyright'>Copyright, SportSee 2020</p>
        </div>
    );
}

export default SideBar;