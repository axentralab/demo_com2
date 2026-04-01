// ============================================
// LUXE SHOP - Product Data & Global JS
// ============================================

const PRODUCTS = [
  {
    id: 1,
    name: "Handcrafted Ceramic Vase",
    category: "home-decor",
    categoryLabel: "Home Décor",
    price: 4800,
    originalPrice: 6500,
    badge: "sale",
    badgeLabel: "Sale",
    rating: 4.8,
    reviews: 124,
    shortDesc: "Elegant hand-thrown ceramic vase with matte glaze finish, perfect for minimalist interiors.",
    description: `Our Handcrafted Ceramic Vase is lovingly made by skilled local artisans using traditional wheel-throwing techniques. Each piece is unique — no two are exactly alike. The matte glaze gives it a sophisticated look that complements any interior style, from modern minimalist to boho chic.\n\nThis vase is perfect for dried botanicals, fresh flowers, or simply as a standalone decorative piece. The weighted base ensures stability, and the smooth interior makes cleaning effortless.`,
    specs: [
      { label: "Dimensions", value: "H: 32cm × W: 14cm" },
      { label: "Material", value: "Stoneware Ceramic" },
      { label: "Finish", value: "Matte Glaze" },
      { label: "Weight", value: "680g" },
      { label: "Origin", value: "Locally Handcrafted" },
    ],
    images: [
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&q=80",
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    ],
    tags: ["ceramic", "vase", "home", "decor"],
  },
  {
    id: 2,
    name: "Woven Rattan Basket Set",
    category: "home-decor",
    categoryLabel: "Home Décor",
    price: 3200,
    originalPrice: null,
    badge: "new",
    badgeLabel: "New",
    rating: 4.6,
    reviews: 67,
    shortDesc: "Eco-friendly set of 3 nesting rattan baskets, handwoven with natural fibers.",
    description: `Bring natural warmth to your home with our Woven Rattan Basket Set. This set of 3 nesting baskets is handwoven by skilled artisans from sustainably sourced rattan. Use them for storage, as planters, or as decorative accents.\n\nThe baskets stack neatly when not in use, saving space. They're sturdy enough for everyday use while elegant enough to display proudly.`,
    specs: [
      { label: "Set Includes", value: "3 Nesting Baskets" },
      { label: "Sizes", value: "S: 20cm, M: 28cm, L: 36cm" },
      { label: "Material", value: "Natural Rattan" },
      { label: "Color", value: "Natural Tan" },
      { label: "Usage", value: "Storage / Décor" },
    ],
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
      "https://images.unsplash.com/photo-1531944729083-a6e545527f98?w=600&q=80",
    ],
    tags: ["rattan", "basket", "storage", "natural"],
  },
  {
    id: 3,
    name: "Linen Cushion Cover",
    category: "textiles",
    categoryLabel: "Textiles",
    price: 1500,
    originalPrice: 2000,
    badge: "sale",
    badgeLabel: "Sale",
    rating: 4.9,
    reviews: 203,
    shortDesc: "100% natural linen cushion cover with invisible zipper, in earthy tones.",
    description: `Elevate your living space with our premium Linen Cushion Covers. Made from 100% natural linen, these covers are breathable, durable, and only get softer with every wash.\n\nThe invisible zipper ensures a seamless look, and the generous sizing fits most standard cushion inserts. Available in a range of earthy, neutral tones to complement any palette.`,
    specs: [
      { label: "Material", value: "100% Natural Linen" },
      { label: "Size", value: "50cm × 50cm" },
      { label: "Closure", value: "Invisible Zipper" },
      { label: "Wash", value: "Machine Washable 30°C" },
      { label: "Color", value: "Warm Sand / Oat" },
    ],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    ],
    tags: ["linen", "cushion", "textile", "soft"],
  },
  {
    id: 4,
    name: "Artisan Soy Candle",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    price: 950,
    originalPrice: null,
    badge: null,
    badgeLabel: null,
    rating: 4.7,
    reviews: 89,
    shortDesc: "Hand-poured soy wax candle with essential oil blend, 45-hour burn time.",
    description: `Our Artisan Soy Candles are lovingly hand-poured in small batches using 100% natural soy wax. Scented with premium essential oils — no synthetic fragrances. The cotton wick ensures a clean, even burn.\n\nThe amber glass jar adds to its charm and can be repurposed after the candle is done. With up to 45 hours of burn time, it's a gift that keeps giving.`,
    specs: [
      { label: "Volume", value: "200ml" },
      { label: "Wax", value: "100% Soy Wax" },
      { label: "Scent", value: "Sandalwood & Vanilla" },
      { label: "Burn Time", value: "~45 Hours" },
      { label: "Wick", value: "Natural Cotton" },
    ],
    images: [
      "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=600&q=80",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    ],
    tags: ["candle", "soy", "aroma", "lifestyle"],
  },
  {
    id: 5,
    name: "Macramé Wall Hanging",
    category: "home-decor",
    categoryLabel: "Home Décor",
    price: 2800,
    originalPrice: null,
    badge: "new",
    badgeLabel: "New",
    rating: 4.5,
    reviews: 41,
    shortDesc: "Hand-knotted boho macramé wall hanging, made from 100% cotton rope.",
    description: `Add a touch of bohemian elegance to your space with our Hand-Knotted Macramé Wall Hanging. Each piece is individually crafted using traditional macramé techniques, resulting in a unique, one-of-a-kind artwork.\n\nMade from 100% natural cotton rope on a driftwood dowel. Perfect for bedrooms, living rooms, or as a statement piece in any room.`,
    specs: [
      { label: "Dimensions", value: "W: 60cm × H: 90cm" },
      { label: "Material", value: "100% Cotton Rope" },
      { label: "Rod", value: "Natural Driftwood" },
      { label: "Hanging", value: "Included" },
      { label: "Style", value: "Boho / Minimalist" },
    ],
    images: [
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    ],
    tags: ["macrame", "wall art", "boho", "handmade"],
  },
  {
    id: 6,
    name: "Wooden Serving Board",
    category: "kitchen",
    categoryLabel: "Kitchen",
    price: 3500,
    originalPrice: 4200,
    badge: "sale",
    badgeLabel: "Sale",
    rating: 4.9,
    reviews: 156,
    shortDesc: "Premium acacia wood serving & charcuterie board with integrated handles.",
    description: `Our Wooden Serving Board is crafted from premium acacia wood — known for its durability, rich grain, and natural antibacterial properties. Perfect for charcuterie, cheese boards, or everyday serving.\n\nThe integrated handles make it easy to carry, and the smooth surface is gentle on knives. Each board is treated with food-safe mineral oil for protection and a beautiful finish.`,
    specs: [
      { label: "Dimensions", value: "50cm × 25cm × 2cm" },
      { label: "Material", value: "Acacia Wood" },
      { label: "Finish", value: "Food-Safe Mineral Oil" },
      { label: "Weight", value: "1.2kg" },
      { label: "Care", value: "Hand Wash Only" },
    ],
    images: [
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&q=80",
      "https://images.unsplash.com/photo-1586996292898-71f4036c4e07?w=600&q=80",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    ],
    tags: ["wood", "kitchen", "serving", "acacia"],
  },
  {
    id: 7,
    name: "Organic Cotton Throw",
    category: "textiles",
    categoryLabel: "Textiles",
    price: 5500,
    originalPrice: null,
    badge: null,
    badgeLabel: null,
    rating: 4.8,
    reviews: 78,
    shortDesc: "Lightweight organic cotton throw blanket with fringe edges, GOTS certified.",
    description: `Wrap yourself in luxury with our Organic Cotton Throw. Made from GOTS-certified organic cotton, this throw is gentle on sensitive skin and kind to the environment.\n\nThe lightweight weave makes it perfect year-round — a cozy layer in cooler months and a stylish accent in summer. The fringe edges add a refined, artisanal touch.`,
    specs: [
      { label: "Dimensions", value: "130cm × 170cm" },
      { label: "Material", value: "100% Organic Cotton" },
      { label: "Certification", value: "GOTS Certified" },
      { label: "Weight", value: "400g" },
      { label: "Wash", value: "Machine Wash Cold" },
    ],
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    ],
    tags: ["organic", "cotton", "throw", "blanket"],
  },
  {
    id: 8,
    name: "Bamboo Diffuser Set",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    price: 1800,
    originalPrice: null,
    badge: "new",
    badgeLabel: "New",
    rating: 4.6,
    reviews: 34,
    shortDesc: "Reed diffuser set with bamboo reeds and premium essential oil blend.",
    description: `Create a serene atmosphere with our Bamboo Reed Diffuser Set. The premium essential oil blend disperses slowly through the natural bamboo reeds, providing a consistent, subtle fragrance for up to 3 months.\n\nThe minimalist glass bottle and natural bamboo reeds make this a beautiful display piece as well as a functional one.`,
    specs: [
      { label: "Volume", value: "150ml" },
      { label: "Scent", value: "Eucalyptus & Mint" },
      { label: "Reeds", value: "Natural Bamboo × 8" },
      { label: "Duration", value: "~3 Months" },
      { label: "Container", value: "Clear Glass Bottle" },
    ],
    images: [
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600&q=80",
      "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=600&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    ],
    tags: ["diffuser", "bamboo", "aroma", "home"],
  },
];

