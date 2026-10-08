export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  pmdc: string;
  experienceYears: number;
  specialty: string;
  image: string;
  bio: string;
  schedule: string;
  languages: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  startingPrice: string;
  iconName: string;
  category: string;
  features: string[];
  duration: string;
}

export interface Review {
  id: string;
  patientName: string;
  locality: string;
  rating: number;
  date: string;
  comment: string;
  treatment: string;
  verified: boolean;
}

export const CLINIC_INFO = {
  name: "SmileCraft Dental Clinic",
  tagline: "Your Smile, Our Priority — Gentle & Modern Dental Care",
  establishedYear: 2017,
  googleRating: 4.8,
  totalReviews: 640,
  happyPatients: "5,000+",
  phone: "021-34851234",
  phoneRaw: "02134851234",
  whatsapp: "0300-1234567",
  whatsappRaw: "923001234567",
  address: "Shop No. 12, Ground Floor, Al-Noor Plaza, near Metro Cash & Carry, Gulshan-e-Iqbal Block 5, Karachi",
  shortAddress: "Gulshan-e-Iqbal Block 5, Karachi",
  timing: "Mon–Sat 10:00 AM – 9:00 PM | Sunday Closed",
  timingWeekdays: "10:00 AM – 9:00 PM",
  timingSunday: "Closed (Emergency on Call)",
  landmark: "Opposite Metro Cash & Carry entrance, Al-Noor Plaza Ground Floor",
  parkingInfo: "Dedicated free ground floor parking available for patients at Al-Noor Plaza",
  email: "info@smilecraftdental.pk",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.398939202528!2d67.0950!3d24.9215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU1JzE3LjQiTiA2N8KwMDUnNDIuMCJF!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk",
};

export const DOCTORS: Doctor[] = [
  {
    id: "dr-hamza-malik",
    name: "Dr. Hamza Malik",
    title: "Chief Dental Surgeon & Implantologist",
    qualifications: "BDS (KMC), FCPS (Oral & Maxillofacial Surgery), FICOI (USA)",
    pmdc: "PMDC Reg # 14892-D",
    experienceYears: 12,
    specialty: "Dental Implants, Surgical Extractions & Root Canals",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
    bio: "Dr. Hamza Malik founded SmileCraft Dental Clinic in 2017 with the goal of bringing painless, international-standard dental care to Gulshan-e-Iqbal. With over 12 years of clinical experience, he specializes in complex dental implant procedures, wisdom tooth extractions, and restorative dentistry.",
    schedule: "Mon - Sat: 11:00 AM - 4:00 PM & 6:00 PM - 9:00 PM",
    languages: ["English", "Urdu"],
  },
  {
    id: "dr-ayesha-khan",
    name: "Dr. Ayesha Khan",
    title: "Senior Cosmetic & Restorative Dentist",
    qualifications: "BDS (DUHS), RDS, Certified in Aesthetic Dentistry (London)",
    pmdc: "PMDC Reg # 18920-D",
    experienceYears: 8,
    specialty: "Teeth Whitening, Veneers, Smile Makeovers & Pediatric Dentistry",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    bio: "Dr. Ayesha Khan is renowned for her gentle demeanor and artistic approach to smile design. She has performed over 1,500 successful teeth whitening and veneer treatments. Patients praise her soft-spoken nature and ability to put anxious adults and children completely at ease.",
    schedule: "Mon - Sat: 10:00 AM - 3:00 PM",
    languages: ["English", "Urdu"],
  },
  {
    id: "dr-bilal-ahmed",
    name: "Dr. Bilal Ahmed",
    title: "Consultant Orthodontist (Braces & Aligners)",
    qualifications: "BDS (LCMD), M.Sc Orthodontics (UK), Member PAPO",
    pmdc: "PMDC Reg # 16410-D",
    experienceYears: 10,
    specialty: "Clear Aligners, Metal & Ceramic Braces, Jaw Realignment",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
    bio: "Dr. Bilal Ahmed is a specialist orthodontist passionate about transforming misaligned teeth into straight, functional, confidence-boosting smiles. He stays at the cutting edge of digital aligner technology and low-friction ceramic brace systems.",
    schedule: "Tue, Thu, Sat: 4:00 PM - 9:00 PM",
    languages: ["English", "Urdu"],
  },
];

