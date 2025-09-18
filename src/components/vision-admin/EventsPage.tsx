import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Title, Box, List, Text } from "@mantine/core";

export function EventsPage() {
  const events = [
    { title: "Event 1", date: "2025-09-20" },
    { title: "Event 2", date: "2025-09-25" },
  ];

  return (
    <Box p="md">
      <Title order={2} mb="md">
        Events
      </Title>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        selectable
        events={events}
        height="auto"
      />

      <Title order={3} mt="xl" mb="sm">
        Upcoming Events
      </Title>
      <List spacing="sm">
        {events.map((event, idx) => (
          <List.Item key={idx}>
            <Text fw={500}>{event.title}</Text> –{" "}
            <Text span c="dimmed">
              {event.date}
            </Text>
          </List.Item>
        ))}
      </List>
    </Box>
  );
}
