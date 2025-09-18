import { useForm, isNotEmpty, isEmail, hasLength, matches } from "@mantine/form";
import { Card, Button, Group, TextInput, Title, FileInput, ActionIcon } from "@mantine/core";
import { IconFileCv, IconX } from "@tabler/icons-react";

const ApplyForm = ({ job, onClose }: { job: string; onClose: () => void }) => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      job: job || "",
      email: "",
      file: "",
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, "Name must be 2-10 characters long"),
      job: isNotEmpty("Enter your current job"),
      email: isEmail("Invalid email"),
      file: matches(/.*\.pdf$/, "Only PDF files are accepted"),
    },
  });

  const icon = <IconFileCv size={18} stroke={1.5} />;

  return (
    <Card
      shadow="md"
      padding="xl"
      radius="md"
      style={{
        backgroundColor: "#1e3a8b",
        color: "white",
        position: "relative",
      }}
    >
      {/* Custom Close Button inside the card */}
      <ActionIcon
        onClick={onClose}
        style={{ position: "absolute", top: 10, right: 10 }}
        variant="subtle"
        color="white"
      >
        <IconX size={20} />
      </ActionIcon>

      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Title order={2} ta="center" mt={-5} mb="xs">
          Vision E-Comm Job Application
        </Title>

        <TextInput
          label="Name"
          placeholder="Name"
          withAsterisk
          {...form.getInputProps("name")}
        />

        <TextInput
          label="Job Title"
          placeholder="Job"
          withAsterisk
          mt="md"
          {...form.getInputProps("job")}
        />

        <TextInput
          label="Email"
          placeholder="Enter your email"
          withAsterisk
          mt="md"
          {...form.getInputProps("email")}
        />

        <FileInput
          rightSection={icon}
          label="Attach Resume/CV"
          rightSectionPointerEvents="none"
          mt="md"
          accept="application/pdf"
          withAsterisk
          {...form.getInputProps("file")}
          error={form.errors.file}
          placeholder="Upload PDF file"
        />

        <Group justify="flex-end" mt="lg">
          <Button type="submit" size="md" fullWidth color="orange">
            Submit
          </Button>
        </Group>
      </form>
    </Card>
  );
};

export default ApplyForm;
