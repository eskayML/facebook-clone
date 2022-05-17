import React from 'react'
import './Sidebar.css'
import SideBarRow from './SideBarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags'
import ChatIcon from '@mui/icons-material/Chat'
import StorefrontIcon from '@mui/icons-material/Storefront'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import PeopleIcon from "@mui/icons-material/People"
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'


function Sidebar() {
    return (
        <div className='sidebar'>
            <SideBarRow
                src="https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-1/c0.7.200.200a/p200x200/236275264_205538968217777_6343029915058239981_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeG3P1kTHfJpYYlxGMTT-cT7AERduxiZAe0ARF27GJkB7X39BqxeNDAJR4GC4jXShM1Ddk9IciaaSh4g0Na1gEZ3&_nc_ohc=MxJxPxcbN8kAX_v_BJn&_nc_ht=scontent-los2-1.xx&oh=64bbba874cecb26e94209fe48af83c99&oe=61ADA966"
                title='Samuel Kalu'
            />
            <SideBarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SideBarRow Icon={PeopleIcon} title='Friends' />
            <SideBarRow Icon={ChatIcon} title='Messenger' />
            <SideBarRow Icon={StorefrontIcon} title='Marketplace' />
            <SideBarRow Icon={VideoLibraryIcon} title='Videos' />
            <SideBarRow Icon={LocalHospitalIcon} title='Covid-19 Information Centre' />
            <SideBarRow Icon={ExpandMoreOutlinedIcon} title='Others' />
        </div>
    )
}


export default Sidebar
