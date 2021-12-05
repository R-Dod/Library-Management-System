import { ClassNames } from '@emotion/react';
import React,{Component} from 'react';
import { MenuItems } from './MenuItems';
class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
            <h1 className="navbar-logo">LMS</h1>
            {/* <div className="menu-icon"> </div> */}
            
            <ul className="nav-menu">
                {MenuItems.map((item,index)=>{
                    return (
                        <li className="nav-links" key={index}>
                            <a className={MenuItems.cName} href={item.url} >
                              {item.title}
                            
                            </a>
                        </li>
                    )
                })
                }
                
            </ul>
            
            </nav>
        )
    }
}
export default Navbar