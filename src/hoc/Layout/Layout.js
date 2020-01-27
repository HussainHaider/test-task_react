import React, { Component } from 'react';
import classes from "./Layout.css";
import {Link} from "react-router-dom";

const Layout = ( WrappedComponent,imageURL,link,text) => {
    return class extends Component {

        render () {
            return (
                <>
                    <div className={classes.main}>
                        <section className={classes.signUp}>
                            <div className={classes.container}>
                                <div className={classes.signUp_content}>
                                    <div className={classes.signUp_form}>
                                        <WrappedComponent {...this.props} />
                                    </div>

                                    <div className={classes.signUp_image}>
                                        <figure><img src={imageURL} alt="icon" /></figure>
                                        <Link to={link} className={classes.signUp_image_link}>{text}</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </>
            );
        }
    }
};


export default Layout;
