import PlatformPageLayout from '../components/PlatformPageLayout'
import { agenticActionsPage } from '../data/content'

export default function AgenticActionsPage() {
  const { kicker, heading, body } = agenticActionsPage
  return <PlatformPageLayout kicker={kicker} heading={heading} body={body} />
}
