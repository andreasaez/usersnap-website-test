import PlatformPageLayout from '../components/PlatformPageLayout'
import { platformPages } from '../data/content'

export default function RoadmapsPage() {
  const { kicker, heading, body, features } = platformPages.roadmaps
  return <PlatformPageLayout kicker={kicker} heading={heading} body={body} features={features} />
}
