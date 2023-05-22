import { React,useState } from "react";


function Admission() {
  
  const [sid, setSid] = useState(" ");
  const [fname, setFname] = useState(" ");
  const [mname, setMname] = useState(" ");
  const [lname, setLname] = useState(" ");
  const [gendor, setGendor] = useState(" ");
  const [dob, setDob] = useState(" ");

  const [message, setMessage] = useState(" ");
  const handleInput_sid = event => { setSid(event.target.value);  };
  const handleInput_fname = event => {  setFname(event.target.value); };
  const handleInput_mname = event => {  setMname(event.target.value); };
  const handleInput_lname = event => {  setLname(event.target.value); };
  const handleInput_gendor = event => {  setGendor(event.target.value); };
  const handleInput_dob = event => {  setDob(event.target.value); };

  const logValue = () => {
    console.log(fname,sid);
    
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
   
    try{
     // setFname(e.target.value);
    //  setMessage("ok := ",fname);
     // console.log("ok  "+fname.toString());


    }catch(err){}
    

    try {
          // response = await fetch('http://localhost:8080/cors', { mode: 'no-cors' });
      let res = await fetch("http://localhost:8080/addStudent", {
              method: "POST",
             // mode: 'no-cors',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
          
          "sid": sid,
        "fname": fname,
        "mname": mname,
        "lname": lname,
        "gendor": gendor,
        "Dob":dob
         
        }),
      });
      console.log("ok  "+res.status.toString());
      console.log("ok  "+JSON.stringify({
          
        "sid": sid,
        "fname": fname,
        "mname": mname,
        "lname": lname,
        "gendor": gendor,
        "Dob":dob
       
      }));
      res.header('Access-Control-Allow-Origin', "*");
     setMessage("OK__________________");
    
      let resJson = await res.json();
      if (res.status.toString() == '200') {
        setFname();
        setSid("");
        setMessage("User created successfully");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
     // console.log(err);
    }
  };

  return (
    <div className="container">
       
       <form onSubmit={handleSubmit}>
     <table border={1} cellPadding={2} cellSpacing={2}>
      <tr><td colspan="2"><h2>School Admission Form</h2></td></tr>
      <tr><td>Government Registration number :-</td><td>  <input onChange={handleInput_sid} placeholder="sid"/>  </td></tr>
      <tr><td>First Name</td><td><input onChange={handleInput_fname} placeholder="fname"/></td></tr>
      <tr><td>Middle Name</td><td><input onChange={handleInput_mname} placeholder="mname"/></td></tr>
      <tr><td>Last Name</td><td><input onChange={handleInput_lname} placeholder="lname"/></td></tr>
     
      <tr><td>Gendor :-</td><td> <input onChange={handleInput_gendor} placeholder="gendor"/> </td></tr>
      <tr><td> Date of Birth</td><td><input onChange={handleInput_dob} placeholder="dob"/>  </td></tr>
      <tr><td colSpan={2}> <button onClick={logValue}>Log value</button>
      <button type="submit"   >Create</button></td></tr>
     </table>
     
     
     
       
      
       
     
      <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}


/*<div className="admission-form">
      <h2>School Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
}*/

export default Admission;