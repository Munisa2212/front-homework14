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
        iconActive: <HomeActiveIcon/>
    },
    {
        id: 2,
        title: "Explore",
        path: paths.explore,
        icon: <ExploreIcon/>,
        iconActive: <ExploreIcon/>
    },
    {
        id: 3,
        title: "Notifications",
        path: paths.notifications,
        icon: <NotificationsIcon/>,
        iconActive: <NotificationsActiveIcon/>
    },
    {
        id: 4,
        title: "Messages",
        path: paths.messages,
        icon: <MessagesIcon/>,
        iconActive: <MessagesActiveIcon/>
    },
    {
        id: 5,
        title: "Bookmarks",
        path: paths.bookmarks,
        icon: <BookmarksIcon/>,
        iconActive: <BookmarksActiveIcon/>

    },
    {
        id: 6,
        title: "Lists",
        path: paths.lists,
        icon: <ListsIcon/>,
        iconActive: <ListsIcon/>
    },
    {
        id: 7,
        title: "Profile",
        path: paths.profile,
        icon: <ProfileIcon/>,
        iconActive: <ProfileActiveIcon/>
    },
    {
        id: 8,
        title: "More",
        path: paths.more,
        icon: <MoreIcon/>,
        iconActive:  <MoreIcon/>
    }
]
