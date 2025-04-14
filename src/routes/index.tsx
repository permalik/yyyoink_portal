import {createFileRoute} from "@tanstack/react-router";
import "../styles/index.css";

export const Route = createFileRoute("/")({
    component: Index,
})

function Index() {
    return (
        <>
            <h1 className={"app-headingone"}>Zero-Abstraction Notes and Markdown Editor</h1>
            <section className={"app-section"}>
                <h2 className={"app-headingtwo"}>Capture</h2>
                <ul>
                    <li>Store files in a flat directory</li>
                    <li>Quickly save ideas to a general, infinite page</li>
                </ul>
            </section>
            <section className={"app-section"}>
                <h2 className={"app-headingtwo"}>Edit (Incomplete)</h2>
                <ul>
                    <li>Seamlessly update files using an in-app editor</li>
                </ul>
            </section>
            <section className={"app-section"}>
                <h2 className={"app-headingtwo"}>Sync (Incomplete)</h2>
                <ul>
                    <li>Keep your data in-sync across all devices</li>
                </ul>
            </section>
        </>
    )
}