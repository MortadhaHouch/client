let abortController = new AbortController();
async function fetchData(url,data,body,setIsLoading){
    try {
        let request = await fetch(url+(data|| ""),{
            method:!body && "GET",
            body:(body && JSON.stringify(body))||null,
            headers:{
                "Content-Type":"application/json"
            },
            signal:abortController.signal
        });
        setIsLoading(true);
        let response = await request.json();
        return response;
    } catch (error) {
        console.log(error);
    }finally{
        setIsLoading(false);
    }
}
export {fetchData, abortController}