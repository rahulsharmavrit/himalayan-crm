import { CircleUserRound, FileCheck2, LayoutDashboard, MapPinned, MessageCircleQuestion, NotebookText, Star } from "lucide-react";

export const sidebar_menu = [
    {
        name : "Dashboard",
        icon : <LayoutDashboard />,
        path : "/dashboard",
        submenu : []
    },
    {
        name : "Contents",
        icon : <FileCheck2 />,
        path : "/contents",
        submenu : [
            {
                name:"Blogs",
                path : "/blogs",
            },
            {
                name:"Testimonials",
                path : "/testimonials",
            },
        ]
    },
    {
        name : "Holidays",
        icon : <MapPinned />,
        path : "/holidays",
        submenu : [
            {
                name:"Holiday Types",
                path : "/holiday/types",
            },
            {
                name:"Holiday Destination",
                path : "/holiday/destination",
            },
        ]
    },
    {
        name : "Bookings",
        icon : <NotebookText />,
        path : "/bookings",
        submenu : []
    },
    {
        name : "Services",
        icon : <FileCheck2 />,
        path : "/services",
        submenu : []
    },
    {
        name : "User Profile",
        icon : <CircleUserRound />,
        path : "/user-profile",
        submenu : []
    },
    {
        name : "Queries",
        icon : <MessageCircleQuestion />,
        path : "/queries",
        submenu : []
    },
    {
        name : "Reviews",
        icon : <Star />,
        path : "/reviews",
        submenu : []
    },
]