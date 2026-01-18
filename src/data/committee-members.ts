
export type PositionType = "head" | "co-head";
export type YearType = "2025-26" | "2024-25" | "2023-24" | "2022-23";
export type DomainType =
    | "all-domains"
    | "leadership"
    | "executive-members"
    | "events"
    | "cultural"
    | "technical"
    | "creativity"
    | "publicity"
    | "social-media"
    | "photography"
    | "design"
    | "sports"
    | "resource"
    | "venue"
    | "content";

export interface CommitteeMember {
    id: string;
    name: string;
    role: string;
    image: string;
    position: PositionType;
    domain: DomainType;
    year: YearType;
    committee?: string;
}

// Helper function for LOCAL images
const getImageUrl = (fileName: string) => {
    return `/images/members/${fileName}.png`;
};

export const members: CommitteeMember[] = [
    // ==================== HEADS (16 Members) ====================
    // LEADERSHIP
    {
        id: "h1",
        name: "Harsh Saoji",
        position: "head",
        role: "President",
        image: getImageUrl("Harsh Saoji"),
        domain: "leadership",
        year: "2025-26"
    },
    {
        id: "h2",
        name: "Aditya Gugnani",
        position: "head",
        role: "Secretary",
        image: getImageUrl("Aditya Gugnani"),
        domain: "leadership",
        year: "2025-26"
    },
    {
        id: "h3",
        name: "Mehansh Masih",
        position: "head",
        role: "Treasurer",
        image: getImageUrl("Mehansh Masih"),
        domain: "leadership",
        year: "2025-26"
    },

    // Events
    {
        id: "h4",
        name: "Alina Anjum",
        position: "head",
        role: "Event Head",
        image: getImageUrl("Alina Anjum"),
        domain: "events",
        year: "2025-26"
    },
    {
        id: "h5",
        name: "Ishan Kashikar",
        position: "head",
        role: "Event Head",
        image: getImageUrl("Ishan Kashikar"),
        domain: "events",
        year: "2025-26"
    },

    // Cultural
    {
        id: "h6",
        name: "Palak Bang",
        position: "head",
        role: "Cultural Head",
        image: getImageUrl("Palak Bang"),
        domain: "cultural",
        year: "2025-26"
    },

    // Creativity
    {
        id: "h7",
        name: "Niharika Nashine",
        position: "head",
        role: "Creativity Head",
        image: getImageUrl("Niharika Nashine"),
        domain: "creativity",
        year: "2025-26"
    },

    // Publicity
    {
        id: "h8",
        name: "Pranay Rokade",
        position: "head",
        role: "Publicity Head",
        image: getImageUrl("Pranay Rokade"),
        domain: "publicity",
        year: "2025-26"
    },

    // Technical
    {
        id: "h9",
        name: "Kunal Choure",
        position: "head",
        role: "Technical Head",
        image: getImageUrl("Kunal Choure"),
        domain: "technical",
        year: "2025-26"
    },

    // Sports
    {
        id: "h10",
        name: "Prajjwal Mohan",
        position: "head",
        role: "Sports Head",
        image: getImageUrl("Prajjwal Mohan"),
        domain: "sports",
        year: "2025-26"
    },
    {
        id: "h11",
        name: "Akshat Sharma",
        position: "head",
        role: "Sports Head",
        image: getImageUrl("Akshat Sharma"),
        domain: "sports",
        year: "2025-26"
    },

    // Social Media
    {
        id: "h12",
        name: "Ayush Dhote",
        position: "head",
        role: "Social Media Head",
        image: getImageUrl("Ayush Dhote"),
        domain: "social-media",
        year: "2025-26"
    },

    // Photography
    {
        id: "h13",
        name: "Anshu Bagne",
        position: "head",
        role: "Photography Head",
        image: getImageUrl("Anshu Bagne"),
        domain: "photography",
        year: "2025-26"
    },
    {
        id: "h14",
        name: "Ayush Ambule",
        position: "head",
        role: "Photography Head",
        image: getImageUrl("Ayush Ambule"),
        domain: "photography",
        year: "2025-26"
    },

    // Design
    {
        id: "h15",
        name: "Durva Deshpande",
        position: "head",
        role: "Design Head",
        image: getImageUrl("Durva Deshpande"),
        domain: "design",
        year: "2025-26"
    },

    // Resource
    {
        id: "h16",
        name: "Jay Trivedi",
        position: "head",
        role: "Resource Head",
        image: getImageUrl("Jay Trivedi"),
        domain: "resource",
        year: "2025-26"
    },

    // ==================== CO-HEADS (29 Members) ====================
    // LEADERSHIP
    {
        id: "ch1",
        name: "Kavya Chopade",
        position: "co-head",
        role: "Joint Secretary",
        image: getImageUrl("Kavya Chopade"),
        domain: "leadership",
        year: "2025-26"
    },
    {
        id: "ch2",
        name: "Janhavi Welekar",
        position: "co-head",
        role: "Joint Secretary",
        image: getImageUrl("Janhavi Welekar"),
        domain: "leadership",
        year: "2025-26"
    },
    {
        id: "ch3",
        name: "Swapnil Patil",
        position: "co-head",
        role: "Joint Treasurer",
        image: getImageUrl("Swapnil Patil"),
        domain: "leadership",
        year: "2025-26"
    },



    // Events
    {
        id: "ch4",
        name: "Khush Agrawal",
        position: "co-head",
        role: "Event Co-Head",
        image: getImageUrl("khush Agrawal"),
        domain: "events",
        year: "2025-26"
    },
    {
        id: "ch5",
        name: "Manya Mokhalgaya",
        position: "co-head",
        role: "Event Co-Head",
        image: getImageUrl("Manya Mokhalgaya"),
        domain: "events",
        year: "2025-26"
    },

    // Cultural
    {
        id: "ch6",
        name: "Gouri Rajkarne",
        position: "co-head",
        role: "Cultural Co-Head",
        image: getImageUrl("Gouri Rajkarne"),
        domain: "cultural",
        year: "2025-26"
    },
    {
        id: "ch7",
        name: "Krishna Chandak",
        position: "co-head",
        role: "Cultural Co-Head",
        image: getImageUrl("Krishna Chandak"),
        domain: "cultural",
        year: "2025-26"
    },

    // Publicity
    {
        id: "ch8",
        name: "Ansh Chopda",
        position: "co-head",
        role: "Publicity Co-Head",
        image: getImageUrl("Ansh Chopda"),
        domain: "publicity",
        year: "2025-26"
    },
    {
        id: "ch9",
        name: "Rashi Pawar",
        position: "co-head",
        role: "Publicity Co-Head",
        image: getImageUrl("Rashi Pawar"),
        domain: "publicity",
        year: "2025-26"
    },

    // Technical
    {
        id: "ch10",
        name: "Kanak Agrawal",
        position: "co-head",
        role: "Technical Co-Head",
        image: getImageUrl("Kanak Agrawal"),
        domain: "technical",
        year: "2025-26"
    },
    {
        id: "ch11",
        name: "Akshay Parihar",
        position: "co-head",
        role: "Technical Co-Head",
        image: getImageUrl("Akshay Parihar"),
        domain: "technical",
        year: "2025-26"
    },

    // Creativity
    {
        id: "ch12",
        name: "Palak Ganwani",
        position: "co-head",
        role: "Creativity Co-Head",
        image: getImageUrl("Palak Ganwani"),
        domain: "creativity",
        year: "2025-26"
    },
    {
        id: "ch13",
        name: "Kshitij Chilate",
        position: "co-head",
        role: "Creativity Co-Head",
        image: getImageUrl("kshitij Chilate"),
        domain: "creativity",
        year: "2025-26"
    },

    // Social Media
    {
        id: "ch14",
        name: "Aryaman Verma",
        position: "co-head",
        role: "Social Media Co-Head",
        image: getImageUrl("Aryaman Verma"),
        domain: "social-media",
        year: "2025-26"
    },
    {
        id: "ch15",
        name: "Prathamesh Rathod",
        position: "co-head",
        role: "Social Media Co-Head",
        image: getImageUrl("Prathamesh Rathod"),
        domain: "social-media",
        year: "2025-26"
    },

    // Design
    {
        id: "ch16",
        name: "Rishil Pawar",
        position: "co-head",
        role: "Design Co-Head",
        image: getImageUrl("Rishil Pawar"),
        domain: "design",
        year: "2025-26"
    },
    {
        id: "ch17",
        name: "Prajakta Tiwari",
        position: "co-head",
        role: "Design Co-Head",
        image: getImageUrl("Prajakta Tiwari"),
        domain: "design",
        year: "2025-26"
    },

    // Photography
    {
        id: "ch18",
        name: "Bhargav Lende",
        position: "co-head",
        role: "Photography Co-Head",
        image: getImageUrl("Bhargav Lende"),
        domain: "photography",
        year: "2025-26"
    },
    {
        id: "ch19",
        name: "Uday Chandak",
        position: "co-head",
        role: "Photography Co-Head",
        image: getImageUrl("Uday Chandak"),
        domain: "photography",
        year: "2025-26"
    },

    // Sports
    {
        id: "ch20",
        name: "Anushka Chavan",
        position: "co-head",
        role: "Sports Co-Head",
        image: getImageUrl("Anushka Chavan"),
        domain: "sports",
        year: "2025-26"
    },
    {
        id: "ch21",
        name: "Tanmay Gaikwad",
        position: "co-head",
        role: "Sports Co-Head",
        image: getImageUrl("Tanmay Gaikwad"),
        domain: "sports",
        year: "2025-26"
    },

    // Resource
    {
        id: "ch22",
        name: "Samarth Zawar",
        position: "co-head",
        role: "Resource Co-Head",
        image: getImageUrl("Samarth Zawar"),
        domain: "resource",
        year: "2025-26"
    },
    {
        id: "ch23",
        name: "Pranav Tapdiya",
        position: "co-head",
        role: "Resource Co-Head",
        image: getImageUrl("Pranav Tapdiya"),
        domain: "resource",
        year: "2025-26"
    },

    // Venue
    {
        id: "ch24",
        name: "Piyush Chhagani",
        position: "co-head",
        role: "Venue Incharge",
        image: getImageUrl("Piyush Chhagani"),
        domain: "venue",
        year: "2025-26"
    },
    {
        id: "ch25",
        name: "Aditya Pandey",
        position: "co-head",
        role: "Venue Incharge",
        image: getImageUrl("Aditya Pandey"),
        domain: "venue",
        year: "2025-26"
    },

    // Content & Outreach
    {
        id: "ch26",
        name: "Priyal Khandelwal",
        position: "co-head",
        role: "Content & Outreach Incharge",
        image: getImageUrl("Priyal Khandelwal"),
        domain: "content",
        year: "2025-26"
    },
    {
        id: "ch27",
        name: "Anagha Bhattad",
        position: "co-head",
        role: "Content & Outreach Incharge",
        image: getImageUrl("Anagha Bhattad"),
        domain: "content",
        year: "2025-26"
    },

    // EXECUTIVE MEMBERS
    {
        id: "ch28",
        name: "Vedansh Gupta",
        position: "co-head",
        role: "Executive Member",
        image: getImageUrl("Vedansh Gupta"),
        domain: "executive-members",
        year: "2025-26"
    },
    {
        id: "ch29",
        name: "Parth Thakur",
        position: "co-head",
        role: "Executive Member",
        image: getImageUrl("Parth Thakur"),
        domain: "executive-members",
        year: "2025-26"
    }
];
