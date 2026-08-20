import PlatformPageLayout from '../components/PlatformPageLayout'
import { mcpPage } from '../data/content'

export default function McpPage() {
  const { kicker, heading, body } = mcpPage
  return <PlatformPageLayout kicker={kicker} heading={heading} body={body} />
}
