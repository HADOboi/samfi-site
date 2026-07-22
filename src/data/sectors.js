import { BriefcaseBusiness, Compass, GraduationCap, Boxes } from "lucide-react";

export const sectors = [
  {
    number: "01",
    slug: "/services/management-consultancy",
    label: "Management Consultancy",
    eyebrow: "Strategy with substance",
    title: "Clearer direction. Better decisions.",
    short:
      "A practical partner for organisations navigating complexity and change.",
    preview:
      "We help leadership teams turn difficult questions into clear choices, shared direction and plans that can be acted on.",
    description:
      "SAMFI works alongside leaders and teams to create clarity where it matters most: strategy, structure, delivery and the conversations that connect them.",
    imageLabel: "Leadership workshop / strategy session",
    icon: BriefcaseBusiness,
    offerings: [
      "Strategic planning & institutional review",
      "Organisational design & operating models",
      "Change and transformation support",
      "Programme design & delivery assurance",
    ],
    color: "clay",
  },
  {
    number: "02",
    slug: "/services/personal-empowerment",
    label: "Personal Empowerment",
    eyebrow: "Clean the noise. Elevate the person.",
    title: "Clear the blocks. Elevate your potential.",
    short: "Psychology-informed support for more grounded, capable growth.",
    preview:
      "Our experts help people understand the mental blocks that hold them back, so they can build healthier patterns, confidence and forward movement.",
    description:
      "Personal growth is not about pushing harder. SAMFI creates a considered space to recognise what is getting in the way, clear the noise and build the awareness and agency needed to move forward.",
    imageLabel: "One-to-one guidance / wellbeing session",
    icon: Compass,
    offerings: [
      "Psychology-informed personal development",
      "Confidence, resilience & self-awareness",
      "Purpose and career clarity",
      "Wellbeing & growth programmes",
    ],
    color: "sage",
  },
  {
    number: "03",
    slug: "/services/training-development",
    label: "Training & Development",
    eyebrow: "Learning that makes a difference",
    title: "Capability that lifts the whole organisation.",
    short:
      "Applied training for teachers, students, employees and institutions.",
    preview:
      "We create relevant learning experiences that strengthen people, improve performance and help organisations work with more confidence.",
    description:
      "From classrooms to workplaces, SAMFI brings the right experts and the right learning design together. Every programme is shaped around real people, real context and measurable improvement.",
    imageLabel: "Training programme / learning environment",
    icon: GraduationCap,
    offerings: [
      "Teacher & student development",
      "Employee capability programmes",
      "Organisation-wide learning design",
      "Facilitation, coaching & evaluation",
    ],
    color: "ochre",
  },
  {
    number: "04",
    slug: "/services/digital-solutions",
    label: "Digital Solutions",
    eyebrow: "Technology that moves work forward",
    title: "Digital products, built to perform.",
    short: "Web, app and software development for organisations ready to grow.",
    preview:
      "A focused technology team that designs and develops useful, reliable products for real business needs.",
    description:
      "Digital Solutions is our dedicated technology practice: a focused team for useful, reliable digital products that meet real business needs.",
    icon: Boxes,
    offerings: ["Web development", "App development", "Software development"],
    color: "blue",
    template: "solutions",
  },
];
