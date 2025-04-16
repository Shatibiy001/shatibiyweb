const textArray = [
    "Pure, Natural, and Delicious Honey from Nature's Heart",
    "Sustainably Harvested Honey for Your Family",
    "Experience the Sweetness of Nature"
];
let textIndex = 0;

function updateText() {
    const textElement = document.querySelector('.dynamic-text');
    textElement.textContent = textArray[textIndex];
    textIndex = (textIndex + 1) % textArray.length;
}

setInterval(updateText, 3000); // Change text every 3 seconds
updateText(); // Initialize text




function toggleAboutText() {
    const aboutText = document.getElementById('aboutText');
    const button = document.querySelector('.read-more-btn');

    if (aboutText.classList.contains('hidden')) {
        aboutText.classList.remove('hidden');
        aboutText.classList.add('visible');
        button.textContent = "Show Less";
    } else {
        aboutText.classList.remove('visible');
        aboutText.classList.add('hidden');
        button.textContent = "Read More";
    }
}

// Load about text dynamically for better structure & control
window.addEventListener('DOMContentLoaded', () => {
    const aboutContent = `
        Shatibiy Beekeeping Consult is a pioneering organization dedicated to promoting sustainable beekeeping practices, 
        providing expert consulting services, and fostering a community of bee enthusiasts. Our mission is rooted in environmental stewardship, 
        quality production, and community impact.

        We specialize in producing pure, organic honey harvested using eco-friendly methods. Our beekeeping training sessions empower aspiring and 
        experienced apiarists with practical, up-to-date skills. We also offer top-notch honey harvesting kits designed for efficiency and safety.

        Our team is passionate about the well-being of bees and their role in pollination and food security. By choosing Shatibiy, 
        you're supporting a vision that prioritizes nature, community, and sustainable agriculture.

        Whether you're here to enjoy our honey, learn the art of beekeeping, or explore innovative tools, we welcome you to our buzzing family.
    `;
    document.getElementById('aboutText').textContent = aboutContent;
});


 
function showProductDetails(product) {
    const details = {
        "Raw Honey": "Our raw honey is unprocessed and retains all its natural enzymes and nutrients.",
        "Flavored Honey": "Choose from a variety of flavors like lavender, cinnamon, and lemon.",
        "Honeycomb": "Enjoy honey straight from the comb, a delightful and unique experience."
    };
    document.getElementById('product-title').textContent = product;
    document.getElementById('product-description').textContent = details[product];
    document.getElementById('product-details').classList.remove('hidden');
    }

    function closeProductDetails() {
    document.getElementById('product-details').classList.add('hidden');
    }

    document.getElementById('load-story').addEventListener('click', function() {
        const storyText = `
            Welcome to Shatibiy Bee Keeping Consults! Our journey began as a dream nurtured by a family’s love for nature and sustainability. 
            Founded by a passionate beekeeper, our business blossomed from a small backyard operation into a thriving honey enterprise. 
            We are dedicated to producing pure, organic honey while educating the community about the vital role of bees in our ecosystem. 
            Each jar of honey tells a story of hard work, dedication, and the sweet rewards of nature's bounty. 
            We believe that honey is not just a product; it’s a testament to the harmony between humans and nature. 
            Thank you for being a part of our journey and supporting sustainable beekeeping!
        `;
        
        document.getElementById('story-text').innerText = storyText;
    });

    
    const slider = document.getElementById('slider');

    function scrollSlider(direction) {
      const slideWidth = slider.querySelector('.slide').offsetWidth + 20; // 20 = gap
      slider.scrollBy({ left: direction * slideWidth, behavior: 'smooth' });
    }
  
    // Optional: swipe support
    let isDown = false;
    let startX;
    let scrollLeft;
  
    slider.addEventListener('mousedown', e => {
      isDown = true;
      slider.classList.add('grabbing');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
  
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('grabbing');
    });
  
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('grabbing');
    });
  
    slider.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll speed
      slider.scrollLeft = scrollLeft - walk;
    });

    document.getElementById('sustainability-tab').addEventListener('click', function() {
        showTab('sustainability');
    });
    
    document.getElementById('community-tab').addEventListener('click', function() {
        showTab('community');
    });
    
    document.getElementById('quality-tab').addEventListener('click', function() {
        showTab('quality');
    });
    
    function showTab(tab) {
        const sustainabilityContent = document.getElementById('sustainability-content');
        const communityContent = document.getElementById('community-content');
        const qualityContent = document.getElementById('quality-content');
    
        sustainabilityContent.classList.remove('active');
        communityContent.classList.remove('active');
        qualityContent.classList.remove('active');
    
        if (tab === 'sustainability') {
            sustainabilityContent.classList.add('active');
        } else if (tab === 'community') {
            communityContent.classList.add('active');
        } else if (tab === 'quality') {
            qualityContent.classList.add('active');
        }
    }    

    // Scroll reveal effect for shipping options
  const shippingOptions = document.querySelectorAll(".shipping-option");

  const revealShippingOptions = () => {
    shippingOptions.forEach(option => {
      const rect = option.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        option.classList.add("visible");
      }
    });
  };

  window.addEventListener('scroll', revealShippingOptions);
  window.addEventListener('load', revealShippingOptions);

  document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("📨 Thank you! Your message has been received. We’ll get back to you soon.");
    this.reset();
  });

  document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("📨 Thank you! Your message has been received. We’ll get back to you soon.");
    this.reset();
  });

  document.querySelector(".service-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Assuming Formspree submission is successful:
    alert("✅ Your request has been sent! We’ll get in touch shortly.");
    
    // Reset form fields
    document.querySelector(".service-form").reset();
  });

  let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

document.getElementById('next-testimonial').addEventListener('click', function() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

document.getElementById('prev-testimonial').addEventListener('click', function() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});

// Show the first testimonial initially
showTestimonial(currentTestimonial);

document.querySelector(".service-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Assuming Formspree submission is successful:
    alert("✅ Your request has been sent! We’ll get in touch shortly.");
    
    // Reset form fields
    document.querySelector(".service-form").reset();
  });

  const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});
