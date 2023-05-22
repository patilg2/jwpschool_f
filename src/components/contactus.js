import React from 'react';
import phone from "./img/phone.png";
import email from "./img/email.png";
import address from "./img/address.png";
function contactus() {
  return (
    <div align="center">
      <table>
        <tr align="center"><td colspan={2}><h1>Contact Us</h1></td></tr>
        <tr align="center"><td colspan={2}><p>For any inquiries or questions, please feel free to reach out to us:</p></td></tr>
        <tr><td><img alt="" src={email}  className="responsive-image"  /></td><td>Email: info@school.com</td></tr>
        <tr><td><img alt="" src={phone}  className="responsive-image"  /></td><td>Phone: 123-456-7890</td></tr>
        <tr><td><img alt="" src={address}  className="responsive-image"  /></td><td>Address: 123 Main Street, City, State, Country</td></tr>
      </table>
      
      
     
      
    </div>
  );
}

export default contactus;