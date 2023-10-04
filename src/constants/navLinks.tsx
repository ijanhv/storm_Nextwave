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
        path: "/vendors",
        icon: <UserGroupIcon />,
    },
    {
        name: "Profile",
        path: "/admin/profile",
        icon: <UserIcon />,
    },
];

export const policeNavLinks = [
    {
        name: "Home",
        path: "/",
        icon: <Squares2X2Icon />,
    },
    {
        name: "FIR Listing",
        path: "/police/listing",
        icon: <ClipboardDocumentCheckIcon />,
    },
    {
        name: "Profile",
        path: "/police/profile",
        icon: <UserIcon />,
    },
];
