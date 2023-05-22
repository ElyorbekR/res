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
import Link from "next/link";
import React, { useRef, useState } from "react";

const index = ({ product }) => {
  const [value, setValue] = useState("");
  const SearchApi = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <Box mb={"xl"}>
        <Input placeholder="Your email" onChange={(e) => SearchApi(e)} />
      </Box>

      <Grid justify="space-between">
        {product
          .filter((fill) =>
            fill.title.toLowerCase().includes(value.toLowerCase())
          )
          .map((item) => {
            return (
              <Grid.Col md={6} xl={3} key={item.id}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image src={item.image} height={200} alt="Norway" />
                  </Card.Section>

                  <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{item.title.slice(0, 30)}...</Text>
                    <Badge variant="light">{item.price} $</Badge>
                  </Group>

                  <Text size="sm" color="dimmed">
                    {item.description.slice(0, 80)}
                  </Text>

                  <Link href={`/product/${item.id}`}>
                    <Button
                      variant="light"
                      color="blue"
                      fullWidth
                      mt="md"
                      radius="md"
                    >
                      Buy now
                    </Button>
                  </Link>
                </Card>
              </Grid.Col>
            );
          })}
      </Grid>
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}
