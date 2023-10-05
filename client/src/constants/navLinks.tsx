import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import {
    ClipboardDocumentCheckIcon,
    UserGroupIcon,
    ArrowsPointingInIcon,
    SquaresPlusIcon,
    Squares2X2Icon,
    UserIcon,
    BoltIcon,
} from "@heroicons/react/24/solid";

export const organizerNavLinks = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: <BoltIcon />,
    },
    {
        name: "Create Event",
        path: "/dashboard/create",
        icon: <SquaresPlusIcon />,
    },
    {
        name: "Vendors",
        path: "/dashboard/vendors",
        icon: <UserGroupIcon />,
    },
    {
        name: "IntelliEvents",
        path: "/dashboard/intellievents",
        icon: <Cog8ToothIcon />,
    },
    {
        name: "Profile",
        path: "/dashboard/profile",
        icon: <UserIcon />,
    },
];

export const vendorNavLinks = [
    {
        name: "Home",
        path: "/vendor/home",
        icon: <Squares2X2Icon />,
    },
    {
        name: "Create Service",
        path: "/vendor/create",
        icon: <ClipboardDocumentCheckIcon />,
    },
    {
        name: "Profile",
        path: "/vendor/profile",
        icon: <UserIcon />,
    },
];
