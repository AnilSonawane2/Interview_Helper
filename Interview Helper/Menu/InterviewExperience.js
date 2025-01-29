document.addEventListener('DOMContentLoaded', () => {
    // Array of company names
    const companies = [
        "Accenture", "Atos", "Birlasoft", "Cognizant",
        "Capgemini", "Deloitte", "HCL Technologies", "Hexaware Technologies", 
        "IBM", "Infosys", "L&T Infotech(LTI)", "MindTree", "Mphasis", 
        "Persistent Systems", "TCS", "Tech Mahindra", "Wipro" , "Zensar"
    ];

    // Corresponding array of company URLs
    const links = [
        "https://www.geeksforgeeks.org/accenture-interview-experience-22/",
        "https://www.geeksforgeeks.org/atos-interview-experience-on-campus/",
        "https://www.geeksforgeeks.org/birlasoft-interview-experience/",
        "https://www.geeksforgeeks.org/cognizant-interview-experience-on-campus/",
        "https://www.geeksforgeeks.org/capgemini-exceller-interview-experience-on-campus-2023-24/",
        "https://www.geeksforgeeks.org/deloitte-interview-experience-for-software-engineer/",
        "https://www.geeksforgeeks.org/hcl-interview-experience-on-campus-2/",
        "https://www.geeksforgeeks.org/hexaware-interview-experience-on-campus-2/",
        "https://www.geeksforgeeks.org/ibm-interview-experience-for-software-engineer/",
        "https://www.geeksforgeeks.org/infosys-interview-experience-6/?ref=ml_lbp",
        "https://www.geeksforgeeks.org/l-t-infotech-interview-experience-on-campus/",
        "https://www.geeksforgeeks.org/mindtree-interview-experience-on-campus-2/",
        "https://www.geeksforgeeks.org/mphasis-interview-experience-for-ase/?ref=ml_lbp",
        "https://www.geeksforgeeks.org/persistent-systems-interview-experience-on-campus-2023/",
        "https://www.geeksforgeeks.org/tcs-interview-experience-set-3-on-campus-recruitment-drive/",
        "https://www.geeksforgeeks.org/tech-mahindra-interview-experience-on-campus/",
        "https://www.geeksforgeeks.org/tag/wipro-interview-experience/",
        "https://www.geeksforgeeks.org/zensar-technologies-interview-experience-for-fte-on-campus-2022/"
    ];

    const companyList = document.getElementById('company-list');
    const noResult = document.getElementById('noResult');
    const searchInput = document.getElementById('searchInput');

    // Function to display companies based on search input
    function displayCompanies(query) {
        // Clear previous results
        companyList.innerHTML = '';
        noResult.style.display = 'none';

        // Filter companies based on query
        const filteredCompanies = companies.filter(company => 
            company.toLowerCase().includes(query.toLowerCase())
        );

        // Display filtered results or no result message
        if (filteredCompanies.length > 0) {
            filteredCompanies.forEach((company, index) => {
                const a = document.createElement('a');
                a.href = links[companies.indexOf(company)]; // Set the href to the corresponding link
                a.target = '_blank'; // Open link in a new tab
                a.style.textDecoration = 'none';

                const div = document.createElement('div');
                div.className = 'p-2';
                div.textContent = company;

                a.appendChild(div);
                companyList.appendChild(a);
            });
        } else {
            noResult.style.display = 'block';
        }
    }

    // Initial display of all companies
    displayCompanies('');

    // Event listener for search input
    searchInput.addEventListener('input', () => {
        displayCompanies(searchInput.value);
    });
});