export const site = {
  name: "Hussein Hamouda",
  shortName: "Hussein",
  role: "Senior Computer Engineering student · Purdue & EUI",
  about: [
    "I'm a senior Computer Engineering student at Purdue University and Egypt University of Informatics (EUI).",
    "My research interests lie broadly in machine learning, particularly generative models (including LLMs and diffusion models) and reinforcement learning. I'm especially interested in understanding how these models learn and behave, and developing methods to make them more reliable, robust, and generalizable.",
  ],
  collaboration:
    "Open to research collaborations and project opportunities — feel free to reach out.",
  email: "hanafy@purdue.edu",
  resumeUrl:
    "https://drive.google.com/file/d/1gKqjknm8S_7iZx93dq7scr3lKGIDjk7W/view?usp=sharing",
  github: "https://github.com/HusseinHanafy207",
  linkedin: "https://www.linkedin.com/in/hussein-hanafy",
  scholar: "https://scholar.google.com/citations?user=R9SHviwAAAAJ&hl=en",
  photo: "/me.jpg",
} as const;

export const nav = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#awards", label: "Awards" },
  { href: "/#skills", label: "Skills" },
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

export const awards = [
  {
    title: "David Rush Cannon Memorial Scholarship in ECE",
    detail:
      "Selected by the Elmore Family School of Electrical and Computer Engineering at Purdue University for a $3,000 scholarship for the 2026–27 academic year.",
  },
  {
    title: "Full scholarship — Purdue University",
    detail:
      "Awarded a full scholarship to study at Purdue University for the senior year under the dual-degree agreement (sponsored by Microsoft).",
  },
  {
    title: "Full scholarship — Egypt University of Informatics",
    detail:
      "Awarded a full scholarship to study at Egypt University of Informatics, 2022 (sponsored by Microsoft).",
  },
  {
    title: "9th nationally — Math section",
    detail:
      "Ranked 9th nationally in Egypt’s secondary-school exams (Math section), 2022.",
  },
] as const;

export const experience = [
  {
    org: "Purdue University",
    title: "Undergraduate Teaching Assistant",
    dates: "Aug 2025 – Present",
    bullets: [
      "TA for ECE 20875 (Python for Data Science), ECE 30200 (Probabilistic Methods), and ECE 30100 (Signals and Systems), conducting office hours, explaining core concepts, and mentoring students on assignments and analytical problem-solving.",
    ],
  },
  {
    org: "Commercial International Bank (CIB)",
    title: "Intern",
    dates: "Jul 2026 – Aug 2026",
    bullets: [
      "Explored Generative AI and LLM-based approaches for banking use cases, applying data analysis and visualization to investigate AI-driven solutions and derive actionable insights.",
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
  title: string;
  summary: string;
  bullets: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Latent Diffusion Super-Resolution",
    summary:
      "Developed a latent diffusion super-resolution pipeline in PyTorch to study whether stronger low-resolution latent representations improve 4× face super-resolution on CelebA.",
    bullets: [
      "Designed an SR-aware VAE that improved LR soft-decode quality by +2.33 dB PSNR (26.15 → 28.48 dB), yet yielded only +0.22 dB after diffusion, revealing a substantial conditioning-transfer gap.",
      "Diagnosed the gap via reverse-process trajectory analysis, observing strong mid-sampling alignment with the LR condition (cosine 0.985) followed by late-stage loss of alignment.",
      "Introduced inference-time LR-consistency guidance that recovered 56% of the transfer gap, improving PSNR from 26.33 → 27.50 dB on a confirmatory n = 256 evaluation.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/HusseinHanafy207/LatentSR",
      },
      {
        label: "Report",
        href: "https://drive.google.com/file/d/1GQPq_B92QjI5cMKypeAmvcG4BpYLtUve/view?usp=sharing",
      },
    ],
  },
  {
    title: "RePaint and Diffusion Sampling for Image Inpainting",
    summary:
      "Built and evaluated mask-conditioned and unconditional DDPM inpainting models with RePaint, using paired, seed-matched CelebA experiments to study resampling behavior.",
    bullets: [
      "Found that increasing RePaint resampling degraded conditioned models by 2.73 dB PSNR while improving unconditional models by up to 2.22 dB, revealing a conditioning-dependent reversal.",
      "Tested alternative explanations with matched-coverage brush masks and RePaint’s pretrained CelebA-HQ model, showing the effect was specific to large contiguous holes and consistent with conditioning rather than masked area or architecture alone.",
      "Proposed that repeated resampling can interfere with constraints already encoded by conditioned models.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/HusseinHanafy207/diffusion-image-inpainting",
      },
      {
        label: "Paper",
        href: "https://drive.google.com/file/d/1CD_HEA0Ecc_Nqksx0QIa6tCETqOMW5Xt/view?usp=drive_link",
      },
    ],
  },
  {
    title: "Adversarial Reinforcement Learning Comparison in Fighting Games",
    summary:
      "Implemented and benchmarked DQN, Rainbow DQN, PPO, and PPG in FightingICE under a shared 145-dimensional state representation and 56-action interface.",
    bullets: [
      "Evaluated 1,364 episodes across return, win rate, convergence, training stability, and learning dynamics under comparable computational budgets.",
      "Observed a consistent PPG > PPO > Rainbow > DQN hierarchy, with policy-gradient methods substantially outperforming value-based approaches.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/HusseinHanafy207/DareFightingICE-7.0-_RL_Purdue",
      },
      {
        label: "Report",
        href: "https://drive.google.com/file/d/1X2MKbhK75nWEQJvSk8bbW40xVXiS-kXs/view?usp=sharing",
      },
    ],
  },
];

export const skills = [
  {
    group: "Programming",
    items: "Python, C/C++, Java, MATLAB",
  },
  {
    group: "ML & Deep Learning",
    items: "PyTorch, TensorFlow, Scikit-learn, OpenCV",
  },
  {
    group: "Scientific Computing",
    items: "NumPy, Pandas, Matplotlib, Seaborn",
  },
  {
    group: "Tools & Frameworks",
    items: "Git, ROS 2, AWS",
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
