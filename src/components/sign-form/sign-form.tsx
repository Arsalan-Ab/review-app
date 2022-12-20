function SignForm() {


    let signUp = true
    return (
        <form className="border mb-5 bg-light d-flex flex-column p-2 mt-3 w-50">
            <div>
                {
                    <h1>{signUp ? "SignUp" : "Login"}</h1>
                }
            </div>

            <div className="mb-2">
                <input className=" form-control mb-2" name="add" placeholder="username" ></input>
                <input className="form-control" placeholder="password"></input>

            </div>
            <button className="btn btn-primary align-self-center" type='submit'>Submit</button>
        </form>
    );
}

export default SignForm;