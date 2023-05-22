import { Navbar } from "@mantine/core";
import Navlinks from "./Navlinks";
import AppNavUrl from "../../../AppUrlData/AppNavUrl";

function AppNavbar({ opened }) {
  return (
    <div>
      <Navbar
        p="md"
        hiddenBreakpoint="sm"
        hidden={!opened}
        width={{ sm: 250, lg: 300 }}
      >
        <Navlinks data={AppNavUrl()} />
      </Navbar>
    </div>
  );
}

export default AppNavbar;
