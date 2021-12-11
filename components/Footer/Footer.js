import React, { Component } from 'react';
import styles from './layout.module.css'
import { MenuItems } from './MenuItems';
class Footer extends Component {


    render() {

        var user = { user_name: 'Admin', user_id: '101', role: 'user' };

        return (
            <nav className="Footer" style={styles} >
                {/* <div className="menu-icon"> </div> */}

                <ul className="footer-menu">
                    {MenuItems.map((item, index) => {
                        return (item.role == user.role || item.role == 'generic') ?

                            <li className="footer-links" key={index}>
                                <a className={MenuItems.cName} href={item.url} >
                                    {item.title}

                                </a>
                            </li>

                            : <></>
                    })
                    }

                </ul>

            </nav>
        )
    }
}
export default Footer