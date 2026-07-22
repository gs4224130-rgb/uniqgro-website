import { Outlet } from 'react-router-dom'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'
import { UniqGroMotionSignature } from './UniqGroMotionSignature'

export function Layout(){
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <SiteHeader/>
    <UniqGroMotionSignature/>
    <main id="main"><Outlet/></main>
    <SiteFooter/>
  </>
}
