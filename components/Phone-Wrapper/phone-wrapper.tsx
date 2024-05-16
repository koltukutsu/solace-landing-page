import React from 'react';

const styles = {
    phoneBody: {
        width: '375px', // iPhone-like width
        height: '667px', // iPhone-like height
        borderRadius: '36px',
        backgroundColor: '#000',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 12px', // Simulating the bezels
    },
    phoneScreen: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        borderRadius: '24px',
        overflow: 'hidden', // Ensure nothing spills out
    }
};

const PhoneWrapper = ({ children }) => {
    return (
        <div className="flex justify-center items-center" style={styles.phoneBody}>
            <div style={styles.phoneScreen}>
                {children}
            </div>
        </div>
    );
};


export default PhoneWrapper;
