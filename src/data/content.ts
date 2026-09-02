export const nav = [
  {
    label: 'Platform',
    href: '#blueprint',
    columns: [
      {
        children: [
          {
            label: 'Research & Discovery',
            href: '/platform/research-discovery',
            description: 'Validate decisions with customer feedback traced to its source.',
            icon: 'research',
          },
          {
            label: 'Roadmaps & Reporting',
            href: '/platform/roadmaps',
            description: 'Spot trends automatically and prioritize with confidence.',
            icon: 'roadmaps',
          },
          {
            label: 'Integrations',
            href: '/platform/integrations',
            description: 'Connect every tool in your stack automatically.',
            icon: 'workflows',
          },
        ],
      },
      {
        heading: 'Under the hood',
        children: [
          { label: 'How it works', href: '/#pillars' },
          { label: 'MCP', href: '/mcp' },
          { label: 'Agentic Actions', href: '/agentic-actions' },
          { label: 'Security & Compliance', href: '/security' },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    heading: 'Use cases',
    children: [
      {
        label: 'Spot trending problems',
        href: '#',
        description: 'Catch what is trending early, with evidence that updates as fast as your team ships.',
      },
      {
        label: 'Validate ideas',
        href: '#',
        description: 'Gather feedback directly from customers and validate ideas fast.',
      },
      {
        label: 'Build with evidence',
        href: '#',
        description: 'Get product, support, and sales aligned on the same evidence before you build.',
      },
      {
        label: 'Grow product value',
        href: '#',
        description: 'Spot patterns, prioritize features, and drive adoption every release.',
      },
      {
        label: 'Close the feedback loop',
        href: '#',
        description: 'Tell every customer what shipped, automatically.',
      },
      {
        label: 'Become an AI-enabled team',
        href: '#',
        description: 'AI generates the hypotheses, prototypes, and solutions your team can act on immediately.',
      },
    ],
  },
  { label: 'Customers', href: '#customers' },
  { label: 'Resources', href: '#' },
  { label: 'Pricing', href: '#' },
]

export const platformPages = {
  researchDiscovery: {
    kicker: 'Platform',
    heading: 'Research & Discovery',
    body: 'All the customer feedback your team collects, from support tickets to sales notes to in-app comments, connects automatically and gets tagged back to its source the moment it appears.',
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
  },
  roadmaps: {
    kicker: 'Platform',
    heading: 'Roadmaps & Reporting',
    body: 'Spot trends, build hypotheses, and let agentic reporting guide you on what to build next.',
    features: [
      'Custom scoring',
      'Hypotheses',
      'AI prototypes',
      'Opportunity trends',
      'Priority tracking',
      'Now, Next, Later roadmap',
      'Solution generation',
    ],
  },
  integrations: {
    kicker: 'Platform',
    heading: 'Integrations',
    body: 'Usersnap connects automatically to the tools already in your stack, including support, sales, analytics, and MCP-enabled AI, so data flows without manual exports or one-off syncs.',
    features: ['AI tagging', 'Channel data ingestion', 'Sentiment analysis', 'Cross-platform orchestration'],
    relatedPages: [
      {
        label: 'Browse integrations',
        href: '/integrations',
        description: 'See every tool Usersnap connects to out of the box.',
      },
      {
        label: 'MCP',
        href: '/mcp',
        description: "How Usersnap works as a data layer for AI agents.",
      },
    ],
  },
}

export const integrationsDirectory = {
  kicker: 'Integrations',
  heading: 'Every tool in your stack, connected automatically',
  body: 'A directory of every integration Usersnap connects to natively, from support and sales platforms to analytics and AI tooling.',
}

export const securityPage = {
  kicker: 'Under the hood',
  heading: 'Security & Compliance',
  body: 'One platform, one data agreement, and one security review instead of five. Access controls apply at the data layer, and documentation is available for IT, security, and procurement review.',
}

export const mcpPage = {
  kicker: 'Under the hood',
  heading: 'MCP',
  body: "Usersnap's evidence layer is reachable from the AI tools already in your workflow through the Model Context Protocol.",
}

export const agenticActionsPage = {
  kicker: 'Under the hood',
  heading: 'Agentic Actions',
  body: 'Agentic Actions is the layer that turns everything Research & Discovery, Roadmaps, and Integrations surface into reporting, recommendations, and automated prompts, so evidence becomes something your team acts on, rather than a report it only reads.',
}

export const hero = {
  eyebrow: 'The product evidence platform',
  h1: 'Nothing costs more than building the wrong features.',
  sub: 'Usersnap turns scattered feedback into evidence-backed decisions, orchestrating product output and compounding growth, release after release.',
  primaryCta: 'Book a demo',
  secondaryCta: 'Get started',
  note: 'Snap for free in under 10 mins. No credit card required.',
}

export const blueprint = {
  label: 'The Product Blueprint',
  kicker: 'Extraordinary evidence powers the world’s best products',
  sub: 'Generate build-ready ideas in four easy steps.',
  cta: 'See how it works',
  ctaHref: '#pillars',
  cardsLabel: 'As easy as one, two, snap.',
  steps: [
    {
      id: 'connect',
      label: 'Connect',
      title: 'Centralize feedback from every team and source',
      body: 'Bring feedback from every team and source into one place. A single code snippet connects Usersnap to your stack, so signal from support tickets, sales calls, and in-product sessions reaches your product team in a single view.',
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
  sub: 'Bad data slows every team down. Usersnap orchestrates evidence across research, roadmaps, and integrations, with data you can trust at every step of your product development cycle.',
  cta: 'Learn more',
  ctaHref: '#',
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
      title: 'Roadmaps & Reporting',
      body: 'Spot trends, build hypotheses, and let agentic reporting guide you on what to build next.',
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
      body: 'Usersnap connects automatically to the tools already in your stack, including support, sales, analytics, and MCP-enabled AI, so data flows without manual exports or one-off syncs.',
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
  heading: 'Orchestration, reporting, and guardrails you can trust',
  items: [
    {
      icon: 'implementation',
      title: 'Zero-friction implementation',
      body: 'One code snippet connects Usersnap to your stack in under ten minutes. There’s no taxonomy to build and no data-volume threshold to clear before AI features start working. Get started on day one.',
      href: '#',
    },
    {
      icon: 'orchestration',
      title: 'Continuous orchestration',
      body: 'Every tool in your stack connects automatically, without manual exports or one-off syncs to maintain.',
      href: '#',
    },
    {
      icon: 'reporting',
      title: 'Evidence-to-impact reporting',
      body: 'Every insight and signal links back to the update it shaped. The data is ready anytime you need it.',
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

export const howWeWin = {
  kicker: 'How we win',
  heading: 'Why global teams love Usersnap',
  sub: 'The market split product decisions into five categories.\nUsersnap put it back together as a single platform.',
  categories: [
    {
      name: 'Feedback tools',
      competitors: 'Canny, Marker, Refiner',
      redOcean: '50+ competitors',
      cost: '$7K-10K',
      promise: 'Helps you understand why.',
      gap: 'Value stops at insight collection. Commoditized.',
    },
    {
      name: 'Engagement tools',
      competitors: 'Beamer, ProductFruits',
      redOcean: '20+ competitors',
      cost: '$5K-20K',
      promise: 'Grows activation through education.',
      gap: 'Value stops at awareness. Low value offering.',
    },
    {
      name: 'Research tools',
      competitors: 'Dovetail, Enterpret, Maze, Userpilot',
      redOcean: '30+ competitors',
      cost: '$25K-50K',
      promise: 'Finds the problems that matter.',
      gap: 'Value stops at problem prioritization, and stops short of a solution.',
    },
    {
      name: 'Roadmapping tools',
      competitors: 'Productboard, Aha, Jira Product Discovery, Airfocus',
      redOcean: '20+ competitors',
      cost: '$90K-100K',
      promise: 'Speeds up planning and alignment.',
      gap: 'Value stops at planning, with no read on whether it paid off.',
    },
    {
      name: 'AI platforms',
      competitors: 'Claude, OpenAI, Perplexity',
      redOcean: null,
      cost: '$150K',
      promise: 'AI will make your life better.',
      gap: 'A pain to set up and maintain, with your data left unscoped.',
    },
  ],
  usersnap: {
    name: 'Product evidence platform',
    cost: '$25K-35K',
    promise: 'All of the above.',
    gap: 'Value spans teams, tools, and workflows.',
  },
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
    a: 'Every roadmap tool claims to deliver customer feedback or product insights, which is why those words don’t carry much weight anymore. Evidence is the harder standard: feedback traced from its original ticket or call through the decision it shaped to the outcome that followed. Usersnap keeps that chain intact automatically, so when someone in a roadmap review asks why a feature shipped, the answer already exists.',
  },
  {
    q: 'How is Usersnap different from Productboard or Jira Product Discovery?',
    a: 'Productboard is solution-led and complex to configure before it delivers value. Jira Product Discovery only connects tools inside the Atlassian suite. Usersnap connects across your entire stack automatically, from the first piece of feedback you collect.',
  },
  {
    q: 'Do we need to build a taxonomy or hit a data-volume threshold before AI features work?',
    a: 'No. Usersnap activates from the first piece of feedback. There’s no taxonomy to build and no minimum feedback volume to clear before AI categorization and pattern surfacing start working.',
  },
  {
    q: 'How long does it take to get customer feedback flowing?',
    a: 'A single code snippet connects Usersnap to your stack in under ten minutes. From there, AI-categorized feedback is ready before your next sprint planning session.',
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
    a: 'Usersnap’s AI only works with the feedback you’ve actually collected. It doesn’t reach into open-ended external data or generate claims beyond what your team has captured. That’s a scope limit, not a performance promise.',
  },
]

export const finalCta = {
  heading: 'Usersnap is where the work happens for you.',
  sub: 'Snap your first customer signal before the week is out.',
  primaryCta: 'Book a demo',
  secondaryCta: 'Get started',
}

export const footer = {
  tagline: 'Every tool, every customer, every conversation orchestrated. Get started in a snap.',
  cta: 'Book a demo',
  ctaHref: '#book-demo',
}
