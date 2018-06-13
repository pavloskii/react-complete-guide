import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    let btnClass = classes.button;
    // if (condition) {
    //     btnClass 
    // } da se dovrsi 5:00 91

    if (props.showPersons) {
        btnClass = classes.red;
    }

    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        // <div className={classes.Cockpit}>
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>Demo project in react</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </Aux>
        // </div>
    );
};

export default cockpit;