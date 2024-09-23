// Smooth scrolling to section when a navigation link is clicked
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//             e.preventDefault();
//
//                     const targetId = this.getAttribute('href');
//                             document.querySelector(targetId).scrollIntoView({
//                                         behavior: 'smooth'
//                                                 });
//                                                     });
//                                                     });
//
//                                                     // Toggle mobile navigation menu
//                                                     const toggleMenu = document.querySelector('.menu-toggle');
//                                                     const nav = document.querySelector('nav ul');
//
//                                                     toggleMenu.addEventListener('click', () => {
//                                                         nav.classList.toggle('show');
//                                                         });
//
//                                                         // Show/Hide Feature Details on Button Click
//                                                         const featureButtons = document.querySelectorAll('.feature-button');
//                                                         featureButtons.forEach(button => {
//                                                             button.addEventListener('click', (e) => {
//                                                                     const featureDetails = e.target.nextElementSibling;
//                                                                             featureDetails.classList.toggle('hidden');
//                                                                                 });
//                                                                                 });
//
//                                                                                 // Contact form submission (if there's a form, add interactivity)
//                                                                                 document.querySelector('#contact-form').addEventListener('submit', function(e) {
//                                                                                     e.preventDefault();
//                                                                                         
//                                                                                             // Simulate form submission and clear form
//                                                                                                 alert('Thank you for reaching out! We will get back to you soon.');
//                                                                                                     this.reset();
//                                                                                                     });
//
