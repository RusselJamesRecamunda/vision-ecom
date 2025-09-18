import {
  Title,
  Grid,
  Card,
  Text,
  Group,
  Image,
  Stack,
  List,
  Badge,
} from "@mantine/core";

export function DashboardPage() {
  const stats = [
    { label: "Events", value: 12 },
    { label: "Active Jobs", value: 3 },
    { label: "Users", value: 58 },
    { label: "Applicants", value: 24 },
  ];

  const recentEvents = [
    { title: "Team Building 2025", date: "Sept 10, 2025" },
    { title: "E-commerce Summit", date: "Sept 20, 2025" },
  ];

  const recentJobs = [
    { title: "Frontend Developer", status: "Open" },
    { title: "Backend Engineer", status: "Closed" },
  ];

  const eventPhotos = [
    "https://via.placeholder.com/300x150.png?text=Event+1",
    "https://via.placeholder.com/300x150.png?text=Event+2",
    "https://via.placeholder.com/300x150.png?text=Event+3",
  ];

  return (
    <div style={{ padding: "1rem" }}>
      <Title order={2} mb="lg">
        Dashboard
      </Title>

      {/* Stats Overview */}
      <Grid mb="xl">
        {stats.map((stat, index) => (
          <Grid.Col span={{ base: 12, sm: 3 }} key={index}>
            <Card shadow="sm" radius="md" padding="lg" withBorder>
              <Group justify="space-between">
                <Text fw={500}>{stat.label}</Text>
                <Text size="xl" c="blue">
                  {stat.value}
                </Text>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Grid>
        {/* Recent Event Photos */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" radius="md" padding="lg" withBorder mb="lg">
            <Text fw={600} mb="sm">
              Recent Event Photos
            </Text>
            <Group>
              {eventPhotos.map((photo, idx) => (
                <Image
                  key={idx}
                  src={photo}
                  alt={`Event ${idx + 1}`}
                  radius="md"
                  w={100}
                  h={80}
                />
              ))}
            </Group>
          </Card>
        </Grid.Col>

        {/* Upcoming Events */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" radius="md" padding="lg" withBorder mb="lg">
            <Text fw={600} mb="sm">
              Upcoming Events
            </Text>
            <List spacing="xs">
              {recentEvents.map((event, idx) => (
                <List.Item key={idx}>
                  <Text fw={500}>{event.title}</Text>
                  <Text size="sm" c="dimmed">
                    {event.date}
                  </Text>
                </List.Item>
              ))}
            </List>
          </Card>
        </Grid.Col>
      </Grid>

      {/* Recent Job Postings */}
      <Card shadow="sm" radius="md" padding="lg" withBorder>
        <Text fw={600} mb="sm">
          Recent Job Postings
        </Text>
        <Stack gap="xs">
          {recentJobs.map((job, idx) => (
            <Group key={idx} justify="space-between">
              <Text>{job.title}</Text>
              <Badge color={job.status === "Open" ? "green" : "red"}>
                {job.status}
              </Badge>
            </Group>
          ))}
        </Stack>
      </Card>
    </div>
  );
}
