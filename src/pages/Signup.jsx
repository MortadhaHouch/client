export const Signup = () => {
    return (
        <>
            <main className="d-flex justify-content-center align-items-center bg-dark-subtle">
                <section className="w-75 h-75 d-flex justify-content-center align-items-center">
                    <form action="" className="w-75 h-75 d-flex flex-column justify-content-center align-items-center">
                        <div className="mb-3 w-75 d-flex flex-column justify-content-start align-items-center">
                            <label htmlFor="name" className="form-label">name</label>
                            <input
                                type="name"
                                className="form-control w-75"
                                name=""
                                id="name"
                                placeholder="name"
                            />
                        </div>
                        <div className="mb-3 w-75 d-flex flex-column justify-content-start align-items-center">
                            <label htmlFor="email" className="form-label">email</label>
                            <input
                                type="email"
                                className="form-control w-75"
                                name=""
                                id="email"
                                placeholder="abc@mail.com"
                            />
                        </div>
                        <div className="mb-3 w-75 d-flex flex-column justify-content-start align-items-center">
                            <label htmlFor="password" className="form-label">password</label>
                            <input
                                type="password"
                                className="form-control w-75"
                                name=""
                                id="password"
                                placeholder="password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </section>
            </main>
        </>
    )
}
