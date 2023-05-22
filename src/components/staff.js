import React from 'react';
import s1 from "./img/staff1.png";
import './styles.css';
const staff = () => {const staffMembers = [
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
   

<table className="table">
      <thead>
        <tr>
            <th>Sr.No.</th>
            <th>Name</th>
            <th>Position</th>
            <th>Email</th>
            <th>photo</th>
        </tr>
      </thead>
     
      <tbody>
          {staffMembers.map((staffMember, index) => (
            <tr key={index} >
			  <th>{staffMember.id}</th>
              <th>{staffMember.name}</th>
              <th>{staffMember.position}</th>
              <th>{staffMember.email}</th>
             <th> <img src={s1} alt="" /></th>
            </tr>
          ))}
        </tbody>
     
    </table>


      
     
    </div>
  );
};

export default staff;


