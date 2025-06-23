import { BookmarksActiveIcon, BookmarksIcon, ExploreIcon, HomeActiveIcon, HomeIcon, ListsIcon, MessagesActiveIcon, MessagesIcon, MoreIcon, NotificationsActiveIcon, NotificationsIcon, ProfileActiveIcon, ProfileIcon } from "../assets/Icons"
import { Bookmarks, Explore, Home, Lists, Messages, More, Notifications, Profile } from "../pages"

export const paths = {
    home : "/",
    login : "/",
    explore: "/explore",
    notifications: "/notifications",
    messages: "/messages",
    bookmarks: "/bookmarks",
    lists: "/lists",
    profile: "/profile",
    more: "/more"
}

export const NavList = [
    {
        id: 1,
        title: "Home",
        path: paths.home,
        icon: <HomeIcon/>,
        iconActive: <HomeActiveIcon/>,
        element: <Home/>,
    },
    {
        id: 2,
        title: "Explore",
        path: paths.explore,
        icon: <ExploreIcon/>,
        iconActive: <ExploreIcon/>,
        element: <Explore/>
    },
    {
        id: 3,
        title: "Notifications",
        path: paths.notifications,
        icon: <NotificationsIcon/>,
        iconActive: <NotificationsActiveIcon/>,
        element: <Notifications/>
    },
    {
        id: 4,
        title: "Messages",
        path: paths.messages,
        icon: <MessagesIcon/>,
        iconActive: <MessagesActiveIcon/>,
        element: <Messages/>
    },
    {
        id: 5,
        title: "Bookmarks",
        path: paths.bookmarks,
        icon: <BookmarksIcon/>,
        iconActive: <BookmarksActiveIcon/>,
        element: <Bookmarks/>

    },
    {
        id: 6,
        title: "Lists",
        path: paths.lists,
        icon: <ListsIcon/>,
        iconActive: <ListsIcon/>,
        element: <Lists/>
    },
    {
        id: 7,
        title: "Profile",
        path: paths.profile,
        icon: <ProfileIcon/>,
        iconActive: <ProfileActiveIcon/>,
        element: <Profile/>
    },
    {
        id: 8,
        title: "More",
        path: paths.more,
        icon: <MoreIcon/>,
        iconActive:  <MoreIcon/>,
        element: <More/>
    }
]
