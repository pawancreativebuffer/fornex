"use server";

export async function submitContactForm(data: any) {
    try {
        console.log("Submitting to Web3Forms with data:", data);
        
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                ...data,
                access_key: "b5b532c4-a389-4597-9408-070f371aa01d"
            }),
        });
        
        console.log("Response Status:", response.status);
        
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const result = await response.json();
            console.log("Response JSON:", result);
            return result;
        } else {
            const text = await response.text();
            console.error("Non-JSON response:", text);
            return { success: false, message: `API Error: ${response.status} ${response.statusText}` };
        }
    } catch (error: any) {
        console.error("Fetch Exception:", error);
        return { success: false, message: `Server exception: ${error.message}` };
    }
}
