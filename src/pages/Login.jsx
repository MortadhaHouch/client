import "../App.css"
export const Login = () => {
    return (
        <>
            <main className="d-flex justify-content-center align-items-center bg-dark-subtle">
                <section className="w-75 h-75 d-flex justify-content-center align-items-center">
                    <form action="" className="w-75 h-75 d-flex flex-column justify-content-center align-items-center">
                        <div className="mb-3 w-75 d-flex flex-column justify-content-start align-items-center">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                required
                                type="email"
                                className="form-control w-75"
                                name=""
                                id="email"
                                aria-describedby="emailHelpId"
                                placeholder="abc@mail.com"
                                />
                            </div>
                            <div className="mb-3 w-75 d-flex flex-column justify-content-start align-items-center">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                required
                                type="password"
                                className="form-control w-75"
                                name=""
                                id="password"
                            />
                        </div>
                        <button type="submit"className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </section>
            </main>
        </>
    )
}
