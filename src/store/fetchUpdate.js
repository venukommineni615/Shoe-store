export const fetchUpdate = async (url, body) => {
    const {name,description,price,large,medium,small}=body
    try {
        const res = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify({name,description,price,large,medium,small}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.status} - ${res.statusText}`);
        }
        return res;
    } catch (error) {
        console.error("Error during fetch:", error);
    
    }
}
