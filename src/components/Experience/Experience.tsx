import React from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

function Experience() {
  return (
    <div>
      <ExperienceCard
        company="OpenAI"
        position="Software Engineer"
        location="San Francisco, CA"
        duration="Jan 2022 – Present"
        skills={["React", "TypeScript", "Node.js", "GraphQL"]}
        points={[
          "Built reusable component library used across multiple teams.",
          "Improved performance of large-scale data pipelines.",
          "Led migration from REST API to GraphQL for frontend team.",
        ]}
      />
    </div>
  );
}

export default Experience;
