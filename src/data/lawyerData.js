import { FaScaleBalanced, FaUserShield, FaBuilding, FaUsers, FaFileSignature, FaHandshake } from "react-icons/fa6";

export const lawyerData = {
  personalInfo: {
    name: "Aman Sharma",
    title: "Advocate Aman Sharma",
    initials: "AS",
    tagline: "Delivering Trusted Legal Solutions.",
    subtext: "Experienced Advocate specializing in Civil, Criminal, and Corporate Law.",
    description: "Advocate with 8+ years of experience representing clients in district courts, high courts, and tribunals. Dedicated to providing strategic legal advice, strong courtroom representation, and reliable legal solutions.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800", // Professional Indian advocate portrait
  },
  contact: {
    phone: "+91 98765 43210",
    email: "contact@amansharmalaw.com",
    address: "Chamber No. 214\nDelhi High Court Complex\nNew Delhi – 110003",
    hours: "Monday – Saturday\n10:00 AM – 6:00 PM"
  },
  practiceAreas: [
    {
      id: "civil",
      title: "Civil Litigation",
      description: "Representing clients in property disputes, contract disputes, and recovery suits.",
      icon: FaScaleBalanced,
    },
    {
      id: "criminal",
      title: "Criminal Defense",
      description: "Handling bail matters, trial representation, and criminal appeals.",
      icon: FaUserShield,
    },
    {
      id: "corporate",
      title: "Corporate Law",
      description: "Advising businesses on contracts, compliance, and disputes.",
      icon: FaBuilding,
    },
    {
      id: "family",
      title: "Family Law",
      description: "Handling divorce, custody, and family dispute matters.",
      icon: FaUsers,
    },
    {
      id: "documentation",
      title: "Legal Documentation",
      description: "Drafting agreements, notices, and contracts.",
      icon: FaFileSignature,
    },
    {
      id: "arbitration",
      title: "Arbitration & Mediation",
      description: "Resolving disputes outside court through mediation.",
      icon: FaHandshake,
    }
  ],
  experience: [
    {
      id: 1,
      role: "Senior Advocate",
      firm: "Sharma & Associates",
      period: "January 2021 – Present",
      responsibilities: [
        "Represent clients before District Courts and High Court",
        "Draft legal notices, contracts, and petitions",
        "Provide legal advisory to corporate clients"
      ]
    },
    {
      id: 2,
      role: "Associate Advocate",
      firm: "Verma Legal Chambers",
      period: "July 2017 – December 2020",
      responsibilities: [
        "Assisted in civil and criminal litigation",
        "Prepared legal documentation",
        "Conducted legal research and case preparation"
      ]
    }
  ],
  expertise: [
    {
      category: "Civil Law",
      skills: "Property disputes, injunctions, and litigation."
    },
    {
      category: "Criminal Law",
      skills: "Defense strategy, bail matters, and trial representation."
    },
    {
      category: "Corporate Law",
      skills: "Business contracts and legal compliance."
    },
    {
      category: "Family Law",
      skills: "Divorce, custody, and family settlement cases."
    },
    {
      category: "Legal Drafting",
      skills: "Contracts, legal notices, affidavits."
    }
  ],
  courts: [
    "Supreme Court of India",
    "High Court of Delhi",
    "District Courts",
    "Consumer Dispute Redressal Commission",
    "National Company Law Tribunal"
  ],
  certifications: [
    {
      id: 1,
      title: "LLB – Bachelor of Laws",
      institution: "University of Delhi",
      year: "2013 – 2016"
    },
    {
      id: 2,
      title: "Bar Council Registration",
      institution: "Bar Council of Delhi",
      year: "Enrollment No: D/1234/2017"
    },
    {
      id: 3,
      title: "Certificate in Corporate Law Practice",
      institution: "Indian Law Institute",
      year: ""
    }
  ],
  testimonials: [
    {
      id: 1,
      quote: "Advocate Aman Sharma handled my property dispute case professionally and provided excellent legal guidance.",
      client: "Rajiv Kumar",
    },
    {
      id: 2,
      quote: "Highly recommended for corporate legal matters. Aman ensures all our legal compliances are strictly met.",
      client: "Priya Desai",
    }
  ]
};
