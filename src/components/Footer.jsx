import React from 'react';

export default function Footer() {
    return (
        <div style={{
            padding: "12px 0px",
            backgroundColor: "rgb(232, 227, 227)",
            textAlign: 'center',
            position: 'fixed',
            width: '100%',
            height: '85px',
            bottom: '0',
            left: '0',
            right: '0',
            zIndex: '999'
        }}>
            <div className="text-center">
                <h5>
                    Made with ❤️ by <a href="#" style={{ textDecoration: "none", color: "red" }}>Muhammad Hamza</a>
                </h5>
            </div>

            <div className="text-center pt-1">
                <a href="https://github.com/HamzaUetm" target="_blank" rel="noreferrer">
                    <i className="bi bi-github mx-2" style={{ fontSize: "21px" }}></i>
                </a>

                <a href="mailto:hamzaxyz2315@gmail.com" target="_blank" rel="noreferrer">
                    <i className="bi bi-envelope-fill mx-2" style={{ fontSize: "21px" }}></i>
                </a>
            </div>
        </div>
    );
}
