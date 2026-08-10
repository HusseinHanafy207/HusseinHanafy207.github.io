export const site = {
  name: "Hussein Hamouda",
  shortName: "Hussein",
  role: "Senior Computer Engineering student",
  tagline:
    "AI researcher interested in generative AI, diffusion models, and reinforcement learning.",
  summary:
    "Senior Computer Engineering student in a dual-degree program between Egypt University of Informatics and Purdue University. I build and evaluate deep generative and decision-making systems in PyTorch, with an emphasis on rigorous experimentation and reproducible results.",
  email: "hanafy@purdue.edu",
  resumeUrl:
    "https://drive.google.com/file/d/1gKqjknm8S_7iZx93dq7scr3lKGIDjk7W/view?usp=sharing",
  github: "https://github.com/HusseinHanafy207",
  linkedin: "https://www.linkedin.com/in/hussein-hanafy",
} as const;

export const nav = [
  { href: "/#projects", label: "Projects", match: "/projects" },
  { href: "/#experience", label: "Experience", match: "/experience" },
  { href: "/#education", label: "Education", match: "/education" },
  { href: "/#skills", label: "Skills", match: "/skills" },
] as const;

export const education = [
  {
    school: "Purdue University",
    degree: "B.S. in Computer Engineering — Dual-Degree Program",
    dates: "Jun 2024 – May 2027",
    gpa: "3.91 / 4.00",
    honors: ["Dean's List", "Semester Honors"],
    coursework: [
      "Machine Learning",
      "Reinforcement Learning",
      "Data Mining",
      "Software Engineering",
    ],
  },
  {
    school: "Egypt University of Informatics",
    degree: "B.S. in Computer Engineering",
    dates: "Oct 2022 – May 2027",
    gpa: "3.92 / 4.00",
    honors: ["Dean's List"],
    coursework: [
      "Artificial Intelligence",
      "Linear Algebra",
      "Probability",
      "Data Structures & Algorithms",
    ],
  },
] as const;

