document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const searchInput = document.getElementById('faq-search');
    const faqList = document.querySelector('.faq-list');

    const faqs = {
        billing: [
            {
                question: "How do I view my bill?",
                answer: "You can view your bill by logging into your customer portal or through our mobile app."
            },
            {
                question: "What payment methods do you accept?",
                answer: "We accept credit cards, debit cards, bank transfers, and automatic payments."
            }
        ],
        technical: [
            {
                question: "How do I reset my router?",
                answer: "Locate the reset button on your router, press and hold for 10 seconds until the lights flash."
            },
            {
                question: "What should I do if my internet is slow?",
                answer: "First try restarting your router. If the issue persists, run a speed test and contact our support."
            }
        ],
        service: [
            {
                question: "How long does installation take?",
                answer: "Standard installation typically takes 2-3 hours to complete."
            },
            {
                question: "Can I upgrade my plan?",
                answer: "Yes, you can upgrade your plan anytime through your customer portal or by contacting support."
            }
        ]
    };

    function displayFAQs(category = 'all') {
        faqList.innerHTML = '';
        Object.entries(faqs).forEach(([key, items]) => {
            if (category === 'all' || category === key) {
                items.forEach(faq => {
                    const faqItem = createFAQItem(faq);
                    faqList.appendChild(faqItem);
                });
            }
        });
    }

    function createFAQItem(faq) {
        const div = document.createElement('div');
        div.className = 'faq-item';
        div.innerHTML = `
            <div class="faq-question">
                <h3>${faq.question}</h3>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        `;

        div.querySelector('.faq-question').addEventListener('click', () => {
            div.querySelector('.faq-question').classList.toggle('active');
            const answer = div.querySelector('.faq-answer');
            answer.classList.toggle('active');
        });

        return div;
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            displayFAQs(button.dataset.category);
        });
    });

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('h3').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();
            
            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    displayFAQs();
});
