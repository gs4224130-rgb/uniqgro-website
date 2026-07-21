import { Outlet } from 'react-router-dom'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'
export function Layout(){return <><a className="skip" href="#main">Skip to content</a><SiteHeader/><main id="main"><Outlet/></main><SiteFooter/></>}
