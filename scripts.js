// scripts.js — Enhanced with property modal, filtering, and contact form integration
document.addEventListener('DOMContentLoaded', () => {
  /* Mobile drawer toggle */
  const menuBtn = document.querySelector('.menu-button');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  
  if (menuBtn && mobileDrawer) {
    menuBtn.addEventListener('click', (e) => {
      const open = !mobileDrawer.hasAttribute('hidden');
      if (open) {
        mobileDrawer.setAttribute('hidden', '');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      } else {
        mobileDrawer.removeAttribute('hidden');
        menuBtn.classList.add('active');
        menuBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });

    // close when link clicked
    mobileDrawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileDrawer.setAttribute('hidden', '');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // close on escape
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape') {
        mobileDrawer.setAttribute('hidden', '');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // click outside to close
    document.addEventListener('click', (ev) => {
      if (!mobileDrawer.contains(ev.target) && !menuBtn.contains(ev.target)) {
        mobileDrawer.setAttribute('hidden', '');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* Carousel controls */
  const carousel = document.querySelector('[data-carousel]');
  const prev = document.querySelector('.control.prev');
  const next = document.querySelector('.control.next');

  function scrollCarousel(dir = 1) {
    if (!carousel) return;
    const card = carousel.querySelector('.property-card');
    if (!card) return;
    const offset = card.offsetWidth + 16;
    carousel.scrollBy({ left: offset * dir, behavior: 'smooth' });
  }

  if (prev && next) {
    prev.addEventListener('click', () => scrollCarousel(-1));
    next.addEventListener('click', () => scrollCarousel(1));
  }

  /* Property Data */
  const propertyData = {
    1: {
      id: 1,
      title: "Urban Heights Residency",
      type: "3 BHK Builder Floor",
      location: "Dwarka Mor, New Delhi",
      price: "₹58,00,000",
      sqft: "1100 sqft",
      carpet: "950 sqft",
      status: "Ready to Move",
      loan: "90% Loan Available",
      emi: "Starting ₹25,000/month",
      amenities: ["Modular Kitchen", "24/7 Security", "Power Backup", "Lift", "Reserved Parking", "Club House Access"],
      features: ["Registry Ready", "Metro: 5 min walk", "Bank Loan Approved", "Corner Location", "North Facing"],
      gallery: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1000&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1000&auto=format&fit=crop&q=80"
      ],
      description: "Premium 3 BHK builder floor in prime Dwarka Mor location. Perfect for families with excellent connectivity to metro, schools, and hospitals."
    },
    2: {
      id: 2,
      title: "Metroline Habitat",
      type: "2 BHK Corner Flat",
      location: "Mansa Ram Park, New Delhi",
      price: "₹42,00,000",
      sqft: "850 sqft",
      carpet: "720 sqft",
      status: "Ready to Move",
      loan: "85% Loan Available",
      emi: "Starting ₹18,000/month",
      amenities: ["Granite Flooring", "Dual Balconies", "Water & Electricity Ready", "Security", "Near Market"],
      features: ["Corner Plot", "Metro: 150 meters", "Sunlight All Day", "Low Maintenance", "Quick Possession"],
      gallery: [
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1000&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1000&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1000&auto=format&fit=crop&q=80"
      ],
      description: "Spacious 2 BHK corner flat with excellent sunlight and metro connectivity. Ideal for nuclear families and working professionals."
    },
    3: {
      id: 3,
      title: "Skycourt Residences",
      type: "3 BHK Luxury Apartment",
      location: "Rama Park, New Delhi",
      price: "₹95,00,000",
      sqft: "1350 sqft",
      carpet: "1150 sqft",
      status: "Under Construction",
      loan: "80% Loan Available",
      emi: "Starting ₹42,000/month",
      amenities: ["Italian Marble", "Smart Home Automation", "Modular Kitchen", "2 Covered Parking", "Gym", "Swimming Pool"],
      features: ["Flexible Payment Plan", "Home Automation", "Premium Finishes", "Green Building", "Video Security"],
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1560448205-97abe7378152?w=1000&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1000&auto=format&fit=crop&q=80"
      ],
      description: "Luxury 3 BHK apartment with premium amenities and smart home features. Perfect for those seeking modern living with all comforts."
    },
    4: {
      id: 4,
      title: "Cityview Apartments",
      type: "1 BHK Ready Flat",
      location: "Uttam Nagar, New Delhi",
      price: "₹28,00,000",
      sqft: "550 sqft",
      carpet: "480 sqft",
      status: "Ready to Move",
      loan: "75% Loan Available",
      emi: "Starting ₹12,000/month",
      amenities: ["Lift Building", "24/7 Security", "Modular Kitchen", "Near Market", "Hospital Nearby"],
      features: ["Registry Completed", "Immediate Possession", "Low Maintenance", "Rental Yield: 4%", "Easy Resale"],
      gallery: [
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1000&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1000&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1000&auto=format&fit=crop&q=80"
      ],
      description: "Affordable 1 BHK ready-to-move flat with completed registry. Perfect for first-time home buyers and investors."
    },
    featured: {
      id: "featured",
      title: "3 BHK Skyview Floor",
      type: "3 BHK Builder Floor",
      location: "Dwarka Mor, New Delhi",
      price: "₹58,00,000",
      sqft: "1100 sqft",
      carpet: "950 sqft",
      status: "Ready to Move",
      loan: "90% Loan Available",
      emi: "Starting ₹25,000/month",
      amenities: ["Modular Kitchen", "Smart Lock System", "Power Backup", "Lift", "Reserved Parking", "24/7 Security"],
      features: ["Metro: 5 min walk", "Loan Approved", "Registry Ready", "Corner Property", "Premium Finishes"],
      gallery: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1000&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1000&auto=format&fit=crop&q=80"
      ],
      description: "Featured property with premium amenities and excellent location. Book your site visit today!"
    }
  };

  /* Property Modal */
  const propertyModal = document.getElementById('propertyModal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.querySelector('.modal-close');
  const propertyInterestedInput = document.getElementById('propertyInterested');

  function showPropertyModal(propertyId) {
    const property = propertyData[propertyId];
    if (!property) return;

    // Set property interested in contact form
    if (propertyInterestedInput) {
      propertyInterestedInput.value = property.title;
    }

    const modalHTML = `
      <div class="property-details">
        <h2>${property.title}</h2>
        <p class="muted">${property.location} • ${property.type}</p>
        
        <div class="property-stats">
          <div class="stat">
            <span class="stat-value">${property.price}</span>
            <span class="stat-label">Total Price</span>
          </div>
          <div class="stat">
            <span class="stat-value">${property.sqft}</span>
            <span class="stat-label">Built-up Area</span>
          </div>
          <div class="stat">
            <span class="stat-value">${property.carpet}</span>
            <span class="stat-label">Carpet Area</span>
          </div>
          <div class="stat">
            <span class="stat-value">${property.status}</span>
            <span class="stat-label">Status</span>
          </div>
        </div>
        
        <div class="property-gallery">
          ${property.gallery.map(img => `<img src="${img}" alt="${property.title}" loading="lazy">`).join('')}
        </div>
        
        <div class="details-grid">
          <div class="detail-item">
            <span class="detail-icon">🏦</span>
            <div>
              <strong>Loan Details</strong>
              <p>${property.loan}<br>${property.emi}</p>
            </div>
          </div>
          
          <div class="detail-item">
            <span class="detail-icon">📍</span>
            <div>
              <strong>Location Advantages</strong>
              <p>5 min to Metro • Near schools & hospitals • Market within walking distance</p>
            </div>
          </div>
          
          <div class="detail-item">
            <span class="detail-icon">✅</span>
            <div>
              <strong>Key Features</strong>
              <p>${property.features.join(' • ')}</p>
            </div>
          </div>
          
          <div class="detail-item">
            <span class="detail-icon">🏡</span>
            <div>
              <strong>Amenities</strong>
              <p>${property.amenities.join(' • ')}</p>
            </div>
          </div>
        </div>
        
        <div class="property-description">
          <h4>Property Description</h4>
          <p>${property.description}</p>
        </div>
        
        <div class="property-actions" style="margin-top: 2rem;">
          <button class="btn btn-primary enquire-now" data-property-id="${property.id}" style="flex: 2;">
            📞 Enquire About This Property
          </button>
          <button class="btn btn-outline" onclick="window.open('tel:+919667355117')" style="flex: 1;">
            Call Now
          </button>
        </div>
        
        <div class="form-note" style="margin-top: 1rem;">
          <p>📞 Call us at <a href="tel:+919667355117">+91 96673 55117</a> for immediate assistance</p>
          <p>💬 <a href="https://wa.me/919667355117" target="_blank">Chat on WhatsApp</a> for quick responses</p>
        </div>
      </div>
    `;

    modalBody.innerHTML = modalHTML;
    propertyModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Re-attach event listeners for enquire buttons in modal
    modalBody.querySelectorAll('.enquire-now').forEach(btn => {
      btn.addEventListener('click', () => {
        closePropertyModal();
        setTimeout(() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          // Set focus to contact form
          document.querySelector('#contactForm input[name="name"]')?.focus();
        }, 300);
      });
    });
  }

  function closePropertyModal() {
    if (propertyModal) {
      propertyModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Event listeners for view details buttons
  document.querySelectorAll('.view-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const propertyId = btn.dataset.propertyId;
      showPropertyModal(propertyId);
    });
  });

  // Event listeners for enquire buttons
  document.querySelectorAll('.enquire-now').forEach(btn => {
    btn.addEventListener('click', () => {
      const propertyId = btn.dataset.propertyId;
      const property = propertyData[propertyId];
      
      if (property && propertyInterestedInput) {
        propertyInterestedInput.value = property.title;
      }
      
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      // Set focus to contact form
      setTimeout(() => {
        document.querySelector('#contactForm input[name="name"]')?.focus();
      }, 500);
    });
  });

  // Close modal when clicking close button
  if (modalClose) {
    modalClose.addEventListener('click', closePropertyModal);
  }

  // Close modal when clicking outside
  if (propertyModal) {
    propertyModal.addEventListener('click', (e) => {
      if (e.target === propertyModal) {
        closePropertyModal();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && propertyModal && propertyModal.classList.contains('active')) {
      closePropertyModal();
    }
  });

  /* Property Filtering */
  const filterType = document.getElementById('filterType');
  const filterLocation = document.getElementById('filterLocation');
  const filterBudget = document.getElementById('filterBudget');
  const filterStatus = document.getElementById('filterStatus');
  const propertyCards = document.querySelectorAll('.property-card');

  function filterProperties() {
    const typeValue = filterType?.value || 'all';
    const locationValue = filterLocation?.value || 'all';
    const budgetValue = filterBudget?.value || 'all';
    const statusValue = filterStatus?.value || 'all';

    propertyCards.forEach(card => {
      const cardType = card.dataset.type || '';
      const cardLocation = card.dataset.location || '';
      const cardBudget = card.dataset.budget || '';
      const cardStatus = card.dataset.status || '';

      const typeMatch = typeValue === 'all' || cardType.includes(typeValue);
      const locationMatch = locationValue === 'all' || cardLocation === locationValue;
      const budgetMatch = budgetValue === 'all' || cardBudget === budgetValue;
      const statusMatch = statusValue === 'all' || cardStatus.includes(statusValue);

      if (typeMatch && locationMatch && budgetMatch && statusMatch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Add event listeners to filter dropdowns
  [filterType, filterLocation, filterBudget, filterStatus].forEach(filter => {
    if (filter) {
      filter.addEventListener('change', filterProperties);
    }
  });

  // Filter links in footer
  document.querySelectorAll('a[data-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filterValue = link.dataset.filter;
      if (filterType) {
        filterType.value = filterValue;
        filterProperties();
      }
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* Contact form */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(contactForm);
      const name = fd.get('name') || 'Guest';
      const phone = fd.get('phone') || '';
      const propertyInterested = fd.get('property_interested') || 'General Enquiry';

      // Basic validation
      if (!phone || phone.trim().length < 8) {
        alert('Please enter a valid phone number.');
        return;
      }

      // Show success message with property details
      let message = `Thanks ${name}! Our team will call you shortly at ${phone}.`;
      if (propertyInterested && propertyInterested !== 'General Enquiry') {
        message += `\n\nRegarding: ${propertyInterested}`;
      }
      
      alert(message);
      contactForm.reset();
      
      // Reset property interested field
      if (propertyInterestedInput) {
        propertyInterestedInput.value = '';
      }
    });
  }

  /* ========== ENHANCED PROPERTY FUNCTIONALITY ========== */
  
  // Property Favorites
  const propertyFavorites = document.querySelectorAll('.property-favorite');
  if (propertyFavorites.length > 0) {
    propertyFavorites.forEach(button => {
      button.addEventListener('click', function(e) {
        e.stopPropagation();
        const propertyId = this.dataset.propertyId;
        const isFavorite = this.classList.contains('active');
        
        if (isFavorite) {
          this.classList.remove('active');
          localStorage.removeItem(`favorite_${propertyId}`);
          showToast('Removed from favorites', 'info');
        } else {
          this.classList.add('active');
          localStorage.setItem(`favorite_${propertyId}`, 'true');
          showToast('Added to favorites', 'success');
        }
      });
    });
    
    // Check saved favorites on load
    propertyFavorites.forEach(button => {
      const propertyId = button.dataset.propertyId;
      if (localStorage.getItem(`favorite_${propertyId}`)) {
        button.classList.add('active');
      }
    });
  }
  
  // Modern Filter functionality
  const applyFiltersBtn = document.getElementById('applyFilters');
  const resetFiltersBtn = document.getElementById('resetFilters');
  const filterTypeModern = document.getElementById('filterTypeModern');
  const filterLocationModern = document.getElementById('filterLocationModern');
  const filterBudgetModern = document.getElementById('filterBudgetModern');
  const filterStatusModern = document.getElementById('filterStatusModern');
  const propertyCardsModern = document.querySelectorAll('.property-card-modern');
  const propertyCount = document.querySelector('.filter-count');
  
  function filterPropertiesModern() {
    if (!filterTypeModern || propertyCardsModern.length === 0) return;
    
    const typeValue = filterTypeModern.value;
    const locationValue = filterLocationModern ? filterLocationModern.value : 'all';
    const budgetValue = filterBudgetModern ? filterBudgetModern.value : 'all';
    const statusValue = filterStatusModern ? filterStatusModern.value : 'all';
    
    let visibleCount = 0;
    
    propertyCardsModern.forEach(card => {
      const cardType = card.dataset.type || '';
      const cardLocation = card.dataset.location || '';
      const cardBudget = card.dataset.budget || '';
      const cardStatus = card.dataset.status || '';
      
      const typeMatch = typeValue === 'all' || cardType.includes(typeValue);
      const locationMatch = locationValue === 'all' || cardLocation === locationValue;
      const budgetMatch = budgetValue === 'all' || cardBudget === budgetValue;
      const statusMatch = statusValue === 'all' || cardStatus.includes(statusValue);
      
      if (typeMatch && locationMatch && budgetMatch && statusMatch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    
    // Update property count
    if (propertyCount) {
      propertyCount.textContent = `${visibleCount} Properties`;
    }
    
    // Show message if no properties found
    if (visibleCount === 0) {
      showNoPropertiesMessage();
    }
  }
  
  function showNoPropertiesMessage() {
    const propertyGrid = document.getElementById('propertyGrid');
    if (!propertyGrid) return;
    
    const existingMessage = propertyGrid.querySelector('.no-properties');
    
    if (!existingMessage) {
      const message = document.createElement('div');
      message.className = 'no-properties';
      message.innerHTML = `
        <div class="no-properties-icon">🏡</div>
        <h3>No properties found</h3>
        <p class="muted">Try adjusting your filters to find what you're looking for.</p>
        <button class="btn btn-outline" id="resetFiltersInline" style="margin-top: 1rem;">
          Reset All Filters
        </button>
      `;
      propertyGrid.appendChild(message);
      
      // Add event listener to inline reset button
      message.querySelector('#resetFiltersInline').addEventListener('click', resetFiltersModern);
    }
  }
  
  function resetFiltersModern() {
    if (filterTypeModern) filterTypeModern.value = 'all';
    if (filterLocationModern) filterLocationModern.value = 'all';
    if (filterBudgetModern) filterBudgetModern.value = 'all';
    if (filterStatusModern) filterStatusModern.value = 'all';
    
    filterPropertiesModern();
    
    // Remove no properties message
    const noPropertiesMessage = document.querySelector('.no-properties');
    if (noPropertiesMessage) {
      noPropertiesMessage.remove();
    }
  }
  
  // Event listeners for modern filters
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', filterPropertiesModern);
  }
  
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', resetFiltersModern);
  }
  
  // Apply filters on dropdown change
  [filterTypeModern, filterLocationModern, filterBudgetModern, filterStatusModern].forEach(filter => {
    if (filter) {
      filter.addEventListener('change', filterPropertiesModern);
    }
  });
  
  // View toggle functionality
  const viewButtons = document.querySelectorAll('.view-btn');
  const propertyGrid = document.getElementById('propertyGrid');
  
  if (viewButtons.length > 0 && propertyGrid) {
    viewButtons.forEach(button => {
      button.addEventListener('click', function() {
        const view = this.dataset.view;
        
        // Update active button
        viewButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Toggle grid/list view
        if (view === 'list') {
          propertyGrid.classList.add('list-view');
          propertyGrid.style.gridTemplateColumns = '1fr';
        } else {
          propertyGrid.classList.remove('list-view');
          propertyGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(320px, 1fr))';
        }
      });
    });
  }
  
  // Load more properties
  const loadMoreBtn = document.getElementById('loadMoreProperties');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      // Simulate loading
      const originalHTML = this.innerHTML;
      this.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 10px; animation: spin 1s linear infinite;">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
        Loading...
      `;
      
      setTimeout(() => {
        // In a real app, this would fetch more properties from an API
        showToast('More properties loaded successfully!', 'success');
        this.innerHTML = originalHTML;
      }, 1500);
    });
  }
  
  // Enhanced property modal with more details
  const enhancedViewDetails = document.querySelectorAll('.view-details[data-property-id]');
  if (enhancedViewDetails.length > 0) {
    enhancedViewDetails.forEach(button => {
      button.addEventListener('click', function() {
        const propertyId = this.dataset.propertyId;
        showEnhancedPropertyModal(propertyId);
      });
    });
  }
  
  function showEnhancedPropertyModal(propertyId) {
    // Enhanced property data
    const enhancedPropertyData = {
      'featured-premium': {
        title: 'Skyview Luxury Residency',
        price: '₹58,00,000',
        location: 'Dwarka Mor, West Delhi',
        description: 'Premium 3 BHK builder floor with modern amenities, smart home features, and premium finishes. Perfect for families seeking comfort and convenience.',
        specs: {
          bedrooms: '3 BHK',
          bathrooms: '3',
          area: '1100 sqft',
          builtYear: '2023',
          facing: 'North-East',
          floor: '3rd Floor',
          totalFloors: '4'
        },
        amenities: [
          'Smart Home Automation',
          'Premium Modular Kitchen',
          'Italian Marble Flooring',
          '24/7 Security & CCTV',
          'Power Backup',
          'Lift',
          '2 Covered Parking',
          'Club House',
          'Gym',
          'Swimming Pool'
        ],
        loanDetails: {
          available: '90%',
          banks: ['HDFC', 'SBI', 'ICICI', 'Axis'],
          emi: '₹25,000/month',
          processing: '0.5%'
        },
        images: [
          'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1000&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1000&auto=format&fit=crop&q=80'
        ]
      }
      // Add more property data as needed
    };
    
    const property = enhancedPropertyData[propertyId] || enhancedPropertyData['featured-premium'];
    
    const modalHTML = `
      <div class="modal-content-modern">
        <button class="modal-close" aria-label="Close modal">×</button>
        <div class="modal-body" style="padding: 2rem;">
          <div style="display: grid; grid-template-columns: 1fr; gap: 2rem;">
            <div>
              <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 0.5rem;">${property.title}</h2>
              <p class="muted" style="margin-bottom: 1.5rem;">${property.location}</p>
              
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: 1.5rem;">
                ${property.price}
              </div>
              
              <p style="line-height: 1.6; margin-bottom: 2rem;">${property.description}</p>
              
              <div class="modal-details-grid">
                <div class="modal-detail-item">
                  <div class="detail-icon-large">🛏️</div>
                  <div>
                    <strong>Bedrooms</strong>
                    <p>${property.specs.bedrooms}</p>
                  </div>
                </div>
                
                <div class="modal-detail-item">
                  <div class="detail-icon-large">📐</div>
                  <div>
                    <strong>Area</strong>
                    <p>${property.specs.area}</p>
                  </div>
                </div>
                
                <div class="modal-detail-item">
                  <div class="detail-icon-large">🏦</div>
                  <div>
                    <strong>Loan Available</strong>
                    <p>${property.loanDetails.available}</p>
                  </div>
                </div>
                
                <div class="modal-detail-item">
                  <div class="detail-icon-large">📍</div>
                  <div>
                    <strong>Facing</strong>
                    <p>${property.specs.facing}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 1rem;">Property Gallery</h3>
              <div class="property-gallery-modal">
                ${property.images.map(img => `<img src="${img}" alt="${property.title}">`).join('')}
              </div>
              
              <h3 style="font-size: 1.3rem; font-weight: 700; margin: 1.5rem 0 1rem;">Amenities</h3>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                ${property.amenities.map(amenity => `
                  <div style="display: flex; align-items: center; gap: 8px; padding: 8px; background: rgba(179, 143, 75, 0.05); border-radius: 8px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#34a853">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span style="font-size: 0.9rem;">${amenity}</span>
                  </div>
                `).join('')}
              </div>
              
              <div style="margin-top: 2rem; display: flex; gap: 15px;">
                <button class="btn btn-primary enquire-now" data-property-id="${propertyId}" style="flex: 2;">
                  Enquire Now
                </button>
                <a href="tel:+919667355117" class="btn btn-outline" style="flex: 1;">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Create or update modal
    let modal = document.querySelector('.property-modal-modern');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'property-modal-modern';
      document.body.appendChild(modal);
    }
    
    modal.innerHTML = modalHTML;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add event listeners for modal close
    modal.querySelector('.modal-close').addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
    
    // Close on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    // Add event listener for enquire button in enhanced modal
    modal.querySelector('.enquire-now')?.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        document.querySelector('#contactForm input[name="name"]')?.focus();
      }, 300);
    });
  }
  
  // Toast notification function
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#34a853' : type === 'error' ? '#ea4335' : '#4285f4'};
      color: white;
      padding: 12px 20px;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      z-index: 1000;
      animation: slideIn 0.3s ease;
    `;
    
    toast.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          ${type === 'success' ? '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>' : 
            type === 'error' ? '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>' :
            '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>'}
        </svg>
        <span>${message}</span>
      </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
  
  // Add CSS animations for toast
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  /* Testimonial auto-advance (gentle) */
  const testContainer = document.getElementById('testimonials-slider') || document.querySelector('.testimonials');
  if (testContainer) {
    let tIdx = 0;
    const cards = testContainer.querySelectorAll('.test-card');
    if (cards.length > 1) {
      setInterval(() => {
        tIdx = (tIdx + 1) % cards.length;
        const offset = cards[tIdx].offsetLeft - (testContainer.offsetLeft || 0);
        testContainer.scrollTo({ left: offset, behavior: 'smooth' });
      }, 5000);
    }
  }

  /* Small helpful handlers: property buttons */
  document.querySelectorAll('.property-card .btn').forEach(btn => {
    if (!btn.classList.contains('view-details') && !btn.classList.contains('enquire-now')) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const title = btn.closest('.property-card')?.querySelector('h3')?.textContent || 'Property';
        alert(`Requesting details for "${title}". Our executive will contact you.`);
      });
    }
  });

  /* Featured card booking */
  document.querySelectorAll('.card-book').forEach(b => {
    b.addEventListener('click', (ev) => {
      ev.preventDefault();
      alert('Thank you! We will contact you shortly to schedule the site visit.');
    });
  });

  /* Lazy image fade-in */
  const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('loaded');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '120px 0px' });
    lazyImgs.forEach(img => obs.observe(img));
  } else {
    lazyImgs.forEach(img => img.classList.add('loaded'));
  }

  /* ========== MOBILE APP BOTTOM NAVIGATION ========== */
  
  // Update active state based on scroll position
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
  const sections = {
    'projects': document.getElementById('projects'),
    'contact': document.getElementById('contact')
  };

  function updateActiveNavItem() {
    if (window.innerWidth >= 768) return; // Only on mobile
    
    const scrollPos = window.scrollY + 100;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if we're near the bottom (contact section)
    if (scrollPos + windowHeight >= documentHeight - 100) {
      bottomNavItems.forEach(item => item.classList.remove('active'));
      const enquireItem = document.querySelector('.bottom-nav-item[aria-label="Enquire"]');
      if (enquireItem) enquireItem.classList.add('active');
      return;
    }

    // Check which section is in view
    let activeSection = null;
    for (const [key, section] of Object.entries(sections)) {
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 0) {
          activeSection = key;
          break;
        }
      }
    }

    // Update active state
    bottomNavItems.forEach(item => {
      item.classList.remove('active');
      if (activeSection === 'projects' && item.getAttribute('aria-label') === 'Explore') {
        item.classList.add('active');
      } else if (activeSection === 'contact' && item.getAttribute('aria-label') === 'Enquire') {
        item.classList.add('active');
      }
    });
  }

  // Update on scroll
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveNavItem, 100);
  });

  // Update on load
  updateActiveNavItem();

  // Handle bottom nav clicks with smooth scroll
  bottomNavItems.forEach(item => {
    item.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // If it's an anchor link, smooth scroll
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Update active state
          bottomNavItems.forEach(navItem => navItem.classList.remove('active'));
          this.classList.add('active');
          
          // Smooth scroll with offset for bottom nav
          const offset = 80;
          const targetPosition = targetElement.offsetTop - offset;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
      
      // Add ripple effect
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(179, 143, 75, 0.3);
        width: 0;
        height: 0;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;
      this.style.position = 'relative';
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Add ripple animation
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `
    @keyframes ripple {
      to {
        width: 100px;
        height: 100px;
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(rippleStyle);

  // Prevent body scroll when bottom nav is focused (mobile)
  if (window.innerWidth < 768) {
    document.body.style.paddingBottom = '80px';
  }
});