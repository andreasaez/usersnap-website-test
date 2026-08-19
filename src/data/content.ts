export const nav = [
  {
    label: 'Platform',
    href: '#blueprint',
    columns: [
      {
        children: [
          {
            label: 'Research & Discovery',
            href: '#',
            description: 'Validate decisions with evidence traced to its source.',
            icon: 'research',
          },
          {
            label: 'Workflows & Orchestration',
            href: '#',
            description: 'Connect every tool in your stack automatically.',
            icon: 'workflows',
          },
          {
            label: 'Roadmaps',
            href: '#',
            description: 'Link every roadmap item to the evidence behind it.',
            icon: 'roadmaps',
          },
          {
            label: 'Feedback Collection',
            href: '#',
            description: 'Collect visual feedback, surveys, and NPS in one place.',
            icon: 'feedback',
          },
          {
            label: 'Customer Engagement',
            href: '#',
            description: 'Engage with customers via announcements, change logs, and email.',
            icon: 'engagement',
          },
        ],
      },
      {
        heading: 'Under the hood',
        children: [
          { label: 'How it works', href: '#pillars' },
          { label: 'The Product Blueprint', href: '#blueprint' },
          { label: 'Integrations', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { label: 'For Product', href: '#' },
      { label: 'For Product Marketing', href: '#' },
      { label: 'For Customer Success', href: '#' },
      { label: 'For Support', href: '#' },
      { label: 'For Development', href: '#' },
      { label: 'For Research', href: '#' },
    ],
  },
  { label: 'Customers', href: '#customers' },
  { label: 'Resources', href: '#' },
  { label: 'Pricing', href: '#' },
]

export const hero = {
  h1: 'The product evidence platform for enterprise teams',
  sub: 'Usersnap orchestrates every signal across your tool stack the moment it appears. Solve problems and generate solutions with AI-guarded data that drives impact from day one.',
  primaryCta: 'Start for free',
  secondaryCta: 'Take a tour',
  note: 'Snap for free in under 10 mins. No credit card required.',
}

export const blueprint = {
  label: 'Product blueprint',
  kicker: 'Nothing costs more than building the wrong features.',
  sub: 'A four-step blueprint that turns scattered customer signals into evidence-backed product work.',
  cardsLabel: 'As easy as one, two, snap.',
  steps: [
    {
      id: 'connect',
      label: 'Connect',
      title: 'Centralize feedback from every team and source',
      body: 'Centralize feedback from every team and source in one place. A single code snippet connects Usersnap to your stack, so signal from support tickets, sales calls, and in-product sessions reaches your product team in a single view.',
      href: '#',
    },
    {
      id: 'understand',
      label: 'Understand',
      title: 'AI surfaces the trends and gaps that matter',
      body: 'AI analyzes your consolidated feedback and surfaces the trends and gaps your product needs to fill, ranked by frequency and impact, so your team sees a clear picture of what customers actually need before the next planning cycle starts.',
      href: '#',
    },
    {
      id: 'act',
      label: 'Act',
      title: 'Prioritize the opportunities worth your time',
      body: 'Identify the root causes behind each pattern, generate hypotheses, and prioritize the core opportunities worth spending time on. Every decision comes with the customer signal to back it, so scope discussions start from evidence, not instinct.',
      href: '#',
    },
    {
      id: 'engage',
      label: 'Engage',
      title: 'Close the loop with the customers who asked',
      body: 'Drive awareness and adoption with targeted emails, in-app announcements, bulk feedback replies, and release notes that connect what shipped to the customers who asked for it.',
      href: '#',
    },
  ],
}

export const pillars = {
  heading: 'Built for enterprise product builders',
  items: [
    {
      title: 'Research & Discovery',
      body: 'Every support ticket, sales note, and in-app comment connects automatically, tagged back to its source the moment it appears.',
      features: [
        'Support tickets',
        'Surveys',
        'CSAT',
        'NPS',
        'Transcripts',
        'In-app visual feedback',
        'Announcements',
        'Email replies',
        'Changelog',
      ],
      href: '#',
    },
    {
      title: 'Roadmaps',
      body: 'Link feedback directly to outcomes, build hypotheses, and score with insights top of mind.',
      features: [
        'Custom scoring',
        'Hypotheses',
        'AI prototypes',
        'Opportunity trends',
        'Priority tracking',
        'Child-parent linking',
        'Now, Next, Later roadmap',
        'Custom labels',
        'Advanced filters',
        'Solution generation',
      ],
      href: '#',
    },
    {
      title: 'Integrations & Workflows',
      body: 'Usersnap connects automatically to the tools already in your stack, including support, sales, analytics, and MCP-enabled AI, so signal flows without manual exports or one-off syncs.',
      features: [
        'MCP',
        'AI tagging',
        'Channel data ingestion',
        'AI feedback extraction',
        'Sentiment analysis',
        'Metrics',
        'Cohort analysis',
        'Cross-platform orchestration',
      ],
      href: '#',
    },
  ],
}

export const differentiators = {
  kicker: 'Why Usersnap',
  heading: 'Built on orchestration, reporting, and guardrails you can trust',
  items: [
    {
      icon: 'implementation',
      title: 'Zero-friction implementation',
      body: 'One code snippet connects Usersnap to your stack in under ten minutes. There’s no taxonomy to build and no data-volume threshold to clear before AI features start working. Get started on day one.',
      href: '#',
    },
    {
      icon: 'orchestration',
      title: 'Automatic, continuous orchestration',
      body: 'Every signal connects the moment it appears, across every tool already in your stack, without manual exports or one-off syncs to maintain.',
      href: '#',
    },
    {
      icon: 'reporting',
      title: 'Evidence-to-impact reporting',
      body: 'Every roadmap item links back to the research that shaped it and the outcome it drove, so reviews turn into a walkthrough of proof leadership already trusts.',
      href: '#',
    },
    {
      icon: 'guardrails',
      title: 'Guardrails you can trust',
      body: 'Usersnap pairs AI with the guardrails, security, and trust controls your team needs to act with confidence.',
      href: '#',
    },
  ],
}

export const roiDefaults = {
  numPMs: 8,
  hoursPerWeek: 6,
  hourlyCost: 85,
  reductionRate: 0.7,
}

export const roiCopy = {
  kicker: 'Impact',
  heading: 'What AI hallucinations are costing your team',
  sub: 'Building without guardrails is costing your team every release. See how Usersnap can help you save money.',
  disclaimer:
    'Estimates only, based on industry benchmarks for manual feedback synthesis time and a 70% reduction assumption from automated orchestration. Actual results vary by team.',
}

export const testimonials = [
  {
    quote:
      'Usersnap has shortened our customer support cycle. Visual feedback really helps us understand and iterate faster.',
    name: 'Joscha Feth',
    title: 'Lead Engineer',
    company: 'Canva',
  },
  {
    quote:
      'As a company with a wide range of products, we rely on Usersnap to manage user feedback workflows.',
    name: 'Franz Tretter',
    title: 'Product Manager',
    company: 'Runtastic',
  },
  {
    quote:
      'In a global organization with over 2000 employees, Usersnap is essential for scaling the feedback exchange on our website.',
    name: 'Gerald Haydtner',
    title: 'Website Marketing Manager',
    company: 'Dynatrace',
  },
  {
    quote:
      'How to bring value to the end users is what the teams thrive for. And Usersnap helps us get the feedback and evidence we need to keep moving.',
    name: 'Malgorzata Fleischmann',
    title: 'Product Owner',
    company: 'Erste Group',
  },
]

export const faqs = [
  {
    q: 'What is a product evidence platform?',
    a: 'A product evidence platform orchestrates and automates the everyday work of collecting, connecting, and reporting on customer signal, guarded by AI that stays scoped to what your team actually collects. It handles that low-level work automatically, freeing product managers to focus on building the right thing, backed by the right evidence. Usersnap is built for exactly this, connecting every signal to the decision and outcome it drove, so your team moves faster and spends more time on alignment and strategy.',
  },
  {
    q: 'How is Usersnap different from Productboard or Jira Product Discovery?',
    a: 'Productboard is solution-led and complex to configure before it delivers value. Jira Product Discovery orchestrates signal only within the Atlassian suite. Usersnap orchestrates every signal automatically, continuously, and across tools it doesn’t own or sell, from the first piece of feedback you collect.',
  },
  {
    q: 'Do we need to build a taxonomy or hit a data-volume threshold before AI features work?',
    a: 'No. Usersnap activates from the first piece of feedback. There’s no taxonomy to build and no minimum feedback volume to clear before AI categorization and pattern surfacing start working.',
  },
  {
    q: 'How long does it take to get customer signal flowing?',
    a: 'A single code snippet connects Usersnap to your stack. Teams typically see AI-categorized signal in their first sprint planning session within days, compared to the 2 to 8 weeks typical of enterprise platform onboarding.',
  },
  {
    q: 'Can Usersnap replace multiple tools already in our stack?',
    a: 'Yes. Usersnap is built to consolidate visual feedback, microsurveys, NPS/CSAT, and feature request tracking under a single data agreement, replacing 3 to 5 separate vendor contracts for most enterprise teams.',
  },
  {
    q: 'How does Usersnap handle data security and residency?',
    a: 'One platform means one DPA and one security review instead of managing five separate vendor relationships. Access controls apply directly at the data layer, and documentation is available for IT, security, and procurement review.',
  },
  {
    q: 'Does the AI hallucinate or fabricate insights?',
    a: 'Usersnap’s AI is scoped to the feedback you actually collect. It doesn’t reach into open-ended external data or synthesize claims beyond what your team has captured, which is the guardrail teams burned by general-purpose AI tools are looking for.',
  },
]

export const finalCta = {
  heading: 'Usersnap is where the work happens for you.',
  sub: 'Snap your first customer signal before the week is out.',
  primaryCta: 'Start for free',
}
