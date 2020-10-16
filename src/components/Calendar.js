import React, { Component } from 'react'
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
class BookingCalendar extends Component {
    setDates = () => {
        const events = []
        // temp code for events, will change once database is connectable
        events.map(event => {
            return events.push({
                start: new Date(event.start),
                end: new Date(event.end),
                title: '${event.pet_name} Stay (Human: ${event.human_name})',
                allDay: true
            })
        })
        return events
    }

    render() {
        return(
        <div className="calendar-container">
            <Calendar
            localizer={localizer}
            events={this.setDates()}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500,width: '95%' }}
            />
        </div>
        )
    }
}

export default BookingCalendar