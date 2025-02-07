interface Project {
  name: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{project.name}</h3>
      <p>{project.description}</p>
    </div>
  );
}
