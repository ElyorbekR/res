import { Box, NavLink } from "@mantine/core";
import { IconGauge, IconFingerprint } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo } from "react";

const Navlinks = ({ data }) => {
  const router = useRouter();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {data.map((item, i) => {
        return (
          <NavLink
            key={i}
            label={`${item.label}`}
            icon={<IconGauge size="1rem" stroke={1.5} />}
            childrenOffset={36}
            defaultOpened={item.defaultOpened}
          >
            {item.links.map((link, i) => {
              return (
                <Link key={i} href={link.link}>
                  <NavLink
                    label={`${link.label}`}
                    active={router.route === link.link}
                  />
                </Link>
              );
            })}
          </NavLink>
        );
      })}
    </Box>
  );
};

export default memo(Navlinks);
