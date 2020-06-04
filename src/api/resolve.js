const resolve = async (promise) => {
    const resolved = {
        data: null,
        error: null
    };

    try {
        resolved.data = await promise;
        
    } catch (e) {
        resolved.error = e;
        throw new Error(e.response.data.message?e.response.data.message:e.message)
    }

    return resolved;
}
export default resolve;