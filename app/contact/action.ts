"use server";

export async function submitContactForm(data: any) {
    try {
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
        const result = await response.json();
        return result;
    } catch (error) {
        return { success: false, message: "Server error occurred." };
    }
}
