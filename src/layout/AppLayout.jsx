import AppHeader from "@/components/Navbar/AppHeader";
import AppNavbar from "@/components/Navbar/AppNavbar";
import { AppShell, useMantineTheme } from "@mantine/core";
import { useState } from "react";

export default function AppLayout({ children }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbar={<AppNavbar opened={opened} />}
      navbarOffsetBreakpoint="sm"
      header={<AppHeader opened={opened} setOpened={setOpened} />}
    >
      {children}
    </AppShell>
  );
}
