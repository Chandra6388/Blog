import React from "react";

export default function Layout({ children }) {
    return (
        <div style={{border: '2px solid black', padding: '10px'}}>
        <main>{children}</main>
        </div>
    );
    }   