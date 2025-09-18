import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Title,
  Box,
  List,
  Text,
  Button,
  Modal,
  TextInput,
  FileInput,
} from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";

export function EventsPage() {
  const events = [
    { title: "Event 1", date: "2025-09-20" },
    { title: "Event 2", date: "2025-09-25" },
  ];

  const [opened, setOpened] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState<string | null>(null);
  const [eventImage, setEventImage] = useState<File | null>(null);
  

  return (
    <Box p="md">
      <Title order={2} mb="md">
        Events
      </Title>

      {/* Add New Event Button */}
      <Button mb="md" onClick={() => setOpened(true)}>
        Add New Event
      </Button>

      {/* Modal for Adding Event */}
      <Modal opened={opened} onClose={() => setOpened(false)} title="Add New Event">
        <TextInput
          label="Name of Event"
          placeholder="Enter event name"
          value={eventName}
          onChange={(e) => setEventName(e.currentTarget.value)}
          mb="md"
        />

        <MonthPickerInput
          type="default"
          label="Select Month and Year"
          placeholder="Pick month and year"
          value={eventDate}
          onChange={setEventDate}
          mb="md"
        />


        <FileInput
          label="Upload Image"
          placeholder="Choose event image"
          value={eventImage}
          onChange={setEventImage}
        />

        <Button fullWidth mt="md" onClick={() => setOpened(false)}>
          Save Event
        </Button>
      </Modal>

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
