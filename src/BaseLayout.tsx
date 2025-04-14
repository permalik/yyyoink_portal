import * as React from "react";
import "./styles/BaseLayout.css";

function BaseLayout({children}: React.PropsWithChildren) {
    return (
        <>
            <header className={"baselayout-header"}>
                <a className={"baselayout-logo"} href="/">
                    Yoink
                </a>
                <nav>
                    <a className={"baselayout-nav-link"} href="/manual">Manual</a>
                    <a className={"baselayout-nav-link"} href="/account">Account</a>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer className={"baselayout-footer"}>
                <nav>
                    <a className={"baselayout-nav-link"} href="https://github.com/permalik/yyyoink_desktop">GitHub</a>
                    <a className={"baselayout-nav-link"} href="/roadmap">Roadmap</a>
                </nav>
                <p>
                    © 2025 permalik
                </p>
            </footer>
        </>
    )
}

export default BaseLayout;