import { useState } from "react";  
import FullCalendar, {formatDate} from "@fullcalendar/react";
import dayGridPugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography, useTheme,} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

    const Calender = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handdleDateClick = (selected) => {
        const title = prompt("Please enter a new Title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
              id: `${selected.dateStr}-${title}`,
              title,
              start: selected.startStr,
              end: selected.endStr,
              allDay: selected.allDay,
            });
          }
        };
    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event ? '${selected.event.title}'`)) {
           selected.event.remove(); 
        }
    };
    return ( <Box m="20px">
        <Header tittle="CALENDAR" subtitle="Full Calendar Interactive Page" />
        <Box display="flex" justifyContent="spaces-between">
            <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px" >
                <Typography varient="h5"> Events</Typography>
                <List>
                   {currentEvents.map((event) => (
                    <ListItem key={event.id} sx={{backgroundColor: colors.greenAccent[500], margin: "10px 0", borderRadius:"2px",}} >
                        <ListItemText primary={event.title} secondary={
                            <Typography>
                                {formatDate(event.start,{
                                    year: "numeric", month: "short", day: "numeric"
                                })}
                            </Typography>
                        }/>
                    </ListItem>
                   ))} 
                </List>
            </Box>
            {/*Callender*/}
            <Box flex="1 1 100%" ml="15px">
                <FullCalendar
                height="75vh"
                plugins= {[
                    dayGridPugin,
                    timeGridPlugin,
                    interactionPlugin,
                    listPlugin,
                ]}
                headerToolbar={{
                    left: "prev,next today",
                    centre: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                }}
                initialView="dayGridMonth"
                editable= {true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                select={handdleDateClick}
                eventClick={handleEventClick}
                eventsSet={(events) => setCurrentEvents(events)}
                initialEvents={[
                    {id: 1234, title:"All-day Event", date:"2022-11-14"},
                    {id: 12345, title:"Timed event", date:"2022-11-28"},
                    {id: 12345, title:"Timed event", date:"2022-11-7"},
                    {id: 12345, title:"Timed event", date:"2022-11-21"},
                ]}
                />
            </Box>
        </Box>
    </Box>
    );
};

export default Calender;