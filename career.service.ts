import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  dataSet:any=[
    {
      "category": "Engineering",
      "path": "Complete Diploma/Complete 12th (PCM) → Pursue B.Tech/BE → Specialize in Mechanical, Computer Science, Civil, etc. → Higher Studies (M.Tech, MS, MBA) → Job/Research/Entrepreneurship",
      "opportunities": [
        {
          "title": "Software Engineer",
          "description": "Design, develop, and maintain software applications to solve real-world problems.",
          "exams_required": ["JEE Main", "JEE Advanced", "State Entrance Exams"],
          "specializations": ["Web Development", "Mobile Applications", "Cloud Computing", "AI/ML"],
          "other": ["Requires strong programming and problem-solving skills."]
        },
        {
          "title": "Mechanical Engineer",
          "description": "Work with machines, mechanical systems, and manufacturing processes.",
          "exams_required": ["JEE Main", "JEE Advanced", "GATE"],
          "specializations": ["Automobile Engineering", "Robotics", "Aerospace Engineering"],
          "other": ["Focus on design, analysis, and maintenance of mechanical systems."]
        },
        {
          "title": "Civil Engineer",
          "description": "Plan, design, and oversee construction projects like buildings, bridges, and roads.",
          "exams_required": ["JEE Main", "State Entrance Exams", "GATE"],
          "specializations": ["Structural Engineering", "Environmental Engineering", "Urban Planning"],
          "other": ["Work closely with architects and construction teams."]
        },
        {
          "title": "Electrical Engineer",
          "description": "Design and develop electrical systems and devices.",
          "exams_required": ["JEE Main", "JEE Advanced", "GATE"],
          "specializations": ["Power Systems", "Renewable Energy", "Electronics"],
          "other": ["Requires expertise in electrical circuits and systems."]
        },
        {
          "title": "Data Scientist",
          "description": "Analyze and interpret complex data to help decision-making.",
          "exams_required": ["B.Tech/BE in CS/IT", "GATE"],
          "specializations": ["Big Data", "AI/ML", "Data Analysis"],
          "other": ["Requires strong statistical and analytical skills."]
        },
        {
          "title": "Aerospace Engineer",
          "description": "Design and maintain aircraft, spacecraft, and related technologies.",
          "exams_required": ["JEE Main", "JEE Advanced"],
          "specializations": ["Aerodynamics", "Propulsion Systems", "Avionics"],
          "other": ["Focus on high-precision and safety."]
        },
        {
          "title": "Chemical Engineer",
          "description": "Develop and optimize processes for chemical production and use.",
          "exams_required": ["JEE Main", "JEE Advanced"],
          "specializations": ["Petrochemical Engineering", "Process Engineering", "Material Science"],
          "other": ["Requires understanding of chemical processes and safety."]
        },
        {
          "title": "Environmental Engineer",
          "description": "Develop solutions for environmental issues and sustainability.",
          "exams_required": ["JEE Main", "State Entrance Exams"],
          "specializations": ["Water Resource Management", "Air Quality Control"],
          "other": ["Focus on pollution control and ecological balance."]
        },
        {
          "title": "AI Engineer",
          "description": "Develop AI systems and models to automate processes.",
          "exams_required": ["B.Tech/BE in CS/IT", "GATE"],
          "specializations": ["Natural Language Processing", "Computer Vision"],
          "other": ["Requires advanced knowledge of AI/ML."]
        },
        {
          "title": "Biomedical Engineer",
          "description": "Develop technologies for medical and healthcare applications.",
          "exams_required": ["JEE Main", "State Entrance Exams"],
          "specializations": ["Medical Imaging", "Biomaterials", "Rehabilitation Engineering"],
          "other": ["Combines engineering and medical sciences."]
        }
      ]
    },
    {
      "category": "Medical",
      "path": "Complete 12th (PCB) → Pursue MBBS/BDS/BAMS → Specialize (MD, MS, MCh, etc.) → Hospital Practice/Clinical Research → Higher Studies",
      "opportunities": [
        {
          "title": "Doctor",
          "description": "Diagnose and treat illnesses to improve patients' health.",
          "exams_required": ["NEET UG", "NEET PG", "AIIMS Entrance"],
          "specializations": ["Cardiology", "Neurology", "Orthopedics", "Pediatrics"],
          "other": ["Extensive education and practice required to become a licensed doctor."]
        },
        {
          "title": "Surgeon",
          "description": "Perform surgical operations to treat injuries and diseases.",
          "exams_required": ["NEET PG", "MS Entrance Exams"],
          "specializations": ["General Surgery", "Plastic Surgery", "Cardiac Surgery"],
          "other": ["Requires advanced skills and precision."]
        },
        {
          "title": "Dentist",
          "description": "Treat oral diseases, maintain dental hygiene, and perform oral surgeries.",
          "exams_required": ["NEET UG", "State Entrance Exams"],
          "specializations": ["Orthodontics", "Periodontics", "Prosthodontics"],
          "other": ["Work in clinics or hospitals."]
        },
        {
          "title": "Pharmacist",
          "description": "Prepare and dispense medications while advising on their use.",
          "exams_required": ["State Pharmacy Entrance Exams", "GPAT"],
          "specializations": ["Clinical Pharmacy", "Pharmaceutical Technology"],
          "other": ["Work in hospitals, retail, or research."]
        },
        {
          "title": "Veterinarian",
          "description": "Diagnose and treat illnesses in animals.",
          "exams_required": ["NEET", "Veterinary Entrance Exams"],
          "specializations": ["Surgery", "Animal Nutrition", "Animal Pathology"],
          "other": ["Requires passion for animal welfare."]
        },
        {
          "title": "Physiotherapist",
          "description": "Help patients recover from injuries through therapeutic exercises.",
          "exams_required": ["State Entrance Exams", "Physiotherapy Entrance Tests"],
          "specializations": ["Orthopedics", "Sports Physiotherapy"],
          "other": ["Requires knowledge of human anatomy and movement."]
        },
        {
          "title": "Nurse",
          "description": "Provide patient care and assist doctors in medical settings.",
          "exams_required": ["State Nursing Entrance Exams"],
          "specializations": ["Critical Care Nursing", "Pediatric Nursing"],
          "other": ["Requires empathy and resilience."]
        },
        {
          "title": "Radiologist",
          "description": "Use imaging technologies to diagnose and treat diseases.",
          "exams_required": ["NEET PG"],
          "specializations": ["MRI", "Ultrasound"],
          "other": ["Requires attention to detail and imaging expertise."]
        },
        {
          "title": "Medical Researcher",
          "description": "Conduct research to improve healthcare and discover treatments.",
          "exams_required": ["NEET", "Ph.D. Entrance"],
          "specializations": ["Epidemiology", "Genetics"],
          "other": ["Requires dedication to scientific discovery."]
        },
        {
          "title": "Psychiatrist",
          "description": "Diagnose and treat mental health disorders.",
          "exams_required": ["NEET PG", "MD Psychiatry"],
          "specializations": ["Child Psychiatry", "Forensic Psychiatry"],
          "other": ["Requires strong interpersonal skills."]
        }
      ]
    },
    {
      "category": "Creative Arts and Design",
      "path": "Complete 12th (Any Stream) → Pursue BFA/B.Design → Specialize in Graphic Design, Animation, Fashion, etc. → Higher Studies (MFA, M.Des) → Job/Entrepreneurship",
      "opportunities": [
        {
          "title": "Graphic Designer",
          "description": "Create visual concepts to communicate ideas that inspire, inform, or captivate consumers.",
          "exams_required": ["NID", "NIFT", "CEED"],
          "specializations": ["Brand Design", "UI/UX", "Illustration", "Typography"],
          "other": ["Requires creativity, attention to detail, and knowledge of design software."]
        },
        {
          "title": "Fashion Designer",
          "description": "Design clothing and accessories, keeping in mind aesthetics and functionality.",
          "exams_required": ["NIFT", "NID", "CEED"],
          "specializations": ["Apparel Design", "Textile Design", "Footwear Design"],
          "other": ["Focus on trends, fabric selection, and garment construction."]
        },
        {
          "title": "Animator",
          "description": "Create animated sequences for films, games, advertisements, and digital media.",
          "exams_required": ["NID", "NIFT", "Animation Entrance Exams"],
          "specializations": ["2D Animation", "3D Animation", "Visual Effects", "Character Animation"],
          "other": ["Requires a strong foundation in motion graphics and storytelling."]
        },
        {
          "title": "Interior Designer",
          "description": "Design the interior spaces of homes, offices, and public buildings for functionality and aesthetic appeal.",
          "exams_required": ["NID", "CEED"],
          "specializations": ["Residential Design", "Commercial Design", "Sustainable Design"],
          "other": ["Requires creativity and knowledge of space planning and materials."]
        },
        {
          "title": "Industrial Designer",
          "description": "Design and develop products that are both functional and aesthetically pleasing.",
          "exams_required": ["NID", "CEED"],
          "specializations": ["Product Design", "Ergonomics", "Sustainable Design"],
          "other": ["Focus on user experience and the practicality of design solutions."]
        },
        {
          "title": "Architect",
          "description": "Design buildings and structures, ensuring functionality, aesthetics, and safety.",
          "exams_required": ["NATA", "JEE Main (Architecture Paper)", "State Architecture Exams"],
          "specializations": ["Urban Planning", "Landscape Architecture", "Sustainable Architecture"],
          "other": ["Requires a strong understanding of engineering and artistic design."]
        },
        {
          "title": "Game Designer",
          "description": "Design the concept, gameplay mechanics, and interactive experiences for video games.",
          "exams_required": ["NID", "NIFT", "Game Design Entrance Exams"],
          "specializations": ["Level Design", "Gameplay Mechanics", "Storytelling"],
          "other": ["Requires creativity and an understanding of interactive design."]
        },
        {
          "title": "Art Director",
          "description": "Lead and coordinate the artistic direction of visual projects, including films, ads, and publications.",
          "exams_required": ["NID", "NIFT"],
          "specializations": ["Branding", "Film Production", "Advertising Design"],
          "other": ["Requires leadership skills and strong visual design knowledge."]
        },
        {
          "title": "Photographer",
          "description": "Capture and edit images for commercial, artistic, or journalistic purposes.",
          "exams_required": ["Diploma/Certification in Photography"],
          "specializations": ["Fashion Photography", "Wedding Photography", "Commercial Photography"],
          "other": ["Requires proficiency with camera equipment and editing software."]
        },
        {
          "title": "Visual Effects Artist",
          "description": "Create visual effects for films, TV shows, and games, integrating computer-generated imagery with live action.",
          "exams_required": ["NID", "VFX Entrance Exams"],
          "specializations": ["Compositing", "Motion Graphics", "3D Modeling"],
          "other": ["Requires strong knowledge of CGI software and attention to detail."]
        }
      ]
    },    
    {
      "category": "Law",
      "path": "Complete 12th (Any Stream) → Pursue LLB → Specialize in Corporate Law, Criminal Law, Civil Law → Job/Practice/Advocacy",
      "opportunities": [
        {
          "title": "Corporate Lawyer",
          "description": "Advise businesses on their legal rights, responsibilities, and obligations.",
          "exams_required": ["CLAT", "AILET", "LSAT India"],
          "specializations": ["Mergers and Acquisitions", "Intellectual Property Law"],
          "other": ["Requires LLB degree and legal expertise."]
        },
        {
          "title": "Criminal Lawyer",
          "description": "Defend clients or prosecute criminals in legal cases.",
          "exams_required": ["CLAT", "AILET"],
          "specializations": ["Human Rights Law", "Cyber Crime Law"],
          "other": ["Requires knowledge of criminal law and court procedures."]
        }
      ]
    },
    {
      "category": "Management",
      "path": "Complete 12th → Pursue BBA → Specialize in Marketing, Finance, HR, etc. → Higher Studies (MBA, M.Com) → Job/Research/Entrepreneurship",
      "opportunities": [
        {
          "title": "Marketing Manager",
          "description": "Develop strategies to promote products or services and reach target customers.",
          "exams_required": ["CAT", "XAT", "GMAT"],
          "specializations": ["Digital Marketing", "Brand Management", "Market Research"],
          "other": ["Requires creativity and strategic thinking."]
        },
        {
          "title": "HR Manager",
          "description": "Oversee recruitment, training, and employee well-being.",
          "exams_required": ["CAT", "XAT", "GMAT"],
          "specializations": ["Talent Management", "Employee Relations", "Organizational Behavior"],
          "other": ["Requires strong interpersonal skills."]
        },
        {
          "title": "Financial Analyst",
          "description": "Analyze financial data and trends to advise businesses on financial decisions.",
          "exams_required": ["CFA", "CAT", "GMAT"],
          "specializations": ["Investment Banking", "Corporate Finance", "Risk Management"],
          "other": ["Requires strong analytical skills and knowledge of finance."]
        },
        {
          "title": "Operations Manager",
          "description": "Manage the day-to-day operations of an organization or business.",
          "exams_required": ["CAT", "XAT", "GMAT"],
          "specializations": ["Supply Chain Management", "Project Management", "Business Analytics"],
          "other": ["Requires leadership and problem-solving skills."]
        },
        {
          "title": "Business Consultant",
          "description": "Provide expert advice to improve business strategies and processes.",
          "exams_required": ["CAT", "GMAT", "Consulting Internships"],
          "specializations": ["Strategy Consulting", "Operations Consulting", "Financial Consulting"],
          "other": ["Requires analytical thinking and problem-solving skills."]
        },
        {
          "title": "Entrepreneur",
          "description": "Start and run your own business or company.",
          "exams_required": ["No specific exams", "Business Knowledge"],
          "specializations": ["Tech Startups", "Retail Business", "Service Industry"],
          "other": ["Requires strong vision, resilience, and leadership."]
        }
      ]
    },
    {
      "category": "Business and Finance",
      "path": "Complete 12th (Commerce/Mathematics) → Pursue B.Com/BBA → Specialize in Finance, Marketing, HR, etc. → Higher Studies (MBA, MS, CA, CFA) → Job/Research/Entrepreneurship",
      "opportunities": [
        {
          "title": "Financial Analyst",
          "description": "Analyze financial data and trends to assist businesses in making investment decisions.",
          "exams_required": ["CAT", "CFA", "CA"],
          "specializations": ["Investment Banking", "Risk Management", "Portfolio Management"],
          "other": ["Requires strong knowledge of financial markets and data analysis."]
        },
        {
          "title": "Chartered Accountant",
          "description": "Provide financial advice, audit financial records, and help with tax planning.",
          "exams_required": ["CA Foundation", "CA Intermediate", "CA Final"],
          "specializations": ["Taxation", "Auditing", "Accounting"],
          "other": ["Requires a high level of accuracy and attention to detail."]
        },
        {
          "title": "Marketing Manager",
          "description": "Plan and execute marketing strategies to promote products or services.",
          "exams_required": ["CAT", "XAT", "GMAT"],
          "specializations": ["Digital Marketing", "Brand Management", "Market Research"],
          "other": ["Requires creativity and an understanding of consumer behavior."]
        },
        {
          "title": "Business Analyst",
          "description": "Analyze business processes, identify opportunities for improvement, and implement solutions.",
          "exams_required": ["MBA", "CAT", "GMAT"],
          "specializations": ["Data Analytics", "Project Management", "Business Strategy"],
          "other": ["Requires problem-solving and communication skills."]
        },
        {
          "title": "Investment Banker",
          "description": "Assist clients with financial transactions, such as mergers, acquisitions, and stock offerings.",
          "exams_required": ["CAT", "GMAT", "CFA"],
          "specializations": ["Corporate Finance", "Mergers and Acquisitions", "Private Equity"],
          "other": ["Requires strong negotiation skills and financial knowledge."]
        },
        {
          "title": "Human Resources Manager",
          "description": "Manage recruitment, employee relations, and ensure organizational development.",
          "exams_required": ["MBA in HR", "CAT", "XAT"],
          "specializations": ["Talent Management", "Employee Engagement", "HR Analytics"],
          "other": ["Requires strong interpersonal and communication skills."]
        },
        {
          "title": "Operations Manager",
          "description": "Oversee the production, logistics, and supply chain operations of a business.",
          "exams_required": ["MBA in Operations", "CAT", "GMAT"],
          "specializations": ["Supply Chain Management", "Logistics", "Production Planning"],
          "other": ["Requires an understanding of business operations and efficiency."]
        },
        {
          "title": "Risk Manager",
          "description": "Identify and mitigate financial, operational, and strategic risks for businesses.",
          "exams_required": ["CFA", "MBA in Finance", "FRM"],
          "specializations": ["Financial Risk", "Enterprise Risk", "Operational Risk"],
          "other": ["Requires critical thinking and problem-solving abilities."]
        },
        {
          "title": "Management Consultant",
          "description": "Provide expert advice to businesses to improve efficiency and profitability.",
          "exams_required": ["MBA", "GMAT", "CAT"],
          "specializations": ["Business Strategy", "Management Development", "Operations Consulting"],
          "other": ["Requires analytical and strategic thinking."]
        },
        {
          "title": "Supply Chain Manager",
          "description": "Oversee and optimize the entire supply chain process from production to delivery.",
          "exams_required": ["MBA in Supply Chain", "CAT", "GMAT"],
          "specializations": ["Logistics", "Inventory Management", "Procurement"],
          "other": ["Requires organizational skills and an understanding of global markets."]
        }
      ]
    },
    {
      "category": "Hotel Management",
      "path": "Complete 12th → Pursue Degree in Hotel Management → Specialize in Hotel Operations, Hospitality Services, Event Management → Job/Entrepreneurship",
      "opportunities": [
        {
          "title": "Hotel Manager",
          "description": "Oversee the operations of a hotel, including staff management, guest services, and budgeting.",
          "exams_required": ["Hotel Management Entrance Exams", "State Entrance Exams"],
          "specializations": ["Front Office Management", "Food & Beverage Management", "Housekeeping"],
          "other": ["Requires excellent leadership and organizational skills."]
        },
        {
          "title": "Restaurant Manager",
          "description": "Manage daily operations of a restaurant, ensuring customer satisfaction and operational efficiency.",
          "exams_required": ["Hotel Management Entrance Exams"],
          "specializations": ["Food Service Management", "Customer Service"],
          "other": ["Requires strong communication and managerial skills."]
        },
        {
          "title": "Event Manager",
          "description": "Plan, coordinate, and manage events such as conferences, weddings, and corporate meetings.",
          "exams_required": ["Hotel Management Entrance Exams", "Event Management Courses"],
          "specializations": ["Corporate Events", "Wedding Planning", "Conference Coordination"],
          "other": ["Focuses on organization and creative problem-solving."]
        },
        {
          "title": "Housekeeping Manager",
          "description": "Ensure cleanliness, maintenance, and overall management of hotel rooms and public spaces.",
          "exams_required": ["Hotel Management Entrance Exams"],
          "specializations": ["Room Service Management", "Facility Maintenance"],
          "other": ["Requires attention to detail and strong supervisory skills."]
        },
        {
          "title": "Food & Beverage Manager",
          "description": "Supervise food and beverage operations within hotels or resorts, including quality control and customer satisfaction.",
          "exams_required": ["Hotel Management Entrance Exams"],
          "specializations": ["Restaurant Operations", "Catering Management"],
          "other": ["Requires knowledge of food safety and excellent customer service."]
        },
        {
          "title": "Tourism Manager",
          "description": "Manage tourism operations including guided tours, travel planning, and promoting local attractions.",
          "exams_required": ["Hotel Management Entrance Exams", "Tourism Management Courses"],
          "specializations": ["Tourism Promotion", "Travel Agencies"],
          "other": ["Requires cultural knowledge and excellent customer service."]
        },
        {
          "title": "Hospitality Consultant",
          "description": "Advise hotels, resorts, and other businesses on improving operations, profitability, and customer experience.",
          "exams_required": ["Hotel Management Degree", "Experience in Hospitality Industry"],
          "specializations": ["Operational Efficiency", "Business Strategy"],
          "other": ["Requires in-depth industry knowledge and strong business acumen."]
        },
        {
          "title": "Spa Manager",
          "description": "Oversee the management of hotel spa services, ensuring a relaxing and rejuvenating experience for guests.",
          "exams_required": ["Hotel Management Entrance Exams", "Spa Management Courses"],
          "specializations": ["Wellness Services", "Beauty and Spa Treatments"],
          "other": ["Requires knowledge of spa treatments and wellness services."]
        },
        {
          "title": "Front Office Manager",
          "description": "Manage guest relations, check-in/check-out processes, and reservations at the front desk of hotels.",
          "exams_required": ["Hotel Management Entrance Exams"],
          "specializations": ["Guest Services", "Reservations Management"],
          "other": ["Requires excellent communication skills and a customer-first approach."]
        },
        {
          "title": "Catering Manager",
          "description": "Oversee the preparation and delivery of catering services for events, conferences, and private parties.",
          "exams_required": ["Hotel Management Entrance Exams"],
          "specializations": ["Corporate Catering", "Event Catering"],
          "other": ["Requires strong organizational skills and food service knowledge."]
        }
      ]
    },
    {
      "category": "Agriculture",
      "path": "Complete 12th (Science/PCB) → Pursue B.Sc. Agriculture/B.Tech in Agricultural Engineering → Specialize in Crop Science, Agricultural Technology, Food Processing, etc. → Higher Studies (M.Sc., M.Tech, MBA) → Job/Research/Entrepreneurship",
      "opportunities": [
        {
          "title": "Agricultural Scientist",
          "description": "Conduct research to improve crop yield, pest resistance, and sustainable farming methods.",
          "exams_required": ["ICAR AIEEA", "GATE", "State Entrance Exams"],
          "specializations": ["Crop Science", "Soil Science", "Horticulture"],
          "other": ["Requires a deep understanding of plant biology and agriculture techniques."]
        },
        {
          "title": "Agricultural Engineer",
          "description": "Design and develop machinery and technology to improve agricultural productivity.",
          "exams_required": ["GATE", "State Entrance Exams"],
          "specializations": ["Irrigation Systems", "Farm Machinery", "Food Processing Engineering"],
          "other": ["Requires knowledge of engineering principles and agricultural processes."]
        },
        {
          "title": "Food Technologist",
          "description": "Develop and improve food products, processes, and preservation techniques.",
          "exams_required": ["GATE", "State Entrance Exams"],
          "specializations": ["Food Safety", "Food Quality Control", "Food Packaging"],
          "other": ["Requires knowledge of both biology and food science."]
        },
        {
          "title": "Horticulturist",
          "description": "Manage the cultivation of fruits, vegetables, and ornamental plants.",
          "exams_required": ["State Entrance Exams"],
          "specializations": ["Pomology", "Floriculture", "Vegetable Cultivation"],
          "other": ["Requires expertise in plant care, growth cycles, and pest control."]
        },
        {
          "title": "Veterinarian",
          "description": "Care for animals and ensure their health in agricultural settings.",
          "exams_required": ["NEET", "State Entrance Exams"],
          "specializations": ["Animal Nutrition", "Veterinary Surgery", "Dairy Farming"],
          "other": ["Focus on animal health and disease prevention."]
        },
        {
          "title": "Agronomist",
          "description": "Study and improve soil management and crop production techniques.",
          "exams_required": ["ICAR AIEEA", "GATE"],
          "specializations": ["Soil Management", "Crop Management", "Sustainable Farming"],
          "other": ["Requires expertise in crop production and environmental sustainability."]
        },
        {
          "title": "Pest Control Specialist",
          "description": "Develop methods and products to control pests affecting crops and livestock.",
          "exams_required": ["State Entrance Exams"],
          "specializations": ["Insect Control", "Fungicide Development", "Biological Pest Control"],
          "other": ["Requires knowledge of pest behavior and control methods."]
        },
        {
          "title": "Agricultural Economist",
          "description": "Analyze and develop strategies to improve the profitability and sustainability of agricultural industries.",
          "exams_required": ["ICAR AIEEA", "State Entrance Exams"],
          "specializations": ["Farm Management", "Agribusiness", "Rural Development"],
          "other": ["Requires understanding of economics in the agricultural context."]
        },
        {
          "title": "Dairy Technologist",
          "description": "Manage dairy production processes, quality control, and product development.",
          "exams_required": ["GATE", "State Entrance Exams"],
          "specializations": ["Milk Processing", "Cheese Production", "Dairy Farm Management"],
          "other": ["Requires knowledge of dairy science and food safety."]
        },
        {
          "title": "Plant Pathologist",
          "description": "Study plant diseases and develop solutions to protect crops.",
          "exams_required": ["ICAR AIEEA", "State Entrance Exams"],
          "specializations": ["Disease Diagnosis", "Pesticide Development", "Plant Health Management"],
          "other": ["Requires expertise in plant biology and disease control."]
        }
      ]
    },
    {
      "category": "Geologist",
      "path": "Complete 12th (PCM) → Pursue B.Sc. in Geology → Specialize in various subfields (e.g., Hydrogeology, Geophysics, Petrology) → Higher Studies (M.Sc., M.Tech, Ph.D.) → Job/Research/Entrepreneurship",
      "opportunities": [
        {
          "title": "Petroleum Geologist",
          "description": "Study and locate oil and natural gas deposits to assist in extraction processes.",
          "exams_required": ["JEE Main", "State Entrance Exams"],
          "specializations": ["Reservoir Engineering", "Geophysics", "Seismology"],
          "other": ["Requires a strong understanding of subsurface geological formations."]
        },
        {
          "title": "Environmental Geologist",
          "description": "Study the Earth's processes to help solve environmental issues such as pollution and land reclamation.",
          "exams_required": ["JEE Main", "State Entrance Exams"],
          "specializations": ["Environmental Impact Assessment", "Geohazards", "Soil Conservation"],
          "other": ["Requires a strong understanding of environmental science and geology."]
        },
        {
          "title": "Mining Engineer",
          "description": "Plan and oversee the extraction of minerals from the Earth while ensuring safety and environmental responsibility.",
          "exams_required": ["JEE Main", "GATE", "State Entrance Exams"],
          "specializations": ["Underground Mining", "Surface Mining", "Mineral Processing"],
          "other": ["Requires knowledge of engineering principles alongside geology."]
        },
        {
          "title": "Hydrogeologist",
          "description": "Study groundwater and its movement to help manage water resources and solve water-related problems.",
          "exams_required": ["B.Sc. in Geology", "GATE"],
          "specializations": ["Water Resource Management", "Aquifer Hydrology", "Contaminant Hydrogeology"],
          "other": ["Focus on the interaction between geology and water systems."]
        },
        {
          "title": "Geophysicist",
          "description": "Study the Earth's physical properties using methods such as seismic, magnetic, and gravitational measurements.",
          "exams_required": ["B.Sc. in Geophysics", "GATE"],
          "specializations": ["Seismology", "Geothermal Energy", "Magnetic Surveying"],
          "other": ["Requires advanced understanding of physics and geological data."]
        },
        {
          "title": "Volcanologist",
          "description": "Study volcanoes, lava, and volcanic activity to predict eruptions and assess risks.",
          "exams_required": ["M.Sc. in Geology", "Ph.D. in Volcanology"],
          "specializations": ["Lava Flow Modeling", "Volcanic Hazard Assessment"],
          "other": ["Requires in-depth fieldwork and monitoring of volcanic regions."]
        },
        {
          "title": "Geotechnical Engineer",
          "description": "Study soil and rock mechanics to design and construct foundations for buildings, bridges, and other structures.",
          "exams_required": ["B.Tech in Civil Engineering", "GATE"],
          "specializations": ["Foundation Engineering", "Soil Mechanics", "Slope Stability"],
          "other": ["Focus on the interaction between construction and geological formations."]
        },
        {
          "title": "Paleontologist",
          "description": "Study fossils to understand past life on Earth and how it relates to the planet's geological history.",
          "exams_required": ["M.Sc. in Geology", "Ph.D. in Paleontology"],
          "specializations": ["Fossil Analysis", "Evolutionary Biology", "Sedimentology"],
          "other": ["Requires deep knowledge of ancient life and fossil preservation."]
        },
        {
          "title": "Geological Surveyor",
          "description": "Conduct surveys of land areas to gather data about the Earth's materials and structure.",
          "exams_required": ["B.Sc. in Geology", "State/Entrance Exams"],
          "specializations": ["Land Surveying", "Mineral Exploration", "Structural Geology"],
          "other": ["Focus on mapping and understanding geological formations in the field."]
        },
        {
          "title": "Seismologist",
          "description": "Study earthquakes and seismic waves to better understand tectonic activity and predict seismic events.",
          "exams_required": ["B.Sc. in Geology", "GATE"],
          "specializations": ["Earthquake Engineering", "Tectonics", "Seismic Data Analysis"],
          "other": ["Requires expertise in seismic data collection and interpretation."]
        }
      ]
    },
    {
      "category": "Research Scientist",
      "path": "Complete 12th (PCM) → Pursue B.Sc/B.Tech → Specialize in Research Field → PhD → Research Scientist in Academia/Industry",
      "opportunities": [
        {
          "title": "Physics Research Scientist",
          "description": "Conduct experiments and analyze data to explore fundamental principles of matter and energy.",
          "exams_required": ["JEE Main", "JEE Advanced", "GATE"],
          "specializations": ["Astrophysics", "Quantum Physics", "Material Science"],
          "other": ["Requires deep understanding of theoretical and experimental physics."]
        },
        {
          "title": "Biotech Research Scientist",
          "description": "Use biological processes to develop new products or technologies in fields such as healthcare and agriculture.",
          "exams_required": ["B.Sc in Biotechnology", "GATE", "NET"],
          "specializations": ["Genetic Engineering", "Molecular Biology", "Bioinformatics"],
          "other": ["Requires knowledge of lab techniques and research methodologies."]
        },
        {
          "title": "Chemistry Research Scientist",
          "description": "Explore chemical reactions, molecular structures, and synthesis to contribute to various industries.",
          "exams_required": ["JEE Main", "JEE Advanced", "GATE"],
          "specializations": ["Organic Chemistry", "Analytical Chemistry", "Inorganic Chemistry"],
          "other": ["Focus on laboratory experiments and data analysis."]
        },
        {
          "title": "Environmental Research Scientist",
          "description": "Study the environment to develop solutions for pollution control, climate change, and sustainability.",
          "exams_required": ["B.Sc in Environmental Science", "GATE", "NET"],
          "specializations": ["Environmental Chemistry", "Ecology", "Sustainability Studies"],
          "other": ["Requires an understanding of ecological systems and environmental policies."]
        },
        {
          "title": "Medical Research Scientist",
          "description": "Conduct research to develop treatments, drugs, and medical technologies.",
          "exams_required": ["B.Sc in Medical Science", "GATE", "NET"],
          "specializations": ["Pharmacology", "Immunology", "Neuroscience"],
          "other": ["Focus on clinical trials and understanding human health."]
        },
        {
          "title": "AI Research Scientist",
          "description": "Conduct research to push the boundaries of artificial intelligence, developing new models and algorithms.",
          "exams_required": ["B.Tech in CS/IT", "GATE", "NET"],
          "specializations": ["Machine Learning", "Deep Learning", "Neural Networks"],
          "other": ["Requires strong skills in mathematics, programming, and AI theories."]
        },
        {
          "title": "Space Research Scientist",
          "description": "Study space phenomena, celestial bodies, and space missions to understand the universe.",
          "exams_required": ["JEE Main", "JEE Advanced", "GATE"],
          "specializations": ["Astrophysics", "Planetary Science", "Space Exploration"],
          "other": ["Focus on telescopes, satellites, and space technology."]
        },
        {
          "title": "Agricultural Research Scientist",
          "description": "Research ways to enhance agricultural productivity, sustainability, and food security.",
          "exams_required": ["B.Sc in Agriculture", "GATE"],
          "specializations": ["Crop Science", "Soil Science", "Agricultural Engineering"],
          "other": ["Requires knowledge of farming techniques and sustainable practices."]
        },
        {
          "title": "Engineering Research Scientist",
          "description": "Conduct research in engineering fields to innovate new technologies and improve existing systems.",
          "exams_required": ["B.Tech", "GATE", "NET"],
          "specializations": ["Mechanical Engineering", "Electrical Engineering", "Civil Engineering"],
          "other": ["Focus on designing, building, and testing new engineering systems."]
        },
        {
          "title": "Social Science Research Scientist",
          "description": "Research and analyze human behavior, societies, and cultures to inform policy and decision-making.",
          "exams_required": ["B.A in Social Sciences", "NET"],
          "specializations": ["Psychology", "Sociology", "Economics"],
          "other": ["Involves fieldwork, data collection, and statistical analysis."]
        }
      ]
    },
    {
      "category": "Defence Forces",
      "path": "Complete 12th (PCM) → Join NDA → Pursue Training at IMA/INA/AFA → Commission as an Officer → Serve in Army/Navy/Air Force",
      "opportunities": [
        {
          "title": "Indian Army Officer",
          "description": "Lead and manage the defense operations and personnel in the Indian Army.",
          "exams_required": ["NDA", "CDS", "TA Exam"],
          "specializations": ["Infantry", "Artillery", "Armoured Corps", "Engineers"],
          "other": ["Leadership and physical fitness are key requirements."]
        },
        {
          "title": "Indian Navy Officer",
          "description": "Serve in various branches like Engineering, Logistics, and Executive in the Indian Navy.",
          "exams_required": ["NDA", "CDS", "Indian Navy Entry Exam"],
          "specializations": ["Navigation", "Submarine Operations", "Logistics", "Maritime Warfare"],
          "other": ["Requires strong technical and naval skills."]
        },
        {
          "title": "Indian Air Force Officer",
          "description": "Serve as a pilot or in technical branches like electronics and engineering in the Indian Air Force.",
          "exams_required": ["NDA", "CDS", "AFCAT"],
          "specializations": ["Pilot", "Technical Officer", "Ground Duty Officer"],
          "other": ["Requires high physical fitness and aviation aptitude."]
        },
        {
          "title": "Indian Army Engineer",
          "description": "Work in construction, infrastructure, and maintenance within the Indian Army.",
          "exams_required": ["NDA", "TES Entry", "CDS"],
          "specializations": ["Military Engineering", "Construction", "Surveying"],
          "other": ["Strong technical skills are essential."]
        },
        {
          "title": "Air Force Pilot",
          "description": "Fly advanced aircraft, engage in combat operations, and protect national airspace.",
          "exams_required": ["NDA", "AFCAT", "CDS"],
          "specializations": ["Fighter Pilot", "Transport Pilot", "Helicopter Pilot"],
          "other": ["Requires precision flying and quick decision-making skills."]
        },
        {
          "title": "Naval Pilot",
          "description": "Operate aircraft for reconnaissance, surveillance, and combat operations from naval carriers.",
          "exams_required": ["NDA", "CDS", "Naval Aviation Exam"],
          "specializations": ["Carrier Operations", "Anti-Submarine Warfare"],
          "other": ["Requires strong flying and tactical skills."]
        },
        {
          "title": "Military Intelligence Officer",
          "description": "Gather and analyze intelligence for military operations and strategic planning.",
          "exams_required": ["NDA", "CDS", "OTA"],
          "specializations": ["Signal Intelligence", "Human Intelligence", "Cyber Intelligence"],
          "other": ["Requires analytical and communication skills."]
        },
        {
          "title": "Defence Medical Officer",
          "description": "Provide medical services to military personnel and their families.",
          "exams_required": ["NEET", "Army Medical Corps Exam"],
          "specializations": ["Military Surgery", "Field Medicine", "Trauma Care"],
          "other": ["Medical expertise is required in combat situations."]
        },
        {
          "title": "Combat Support Officer",
          "description": "Provide combat and logistical support in various terrains and operations.",
          "exams_required": ["NDA", "CDS", "OTA"],
          "specializations": ["Signal Corps", "Electrical and Mechanical Engineering", "Medical Support"],
          "other": ["Requires versatility and adaptability to various combat environments."]
        },
        {
          "title": "Defence Research and Development Officer",
          "description": "Develop new technologies and weapons for military use in research and development.",
          "exams_required": ["GATE", "DRDO Entrance Exam"],
          "specializations": ["Weapon Systems", "Cyber Security", "Aeronautical Engineering"],
          "other": ["Requires technical and research skills in advanced defense technologies."]
        }
      ]
    },{
      "category": "B.Sc. (Physics)",
      "path": "Complete 12th (PCM) → Pursue B.Sc. in Physics → Specialize in Theoretical Physics, Astrophysics, Applied Physics → Higher Studies (M.Sc., Ph.D.) → Job/Research/Academia",
      "opportunities": [
        {
          "title": "Theoretical Physicist",
          "description": "Study fundamental aspects of physics, such as the nature of matter, energy, and the universe.",
          "exams_required": ["Entrance Exams for M.Sc.", "CSIR NET"],
          "specializations": ["Quantum Mechanics", "Relativity", "Particle Physics"],
          "other": ["Requires strong analytical and mathematical skills."]
        },
        {
          "title": "Astrophysicist",
          "description": "Study celestial bodies and the universe as a whole.",
          "exams_required": ["M.Sc. in Physics", "GATE", "CSIR NET"],
          "specializations": ["Cosmology", "Planetary Science", "Space Research"],
          "other": ["Focus on astronomical data and space exploration."]
        },
        {
          "title": "Physics Researcher",
          "description": "Conduct research in experimental and theoretical physics.",
          "exams_required": ["M.Sc.", "Ph.D. Entrance Exams"],
          "specializations": ["Condensed Matter Physics", "Solid State Physics", "Nanotechnology"],
          "other": ["Involves experimental work and theory development."]
        },
        {
          "title": "Radiation Physicist",
          "description": "Specialize in the application of radiation and nuclear physics.",
          "exams_required": ["M.Sc.", "GATE"],
          "specializations": ["Medical Physics", "Radiation Therapy", "Nuclear Physics"],
          "other": ["Works closely with medical applications of physics."]
        }
      ]
    },
    {
      "category": "B.Sc. (Chemistry)",
      "path": "Complete 12th (PCM) → Pursue B.Sc. in Chemistry → Specialize in Organic, Inorganic, or Analytical Chemistry → Higher Studies (M.Sc., Ph.D.) → Job/Research/Industry",
      "opportunities": [
        {
          "title": "Analytical Chemist",
          "description": "Test and analyze chemicals to understand their structure and composition.",
          "exams_required": ["M.Sc. in Chemistry", "GATE"],
          "specializations": ["Spectroscopy", "Chromatography", "Material Analysis"],
          "other": ["Requires meticulous attention to detail and laboratory skills."]
        },
        {
          "title": "Organic Chemist",
          "description": "Study the structure, properties, and reactions of organic compounds.",
          "exams_required": ["M.Sc. in Chemistry", "Ph.D. Entrance Exams"],
          "specializations": ["Pharmaceutical Chemistry", "Polymer Chemistry", "Green Chemistry"],
          "other": ["Work in research and development, including drug design."]
        },
        {
          "title": "Pharmaceutical Chemist",
          "description": "Design and develop pharmaceutical products, including drugs and treatments.",
          "exams_required": ["M.Sc. in Chemistry", "GATE"],
          "specializations": ["Medicinal Chemistry", "Pharmacology", "Bio-Chemistry"],
          "other": ["Focus on safety and efficacy of drugs."]
        },
        {
          "title": "Chemical Analyst",
          "description": "Analyze and monitor chemical reactions in industrial or laboratory settings.",
          "exams_required": ["M.Sc.", "GATE"],
          "specializations": ["Process Chemistry", "Environmental Chemistry"],
          "other": ["Involves quality control and compliance monitoring."]
        }
      ]
    },
    {
      "category": "B.Sc. (Mathematics)",
      "path": "Complete 12th (PCM) → Pursue B.Sc. in Mathematics → Specialize in Pure Mathematics, Applied Mathematics, Actuarial Science → Higher Studies (M.Sc., Ph.D.) → Job/Research/Academia",
      "opportunities": [
        {
          "title": "Mathematics Professor",
          "description": "Teach and conduct research in the field of mathematics at educational institutions.",
          "exams_required": ["M.Sc.", "Ph.D. Entrance Exams"],
          "specializations": ["Pure Mathematics", "Applied Mathematics", "Statistics"],
          "other": ["Requires deep understanding of mathematical theory."]
        },
        {
          "title": "Data Analyst",
          "description": "Use mathematical techniques to analyze and interpret complex datasets.",
          "exams_required": ["M.Sc. in Mathematics", "GATE"],
          "specializations": ["Data Science", "Business Analytics", "Statistical Modeling"],
          "other": ["Requires proficiency in software tools like Excel, R, and Python."]
        },
        {
          "title": "Actuary",
          "description": "Assess and manage financial risks using mathematical and statistical methods.",
          "exams_required": ["Actuarial Exams", "M.Sc. in Mathematics"],
          "specializations": ["Life Insurance", "Pension Plans", "Risk Management"],
          "other": ["Requires advanced mathematical modeling skills."]
        },
        {
          "title": "Operations Research Analyst",
          "description": "Apply mathematical methods to help organizations solve complex decision-making problems.",
          "exams_required": ["M.Sc.", "GATE"],
          "specializations": ["Optimization", "Linear Programming", "Game Theory"],
          "other": ["Requires problem-solving skills and mathematical analysis."]
        }
      ]
    },
    {
      "category": "B.Sc. (Biology)",
      "path": "Complete 12th (PCB) → Pursue B.Sc. in Biology → Specialize in Botany, Zoology, Microbiology → Higher Studies (M.Sc., Ph.D.) → Job/Research/Healthcare",
      "opportunities": [
        {
          "title": "Microbiologist",
          "description": "Study microorganisms such as bacteria, viruses, and fungi.",
          "exams_required": ["M.Sc. in Microbiology", "GATE"],
          "specializations": ["Clinical Microbiology", "Industrial Microbiology", "Environmental Microbiology"],
          "other": ["Requires laboratory research skills."]
        },
        {
          "title": "Botanist",
          "description": "Study plants, their environment, and their interactions with ecosystems.",
          "exams_required": ["M.Sc. in Botany", "CSIR NET"],
          "specializations": ["Plant Physiology", "Plant Pathology", "Plant Biotechnology"],
          "other": ["Work in agriculture, conservation, or environmental science."]
        },
        {
          "title": "Zoologist",
          "description": "Study animal behavior, physiology, and anatomy.",
          "exams_required": ["M.Sc. in Zoology", "CSIR NET"],
          "specializations": ["Wildlife Biology", "Marine Biology", "Veterinary Science"],
          "other": ["Requires research in biological fields and animal care."]
        },
        {
          "title": "Geneticist",
          "description": "Study genes, heredity, and genetic variation in organisms.",
          "exams_required": ["M.Sc. in Genetics", "GATE"],
          "specializations": ["Human Genetics", "Plant Genetics", "Medical Genetics"],
          "other": ["Focus on genetic disorders, breeding, and gene therapy."]
        }
      ]
    },
    {
      "category": "B.Sc. (Biotechnology)",
      "path": "Complete 12th (PCB) → Pursue B.Sc. in Biotechnology → Specialize in Genetic Engineering, Industrial Biotechnology, Environmental Biotechnology → Higher Studies (M.Sc., Ph.D.) → Job/Research/Industry",
      "opportunities": [
        {
          "title": "Biotech Research Scientist",
          "description": "Conduct research to apply biotechnology in healthcare, agriculture, and industry.",
          "exams_required": ["M.Sc. in Biotechnology", "GATE"],
          "specializations": ["Genetic Engineering", "Protein Engineering", "Bioinformatics"],
          "other": ["Requires strong laboratory research skills."]
        },
        {
          "title": "Bioprocess Engineer",
          "description": "Design and optimize biotechnological processes for commercial use.",
          "exams_required": ["M.Sc. in Biotechnology", "GATE"],
          "specializations": ["Fermentation", "Biochemical Engineering"],
          "other": ["Work in pharmaceutical and chemical industries."]
        },
        {
          "title": "Environmental Biotechnologist",
          "description": "Apply biotechnology solutions to environmental issues such as pollution and waste management.",
          "exams_required": ["M.Sc. in Biotechnology", "GATE"],
          "specializations": ["Wastewater Treatment", "Bioremediation"],
          "other": ["Focus on sustainable practices and environmental protection."]
        },
        {
          "title": "Pharmaceutical Biotechnologist",
          "description": "Use biotechnology to develop drugs, vaccines, and therapeutic products.",
          "exams_required": ["M.Sc. in Biotechnology", "GATE"],
          "specializations": ["Pharmacogenomics", "Molecular Diagnostics"],
          "other": ["Work in drug discovery and manufacturing."]
        }
      ]
    },
    {
      "category": "B.Ca (Bachelor of Computer Application)",
      "path": "Complete 12th (Any Stream) → Pursue BCA → Specialize in Software Development, Networking, Database Management, etc. → Higher Studies (MCA, MS, MBA) → Job/Research/Entrepreneurship",
      "opportunities": [
        {
          "title": "Software Developer",
          "description": "Design, develop, and test software applications to meet user needs.",
          "exams_required": ["BCA", "MCA Entrance Exams"],
          "specializations": ["Web Development", "Mobile Applications", "Desktop Applications"],
          "other": ["Requires strong programming skills and understanding of software development life cycles."]
        },
        {
          "title": "Network Engineer",
          "description": "Design, implement, and manage computer networks.",
          "exams_required": ["BCA", "Cisco Certification (CCNA)"],
          "specializations": ["Network Security", "Routing and Switching", "Cloud Networking"],
          "other": ["Requires knowledge of network protocols, routing, and troubleshooting."]
        },
        {
          "title": "Database Administrator",
          "description": "Manage and maintain databases to ensure they are secure, optimized, and available.",
          "exams_required": ["BCA", "Database Management Certifications"],
          "specializations": ["SQL", "Oracle Database", "NoSQL"],
          "other": ["Requires strong knowledge in database management and data security."]
        },
        {
          "title": "System Analyst",
          "description": "Analyze and design IT solutions to solve business problems.",
          "exams_required": ["BCA", "MCA Entrance Exams"],
          "specializations": ["Business Analysis", "Software Solutions", "IT Consulting"],
          "other": ["Requires understanding of both business processes and technical aspects."]
        },
        {
          "title": "Web Developer",
          "description": "Build and maintain websites, ensuring they are functional, user-friendly, and visually appealing.",
          "exams_required": ["BCA", "Web Development Bootcamps"],
          "specializations": ["Front-end Development", "Back-end Development", "Full Stack Development"],
          "other": ["Requires proficiency in HTML, CSS, JavaScript, and frameworks like React or Angular."]
        },
        {
          "title": "Mobile App Developer",
          "description": "Develop mobile applications for iOS and Android platforms.",
          "exams_required": ["BCA", "Mobile App Development Certifications"],
          "specializations": ["Android Development", "iOS Development", "Cross-platform Development"],
          "other": ["Requires proficiency in programming languages like Java, Swift, or Dart."]
        },
        {
          "title": "Cybersecurity Specialist",
          "description": "Protect organizations from cyber threats by securing IT systems and networks.",
          "exams_required": ["BCA", "Certified Information Systems Security Professional (CISSP)"],
          "specializations": ["Network Security", "Ethical Hacking", "Cryptography"],
          "other": ["Requires knowledge of security protocols, firewalls, and malware protection."]
        },
        {
          "title": "Game Developer",
          "description": "Design and develop interactive video games for various platforms.",
          "exams_required": ["BCA", "Game Development Certifications"],
          "specializations": ["Game Programming", "Game Design", "Game Art and Animation"],
          "other": ["Requires knowledge in game engines like Unity, Unreal Engine, and coding languages."]
        },
        {
          "title": "Cloud Computing Specialist",
          "description": "Manage cloud computing services and infrastructure.",
          "exams_required": ["BCA", "Cloud Computing Certifications (AWS, Azure, Google Cloud)"],
          "specializations": ["Cloud Security", "Cloud Architecture", "Cloud Development"],
          "other": ["Requires expertise in cloud services, virtualization, and distributed computing."]
        },
        {
          "title": "Data Analyst",
          "description": "Analyze and interpret data to provide insights and support decision-making processes.",
          "exams_required": ["BCA", "Data Analysis Certifications"],
          "specializations": ["Data Visualization", "Data Mining", "Business Intelligence"],
          "other": ["Requires strong analytical and statistical skills, and proficiency in tools like Excel, Python, and R."]
        }
      ]
    },
    {
      "category": "Sports",
      "path": "Complete 12th → Pursue Bachelors in Sports Science/Physical Education → Specialize in a Specific Sport → Higher Studies (Masters in Sports Management, Sports Psychology) → Professional Athlete/Coaching/Research/Entrepreneurship",
      "opportunities": [
        {
          "title": "Professional Athlete",
          "description": "Compete in professional sports leagues or tournaments representing your country or club.",
          "exams_required": ["National Sports Trials", "State-Level Competitions"],
          "specializations": ["Football", "Cricket", "Tennis", "Basketball", "Athletics"],
          "other": ["Requires exceptional talent, dedication, and physical fitness."]
        },
        {
          "title": "Sports Coach",
          "description": "Train and guide athletes to improve performance and achieve success.",
          "exams_required": ["Bachelors in Physical Education", "Coaching Certification"],
          "specializations": ["Football Coach", "Cricket Coach", "Basketball Coach"],
          "other": ["Requires knowledge of sports strategies and mentoring skills."]
        },
        {
          "title": "Sports Psychologist",
          "description": "Help athletes improve their mental and emotional well-being to enhance performance.",
          "exams_required": ["Bachelors in Psychology", "Masters in Sports Psychology"],
          "specializations": ["Mental Conditioning", "Performance Anxiety Management", "Team Dynamics"],
          "other": ["Requires understanding of psychology and sports behavior."]
        },
        {
          "title": "Sports Nutritionist",
          "description": "Develop diet plans and nutritional strategies for athletes to enhance performance and recovery.",
          "exams_required": ["Bachelors in Nutrition", "Sports Nutrition Certification"],
          "specializations": ["Diet Planning", "Supplements", "Hydration"],
          "other": ["Requires knowledge of nutrition and how it affects athletic performance."]
        },
        {
          "title": "Fitness Trainer",
          "description": "Design and guide fitness programs to enhance strength, endurance, and overall fitness.",
          "exams_required": ["Fitness Trainer Certification", "Personal Training Certification"],
          "specializations": ["Personal Trainer", "Strength and Conditioning Coach", "Group Fitness Instructor"],
          "other": ["Requires knowledge of exercise techniques and fitness principles."]
        },
        {
          "title": "Sports Physiotherapist",
          "description": "Provide physical therapy to athletes recovering from injuries and enhance mobility.",
          "exams_required": ["Bachelor's in Physiotherapy", "Masters in Sports Physiotherapy"],
          "specializations": ["Injury Rehabilitation", "Sports Injury Prevention", "Pain Management"],
          "other": ["Requires expertise in anatomy, kinesiology, and rehabilitation techniques."]
        },
        {
          "title": "Sports Manager",
          "description": "Manage sports teams, organizations, and events to ensure smooth operations and success.",
          "exams_required": ["Bachelor’s in Sports Management", "Master’s in Sports Management"],
          "specializations": ["Event Management", "Team Management", "Sponsorship and Marketing"],
          "other": ["Requires strong organizational and leadership skills."]
        },
        {
          "title": "Referee/Umpire",
          "description": "Oversee sports games and ensure fair play by enforcing the rules of the game.",
          "exams_required": ["Referee/Umpire Certification", "Sport-Specific Training"],
          "specializations": ["Football Referee", "Cricket Umpire", "Tennis Umpire"],
          "other": ["Requires knowledge of the sport and decision-making skills."]
        },
        {
          "title": "Sports Journalist",
          "description": "Cover and report on sports events, athletes, and industry news for media outlets.",
          "exams_required": ["Bachelor’s in Journalism", "Internships in Sports Journalism"],
          "specializations": ["Sports Writing", "Commentary", "Broadcast Journalism"],
          "other": ["Requires excellent writing, communication, and analytical skills."]
        },
        {
          "title": "Sports Entrepreneur",
          "description": "Start and manage businesses related to sports, such as sports academies, equipment stores, or sports tech startups.",
          "exams_required": ["Bachelor’s in Business Administration", "Master’s in Sports Entrepreneurship"],
          "specializations": ["Sports Startups", "Sports Apparel", "Fitness Technology"],
          "other": ["Requires entrepreneurial mindset, innovation, and business acumen."]
        }
      ]
    },
    {
      "category": "B.Cs (Bachelor of Computer Science)",
      "path": "Complete 12th (PCM) → Pursue B.Tech/BSc in Computer Science → Specialize in AI, Cybersecurity, Data Science, etc. → Higher Studies (M.Tech, MS, MBA) → Job/Research/Entrepreneurship",
      "opportunities": [
        {
          "title": "Software Developer",
          "description": "Design, develop, and maintain software applications for various industries.",
          "exams_required": ["JEE Main", "State Entrance Exams"],
          "specializations": ["Full-Stack Development", "Mobile App Development", "Cloud Computing"],
          "other": ["Requires proficiency in programming languages and problem-solving."]
        },
        {
          "title": "Data Scientist",
          "description": "Analyze and interpret complex data to help businesses make informed decisions.",
          "exams_required": ["B.Tech/BSc in CS/IT", "GATE"],
          "specializations": ["Big Data", "Machine Learning", "Data Analytics"],
          "other": ["Requires strong statistical and analytical skills."]
        },
        {
          "title": "AI Engineer",
          "description": "Develop AI models and systems for automation and decision-making.",
          "exams_required": ["B.Tech/BSc in CS/IT", "GATE"],
          "specializations": ["Natural Language Processing", "Computer Vision", "Deep Learning"],
          "other": ["Strong foundation in AI/ML algorithms required."]
        },
        {
          "title": "Cybersecurity Analyst",
          "description": "Protect systems and networks from cyber threats and attacks.",
          "exams_required": ["B.Tech/BSc in CS/IT"],
          "specializations": ["Ethical Hacking", "Network Security", "Cryptography"],
          "other": ["Requires knowledge of security protocols and risk management."]
        },
        {
          "title": "Cloud Engineer",
          "description": "Develop and maintain cloud infrastructure and services.",
          "exams_required": ["B.Tech/BSc in CS/IT"],
          "specializations": ["AWS", "Azure", "Google Cloud"],
          "other": ["Requires understanding of cloud computing architectures."]
        },
        {
          "title": "Blockchain Developer",
          "description": "Develop decentralized applications using blockchain technology.",
          "exams_required": ["B.Tech/BSc in CS/IT"],
          "specializations": ["Smart Contracts", "Cryptocurrency Development", "DeFi Applications"],
          "other": ["Requires knowledge of blockchain protocols and cryptographic techniques."]
        },
        {
          "title": "Game Developer",
          "description": "Create video games using programming and game design principles.",
          "exams_required": ["B.Tech/BSc in CS/IT", "State Entrance Exams"],
          "specializations": ["Game AI", "VR/AR Development", "Graphics Programming"],
          "other": ["Requires expertise in game engines like Unity or Unreal Engine."]
        },
        {
          "title": "UI/UX Designer",
          "description": "Design user-friendly interfaces and improve user experiences.",
          "exams_required": ["B.Tech/BSc in CS/IT", "Design Entrance Exams"],
          "specializations": ["Human-Computer Interaction", "Wireframing", "Prototyping"],
          "other": ["Requires knowledge of design tools like Figma and Adobe XD."]
        },
        {
          "title": "Database Administrator",
          "description": "Manage and maintain databases for efficient data storage and retrieval.",
          "exams_required": ["B.Tech/BSc in CS/IT"],
          "specializations": ["SQL Databases", "NoSQL Databases", "Data Warehousing"],
          "other": ["Requires expertise in database management systems."]
        },
        {
          "title": "Embedded Systems Engineer",
          "description": "Develop software for embedded systems used in IoT and hardware devices.",
          "exams_required": ["B.Tech/BSc in CS/IT"],
          "specializations": ["IoT Development", "Firmware Programming", "Real-Time Systems"],
          "other": ["Requires knowledge of low-level programming and hardware interactions."]
        }
      ]
    },
    {
      "category": "Commerce",
      "path": "Complete 12th (Commerce) → Pursue B.Com → Specialize in Accounting, Finance, Marketing, etc. → Higher Studies (M.Com, MBA, CA, CS) → Job/Entrepreneurship",
      "opportunities": [
        {
          "title": "Chartered Accountant (CA)",
          "description": "Manage financial records, audits, and taxation for businesses and individuals.",
          "exams_required": ["CA Foundation", "CA Intermediate", "CA Final"],
          "specializations": ["Taxation", "Auditing", "Financial Reporting"],
          "other": ["Requires strong analytical and numerical skills."]
        },
        {
          "title": "Company Secretary (CS)",
          "description": "Ensure company compliance with regulatory and legal requirements.",
          "exams_required": ["CS Foundation", "CS Executive", "CS Professional"],
          "specializations": ["Corporate Governance", "Company Law", "Secretarial Audit"],
          "other": ["Requires knowledge of corporate laws and ethics."]
        },
        {
          "title": "Cost and Management Accountant (CMA)",
          "description": "Handle cost management and financial planning for businesses.",
          "exams_required": ["CMA Foundation", "CMA Intermediate", "CMA Final"],
          "specializations": ["Cost Accounting", "Financial Management", "Risk Management"],
          "other": ["Focus on business strategy and financial efficiency."]
        },
        {
          "title": "Financial Analyst",
          "description": "Analyze financial data and trends to assist investment decisions.",
          "exams_required": ["CFA Level 1", "CFA Level 2", "CFA Level 3"],
          "specializations": ["Investment Banking", "Portfolio Management", "Equity Research"],
          "other": ["Requires strong knowledge of financial markets."]
        },
        {
          "title": "Investment Banker",
          "description": "Assist companies in raising capital and handling mergers and acquisitions.",
          "exams_required": ["MBA in Finance", "CFA"],
          "specializations": ["Corporate Finance", "Asset Management", "Risk Analysis"],
          "other": ["High-pressure job requiring financial acumen."]
        },
        {
          "title": "Tax Consultant",
          "description": "Advise clients on tax planning and compliance.",
          "exams_required": ["CA", "CMA", "LLB (Taxation)"],
          "specializations": ["Income Tax", "GST", "International Taxation"],
          "other": ["Requires in-depth knowledge of tax laws."]
        },
        {
          "title": "Accountant",
          "description": "Manage financial transactions, bookkeeping, and audits.",
          "exams_required": ["B.Com", "M.Com", "Tally Certification"],
          "specializations": ["Bookkeeping", "Payroll Management", "Tax Filing"],
          "other": ["Essential role in businesses of all sizes."]
        },
        {
          "title": "Marketing Manager",
          "description": "Develop and implement marketing strategies to enhance brand presence.",
          "exams_required": ["MBA in Marketing"],
          "specializations": ["Digital Marketing", "Brand Management", "Market Research"],
          "other": ["Requires creativity and analytical thinking."]
        },
        {
          "title": "Banking Professional",
          "description": "Work in the banking sector managing loans, investments, and customer services.",
          "exams_required": ["IBPS PO", "SBI PO", "RBI Grade B"],
          "specializations": ["Retail Banking", "Corporate Banking", "Wealth Management"],
          "other": ["Requires knowledge of financial services and regulations."]
        },
        {
          "title": "Entrepreneur",
          "description": "Start and manage a business in various sectors.",
          "exams_required": ["B.Com", "MBA (optional)"],
          "specializations": ["E-commerce", "Startups", "Small Business Management"],
          "other": ["Requires risk-taking ability and business acumen."]
        }
      ]
    }
    
    
    
    
    
  ];
  


  constructor() { }



}
