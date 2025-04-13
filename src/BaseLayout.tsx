import * as React from "react";
import "./styles/BaseLayout.css";

function BaseLayout({children}: React.PropsWithChildren) {
    return (
        <>
            <header style={{backgroundColor: "red"}}>
                <a href="/">
                    Yoink
                </a>
                <nav>
                    <a href="/manual">Manual</a>
                    <a href="/account">Account</a>
                </nav>
            </header>
            <main style={{backgroundColor: "blue"}}>
                {children}
            </main>
            <footer style={{backgroundColor: "green"}}>
                <nav>
                    <a href="https://github.com/permalik/yyyoink_desktop">GitHub</a>
                    <a href="/roadmap">Roadmap</a>
                </nav>
                <p>
                    © 2025 permalik
                </p>
            </footer>
        </>
    )
}

export default BaseLayout;