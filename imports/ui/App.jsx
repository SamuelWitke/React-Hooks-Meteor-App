import React from 'react';
import Input from './Input';
import Accounts from './AccountsUIWrapper';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Tasks from '../api/task';
import List from './List';


const App = ({ tasks, currentUser, incompleteCount }) => {
    console.log(tasks, currentUser)
    return (
        <>
            <Accounts />
            {currentUser &&
                <Input onSubmit={(text) => {
                    Meteor.call('tasks.insert', text);
                }} />
            }
            <List tasks={tasks} currentUser={currentUser} incompleteCount={incompleteCount} />
        </>
    );
}

export default withTracker(() => {
    Meteor.subscribe('tasks');

    return {
        tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
        incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
        currentUser: Meteor.user(),
    };
})(App);