import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Title, Box } from "@mantine/core";

export function EventsPage() {
  return (
    <Box p="md">
      <Title order={2} mb="md">Events Page</Title>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        selectable
        events={[
          { title: "Event 1", date: "2025-09-20" },
          { title: "Event 2", date: "2025-09-25" },
        ]}
        height="auto"
      />
    </Box>
  );
}
