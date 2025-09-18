import {
  Title,
  Button,
  Box,
  Table,
  Badge,
  Group,
  Modal,
  TextInput,
  Textarea,
  FileInput,
  Stack,
} from "@mantine/core";
import { IconCheckbox, IconSquareX } from "@tabler/icons-react";
import { useState } from "react";

export function PostJobPage() {
  const [opened, setOpened] = useState(false);

  // Applicants State
  const [applicants, setApplicants] = useState([
    {
      name: "Alice Johnson",
      jobTitle: "Frontend Developer",
      resume: { name: "alice_cv.pdf" },
      status: "pending",
    },
    {
      name: "Mark Rivera",
      jobTitle: "Backend Engineer",
      resume: { name: "mark_resume.docx" },
      status: "accepted",
    },
    {
      name: "Jane Smith",
      jobTitle: "UI/UX Designer",
      resume: { name: "jane_portfolio.pdf" },
      status: "rejected",
    },
  ]);

  // Job Posting Form State
  const [form, setForm] = useState({
    jobTitle: "",
    description: "",
    qualifications: "",
    photo: null as File | null,
  });

  const handleSubmit = () => {
    if (!form.jobTitle || !form.description) return;
    console.log("New Job Posted:", form); // For now, just log it
    setForm({ jobTitle: "", description: "", qualifications: "", photo: null });
    setOpened(false);
  };

  const getBadgeColor = (status: string) => {
    switch (status) {
      case "accepted":
        return "green";
      case "rejected":
        return "red";
      default:
        return "yellow";
    }
  };

  const updateStatus = (index: number, newStatus: string) => {
    const updated = [...applicants];
    updated[index].status = newStatus;
    setApplicants(updated);
  };

  return (
    <Box p="md">
      <Title order={2} mb="md">
        Job Management
      </Title>

      {/* Button to Open Modal */}
      <Button color="blue" mb="lg" onClick={() => setOpened(true)}>
        Post New Job
      </Button>

      {/* Modal Form for Job Posting */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Post New Job"
        centered
      >
        <Stack>
          <TextInput
            required
            label="Job Title"
            placeholder="e.g. Frontend Developer"
            value={form.jobTitle}
            onChange={(e) =>
              setForm({ ...form, jobTitle: e.currentTarget.value })
            }
          />
          <Textarea
            required
            label="Job Description"
            placeholder="Enter job description"
            minRows={3}
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.currentTarget.value })
            }
          />
          <Textarea
            label="Job Qualifications"
            placeholder="Enter required qualifications"
            minRows={3}
            value={form.qualifications}
            onChange={(e) =>
              setForm({ ...form, qualifications: e.currentTarget.value })
            }
          />
          <FileInput
            label="Upload Job Photo"
            placeholder="Attach job photo"
            value={form.photo}
            onChange={(file) => setForm({ ...form, photo: file })}
          />
          <Button color="blue" onClick={handleSubmit}>
            Post Job
          </Button>
        </Stack>
      </Modal>

      {/* Applicants Table */}
      <Table striped highlightOnHover withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Applicant Name</Table.Th>
            <Table.Th>Job Position</Table.Th>
            <Table.Th>Resume / CV</Table.Th>
            <Table.Th>Application Status</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {applicants.map((applicant, idx) => (
            <Table.Tr key={idx}>
              <Table.Td>{applicant.name}</Table.Td>
              <Table.Td>{applicant.jobTitle}</Table.Td>
              <Table.Td>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  {applicant.resume.name}
                </a>
              </Table.Td>
              <Table.Td>
                <Badge color={getBadgeColor(applicant.status)}>
                  {applicant.status}
                </Badge>
              </Table.Td>
              <Table.Td>
                <Group gap="xs">
                  <Button
                    size="xs"
                    color="green"
                    variant="light"
                    onClick={() => updateStatus(idx, "accepted")}
                  >
                    <IconCheckbox size={20}/>
                  </Button>
                  <Button
                    size="xs"
                    color="red"
                    variant="light"
                    onClick={() => updateStatus(idx, "rejected")}
                  >
                    <IconSquareX size={20}/>
                  </Button>
                </Group>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Box>
  );
}
