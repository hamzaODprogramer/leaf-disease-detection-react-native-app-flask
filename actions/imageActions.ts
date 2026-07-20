import { CONFIG } from "@/config";

interface ImageSendProps {
    uri : string,
}

export async function get_prediction({ uri }: ImageSendProps) {
    try {
        const formData = new FormData();
        
        formData.append("image", {
            uri: uri,
            name: uri.split('/').pop(),
            type: "image/jpeg"
        } as any);
        
        const response = await fetch(`${CONFIG.backendUrl}/prediction_app`, {
            method: "POST",
            body: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}