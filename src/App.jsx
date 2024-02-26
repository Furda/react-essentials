//components
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept.jsx";

// data
import { CORE_CONCEPTS } from "./data.js";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((coreConcept) => (
              <CoreConcept
                key={coreConcept.title}
                {...coreConcept}
                // title={coreConcept.title}
                // description={coreConcept.description}
                // image={coreConcept.image}
              />
            ))}
          </ul>
          {/* <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
            <CoreConcept
              title="Props"
              description="The core UI building block."
              image={componentsImg}
            />
            <CoreConcept
              title="State"
              description="The core UI building block."
              image={componentsImg}
            />
            <CoreConcept
              title="JSX"
              description="The core UI building block."
              image={componentsImg}
            />
          </ul> */}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
