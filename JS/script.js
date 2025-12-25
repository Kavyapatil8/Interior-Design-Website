document.addEventListener("DOMContentLoaded", function () {
    // FAQ Toggle Functionality
    document.querySelectorAll(".faq-item h3").forEach(question => {
        question.addEventListener("click", function () {
            let answer = this.nextElementSibling;

            // Toggle answer display
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });

    // Show More FAQs Button
    let showMoreBtn = document.getElementById("show-more-btn");
    let moreFaqs = document.getElementById("more-faqs");

    if (showMoreBtn && moreFaqs) {
        showMoreBtn.addEventListener("click", function () {
            moreFaqs.style.display = "block"; // Show more FAQs
            this.style.display = "none"; // Hide button after click
        });
    }
});
