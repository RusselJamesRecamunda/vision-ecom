import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  TextInput,
  Title,
  Image,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import VisionLogo from "../../assets/images/Logo/Logo.jpg";

export function AuthenticationTitle() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/admin/dashboard");
  };

  return (
    <Container size={420} my={40}>
      <Image
        src={VisionLogo}
        radius="md"
        h={100}
        w="auto"
        fit="contain"
        mx="auto"
      />

      {/* Title */}
      <Title ta="center" className="font-[Outfit] font-medium" mt="lg">
        LOGIN AS ADMIN
      </Title>

      <Group justify="center" mt="xs"></Group>

      {/* Login form */}
      <Paper withBorder shadow="sm" p={22} mt={20} radius="md">
        <TextInput
          label="Email"
          placeholder="Enter company email"
          required
          radius="md"
        />
        <PasswordInput
          label="Password"
          placeholder="Enter password"
          required
          mt="md"
          radius="md"
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" radius="md" onClick={handleSignIn}>
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
