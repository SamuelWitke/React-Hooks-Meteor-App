import React from 'react';

export default ({ onSubmit }) => {
    const [value, setValue] = React.useState("");

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                onSubmit(value);
                setValue("")
            }}
        >
            <input
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
        </form>
    );
};