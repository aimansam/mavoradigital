import { CircleCheck, FileText, MessageCircle, PanelsTopLeft, Sparkles, Wrench } from "@lucide/astro";

export const ctaHref = "#project-request";
export const siteUrl = "https://mavoradigital.com";
export const bmSiteUrl = `${siteUrl}/bm/`;

export const metadata = {
  title: "Mavora Digital | Websites that help businesses generate sales",
  description:
    "Mavora Digital builds polished, fast-loading websites that help businesses earn trust, capture qualified inquiries, and generate more sales.",
  socialPreview: `${siteUrl}/social-preview.png`,
};

export const navigation = [
  { label: "Services", href: "#services" },
  { label: "Demos", href: "#portfolio" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const header = {
  navAriaLabel: "Main navigation",
  homeAriaLabel: "Mavora Digital home",
  menuOpenLabel: "Open menu",
  menuCloseLabel: "Close menu",
  ctaLabel: "Project Request",
  ctaLabelShort: "Request",
};

export const hero = {
  kicker: "A web studio for businesses",
  title: "Turning clicks into revenue",
  copy: "Mavora Digital builds polished, fast-loading sites that earn trust, capture qualified inquiries, and guide visitors toward sales.",
  primaryCta: "Build your site",
  secondaryCta: "View Services",
  proofLine: "Live in 2 weeks · Free analytics · Free Consultation · Malaysia-based",
};

export const motionBand = [
  "A clear offer buyers understand",
  "More trust before they reach out",
  "More inquiries from ready customers",
  "Faster pages that keep attention",
  "A clearer path from visitor to inquiry",
];

export const studioStatement = {
  kicker: "Mavora Digital",
  title: "Small studio focus. Websites built to sell.",
  intro: "Mavora Digital builds for founders and local service businesses that need a site visitors understand, trust, and act on — without the overhead of a large agency.",
  principles: [
    {
      title: "Offer clarity",
      body: "Your page explains what you offer, who it's for, and why it matters — before attention runs out.",
    },
    {
      title: "Buyer confidence",
      body: "Copy, proof, and structure guide visitors from first glance to ready to contact.",
    },
    {
      title: "Launch focus",
      body: "Lean, fast builds with clean handoff — and a direct path from the site to WhatsApp.",
    },
  ],
};

export const services = [
  {
    title: "Landing pages",
    description: "A focused page for one offer, built to explain value fast and guide visitors toward an inquiry.",
    points: ["Offer clarity", "CTA flow", "Mobile speed"],
    icon: Sparkles,
  },
  {
    title: "Business websites",
    description: "A polished site that presents your services clearly, builds confidence, and makes contacting you easy.",
    points: ["Service structure", "Trust signals", "Contact paths"],
    icon: PanelsTopLeft,
  },
  {
    title: "Systems and automation",
    description: "Workflows, integrations, and automated processes that reduce manual work and keep your business running.",
    points: ["Workflow automation", "Tool integrations", "Auto-reporting setup"],
    icon: Wrench,
  },
];

export const packages = [
  {
    name: "Starter Website",
    price: "From RM800",
    detail: "A lean sales page for one clear offer, built to explain value fast and move visitors toward an inquiry.",
    points: ["Sales-focused one-page build", "Mobile buying path", "SEO and speed basics"],
    freeFeatures: ["WhatsApp CTA setup", "Basic on-page SEO", "Mobile responsive check"],
    tiers: [
      { name: "Basic", price: "RM800", scope: "One landing page, WhatsApp CTA, basic SEO", meta: "1 revision / 3-5 working days" },
      { name: "Plus", price: "RM1,200", scope: "Stronger copy flow, basic motion, extra polish", meta: "2 revisions / 5-7 working days" },
      { name: "Pro", price: "RM1,600", scope: "Premium landing page with deeper sections", meta: "3 revisions / 7-10 working days" },
    ],
    note: "Client provides logo, content, images, domain, and hosting access.",
  },
  {
    name: "Business Website",
    price: "From RM1,800",
    detail: "A conversion-minded website for service businesses that need credibility, proof, and steady inquiry paths.",
    points: ["Service sections that sell", "Trust-building copy", "Inquiry-ready handoff"],
    freeFeatures: ["Contact path setup", "Basic analytics setup", "Launch checklist"],
    tiers: [
      { name: "Basic", price: "RM1,800", scope: "Five-page business website with service structure and clear contact paths", meta: "1 revision / 7-10 working days" },
      { name: "Plus", price: "RM2,500", scope: "Seven-page site with stronger service sections, team, and proof", meta: "2 revisions / 10-14 working days", recommended: true },
      { name: "Pro", price: "RM3,500", scope: "Up to ten pages with deep service detail, portfolio, and case studies", meta: "3 revisions / 14-18 working days" },
    ],
    note: "Client provides brand assets, service content, and images. Copywriting support available on request.",
  },
  {
    name: "Custom Build",
    price: "From RM4,000",
    detail: "A tailored sales flow for offers that need richer content, integrations, or room to scale.",
    points: ["Custom buyer journey", "Integration planning", "Post-launch sales notes"],
    freeFeatures: ["Discovery call", "Integration plan", "Post-launch handoff notes"],
    tiers: [
      { name: "Basic", price: "RM4,000", scope: "Custom layout or special sales flow", meta: "2 revisions / 2-3 weeks" },
      { name: "Plus", price: "RM5,500", scope: "Custom website with booking or integration planning", meta: "3 revisions / 3-4 weeks" },
      { name: "Pro", price: "RM7,500+", scope: "Larger custom project with deeper launch support", meta: "Scoped after discovery" },
    ],
    note: "Final scope is confirmed after reviewing pages, features, integrations, and content readiness.",
  },
];

export const packageTierOptions = packages.flatMap((item) =>
  item.tiers.map((tier) => ({
    group: item.name,
    value: `${item.name} - ${tier.name} (${tier.price})`,
    label: `${tier.name} - ${tier.price}`,
    summary: tier.scope,
    meta: tier.meta,
    freeFeatures: item.freeFeatures.join(", "),
  })),
);

export const websiteTypes = [
  {
    name: "Landing Page",
    detail: "Best when one offer needs a sharper pitch, fast trust, and a direct path to inquiry.",
  },
  {
    name: "Business Website",
    detail: "Best when buyers need to understand your services before they reach out.",
  },
  {
    name: "Custom Website",
    detail: "Best for custom sales flows, richer content, integrations, or a bigger launch plan.",
  },
];

export const pageOptions = ["Home", "Services", "Portfolio", "About", "Contact", "Pricing", "Blog", "Privacy"];
export const featureOptions = ["Contact form", "Booking link", "Map/location", "Gallery", "Testimonials", "Analytics", "SEO setup", "Basic animations"];
export const businessTypes = ["Restaurant / cafe", "Beauty / personal care", "Automotive", "Retail / shop", "Professional service", "Freelancer / creator", "Other local business", "Online business"];
export const contentReadinessOptions = ["Logo, text, and images are ready", "I have logo only", "Need help with text", "Need help with images/content"];
export const domainOwnershipOptions = ["Yes, I already own a domain", "No, I need domain help"];

export const portfolio = {
  kicker: "Our work",
  title: "Local business demos built around a clear offer and a fast action path.",
  body: "Each concept shows how a local business can present its offer, build trust quickly, and move visitors to the next step.",
  cta: "View all demos",
  cardAction: "View package demo",
};

export const packagesSection = {
  kicker: "Our packages",
  title: "Pick the website path your business needs now.",
  body: "Not sure which path fits? Start with what matters most: one focused offer, a full business site, or a custom flow.",
  freeIncluded: "Free included",
  recommended: "Recommended",
  packageCta: "Request this package",
  footnote: "Final pricing depends on page count, content readiness, features, integrations, copywriting needs, and launch support. Payment is 50% deposit to start and 50% before launch.",
};

export const process = {
  kicker: "Our process",
  title: "From rough idea to a website ready to sell.",
  body: "A focused process that turns your offer into clear copy, polished design, fast pages, and a confident launch path.",
  steps: [
    {
      title: "Scope",
      detail: "Define the buyer, offer, goal, and primary action.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Design",
      detail: "Shape the page flow so visitors quickly understand your value.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Build",
      detail: "Build a fast, responsive website with a clear path to contact.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Launch",
      detail: "Check mobile, links, basic SEO, and go-live details.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },
  ],
};

export const request = {
  kicker: "Project request",
  title: "Share the scope. Get a clear quote.",
  body: "Send the quote details through WhatsApp, then confirm scope, timeline, and next steps there.",
  trustTitle: "Request directly via WhatsApp",
  trustBody: "Your answers become a project summary that's easy to read.",
  trustPoints: ["No long form process", "Clear scope and timeline reply", "Only details that matter for the project"],
  eyebrow: "Project details",
  defaultStatus: "Your request opens in WhatsApp before sending. No payment is required from this form.",
  contactNote: "Contact details can be confirmed after the quote.",
  privacy: "View privacy note",
  submit: "Send to WhatsApp",
  loading: "Preparing...",
  success: "Ready in WhatsApp",
  successStatus: "WhatsApp message prepared. Send it there to submit the project request.",
  missingNumberStatus: "WhatsApp number is not configured yet. Add PUBLIC_WHATSAPP_NUMBER in .env before launch.",
};

export const formLabels = {
  businessName: "Business name",
  businessNamePlaceholder: "Business or brand",
  websiteType: "Website type",
  packageInterest: "Package interest",
  packagePlaceholder: "Select package tier",
  packageEmptyTitle: "Pick a package to preview the quote basis.",
  packageEmptyText: "The final quote can still be adjusted after checking pages, content, and extras.",
  businessType: "Business type",
  businessTypePlaceholder: "Select type",
  timeline: "Timeline",
  timelinePlaceholder: "Select timeline",
  budget: "Budget flexibility",
  budgetPlaceholder: "Optional",
  domain: "Do you already own a domain?",
  pages: "Pages or sections needed",
  features: "Extra features or setup needed",
  contentReadiness: "Content readiness",
  currentPresence: "Current website or social",
  currentPresencePlaceholder: "Website, Instagram, Facebook, or TikTok",
  mainGoal: "Main website goal",
  mainGoalPlaceholder: "More bookings or inquiries",
  projectNotes: "Anything important to add?",
  projectNotesPlaceholder: "Must-have details, examples, or concerns.",
};

export const timelineOptions = ["As soon as possible", "1-2 weeks", "3-4 weeks", "1-2 months", "Flexible"];
export const budgetOptions = ["Stay close to selected package", "Can add budget for stronger content or features", "Need guidance"];

export const footer = {
  body: "Sales-focused websites for founders and local businesses that need clear offers, buyer trust, and a direct inquiry path.",
  projectRequest: "Project request",
  privacy: "Privacy",
  note: "WhatsApp is used for project requests and active support.",
  ssm: "202603153565",
  phone: "+60 11-1104 1179",
};

export const icons = { CircleCheck, FileText, MessageCircle };
