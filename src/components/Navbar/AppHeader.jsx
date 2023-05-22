import React from "react";
import {
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Text,
} from "@mantine/core";

const AppHeader = ({ opened, setOpened }) => {
  const theme = useMantineTheme();
  return (
    <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
      <Header height={{ base: 50, md: 70 }} p="md">
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Text>App</Text>
      </Header>
    </div>
  );
};

export default AppHeader;
