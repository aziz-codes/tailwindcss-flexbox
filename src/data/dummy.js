import {
  HomeIcon,
  HeartIcon,
  UserIcon,
  MagnifyingGlassIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export const links = [
  {
    label: "Home",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    label: "Notifications",
    icon: <HeartIcon />,
    path: "/notifications",
  },
  {
    label: "Profile",
    icon: <UserIcon />,
    path: "/profile",
  },
  {
    label: "Search",
    icon: <MagnifyingGlassIcon />,
    path: "/search",
  },
  {
    label: "Explore",
    icon: <ClockIcon />,
    path: "/explore",
  },
];
