import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineHistory,
    AiOutlineHome,
    AiOutlineMoneyCollect,
    AiOutlineUser
} from 'react-icons/ai';
import { FaCog, FaOpencart } from 'react-icons/fa';
import { SidebarItem } from '../models/SidebarItem';
import Users from '../pages/Users';


export const SidebarData: SidebarItem[] = [
    {
        title: 'Inicio',
        path: '/inicio',
        icon: <AiOutlineHome />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: 'Users',
                path: '/inicio/users',
                icon: <AiOutlineUser />
            },
            {
                title: 'Revenue',
                path: '/inicio/revenue',
                icon: <AiOutlineMoneyCollect />
            }
        ]
    },
    {
        title: 'Campanha',
        path: '/campanha',
        icon: <FaOpencart />
    },
    {
        title: 'Landing Pages',
        path: '/landingpages',
        icon: <AiOutlineHistory />
    },
    {
        title: 'Configurations',
        path: '/configurations',
        icon: <FaCog />
    }
];