export const experience = [
  {
    org: "Commercial International Bank (CIB)",
    title: "Intern",
    dates: "Jul 2026 – Aug 2026",
    bullets: [
      "Explored Generative AI and LLM-based approaches for banking use cases, applying data analysis and visualization to investigate AI-driven solutions and derive actionable insights.",
    ],
  },
  {
    org: "Purdue University",
    title: "Undergraduate Teaching Assistant",
    dates: "Aug 2025 – May 2026",
    bullets: [
      "TA’d ECE 20875 (Python for Data Science) and ECE 30200 (Probabilistic Methods), conducting office hours, explaining Python programming and probability concepts, and mentoring students on assignments and analytical problem-solving.",
    ],
  },
  {
    org: "Egypt University of Informatics",
    title: "Junior Teaching Assistant",
    dates: "Oct 2023 – Jun 2024",
    bullets: [
      "TA’d Modern Mechanics and Electric & Magnetic Interactions, guiding students through laboratory experiments, explaining core physics concepts, and mentoring them on assignments to strengthen conceptual understanding and problem-solving skills.",
    ],
  },
] as const;

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  featured?: boolean;
  tags: string[];
  links: { label: string; href: string }[];
  highlights: string[];
  detail?: {
    overview: string;
    findings: string[];
    methods?: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "diffusion-inpainting",
    title: "RePaint and Diffusion Sampling for Image Inpainting",
    subtitle: "Independent Research Project",
    category: "Research · Generative AI",
    featured: true,
    summary:
      "From-scratch DDPM inpainting in PyTorch with RePaint-style inference, mask-conditioned and unconditional models, and a reproducible evaluation harness with paired statistical testing.",
    tags: ["PyTorch", "DDPM", "RePaint", "CelebA", "Evaluation"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/HusseinHanafy207/diffusion-image-inpainting",
      },
      {
        label: "Technical Report",
        href: "https://drive.google.com/file/d/10dUpsDEIEu5c5m_DPoApbbclXvJZQdt4/view",
      },
      {
        label: "Paper",
        href: "https://drive.google.com/file/d/1CD_HEA0Ecc_Nqksx0QIa6tCETqOMW5Xt/view",
      },
    ],
    highlights: [
      "Quantified a silent evaluation failure: truncated reverse schedules with pure-noise init dropped PSNR from 27.4 to 19.8 dB (n = 100, p = 3.06 × 10⁻²³).",
      "Found opposing RePaint resampling effects by conditioning: ΔPSNR ≈ −2.7 dB (conditioned) vs. +2.2 dB (unconditional), both p < 0.01.",
      "Released code with a default full-T safety guard and wrote Inference Protocol Matters and Resampling Is Not Always Better.",
    ],
    detail: {
      overview:
        "This project studies image inpainting with denoising diffusion probabilistic models. I built an end-to-end pipeline supporting mask-conditioned training, unconditional face DDPMs with masks applied at test time, RePaint inference with resampling jumps, and stratified evaluation on MNIST, Fashion-MNIST, and CelebA.",
      findings: [
        "Inference protocol is part of the result: sampling the same CelebA checkpoint with a mismatched truncated reverse chain (T′ = 250) versus the full trained schedule (T = 1000) changes quality dramatically (paired ΔPSNR = 7.61 dB).",
        "Resampling is not universally beneficial: higher r hurts mask-conditioned models on large contiguous holes while helping unconditional models.",
        "A single default (j, r) across training regimes is misleading—and for conditioned models on large centers, actively costly.",
      ],
      methods: [
        "From-scratch DDPM stack (noise schedule + U-Net)",
        "Mask-conditioned and unconditional training regimes",
        "RePaint noise-matched stitching and resampling",
        "Paired t-tests, Cohen's d, and confidence intervals",
      ],
    },
  },
  {
    slug: "fightingice-rl",
    title: "Adversarial Reinforcement Learning in Fighting Games",
    subtitle: "Comparative Study",
    category: "Research · Reinforcement Learning",
    summary:
      "Benchmark of DQN, Rainbow DQN, PPO, and PPG in FightingICE under a shared 145-dimensional state and 56-action interface, with analysis across return, win rate, stability, and learning dynamics.",
    tags: ["DQN", "Rainbow", "PPO", "PPG", "FightingICE"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/HusseinHanafy207/DareFightingICE-7.0-_RL_Purdue",
      },
      {
        label: "Report",
        href: "https://drive.google.com/file/d/1X2MKbhK75nWEQJvSk8bbW40xVXiS-kXs/view",
      },
    ],
    highlights: [
      "Evaluated 1,364 episodes under comparable computational budgets.",
      "Observed a consistent hierarchy: PPG > PPO > Rainbow > DQN.",
      "Argued that FightingICE’s long temporal dependencies favor direct policy optimization over global value estimation.",
    ],
    detail: {
      overview:
        "A systematic empirical comparison of value-based and policy-gradient reinforcement learning algorithms in the DareFightingICE adversarial environment.",
      findings: [
        "Policy-gradient methods substantially outperformed value-based methods.",
        "Rainbow improved over vanilla DQN but remained below PPO and PPG.",
        "Environment characteristics—precise timing and context-dependent actions—help explain why PPG and PPO were better suited.",
      ],
      methods: [
        "Shared observation and action interfaces across algorithms",
        "Metrics for return, win rate, peak performance, convergence, and stability",
        "Comparable training budgets for fair comparison",
      ],
    },
  },
  {
    slug: "robomaster-ekf",
    title: "Real-Time Armor Plate Detection & Tracking",
    subtitle: "Purdue RoboMaster",
    category: "Computer Vision · Robotics",
    summary:
      "ROS2 + OpenCV + SolvePnP pipeline for autonomous RoboMaster target tracking, with an Extended Kalman Filter that improved pose estimation accuracy and reduced jitter.",
    tags: ["ROS2", "OpenCV", "EKF", "SolvePnP"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/HusseinHanafy207/robomaster-ekf-tracker",
      },
    ],
    highlights: [
      "Reduced localization RMSE from 8.48 cm to 6.67 cm.",
      "Cut prediction jitter by 30%.",
      "Collaborated with Purdue’s RoboMaster algorithm team.",
    ],
  },
  {
    slug: "scanvas",
    title: "Scanvas",
    subtitle: "Attendance via Computer Vision",
    category: "Computer Vision · Systems",
    summary:
      "Web tool that reads handwritten attendance sheets with a custom digit CNN / OCR pipeline and marks students present in Canvas through the LMS API.",
    tags: ["React", "CNN", "OCR", "Canvas API", "OpenCV"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/HusseinHanafy207/Scanvas",
      },
      {
        label: "Live Demo",
        href: "https://scanvas-frontend.vercel.app",
      },
    ],
    highlights: [
      "Custom CNN for handwritten student ID digits.",
      "End-to-end flow from photo upload to Canvas attendance updates.",
    ],
  },
  {
    slug: "model-registry",
    title: "Production-Grade Model Registry & Evaluation System",
    subtitle: "MLOps Platform",
    category: "Software · MLOps",
    summary:
      "Serverless MLOps platform on AWS for automated model registration, versioning, and evaluation with secure REST APIs.",
    tags: ["AWS Lambda", "RDS", "REST APIs", "Python"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Salah-elsayed-2005/ECE30861_Phase2",
      },
    ],
    highlights: [
      "Lambda + RDS architecture for scalable model lifecycle management.",
      "Secure API endpoints for registration, evaluation, and versioning workflows.",
    ],
  },
];

export const skills = [
  {
    group: "Programming Languages",
    items: ["C", "C++", "Python", "Java", "MATLAB"],
  },
  {
    group: "Machine Learning",
    items: [
      "Supervised & Unsupervised Learning",
      "Reinforcement Learning",
      "Scikit-Learn",
    ],
  },
  {
    group: "Deep Learning & Generative Models",
    items: [
      "PyTorch",
      "TensorFlow",
      "Diffusion Models",
      "DDPMs",
      "VAEs",
      "Denoising Score Matching",
    ],
  },
  {
    group: "Computer Vision",
    items: ["OpenCV", "Image Generation", "Image Inpainting"],
  },
  {
    group: "Data Science",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Statistical Analysis",
      "Predictive Modeling",
    ],
  },
  {
    group: "Tools",
    items: ["Git", "ROS2", "AWS"],
  },
  {
    group: "Core Skills",
    items: [
      "Algorithms",
      "Data Structures",
      "Linear Algebra",
      "Probability",
      "Optimization",
    ],
  },
] as const;

export const activities = [
  {
    title: "Competitive Programming Club",
    role: "Member",
    dates: "Oct 2022 – Present",
  },
  {
    title: "IEEE Computer Society EUI SBC",
    role: "President",
    dates: "Oct 2024 – Jun 2025",
  },
  {
    title: "IEEE COMSOC EUI SBC",
    role: "Co-Founder & Secretary",
    dates: "Oct 2023 – Dec 2024",
  },
  {
    title: "EUI Astronomy Club",
    role: "Co-Founder & Treasurer",
    dates: "Apr 2024 – Jun 2025",
  },
  {
    title: "EUI Math Club",
    role: "Co-Founder",
    dates: "Oct 2024 – Jun 2025",
  },
] as const;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProject() {
  return projects.find((p) => p.featured) ?? projects[0];
}
