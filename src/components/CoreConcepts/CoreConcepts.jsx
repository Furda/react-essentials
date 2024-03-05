// Components
import CoreConcept from "../CoreConcept/CoreConcept.jsx";
import Section from "../Section/Section.jsx";

// Data
import { CORE_CONCEPTS } from "../../data.js";

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((coreConcept) => (
          <CoreConcept key={coreConcept.title} {...coreConcept} />
        ))}
      </ul>
    </Section>
  );
}
