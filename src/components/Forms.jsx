export default function Forms() {
  return (
    <>
      <h1>React Forms</h1>
      <form action="">
        <label htmlFor="">Name : </label>
        <input type="text" name="name" id="name" value="" placeholder="Give First Name" />
        <br />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="password" name="password" id="password" value="" placeholder="Give Password" />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