// ============================================
// UTILITY FUNCTIONS
// ============================================
function formatPrice(price) {
  return '৳' + price.toLocaleString('en-BD');
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

function getProductsByCategory(category) {
  if (!category || category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = '';
  for (let i = 0; i < full; i++) stars += '★';
  if (half) stars += '☆';
  while (stars.length < 5) stars += '☆';
  return stars;
}

function renderProductCard(product) {
  const discountPct = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return `
    <div class="product-card" onclick="window.location.href='product-detail.html?id=${product.id}'">
      <div class="product-card-image">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<span class="product-badge ${product.badge}">${product.badgeLabel}</span>` : ''}
        <div class="product-card-actions">
          <button class="product-action-btn" onclick="event.stopPropagation(); openInquiry(${product.id})" title="Quick Inquiry">💬</button>
          <button class="product-action-btn" onclick="event.stopPropagation(); showToast('Added to wishlist ♡')" title="Wishlist">♡</button>
        </div>
      </div>
      <div class="product-card-body">
        <div class="product-category">${product.categoryLabel}</div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.shortDesc}</p>
        <div class="product-footer">
          <div>
            <span class="product-price">${formatPrice(product.price)}</span>
            ${product.originalPrice ? `<span class="product-price-old">${formatPrice(product.originalPrice)}</span>` : ''}
          </div>
          <span class="product-view-btn">View →</span>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(message, type = '') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = `toast ${type}`;
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ============================================
// INQUIRY SIDEBAR
// ============================================
function openInquiry(productId) {
  const product = getProductById(productId);
  if (!product) return;

  // Build sidebar if not exists
  let sidebar = document.getElementById('inquiry-sidebar');
  if (!sidebar) {
    sidebar = document.createElement('div');
    sidebar.id = 'inquiry-sidebar';
    sidebar.className = 'inquiry-sidebar';
    document.body.appendChild(sidebar);
  }

  let overlay = document.getElementById('sidebar-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'sidebar-overlay';
    overlay.className = 'sidebar-overlay';
    overlay.onclick = closeInquiry;
    document.body.appendChild(overlay);
  }

  const wa = `https://wa.me/8801700000000?text=Hi!%20I'm%20interested%20in%20${encodeURIComponent(product.name)}%20(${formatPrice(product.price)}).%20Can%20you%20share%20more%20details?`;

  sidebar.innerHTML = `
    <div class="inquiry-header">
      <h3>Quick Inquiry</h3>
      <button class="inquiry-close" onclick="closeInquiry()">✕</button>
    </div>
    <div class="inquiry-body">
      <div class="inquiry-product">
        <img src="${product.images[0]}" alt="${product.name}">
        <div>
          <h4>${product.name}</h4>
          <p>${product.categoryLabel}</p>
          <strong style="color:var(--accent);font-size:1.1rem;">${formatPrice(product.price)}</strong>
        </div>
      </div>
      <form onsubmit="submitInquiry(event, '${product.name}')">
        <div class="form-group">
          <label>Your Name *</label>
          <input type="text" name="name" required placeholder="Full name">
        </div>
        <div class="form-group">
          <label>Phone Number *</label>
          <input type="tel" name="phone" required placeholder="+880...">
        </div>
        <div class="form-group">
          <label>Message</label>
          <textarea name="message" placeholder="Any specific questions about this product?" style="min-height:90px;"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;padding:1rem;">Send Inquiry</button>
      </form>
    </div>
    <div class="inquiry-footer">
      <p style="font-size:0.78rem;color:var(--muted);text-align:center;">Or reach us directly on WhatsApp</p>
      <a href="${wa}" target="_blank" class="btn btn-whatsapp">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.11 1.522 5.836L.057 23.404A1 1 0 0 0 1.09 24.5l5.737-1.495A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.522-5.176-1.433l-.371-.22-3.408.888.914-3.32-.242-.383A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
        Chat on WhatsApp
      </a>
    </div>
  `;

  sidebar.classList.add('open');
  overlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeInquiry() {
  const sidebar = document.getElementById('inquiry-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('visible');
  document.body.style.overflow = '';
}

function submitInquiry(e, productName) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const phone = form.phone.value;
  const message = form.message.value || 'I am interested in this product.';
  const wa = `https://wa.me/8801700000000?text=Hello!%20My%20name%20is%20${encodeURIComponent(name)}.%20I'm%20inquiring%20about:%20${encodeURIComponent(productName)}.%20${encodeURIComponent(message)}%20My%20phone:%20${encodeURIComponent(phone)}`;
  window.open(wa, '_blank');
  closeInquiry();
  showToast('✓ Inquiry sent! Redirecting to WhatsApp…', 'success');
}

// ============================================
// NAVBAR
// ============================================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  // Active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', initNavbar);