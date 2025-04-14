import "./styles/App.css"
import BaseLayout from "./BaseLayout.tsx";

function App() {
  return (
    <>
        <BaseLayout>
            <h1 className={"app-headingone"}>Zero-Abstraction Notes and Markdown Editor</h1>
            <section className={"app-section"}>
                <h2 className={"app-headingtwo"}>Capture</h2>
                <ul>
                    <li>Store files in a flat directory</li>
                    <li>Quickly save ideas to a general, infinite page</li>
                </ul>
            </section>
            <section className={"app-section"}>
                <h2 className={"app-headingtwo"}>Edit</h2>
                <ul>
                    <li>TBD: Seamlessly update files using an in-app editor</li>
                </ul>
            </section>
        </BaseLayout>
    </>
  )
}

export default App
