import React from 'react';
import s1 from "./img/staff1.png";
import './styles.css';
const staff_01 = () => {const staffMembers = [
    {
      id : 1,
	  name: 'John Smith',
      position: 'Principal',
      email: 'john@a.com',
      phto : {s1},
    },
    {
	  id : 2,	
      name: 'Jane Doe',
      position: 'Teacher',
      email: 'jane.doe@a.com',
      phto : {s1},
    },
    {
	  id : 3,	
      name: 'Robert Johnson',
      position: 'Counselor',
      email: 'robert@aa.com',
      phto : {s1},
    },
    // Add more staff members here...
  ];

  return (
    <div  style={{
      display:'flex',
      justifyContent: 'Center',
      alignItems: 'Center',
      verticalAlign : 'Center',
   }}>
    
<table border={1}>
        <thead>
          <tr><th colspan={3}> <h1>Staff Members</h1></th></tr>
          <tr>
		  <th>Sr.No.</th>
            <th>Name/Position/Email</th>
            <th>photo</th>
          </tr>
        </thead>
        <tbody>
          {staffMembers.map((staffMember, index) => (
            <tr key={index} >
			  <td>{staffMember.id}</td>
        <td>
             <table><tr> <td>Name :- </td><td>{staffMember.name}</td></tr>
              <tr><td>Position :-</td><td>{staffMember.position}</td></tr>
              <tr><td>E-Mail :-</td><td>{staffMember.email}</td></tr></table>
              </td>
             <td> <img src={s1} alt="" /></td>
            </tr>
          ))}
        </tbody>
      </table>


      
      <br></br>
     
    </div>
  );
};

export default staff_01;


