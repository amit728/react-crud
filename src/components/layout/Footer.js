import React from 'react'

function Footer() {
    
    const footerStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.05)",  
    }

    return (
        <div>
            <footer className="text-center text-lg-start bg-light text-muted">
                <div className="text-center p-4" style={footerStyle}>
                    © 2021 Copyright: React
                </div>
            </footer>
        </div>
    )
}

export default Footer;