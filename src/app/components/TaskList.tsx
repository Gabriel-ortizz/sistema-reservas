import { TaskCard } from "./TaskCard";


interface Task {
  id: string | number; 
  title: string;
  description: string;
}


interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
