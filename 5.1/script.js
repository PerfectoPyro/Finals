document.addEventListener('DOMContentLoaded', function() {
    // Define an array of team members with their details
    const teamMembers = [
        { 
            id: 1, name: "Kyrt Howard C. Calata", role: "Developer", email: "qz090930@gmail.com", 
            github: "https://github.com/PerfectoPyro/Area-of-computation.git", 
            facebook: "https://www.facebook.com/kyrt.calata.5?mibextid=ZbWKwL", 
            instagram: "https://www.instagram.com/kyrtiiieeee/profilecard/?igsh=djNscDc3M200OW5q", 
            hobbies: ["Coding", "Gaming", "Traveling"], 
            certifications: ["Certified Web Developer", "JavaScript Expert"] 
        },
        { 
            id: 2, name: "Steven Paulo Perando", role: "Developer", email: "pauloperando@gmail.com", 
            github: "https://github.com//Emanloloco", facebook: "https://www.facebook.com/paulopawpaww/", 
            instagram: "https://instagram.com/paulopawpaw/",
            hobbies: ["Design", "Photography", "Music"], 
            certifications: ["Certified Graphic Designer", "UX/UI Expert"] 
        },
        { 
            id: 3, name: "Xyron Argyel Garcia", role: "Developer", email: "xyrongracia10@gmail.com", 
            facebook: "https://facebook.com/xyron.garcia/about", 
            instagram: "https://instagram.com/argeyll?igsh=Mm8yMDFobm4wMXpw&utm_source=qr", hobbies: ["Leadership", "Strategy"], 
            certifications: ["Project Management Professional", "Certified Scrum Master"] 
        },
        {
            id: 4, name: "Sean Philippe Gregory Babag", role: "Developer", email: "seanbabag4@gmail.com", hobbies: ["Leadership", "Strategy"],
            facebook: "https://facebook.com/sean.babag.1/", 
            instagram: "https://instagram.com/seanbabag/",
            certifications: ["Certified Graphic Designer", "UX/UI Expert"]
        },
        {
            id: 5, name: "Ronnie A. Santos Jr.", role: "Developer", email: "rjsantos1920@gmail.com", hobbies: ["Gaming", "Playing Chess"],
            facebook: "https://facebook.com/profile.php?id=100049420954159", 
            certifications: ["Video Game Programmer"]
        },
        {
            id: 6, name: "Nicole Marie G. Alcid", role: "Developer", email: "nicolealcid@gmail.com", hobbies: ["Web designing", "Playing tennis", "Playing Video games"],
            facebook: "https://facebook.com/NiMar7123", 
            instagram: "https://instagram.com/nikuuul.mariii/",
            certifications: ["Certified Entry-Level Python Programmer"]
        }
    ];

    // Track the currently selected member
    let currentMember = null;

    // Get all the member links and add click event listener
    const memberLinks = document.querySelectorAll('.member-link');
    memberLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();  // Prevent default link behavior
            const memberId = parseInt(link.getAttribute('data-member'));
            const member = teamMembers.find(m => m.id === memberId);

            if (member) {
                // If there is a previously selected member, reset its name back to "Member X"
                if (currentMember) {
                    const previousLink = document.querySelector(`.member-link[data-member="${currentMember.id}"]`);
                    if (previousLink) {
                        previousLink.innerHTML = `Member ${currentMember.id}`; // Reset to default
                    }
                }

                // Update the link text with the new member's full name
                link.innerHTML = member.name; // Change the link text to the member's name

                // Display the member details in the team info section
                const teamMembersDiv = document.getElementById('team-members');
                teamMembersDiv.innerHTML = `
                    <h2>${member.name}</h2>
                    <p><strong>Role:</strong> ${member.role}</p>
                    <p><strong>Email:</strong> ${member.email}</p>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="${member.github}" target="_blank">GitHub</a></li>
                        <li><a href="${member.facebook}" target="_blank">Facebook</a></li>
                        <li><a href="${member.instagram}" target="_blank">Instagram</a></li>
                    </ul>
                    <h3>Hobbies</h3>
                    <ul>
                        ${member.hobbies.map(hobby => `<li>${hobby}</li>`).join('')}
                    </ul>
                    <h3>Certifications</h3>
                    <ul>
                        ${member.certifications.map(cert => `<li>${cert}</li>`).join('')}
                    </ul>
                `;

                // Set the current member to the clicked member
                currentMember = member;
            }
        });
    });
});
