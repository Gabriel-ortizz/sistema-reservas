interface Task {
  title: string;
  description: string;
}

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
}
