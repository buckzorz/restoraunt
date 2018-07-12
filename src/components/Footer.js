import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as Icons from 'react-icons/lib/fa'

class Footer extends Component{
    render(){
        return(
            <div className="footer" id="footer">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.8712279339256!2d30.502917415224864!3d50.44349919574758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cef6e38155db%3A0x2102a44bac44352e!2sUnnamed+Road%2C+Kyiv%2C+02000!5e0!3m2!1sen!2sua!4v1530799537287" width="100%" height="250" frameBorder="0" allowFullScreen></iframe>
                <div className="footer-content-container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            THE MINIMALIST
                        </div>
                        <div className="footer-social">
                            Find us on social media:
                            <div className="footer-social-icons"><span><Icons.FaFacebook /></span><span><Icons.FaInstagram /></span><span><Icons.FaTwitter /></span></div>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="footer-social">
                            Open Hours:
                        </div>
                        <table>
                            <tbody>
                            <tr>
                                <td>Monday: </td>
                                <td><b>10AM-23PM</b> </td>
                            </tr>
                            <tr>
                                <td>Tuesday:  </td>
                                <td><b>10AM-23PM</b> </td>
                            </tr>
                            <tr>
                                <td>Wednesday: </td>
                                <td><b>10AM-23PM</b> </td>
                            </tr>
                            <tr>
                                <td>Thursday: </td>
                                <td><b>10AM-23PM</b> </td>
                            </tr>
                            <tr>
                                <td>Friday: </td>
                                <td><b>10AM-23PM</b> </td>
                            </tr>
                            <tr>
                                <td>Saturday: </td>
                                <td><b>ALL DAY</b> </td>
                            </tr>
                            <tr>
                                <td>Sunday: </td>
                                <td><b>ALL DAY</b> </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer