export interface Teacher {
    id: string;
    name: string;
    designation: string;
    department: string;
    image: string;
    bio?: string;
    quote?: string;
    expertise?: string[];
}

// Helper function for teacher images
const getImageUrl = (fileName: string, extension: string = "png") => {
    return `/images/teachers/${fileName}.${extension}`;
};

// DASCA Faculty Members
export const teachers: Teacher[] = [
    {
        id: "t1",
        name: "Dr. Aarti Karandikar",
        designation: "Head of Department",
        department: "Data Science & Analytics",
        image: getImageUrl("Aarti Karandikar", "JPG"),
        bio: "Pioneering visionary with 15+ years of experience in Data Science and AI. Leading the department towards cutting-edge research and industry-ready education. Passionate about transforming raw data into actionable intelligence and nurturing the next generation of data scientists.",
        quote: "Innovation isn't just about technology—it's about transforming possibilities into reality through data-driven insights.",
        expertise: ["Machine Learning", "Predictive Analytics", "AI Research", "Academic Leadership", "Data Strategy"]
    },
    {
        id: "t2",
        name: "Prof. Neha Tirpude",
        designation: "Faculty Coordinator - DASCA",
        department: "Data Science & Analytics",
        image: getImageUrl("Neha Tirpude"),
        bio: "Dynamic educator and mentor, orchestrating DASCA's vibrant ecosystem of events, hackathons, and workshops. Dedicated to bridging the gap between classroom theory and real-world applications. Champions student growth through hands-on learning and industry collaboration.",
        quote: "Every dataset tells a story—our job is to empower students to become the storytellers of tomorrow's digital world.",
        expertise: ["Student Mentorship", "Event Management", "Data Visualization", "Business Analytics", "Project Coordination"]
    },
    {
        id: "t3",
        name: "Prof. Shweta Bondre",
        designation: "Faculty Coordinator - SSIT",
        department: "Data Science & Analytics",
        image: getImageUrl("Shweta Bondre"),
        bio: "Passionate technologist fostering innovation and excellence in technical education. Spearheading initiatives that blend creativity with analytical thinking. Committed to creating an environment where every student discovers their unique potential and transforms ideas into impactful solutions.",
        quote: "True innovation happens when curiosity meets capability—and every student carries both within them.",
        expertise: ["Technical Innovation", "Software Development", "Deep Learning", "Student Development", "Research Methodology"]
    }
];

// Get unique departments for filtering
export const departments = Array.from(new Set(teachers.map(t => t.department)));