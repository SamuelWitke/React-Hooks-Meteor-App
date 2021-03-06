import React, { Component } from 'react';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default () => {
    const viewRef = React.useRef();
    React.useEffect(() => {
        const view = Blaze.render(Template.loginButtons, viewRef.current);
        return () => Blaze.remove(view);
    })
    return <span ref={viewRef} />;
}