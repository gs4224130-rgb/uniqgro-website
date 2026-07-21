import { Link } from 'react-router-dom'
import { PageHero } from '../components/common/PageHero'
export default function NotFound(){return <><PageHero eyebrow="404" title="This path does not exist yet." lead="The beginning can be uncertain. Navigation does not have to be."/><section className="section"><div className="container"><Link className="btn primary" to="/">Return home</Link></div></section></>}
