import PlatformPageLayout from '../components/PlatformPageLayout'
import { platformPages } from '../data/content'

export default function IntegrationsPage() {
  const { kicker, heading, body, features, relatedPages } = platformPages.integrations
  return (
    <PlatformPageLayout
      kicker={kicker}
      heading={heading}
      body={body}
      features={features}
      relatedPages={relatedPages}
    />
  )
}
