"use client";

import { useState } from "react";
import {
  AppShell,
  Burger,
  NavLink,
  ScrollArea,
  rem,
  Image,
  Box,
  Text,
} from "@mantine/core";
import {
  IconHome2,
  IconBriefcase,
  IconLogout,
  IconCalendarEvent,
} from "@tabler/icons-react";
import VisionLogo from "../../assets/images/Logo/Logo.jpg";

interface AdminSidebarProps {
  active: string;
  setActive: (page: string) => void;
  children: React.ReactNode;
}

export function AdminSidebar({ active, setActive, children }: AdminSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarWidth = collapsed ? 80 : 240;

  return (
    <AppShell
      padding="md"
      navbar={{
        width: sidebarWidth,
        breakpoint: "sm",
        collapsed: { mobile: false },
      }}
    >
      <AppShell.Navbar
        p="sm"
        style={{
          backgroundColor: "#228be6",
          color: "white",
          transition: "width 0.2s",
          overflow: "hidden",
        }}
      >
        {/* Logo + Burger */}
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "space-between",
            marginBottom: rem(16),
          }}
        >
          <Box style={{ display: "flex", alignItems: "center", gap: rem(8) }}>
            <Image
              src={VisionLogo}
              alt="Logo"
              radius="md"
              w={collapsed ? 30 : 50}
              h={collapsed ? 30 : 50}
              fit="contain"
            />
            {!collapsed && (
              <Text fw={700} size="lg" c="white" ml={8}>
                Vision Admin
              </Text>
            )}
          </Box>

          {!collapsed && (
            <Burger
              opened={!collapsed}
              onClick={() => setCollapsed((c) => !c)}
              size="sm"
              color="white"
            />
          )}
        </Box>

        {collapsed && (
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: rem(16),
            }}
          >
            <Burger
              opened={!collapsed}
              onClick={() => setCollapsed((c) => !c)}
              size="sm"
              color="white"
            />
          </Box>
        )}

        <ScrollArea className="flex-1">
          <NavLink
            label={!collapsed ? "Dashboard" : undefined}
            leftSection={<IconHome2 size={20} />}
            active={active === "dashboard"}
            onClick={() => setActive("dashboard")}
            style={{
              color: "white",
              borderRadius: rem(8),
              marginBottom: rem(6),
              justifyContent: collapsed ? "center" : "flex-start",
            }}
          />
          <NavLink
            label={!collapsed ? "Events" : undefined}
            leftSection={<IconCalendarEvent size={20} />}
            active={active === "events"}
            onClick={() => setActive("events")}
            style={{
              color: "white",
              borderRadius: rem(8),
              marginBottom: rem(6),
              justifyContent: collapsed ? "center" : "flex-start",
            }}
          />
          <NavLink
            label={!collapsed ? "Post Job" : undefined}
            leftSection={<IconBriefcase size={20} />}
            active={active === "postjob"}
            onClick={() => setActive("postjob")}
            style={{
              color: "white",
              borderRadius: rem(8),
              marginBottom: rem(6),
              justifyContent: collapsed ? "center" : "flex-start",
            }}
          />
        </ScrollArea>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.3)",
            paddingTop: rem(8),
            marginTop: "auto",
          }}
        >
          <NavLink
            label={!collapsed ? "Logout" : undefined}
            leftSection={<IconLogout size={20} />}
            style={{
              color: "white",
              justifyContent: collapsed ? "center" : "flex-start",
            }}
          />
        </div>
      </AppShell.Navbar>

      {/* Main content */}
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
