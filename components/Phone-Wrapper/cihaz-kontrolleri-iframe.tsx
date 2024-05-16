import React, {useEffect} from 'react';
import PhoneWrapper from "../Phone-Wrapper/phone-wrapper";

const FlutterIframe = () => {
    useEffect(() => {
        const handleReceiveMessage = (event) => {
            // Make sure to check the origin of the received message
            if (event.origin !== "https://flutter-example-webapp.vercel.app") {
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
    }, []);

    return (
        <PhoneWrapper>
            <iframe
                src="https://flutter-example-webapp.vercel.app"
                style={{width: '100%', height: '500px', border: 'none'}}
                title="Flutter App"
            />
        </PhoneWrapper>

    );
};

export default FlutterIframe;
