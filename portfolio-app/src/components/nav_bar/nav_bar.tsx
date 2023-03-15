import { Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
import { useRouteMatch } from "../../utils";

const navBarButtons: Array<{ name: string; path: string }> = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
  { name: "Resume", path: "/resume" },
];

export default function NavBar() {
  const routeMatch = useRouteMatch([
    "/",
    "/about",
    "/projects",
    "/contact",
    "/resume",
  ]);
  const currentTab = routeMatch?.pattern?.path;
  return (
    <Tabs value={currentTab}>
      {navBarButtons.map(({ name, path }, index) => (
        <Tab key={index} label={name} to={path} value={path} component={Link} />
      ))}
    </Tabs>
  );
}
