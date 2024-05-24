import React, {useEffect} from 'react';
import PhoneWrapper from "../Phone-Wrapper/phone-wrapper";

const FlutterIframe = ({ url }) => {
    useEffect(() => {
        const handleReceiveMessage = (event) => {
            // Make sure to check the origin of the received message
            if (event.origin !== url) {
                return; // Ignore messages that are not from your Flutter web app
            }

            console.log("Received message from Flutter:", event.data);
        };

        // Add event listener for receiving messages
        window.addEventListener("message", handleReceiveMessage);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("message", handleReceiveMessage);
        };
    }, [url]);

    return (
        <PhoneWrapper>
            <iframe
                src={url}
                style={{width: '100%', height: '500px', border: 'none'}}
                title="Flutter App"
            />
        </PhoneWrapper>
    );
};

export default FlutterIframe;