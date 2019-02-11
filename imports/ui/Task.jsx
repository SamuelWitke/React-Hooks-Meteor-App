import React from 'react'
import { Meteor } from 'meteor/meteor';

export default ({ task, showPrivateButton }) => {
    return (
        <li>
            <span className="text">
                <button className="delete" onClick={() => Meteor.call('tasks.remove', task._id)}>
                    &times;
                </button>
                <input
                    type="checkbox"
                    readOnly
                    checked={!!task.checked}
                    onClick={() => Meteor.call('tasks.setChecked', task._id, !task.checked)}
                />
                {showPrivateButton ? (
                    <button className="toggle-private" onClick={() => Meteor.call('tasks.setPrivate', task._id, !task.private)}>
                        {task.private ? 'Private' : 'Public'}
                    </button>
                ) : ''}

                <span className="text">
                    <strong>{task.username}</strong>: {task.text}
                </span>
            </span>
        </li>
    )
}
