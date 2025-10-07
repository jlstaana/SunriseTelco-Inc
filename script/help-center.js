document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.help-section');
    const sidebarLinks = document.querySelectorAll('.help-sidebar a');
    const searchInput = document.querySelector('.search-container input');

    const helpSections = {
        internet: [
            {
                question: "Why is my internet connection slow?",
                answer: "Slow connections can be caused by several factors: 1) WiFi interference from nearby devices, 2) Router location, 3) Peak usage times, 4) Device issues. Try restarting your router and running a speed test. If issues persist, contact our technical support."
            },
            {
                question: "How do I optimize my WiFi signal?",
                answer: "Place your router in a central location, away from metal objects and electronics. Keep it elevated and update its firmware regularly. Consider using WiFi extenders for larger spaces."
            },
            {
                question: "What should I do if my internet stops working?",
                answer: "1) Check all cable connections, 2) Restart your router and modem, 3) Verify service status in your area, 4) Try connecting via ethernet cable. If these steps don't help, contact our 24/7 support."
            }
        ],
        billing: [
            {
                question: "How do I view or pay my bill?",
                answer: "Log in to your customer portal at portal.sunrisetel.com or use our mobile app. We accept credit cards, bank transfers, and automatic payments. Bills can be paid online, by phone, or at any of our local offices."
            },
            {
                question: "Why did my bill change?",
                answer: "Bill changes might occur due to: 1) Promotion period ending, 2) Service upgrades, 3) Additional services, 4) Changes in tax rates. Check your detailed bill breakdown or contact billing support for specifics."
            },
            {
                question: "Can I set up automatic payments?",
                answer: "Yes! Set up AutoPay through your customer portal or by calling our billing department. We accept both credit cards and bank account payments for automatic billing."
            }
        ],
        technical: [
            {
                question: "How do I set up my new router?",
                answer: "1) Connect the router to your modem, 2) Power both devices on, 3) Wait for indicator lights to stabilize, 4) Connect to the default WiFi network listed on your router, 5) Open a browser and follow the setup wizard. Need help? Our technicians are available 24/7."
            },
            {
                question: "What are the recommended router settings?",
                answer: "We recommend: 1) WPA3 security protocol, 2) Unique, strong password, 3) 5GHz band for faster speeds, 4) Regular firmware updates. Contact technical support for optimal settings for your specific setup."
            }
        ],
        account: [
            {
                question: "How do I upgrade my plan?",
                answer: "Upgrade through your customer portal, call our sales team, or visit a local store. We'll help you choose the best plan and schedule any necessary equipment upgrades."
            },
            {
                question: "What documents do I need for a new account?",
                answer: "You'll need: 1) Government-issued ID, 2) Proof of address, 3) Social Security number for credit check. Business accounts require additional documentation."
            }
        ]
    };

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === sectionId) {
                section.classList.add('active');
            }
        });

        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });

        if (window.innerWidth <= 768) {
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        }
    }

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            showSection(sectionId);
            history.pushState(null, '', `#${sectionId}`);
        });
    });

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const allContent = document.querySelectorAll('.faq-item, .help-section p');
        
        allContent.forEach(element => {
            const text = element.textContent.toLowerCase();
            const parent = element.closest('.help-section');
            
            if (text.includes(searchTerm)) {
                element.style.display = 'block';
                if (parent) parent.classList.add('active');
            } else {
                element.style.display = 'none';
            }
        });
    });

    const initialSection = window.location.hash.substring(1) || 'internet';
    showSection(initialSection);
});
