import React from 'react'
import Task from './Task';

function useToggle(initialOn = false) {
    const [on, setOn] = React.useState(initialOn)
    const toggle = () => setOn(!on)
    return { on, toggle }
}

function renderTasks(tasks, hideCompleted, currentUser) {
    let filteredTasks = tasks;
    if (hideCompleted) {
        filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => {
        const currentUserId = currentUser && currentUser._id;
        const showPrivateButton = task.owner === currentUserId;

        return (
            <Task
                key={task._id}
                task={task}
                showPrivateButton={showPrivateButton}
            />
        );
    });
}

export default ({ tasks, currentUser, incompleteCount }) => {
    const { on, toggle } = useToggle()

    return (
        <div>
            <h1>Todo List ({incompleteCount})</h1>
            <label className="hide-completed">
                <input
                    type="checkbox"
                    readOnly
                    checked={on}
                    onClick={toggle}
                />
                Hide Completed Tasks
                {renderTasks(tasks, on, currentUser)}
            </label>
        </div>
    )
}
