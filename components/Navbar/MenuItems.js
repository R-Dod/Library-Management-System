export const MenuItems = [
    {
        title: 'Home',
        url: 'http://localhost:3000/home',
        cName: 'nav-links',
        role: 'user'
    },
    {
        title: 'Home',
        url: 'http://localhost:3000/books',
        cName: 'nav-links',
        role: 'admin'
    },
    {
        title: 'My Issue History',
        url: 'http://localhost:3000/IssuedHistory',
        cName: 'nav-links',
        role: 'user'
    },
    {
        title: 'Issue History',
        url: 'http://localhost:3000/MembersIssuedHistory',
        cName: 'nav-links',
        role: 'admin'
    },
    {
        title: 'Members',
        url: 'http://localhost:3000/members',
        cName: 'nav-links',
        role: 'admin'
    },
    {
        title: 'Logout',
        url: 'http://localhost:3000/', //index.js
        cName: 'nav-links-mobile', //nav-links,
        role: 'generic'
    }

]