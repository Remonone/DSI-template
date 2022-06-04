import './header.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="logo">
                <img src={`/logo.svg`} alt="" />
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="/">Services</a>
                    </li>
                    <li>
                        <a href="/">Product</a>
                    </li>
                    <li>
                        <a href="/">Technology</a>
                    </li>
                    <li>
                        <a href="/">
                            <span>About</span>
                            <KeyboardArrowDownIcon />
                        </a>
                        <ul className="hidden">
                            <li className="hidden-item">Company</li>
                            <li className="hidden-item">Team</li>
                            <li className="hidden-item">Service</li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                            <span>Client</span>
                            <KeyboardArrowDownIcon />
                        </a>
                        <ul className="hidden">
                            <li className="hidden-item">Payment</li>
                            <li className="hidden-item">Contact</li>
                            <li className="hidden-item">Feedback</li>
                            <li className="hidden-item">Consulting</li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">Partner</a>
                    </li>
                </ul>
            </div>
            <div className="management">
                <HomeOutlinedIcon />
                <EmailOutlinedIcon/>
                <ShuffleOutlinedIcon/>
            </div>
            <div className="menuButton">
                <button>
                    <span></span><span></span><span></span>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header