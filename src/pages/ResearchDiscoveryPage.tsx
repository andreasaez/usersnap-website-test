import PlatformPageLayout from '../components/PlatformPageLayout'
import { platformPages } from '../data/content'

export default function ResearchDiscoveryPage() {
  const { kicker, heading, body, features } = platformPages.researchDiscovery
  return <PlatformPageLayout kicker={kicker} heading={heading} body={body} features={features} />
}
