export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  logo: string;
  logoAlt?: string;
  bullets: React.ReactNode[];
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  url: string;
  abstract: string;
};

export type Internship = {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
};

export const PROFILE = {
  name: "Aman Saini",
  title: "Machine Learning Engineer",
  tagline:
    "LLM post-training, fine-tuning, retrieval, evaluation, and generative AI at scale.",
  location: "Vancouver, BC, Canada",
  email: "contact@aman-saini.com",
  photo: "/ProfilePhoto.jpg",
  resume: "/Aman_Saini_Resume.pdf",
  linkedin: "https://www.linkedin.com/in/amansaini14/",
  scholar: "https://scholar.google.com/citations?user=jioPHNoAAAAJ&hl=en",
};

export const LOGOS = {
  apple: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  appleWhite:
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  grammarly: "/grammarly.png",
  x: "https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg",
  microsoft: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
};

export const ROLES: Role[] = [
  {
    company: "Apple",
    title: "Machine Learning Engineer",
    period: "Apr 2025 — Present",
    location: "Vancouver, BC",
    logo: LOGOS.apple,
    logoAlt: "Apple",
    bullets: [
      "Building World-Class Question Answering for Siri.",
      "Training and optimizing GenAI models using advanced post-training methods (DPO, Online RL).",
      "Designing verifiable reward pipelines with rubrics and improving LLM alignment using better Reward Models.",
      "Developing scalable evaluation and training frameworks for high-quality generative AI experiences.",
    ],
  },
  {
    company: "Grammarly",
    title: "Staff ML Engineer",
    period: "Oct 2023 — Apr 2025",
    location: "Vancouver, BC",
    logo: LOGOS.grammarly,
    logoAlt: "Grammarly",
    bullets: [
      "Fine-tuned LLMs (Llama, GPT) for fine-grained writing assistance; instruction-tuned Llama 3.1 70B/8B teacher models.",
      "Built evaluation pipelines using LLM-as-a-Judge; scaled synthetic data generation for internal LLMs.",
      "Published multi-task Ukrainian text-editing work; released models and datasets on Hugging Face.",
      "Created a Python library for automatic prompt optimization with target reward metrics.",
    ],
  },
  {
    company: "Twitter",
    title: "Senior ML / NLP Engineer",
    period: "May 2021 — Jan 2023",
    location: "Seattle, WA",
    logo: LOGOS.x,
    logoAlt: "Twitter / X",
    bullets: [
      "NLP Signals (Cortex): End-to-End NLP models and signals used across Home Timeline, Notifications, and Trends.",
      "Entity Linking: Built Encoder-only Transformer models for detection, candidate generation and ranking to identify and link Named Entities with Tweets. Dataset released at NeurIPS 2022.",
      "NER: Replaced Bi-LSTM with multilingual BERT using subword masking, token features, weak labels, and distillation, resulting in a 13.5% lift in offline F1 score.",
      "Tweet Representation: Multi-task model for language, topical, and engagement prediction; published in DL4SR 2022.",
      "Improved notification seed-Tweet quality; led NER adoption and ML code guidelines.",
    ],
  },
  {
    company: "Microsoft",
    title: "Senior ML Engineer",
    period: "Jan 2016 — Apr 2021",
    location: "Seattle, WA",
    logo: LOGOS.microsoft,
    logoAlt: "Microsoft",
    bullets: [
      "Bing Ads (AI + Research): Improved ad experience and launched new ad products.",
      "Dynamic Search Ads: Landing-page extraction and Transformer-based generation — +1.5% US daily RPM, 2%+ international RPM.",
      "Web Page Similarity Graph: TwinBERT / USE embeddings with HNSW / NSG ANN for next-link prediction.",
      "Dynamic links with ads: DeepXML categories + Ads RoBERTa scoring — +1.5% US CTR.",
      "Landing-page summarization (BERTSUM) used in ad title assets; latency tooling adopted across services.",
    ],
  },
  {
    company: "Microsoft India",
    title: "Software Engineer",
    period: "Jul 2013 — Dec 2015",
    location: "Bangalore, India",
    logo: LOGOS.microsoft,
    logoAlt: "Microsoft",
    bullets: [
      "Rich Ads experience (RnR): Online infra and rich ad experiences for non-US markets.",
      "Ads-Composition: Unified, parallelized pre-serve pipeline for ads and decorations — lower latency, faster experimentation.",
      "Related Product Annotation: Surfaced relevant products for retail queries — higher CTR on text ads and product links.",
      "Latency tooling: Utilities to analyze critical latency paths, reused across services.",
    ],
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Spivavtor: An Instruction-Tuned Ukrainian Text Editing Model",
    authors: "Aman Saini, Artem Chernodub, Vipul Raheja, Vivek Kulkarni",
    venue: "arXiv 2024",
    url: "https://arxiv.org/abs/2404.18880",
    abstract:
      "Spivavtor is a Ukrainian-focused instruction-tuned text-editing model and dataset, adapting the CoEdIT framework to Ukrainian. We describe dataset construction, model training, and evaluation.",
  },
  {
    title: "TweetNERD — End-to-End Entity Linking Benchmark for Tweets",
    authors:
      "Shubhanshu Mishra, Aman Saini, Raheleh Makki, Sneha Mehta, Aria Haghighi, Ali Mollahosseini",
    venue: "NeurIPS — Datasets & Benchmarks, 2022",
    url: "https://arxiv.org/abs/2210.08129",
    abstract:
      "A large-scale benchmark for entity extraction and linking on Twitter spanning 2010–2021 with three tasks: NER, Entity Linking with gold spans, and End-to-End Entity Linking.",
  },
  {
    title:
      "APIO: Automatic Prompt Induction and Optimization for Grammatical Error Correction and Text Simplification",
    authors:
      "Artem Chernodub, Aman Saini, Yejin Huh, Vivek Kulkarni, Vipul Raheja",
    venue: "arXiv 2025",
    url: "https://arxiv.org/abs/2508.09378",
    abstract:
      "APIO is a two-stage approach that induces task-specific prompts from examples and optimizes them for text-editing tasks, attaining strong SARI scores on ASSET-Test.",
  },
];

export const INTERNSHIPS: Internship[] = [
  {
    company: "Amazon",
    title: "Software Engineer Intern",
    period: "Jan — Jun 2013",
    location: "Bangalore, India",
    bullets: [
      "Worked with the Amazon Pricing team to predict shipping prices for products on amazon.com.",
      "Implemented the End-to-End Pricing Attribute Prediction Service using Amazon Simple Workflow Service to automate the ML model-building process.",
    ],
  },
  {
    company: "University of Victoria",
    title: "Research Intern",
    period: "May — Jul 2012",
    location: "Victoria, Canada",
    bullets: [
      "Replaced Java with the bidirectional language Boomerang in a high-confidence medical data device (MirthConnect) to guarantee well-behaved channels.",
    ],
  },
  {
    company: "Indian Institute of Remote Sensing",
    title: "Research Intern",
    period: "May — Jul 2011",
    location: "Dehradun, India",
    bullets: [
      "Worked with the Weather Research and Forecasting (WRF) modeling team to deploy WRF models on Linux, enabling real-time weather prediction.",
    ],
  },
];

export const EDUCATION = {
  school: "Birla Institute of Technology and Science (BITS) Pilani",
  degree: "B.E. in Computer Science",
  detail: "CGPA 9.54 / 10",
  period: "2009 — 2013",
  url: "https://www.bits-pilani.ac.in/pilani/",
};
