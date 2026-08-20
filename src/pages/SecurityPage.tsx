import PlatformPageLayout from '../components/PlatformPageLayout'
import { securityPage } from '../data/content'

export default function SecurityPage() {
  const { kicker, heading, body } = securityPage
  return <PlatformPageLayout kicker={kicker} heading={heading} body={body} />
}
