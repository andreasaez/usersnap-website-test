import PlatformPageLayout from '../components/PlatformPageLayout'
import { integrationsDirectory } from '../data/content'

export default function IntegrationsDirectoryPage() {
  const { kicker, heading, body } = integrationsDirectory
  return <PlatformPageLayout kicker={kicker} heading={heading} body={body} />
}
