import {createFileRoute} from "@tanstack/react-router"
import "../styles/roadmap.css";

export const Route = createFileRoute("/roadmap")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
            <h1 className={"roadmap-headingone"}>Roadmap</h1>
            <section className={"roadmap-section"}>
                <div className={"roadmap-bullet"}></div>
                <time className={"roadmap-time"}>✅ 2025 May</time>
                <h2 className={"roadmap-headingtwo"}>Feature One</h2>
                <p className={"roadmap-description"}>Description of feature one.</p>
            </section>
            <section className={"roadmap-section"}>
                <div className={"roadmap-bullet"}></div>
                <time className={"roadmap-time"}>🛠️ 2025 June</time>
                <h2 className={"roadmap-headingtwo"}>Feature Two</h2>
                <p className={"roadmap-description"}>Description of feature two.</p>
            </section>
            <section className={"roadmap-section"}>
                <div className={"roadmap-bullet"}></div>
                <time className={"roadmap-time"}>⏳ 2025 July</time>
                <h2 className={"roadmap-headingtwo"}>Feature Three</h2>
                <p className={"roadmap-description"}>Description of feature three.</p>
            </section>
        </>
    )
}
