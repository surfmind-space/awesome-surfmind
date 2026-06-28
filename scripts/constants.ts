export const KNOWN_ACTION_MENU_PRESETS = ["languages"] as const;

export const SKILL_TAG_CATEGORIES = {
  research: "Reading & Research",
  writing: "Writing & Communication",
  shopping: "Shopping & Commerce",
  code: "Coding & Development",
  learning: "Learning & Tutoring",
  language: "Languages & Translation",
  content: "Social & Content",
  data: "Data & Analytics",
  automation: "Browser & Workflow Automation",
  marketing: "Marketing & Sales",
  productivity: "Productivity",
  finance: "Finance",
  career: "Career",
} as const;

export const KNOWN_SKILL_TAGS = Object.keys(SKILL_TAG_CATEGORIES) as Array<
  keyof typeof SKILL_TAG_CATEGORIES
>;

export const KNOWN_SKILL_ICONS = [
  // Communication & messaging
  "Mail",
  "MessageCircle",
  "MessageCircleQuestion",
  "MessageCircleReply",
  "Speech",

  // Writing & documents
  "BookMarked",
  "BookOpen",
  "FileText",
  "Highlighter",
  "Notebook",
  "Pencil",
  "PencilLine",
  "ScrollText",
  "SpellCheck",
  "TextQuote",

  // Search & research
  "Earth",
  "Library",
  "Map",
  "Search",
  "TextSearch",

  // Lists, tasks & organization
  "Box",
  "Calendar",
  "Check",
  "CheckCheck",
  "Flag",
  "List",
  "ListMinus",
  "ListPlus",
  "Repeat",
  "Tags",
  "Timer",

  // Commerce, finance & math
  "BadgePercent",
  "Calculator",
  "Scale",
  "ShoppingBag",
  "ShoppingCart",
  "Sigma",

  // Career & professional
  "Briefcase",
  "Crown",
  "GraduationCap",
  "Rocket",
  "Target",

  // Learning & creativity
  "Lightbulb",
  "Sparkles",
  "WandSparkles",
  "Zap",

  // Code & data
  "Activity",
  "ChartNoAxesCombined",
  "Code",
  "Table2",

  // Social & entertainment
  "Heart",
  "Music",
  "PartyPopper",
  "Popcorn",
  "Star",

  // Health & lifestyle
  "BedDouble",
  "BicepsFlexed",
  "Leaf",
  "Salad",

  // Travel & places
  "Plane",

  // Language
  "Languages",

  // Home & notifications
  "Bell",
  "House",
] as const;
