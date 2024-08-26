import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import PaymentIcon from '@mui/icons-material/Payment';
 import HomeIcon from '@mui/icons-material/Home';




function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                 ATYPIK
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/proprietes">
                    <HomeIcon className='icon'/> Propriétés
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/reservations">
                    <BsFillGrid3X3GapFill className='icon'/> Reservations
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/paymentlist">
                    <PaymentIcon className='icon'/> Liste des paiement
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/utilisateurs">
                    <BsPeopleFill className='icon'/> Utilisateurs
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/AdminList">
                    <BsPeopleFill className='icon'/> Compte Admin
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/comentaireslist">
                    <BsMenuButtonWideFill className='icon'/> Commentaires
                </a>
            </li>
            
        </ul>
    </aside>
  )
}

export default Sidebar