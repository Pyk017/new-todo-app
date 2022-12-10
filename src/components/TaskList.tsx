import Task from "./Task";

const TaskList = ({ tasks, updateTasks, deleteTasks }: any) => {
  return (
    <div className="list-group-div mb-3">
      <ul className="list-group list-group-flush">
        {tasks.map((task: any, idx: Number) => {
          return (
            <Task
              task={task}
              key={idx}
              updateTasks={updateTasks}
              status={task.isCompleted}
              deleteTasks={deleteTasks}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