export const SERVICES: Service[] = [
  {
    id: "teeth-whitening",
    title: "Laser Teeth Whitening",
    shortDesc: "Brighten your smile up to 6 shades lighter in a single 45-minute painless clinic session.",
    fullDesc: "Our advanced German LED cold-laser whitening system removes deep stains caused by tea, coffee, smoking, and aging safely without harming your tooth enamel or causing sharp sensitivity.",
    startingPrice: "Rs. 14,999",
    iconName: "Sparkles",
    category: "Cosmetic Dentistry",
    features: [
      "Single session 45-minute procedure",
      "Painless cold-laser technology",
      "Includes complimentary tooth polishing",
      "Results last up to 18-24 months",
    ],
    duration: "45 mins",
  },
  {
    id: "root-canal",
    title: "Single-Visit Root Canal",
    shortDesc: "Painless computerized root canal treatment to save your natural infected tooth.",
    fullDesc: "Forget the old painful root canal horror stories. Using rotary endodontic tech and apex locators, Dr. Hamza performs 90% of root canals in a single comfortable, virtually pain-free visit under local anesthesia.",
    startingPrice: "Rs. 8,500",
    iconName: "Activity",
    category: "General Dentistry",
    features: [
      "Computerized rotary technology",
      "High-precision digital apex locator",
      "Virtually pain-free procedure",
      "Natural tooth retention solution",
    ],
    duration: "60 mins",
  },
  {
    id: "braces-aligners",
    title: "Clear Aligners & Braces",
    shortDesc: "Straighten teeth discreetly with invisible aligners or high-grade ceramic/metal braces.",
    fullDesc: "Get a perfectly aligned bite without metal wires using modern 3D clear aligners, or opt for traditional self-ligating ceramic braces with easy monthly installment packages tailored for students and working professionals.",
    startingPrice: "Rs. 120,000",
    iconName: "Smile",
    category: "Orthodontics",
    features: [
      "3D Digital Aligner simulations",
      "Invisible aesthetic option",
      "Flexible monthly installment plan available",
      "Free initial orthodontic assessment",
    ],
    duration: "6 - 18 months",
  },
  {
    id: "dental-implants",
    title: "Permanent Dental Implants",
    shortDesc: "Replace missing teeth permanently with titanium implants that look & feel 100% real.",
    fullDesc: "Implants are the gold standard for missing teeth replacement. Made of biocompatible titanium with natural-looking porcelain crowns, they restore 100% chewing function without damaging neighboring teeth.",
    startingPrice: "Rs. 65,000",
    iconName: "ShieldCheck",
    category: "Implantology",
    features: [
      "Lifetime warranty titanium posts",
      "Restores full chewing strength",
      "Zero damage to adjacent natural teeth",
      "Custom computer-guided placement",
    ],
    duration: "2 - 3 visits",
  },
  {
    id: "kids-dentistry",
    title: "Pediatric / Kids Dentistry",
    shortDesc: "Gentle, stress-free dental care designed specifically to keep young smiles healthy.",
    fullDesc: "We take extra care of our little patients! From cavity-preventing fluoride varnishes and sealant coatings to painless baby tooth fillings, our clinic atmosphere makes children look forward to their dental visits.",
    startingPrice: "Rs. 3,000",
    iconName: "HeartHandshake",
    category: "Pediatric",
    features: [
      "Child-friendly doctor & environment",
      "Fluoride treatment & fissure sealants",
      "Painless baby tooth care",
      "Free dental hygiene education for kids",
    ],
    duration: "30 mins",
  },
  {
    id: "emergency-care",
    title: "Same-Day Emergency Care",
    shortDesc: "Immediate relief for severe toothache, broken teeth, bleeding gums, or lost fillings.",
    fullDesc: "Tooth pain doesn't wait! We reserve daily priority slots for urgent dental emergencies in Gulshan-e-Iqbal. Call or WhatsApp us for instant triage and same-day relief.",
    startingPrice: "Rs. 2,500",
    iconName: "Zap",
    category: "Emergency",
    features: [
      "Same-day walk-in or phone slots",
      "Instant pain relief medication & dressing",
      "Trauma & broken tooth repair",
      "Direct line to doctor on WhatsApp",
    ],
    duration: "Immediate",
  },
];

