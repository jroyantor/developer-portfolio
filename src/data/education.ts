export interface EducationItem {
  school: string;
  degree: string;
  duration: string;
  description: string;
  image: string;
}

export const education: EducationItem[] = [
    {
      school: "Stanford University",
      degree: "MSc. in Computer Science and Engineering",
      duration: "May 2019 – May 2023",
      description: "Continuing a master's in Information Security focusing on cybersecurity protocols, network defense systems, and ethical hacking practices.",
      image: "/images/stanford.png"
  },
  {
    school: "Bangladesh University of Engineering and Technology",
    degree: "BSc. Engineering in Computer Science and Engineering",
    duration: "2014-2018",
    description: "Specialized in software engineering, algorithms, databases, and web technologies with hands-on project development.",
    image: "/images/buet.png"
  }
];
