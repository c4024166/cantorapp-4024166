document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-query");
    const resultsContainer = document.getElementById("results");

    const data = [
      {
        "title": "About Us",
        "content": "Cantor College was established in 1989 to specialize in Computing and Design. At Cantor College, we want to give students the education they need to achieve their career aims, leaving them equipped with the knowledge, skills and experience to succeed. Cantor College gives you the opportunities that can give you the edge when you enter the world of work, through our teaching and our links to some of the world's leading researchers and employers. Our students have gone on to successful careers in a wide range of industries across the globe. Whatever your ambitions, our learning and support can help to get the most out of your time with Cantor College, both as a student and in your future career.",
        "url": "index.html"
      },
      {
          "title": "Computing Courses",
          "content": "",
          "url": "index.html"
      },
      {
          "title": "Computing Courses",
          "content": "Computing Courses\nThe College offers a range of courses to suit applicants with varying backgrounds and educational abilities. At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks, Software Engineering and Cyber Security with Forensics amongst others.\nThe College teaches undergraduate and postgraduate courses in a wide range of specialisms, including computer science, software development, information systems, networking and software engineering. It is at the heart of a passionate computing community, including student societies devoted to games development, digital forensics and programming.\nThe courses are British Computer Society accredited and are highly relevant to modern industry. They are designed to prepare students for professional occupations in Computing and related fields. Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.",
          "url": "index.html"
      },
      {
          "title": "Design Courses",
          "content": "The College is an internationally connected creative community of diverse disciplines housed under one roof. We shape our students' futures, preparing them to shape the world through applied knowledge and creativity. The College's art and design courses don't just train you, they promote alternative ways of thinking, making and communicating; they provide you with space, tools and inspiration to develop your creative practice and a clear career path. You'll get expert teaching from active practitioners and researchers who will encourage you to adopt innovative and resourceful approaches that both perceive and create opportunities for better lives.\nYou'll develop your creative practice whilst interacting with your peers in well-equipped studios, making and digital workshops. At the same time, you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients, cultural institutions, businesses and organisations.",
          "url": "index.html"
      },
      {
          "title": "Working with businesses",
          "content": "Partner with Cantor College: Unlock Expertise, Innovation, and Growth\nAt Cantor College, we believe in the power of collaboration between education and industry. Our College offers a range of specialized services designed to support businesses in achieving their goals through cutting-edge expertise, innovation, and tailored solutions. With a focus on Computing, Design, and Technology, we are uniquely positioned to help your business thrive in an increasingly digital world.",
          "url": "for-business.html"
      },
      {
          "title": "Our Services",
          "content": "Custom Training and Development Programs: Empower your workforce with skills that matter. Our faculty can develop custom training programs that address your business's specific needs, whether in advanced computing technologies, creative design, or the latest in tech innovation. We offer flexible learning options, including on-site workshops, online modules, and blended learning experiences.",
          "url": "index.html"
      },
      {
          "title": "Our Services",
          "content": "Research and Development Partnerships: Leverage the talent and creativity of our students and faculty by partnering with Cantor College on research and development projects. Whether you’re looking to explore new technologies, innovate your product line, or solve complex technical challenges, our R&D team is ready to collaborate with you.",
          "url": "for-business.html"
      },
      {
          "title": "Why Partner with Cantor College",
          "content": "Cutting-Edge Expertise: Our programs are at the forefront of industry trends, ensuring that our services reflect the latest advancements in technology and design.\nInnovation at the Core: We foster a culture of creativity and problem-solving, making us the ideal partner for businesses seeking innovative solutions.\nTailored Solutions: We understand that every business is unique. Our services are customized to meet your specific objectives and challenges.\nFuture-Ready Talent: Our students are trained to excel in the modern workplace, equipped with both theoretical knowledge and practical skills.",
          "url": "for-business.html"
      },
      {
          "title": "Why Partner with Cantor College",
          "content": "Design and Technology Consultancy: Our experienced professionals and top-tier students can provide consultancy services to help you with a variety of projects, from web development and software engineering to product design and user experience optimization. We offer fresh perspectives and innovative approaches tailored to your business.",
          "url": "for-business.html"
      },
      {
          "title": "Our Services",
          "content": "Internships and Graduate Recruitment: Gain access to a pool of highly skilled and motivated students ready to contribute to your business. Our internship and recruitment services can connect you with top talent in computing, design, and technology, providing you with candidates who are equipped with the latest industry knowledge and practical experience.",
          "url": "for-business.html"
      },
      {
          "title": "Our Services",
          "content": "Event Hosting and Sponsorship: Cantor College hosts a range of events throughout the year, including hackathons, design challenges, and technology expos. We offer businesses the opportunity to sponsor events or collaborate in their organization, giving you direct access to the brightest minds in the field and the chance to showcase your brand to our community.",
          "url": "index.html"
      },
      {
          "title": "Get in Touch",
          "content": "Ready to explore how Cantor College can help your business grow? Contact our Business Services team today to discuss your needs and learn more about our offerings. We look forward to working with you to achieve your business goals.\nHow to find us:\nCantor College\nMain Street\nSheffield\nSC4 2BB",
          "url": "index.html"
      },
      {
        "title": "Learning Resources",
        "content": "The College is located in the attractive and pleasantly refurbished building. The building houses computing laboratories, and lecture/tutorial rooms. It has its own catering facilities and student work areas. There is also a car park to the back of the building.\nOur building has a space of 9500m², houses over 240 staff, and provides teaching space for more than 1600 students..",
        "url": "learning-resources.html"
      },
      {
          "title": "Learning Resources",
          "content": "Facilities include:\nWi-Fi technology\nPool teaching rooms, including classrooms to teach from 25 - 80 students\nSpecialist faculty facilities\nA double-height lecture theatre at first and second-floor level\nDramatic three-storey glass open atrium\nMeeting rooms\nOffice accommodation\nSpecialist IT facilities\nReception desk area\nCatering outlet\nParking for disabled badge holders\nCycle racks\nGallery",
          "url": "learning-resources.html"
      },
      {
          "title": "Computing Courses",
          "content": "",
          "url": "index.html"
      },
      {
          "title": "Rules Governing the Use of the Library and Resource Centre",
          "content": "Introduction\nAll students and staff of the College are entitled to register as members of the Library and Resource Centre and to use the facilities for the purpose of their course of study or College employment.\nMembership may also be extended to other individuals and to persons nominated from other organisations: a fee is usually charged. Access to the Library and Resource Centre for study purposes may be made available to non-members by arrangement. Details are available in the External Services leaflet.\nUse of facilities implies acceptance of the Library and Resource Centre rules printed below. These are designed to protect the interests of all users of the Library and Resource Centre and to ensure that the College operates within the law and can carry out its functions efficiently and effectively. The Library and Resource Centre rules apply in principle to all sites, including workstation rooms and site libraries, notwithstanding some variations in practice in the site libraries. Admission to the Library and Resource Centre is conditional upon observation of the rules, and the staff are empowered to enforce them.\nBreaches of the rules may be dealt with by specific Library and Resource Centre Disciplinary Action, including the withdrawal of some access, and if appropriate by invoking the College’s Regulations for Students, in the case of students, or in the case of staff through the appropriate College procedures as set out in the Staff Handbook.",
          "url": "learning-resources.html"
      },
      {
          "title": "Rules",
          "content": "Access\nThe use of Library and Resource Centre facilities is normally limited to use for the educational and other purposes of the College.\nAll individuals wishing to become members of the Library and Resource Centre must comply with the registration procedures, including an undertaking to abide by Library and Resource Centre rules.\nIndividuals or organisations who are not eligible for membership but have good reason to use the Library and Resource Centre may be admitted, by arrangement, for purposes of study only. Procedures for seeking admission are outlined in the External Services leaflet. Non-members must sign the Visitors' Book on each visit, and may be required to produce written identification. Study use does not include access to the College's Academic Network.\nID cards issued by the College are not transferable. The person named on each card is responsible for all items borrowed on it and is liable for the cost of replacement of the card or items borrowed on it in the event of loss or damage.\nUsers of the Library and Resource Centre must be willing to show ID cards or other identification when requested to do so by College staff.",
          "url": "learning-resources.html"
      },
      {
          "title": "Computing Courses",
          "content": "",
          "url": "index.html"
      },
      {
          "title": "Use of Facilities",
          "content": "The Library and Resource Centre is not responsible for loss of, or damage to, personal belongings. Users must take precautions against theft and not leave belongings unattended.\nStudy tables/PCs may not be reserved by depositing belongings. Articles left unattended may be removed by staff but will be returned on request at the Reception Desk.\nAll users must conduct themselves quietly. No conversation is permitted in designated ‘Silent’ areas.\nPersonal stereos may not be used in the Library and Resource Centre.\nMobile phones must be turned off in all study areas. Their use is permitted in the enclosed stairwells of the Main Site building.\nUsers must not use mains electrical supplies to power personal equipment unless it has been tested and confirmed as meeting Health & Safety standards. Written evidence of compliance is required.\nEating and drinking are not permitted in public areas of the Library and Resource Centre.\nAction will be taken against misuse of furniture, facilities, or materials. Offenders may be required to pay for damages or loss.",
          "url": "learning-resources.html"
      },
      {
        "title": "Information for Staff",
        "content": "News: Cantor College recently hosted the Software Engineering student of the year awards. Short- listed candidates from around the country attended the one-day event.\nAcademic Registry: For academic regulations, assessment, awards, student records and course validation.\nCatering Services: Contact the Catering Services regarding on and off-site catering.\nFinancial Services: The financial team based on the 2nd Floor are responsible for all areas of student finance as well as College budgeting.\nInformation Systems Services: The ISS team delivers the College's computing facilities including all hardware and software. They also run the staff helpdesk.\nMarketing Services: The Marketing Team will help promote events and new courses. They will help with press release preparation.\nPersonnel Services: All staff pay and conditions enquiries should be directed to the Personnel Services team on the 3rd floor.\nFacilities: The facilities team is responsible for the general care and maintenance of the College. All enquiries via the main helpdesk.",
        "url": "for-staff.html"
      },
      {
          "title": "Information for Students",
          "content": "Explore Cantor College:\n World-Class Facilities for Your Success\nAt Cantor College, we are committed to providing our students with the best possible environment to learn, create, and innovate. Our state-of-the-art facilities are designed to support your academic journey and help you thrive in your chosen field. Whether you're studying computing, design, or technology, our campus offers everything you need to excel.\nOur Facilities\nAdvanced Computing Labs: Our computing labs are equipped with the latest hardware and software, providing you with the tools you need to develop your skills in programming, cybersecurity, data science, and more. The labs are accessible 24/7, ensuring you can work on your projects at any time that suits you.\nDesign Studios: Our design studios offer a creative space for students in graphic design, digital media, and product design. Each studio is equipped with high-end graphic tablets, professional-grade software, and large-format printers, allowing you to bring your ideas to life. The studios also feature collaborative spaces where you can work with peers and faculty on group projects.\nInnovation and Makerspace: Cantor College's Innovation and Makerspace is a hub for creativity and invention. This facility is equipped with 3D printers, laser cutters, CNC machines, and other advanced prototyping tools. Whether you're working on a design project or developing a new tech product, this space provides the resources to turn your concepts into reality.",
          "url":  "for-student.html"
      },
      {
          "title": "Information for Students",
          "content": "Technology Sandbox: The Technology Sandbox is an experimental space where students can explore the latest in VR, AR, and AI technologies. With access to cutting-edge devices and software, you’ll be able to experiment with emerging technologies and push the boundaries of what’s possible in your field.\nCollaborative Learning Spaces: Our campus features numerous collaborative learning spaces designed to foster teamwork and creative problem-solving. These spaces are equipped with smartboards, video conferencing tools, and flexible seating arrangements, making them ideal for group work, study sessions, or brainstorming meetings.\nLibrary and Resource Centre: The Cantor College Library is a comprehensive resource Centre offering an extensive collection of books, journals, and digital resources related to computing, design, and technology. The library also provides quiet study areas, computer stations, and access to online databases, ensuring you have the information you need at your fingertips.\nStudent Hub: The Student Hub is the social heart of our campus, providing a place for relaxation and connection. Here, you’ll find a café, lounge areas, and recreational facilities, making it the perfect spot to unwind between classes, meet with friends, or join student-led activities and clubs.\nCareer and Development Centre: Our Career and Development Centre is dedicated to helping you plan your future. Offering career counseling, resume workshops, and job placement services, this Centre provides the support you need to transition from student to professional. The Centre also hosts regular employer networking events and industry talks to help you build connections in your field.\nFitness and Wellness Centre: We believe in nurturing both the mind and body. Our Fitness and Wellness Centre offers a fully equipped gym, exercise studios, and a range of fitness classes to help you stay healthy and active. The Centre also includes wellness services such as yoga, meditation, and counseling to support your overall well-being.\nOn-Campus Housing: For those who choose to live on campus, Cantor College offers modern, comfortable housing options. Our residence halls provide a supportive community environment, with amenities like high-speed internet, study lounges, and common areas where you can relax and socialize.\nExplore our campus, discover our resources, and make the most of everything Cantor College has to offer..",
          "url": "for-student.html"
      },
      {
          "title": "Course List",
          "content": "Computing\nComputer Networks\nCyber Security with Forensics\nComputer Science for Games\nSoftware Engineering\nComputer Science\nComputing with Foundation Year\nCyber Security with Forensics with Foundation Year\nSoftware Engineering with Foundation Year\nCyber Security with Foundation Year\nInformation Technology with Business Studies with Foundation Year\nComputer Science with Foundation Year\nComputer Science for Games with Foundation Year\nBusiness and Digital Technology with Foundation Year\nComputing\nComputing and Informatics\nCyber Security\nGraphic Design\nInterior Architecture and Design\nJewellery, Materials and Design\nGame Design and Development\nProduct Design\nProduct Design\nDigital Media Production",
          "url": "course-list.html"
      },
      {
        "title": "Contact Us",
        "content": "Get in touch with us for inquiries or support.",
        "url": "index.html"
      }
    ];

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        resultsContainer.innerHTML = "";

        if (query) {
            const results = data.filter(item =>
                item.content.toLowerCase().includes(query) ||
                item.title.toLowerCase().includes(query)
            );

            if (results.length > 0) {
                results.forEach(result => {
                    resultsContainer.innerHTML += `
                        <div class="result-item">
                            <h3>${result.title}</h3>
                            <p>${result.content.slice(0, 150)}...</p>
                            <a href="${result.url}">Read more</a>
                        </div>
                    `;
                });
            } else {
                resultsContainer.innerHTML = `<p>No results found for "<strong>${query}</strong>".</p>`;
            }
        } else {
            resultsContainer.innerHTML = `<p>Please enter a search term.</p>`;
        }
    });
});