export const ALL_PRICES = [
  { service: "Scaling & Polishing (Teeth Cleaning)", price: "Rs. 3,500", notes: "Includes stain removal & consultation" },
  { service: "Deep Gum Scaling & Root Planing", price: "Rs. 6,000", notes: "Per quadrant for gum disease care" },
  { service: "Composite Tooth-Colored Filling", price: "Rs. 3,000 - 4,500", notes: "Depending on cavity depth" },
  { service: "Single Visit Root Canal (RCT)", price: "Rs. 8,500 - 12,000", notes: "Depending on tooth position (Anterior vs Molar)" },
  { service: "Zirconia Porcelain Crown (Cap)", price: "Rs. 14,000", notes: "High strength, 5-year guarantee" },
  { service: "PFM Dental Crown", price: "Rs. 8,500", notes: "Porcelain fused to metal" },
  { service: "Laser Teeth Whitening", price: "Rs. 14,999", notes: "Full mouth in-clinic treatment" },
  { service: "Porcelain / E-max Veneers", price: "Rs. 22,000", notes: "Per tooth custom smile design" },
  { service: "Dental Implant (Titanium Post + Crown)", price: "Rs. 65,000 - 85,000", notes: "European / Korean FDA approved brands" },
  { service: "Metal Braces Treatment (Full Course)", price: "Rs. 75,000 - 95,000", notes: "Installments available (Rs. 5,000/month)" },
  { service: "3D Clear Aligners", price: "Rs. 120,000 - 180,000", notes: "Depending on case complexity" },
  { service: "Simple Tooth Extraction", price: "Rs. 2,500", notes: "Painless extraction with local anesthesia" },
  { service: "Surgical Wisdom Tooth Extraction", price: "Rs. 9,000 - 14,000", notes: "Performed by FCPS Surgeon" },
  { service: "Kids Fluoride Coating & Polish", price: "Rs. 3,000", notes: "Full mouth protective varnish" },
  { service: "Night Guard / Sports Mouthguard", price: "Rs. 6,500", notes: "Custom molded for grinding protection" },
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    patientName: "Muhammad Farhan Siddiqui",
    locality: "Gulshan-e-Iqbal Block 5",
    rating: 5,
    date: "2 weeks ago",
    comment: "Bohot Zabardast experience! I was terrifyingly scared of root canals because of past bad experiences elsewhere. Dr. Hamza Malik explained everything calmly and I literally felt zero pain. Studio clean hai aur timing bohot punctual hai. Highly recommended in Gulshan!",
    treatment: "Root Canal & Zirconia Crown",
    verified: true,
  },
  {
    id: "rev-2",
    patientName: "Sadia Owais",
    locality: "Johar Block 12, Karachi",
    rating: 5,
    date: "1 month ago",
    comment: "Got laser teeth whitening done by Dr. Ayesha Khan before my brother's wedding. The difference is night and day! My teeth look super bright yet completely natural. Al-Noor Plaza parking was also very easy.",
    treatment: "Laser Teeth Whitening",
    verified: true,
  },
  {
    id: "rev-3",
    patientName: "Tariq Mahmood",
    locality: "FB Area, Karachi",
    rating: 5,
    date: "3 weeks ago",
    comment: "Brought my 7-year-old daughter who was crying due to toothache. Dr. Ayesha handled her so gently with cartoon distractions and painless filling. Now my daughter actually wants to go back! Genuine 5 star service.",
    treatment: "Pediatric Filling & Cleaning",
    verified: true,
  },
  {
    id: "rev-4",
    patientName: "Syed Bilal Hashmi",
    locality: "PECHS Block 6",
    rating: 5,
    date: "2 months ago",
    comment: "Dr. Bilal Ahmed started my Clear Aligners treatment 5 months ago. Progress updates are smooth, and the installment facility in PKR made it super manageable for my budget. Professional staff and immaculate hygiene standards.",
    treatment: "Clear Aligners",
    verified: true,
  },
  {
    id: "rev-5",
    patientName: "Mrs. Nighat Kazmi",
    locality: "Gulshan Block 3",
    rating: 5,
    date: "1 month ago",
    comment: "Got 2 dental implants placed by Dr. Hamza. Being 54 with diabetes, I was nervous, but Dr. Malik took all medical precautions. Surgery smooth thi aur recovery main bilkul masla nahi hua. Metro Cash & Carry kay bilkul pass hai place.",
    treatment: "Dental Implants",
    verified: true,
  },
];

export const FAQS = [
  {
    q: "Is a root canal treatment painful at SmileCraft?",
    a: "Not at all. We use advanced computerized rotary equipment and precise localized anesthesia. Most patients report feeling no pain during the procedure, comparable to receiving a routine filling.",
  },
  {
    q: "Do you offer installment plans for Braces or Aligners?",
    a: "Yes! We offer flexible, zero-interest monthly installment plans for both traditional metal/ceramic braces and 3D clear aligners. After an initial down payment, monthly payments start as low as Rs. 5,000.",
  },
  {
    q: "Where is the clinic located in Gulshan-e-Iqbal?",
    a: "We are located at Shop No. 12, Ground Floor, Al-Noor Plaza, right near Metro Cash & Carry in Gulshan-e-Iqbal Block 5, Karachi. We have free ground-floor parking for patients.",
  },
  {
    q: "How long does teeth whitening take and how much does it cost?",
    a: "Our in-clinic Laser Teeth Whitening takes approximately 45 minutes in a single session. The standard package starts at Rs. 14,999, which includes pre-cleaning and post-whitening tooth enamel protection.",
  },
  {
    q: "What sterilization protocols do you follow?",
    a: "Patient safety is our top priority. We follow strict international 100% B-Class Autoclave steam sterilization for all reusable instruments. Every instrument pouch is opened fresh right in front of the patient.",
  },
  {
    q: "Can I book a same-day appointment for severe toothache?",
    a: "Yes! We keep emergency consultation slots open daily. You can call us directly at 021-34851234 or send a WhatsApp message to 0300-1234567 for immediate assistance.",
  },
];
