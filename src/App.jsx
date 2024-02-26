import { CORE_CONCEPTS } from "./data.js";

// images
import reactImg from "./assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(3)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt="..." />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

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
