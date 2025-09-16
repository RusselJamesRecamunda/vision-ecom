import { useForm, isNotEmpty, isEmail, hasLength, matches } from "@mantine/form";
import { Card, Button, Group, TextInput, Title, FileInput } from "@mantine/core";
import { IconFileCv } from "@tabler/icons-react";

const ApplyForm = ({ job }: { job: string }) => {
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
    <>
      <Title order={2} ta="center" mt={-5} mb="xs">
        Vision E-com Job Application
      </Title>

      <Card
        shadow="md"
        padding="xl"
        radius="md"
        style={{
          backgroundColor: "#3050bdff",
          color: "white",
        }}
      >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
    </>
  );
};

export default ApplyForm;
