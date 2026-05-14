import { useState } from "react";

export default function Forms() {
        let[formData , setFormData] = useState({name : "Tony" , password : "123"})
  return (
    <>
      <h1>React Forms</h1>
      <form action="">
        <label htmlFor="">Name : </label>
        <input type="text" name="name" id="name" value={formData.name} placeholder="Give First Name" />
        <br />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="password" name="password" id="password" value={formData.password} placeholder="Give Password" />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
