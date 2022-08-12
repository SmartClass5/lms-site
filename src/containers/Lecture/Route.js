import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useParams
} from "react-router-dom";
import Detail from './Detail';
const LectureRoute = ({ match }) => {
    let { id } = useParams();
    useEffect(() => {
        console.log(match, 'match')
    }, [])
    return (
        <Route path={`${match.path}/:id`} component={Detail} />
    )
}

export default LectureRoute;