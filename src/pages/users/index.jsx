import {
  Grid,
  Card,
  Group,
  Image,
  Text,
  Badge,
  Button,
  Input,
  Box,
} from "@mantine/core";
import React, { useRef, useState } from "react";

const index = ({ users }) => {
  const [value, setValue] = useState("");
  const SearchApi = (e) => {
    setValue(e.target.value);
  };
  console.log(users);
  return (
    <div>
      <Box mb={"xl"}>
        <Input placeholder="Your email" onChange={(e) => SearchApi(e)} />
      </Box>

      <Grid justify="space-between">
        {users.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.address.city}</h1>
            </div>
          )
        })}
        <Grid.Col>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}></Text>
              <Badge variant="light"></Badge>
            </Group>

            <Text size="sm" color="dimmed"></Text>
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Buy now
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
