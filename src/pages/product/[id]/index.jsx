import React from "react";
import { Card, Image, Text, Badge, Button, Group, Box } from "@mantine/core";
import Link from "next/link";
import { IconHeart, IconShoppingBag } from "@tabler/icons-react";

function createMarkup() {
  return { __html: '<p></p>' };
}

const index = ({ data }) => {
  console.log(data);
  return (
    <div className="at">
      <Box mb={"xl"}>
        <Link href={"/product"}>
          <Button color="blue">Productlar sahifasi</Button>
        </Link>
      </Box>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={data.image.url} height={"auto"} alt="Norway" />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{data.text}</Text>
          <div dangerouslySetInnerHTML={createMarkup()}>{data.editorText}</div>
        </Group>

        <Box
          sx={{ display: "flex", justifyContent: "space-evenly", gap: "10px" }}
        >
          <Button
            size="lg"
            variant="light"
            fullWidth
            color="red"
            mt="md"
            radius="md"
            leftIcon={<IconHeart size={"1.4rem"} />}
          >
            Saqlash
          </Button>
          <Button
            rightIcon={<IconShoppingBag size={"1.4rem"} />}
            variant="light"
            fullWidth
            color="blue"
            mt="md"
            radius="md"
            size="lg"
          >
            Sotib Olish
          </Button>
        </Box>
      </Card>
    </div >
  );
};

export default index;

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://onside-sport.uz/api/news/${params.id}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
