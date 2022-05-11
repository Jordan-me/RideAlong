import React from "react";
import { Calendar } from '@hammaadhrasheedh/react-event-calendar'

//import { Calendar, momentLocalizer } from 'react-big-calendar'
//import moment from 'moment'
//const localizer = momentLocalizer(moment) // or globalizeLocalizer


function MyCalendar(props) {

    //improvement - get from server
    var events = [
        {
            date: "2022-05-02",
            color: "white",
        },
        {
            date: new Date('2022-05-23'),
            color: "white",
        },
        {
            date: "2022-05-02",
            color: "white",
        },
    ];

    return (
        <Calendar
            eventType="Fill"
            date={'2022-05-9'}
            events={events}
        />
    );
}
export { MyCalendar };
