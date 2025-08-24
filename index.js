let allProducts = [];
let currentCategory = 'all';

// Carrega os dados do arquivo JSON
async function loadData() {
  try {
    const response = await fetch('./products.json');
    const data = await response.json();

    // Carrega categories
    loadCategories(data.categories);

    // Carrega produtos
    allProducts = data.tools;
    loadFerramentas(data.tools);

    // Carrega courses
    loadCursos(data.courses);

    // Reinicia observadores para animações
    restartAnimations();

  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    // Fallback: usar dados padrão se não conseguir carregar o JSON
    loadDefaultData();
  }
}


// Carrega as categories
function loadCategories(categories) {
  const container = document.getElementById('categories-container');
  container.innerHTML = '';

  categories.forEach((categoria, index) => {
    const button = document.createElement('button');
    button.className = `category-btn ${index === 0 ? 'active' : ''}`;
    button.textContent = categoria.name;
    button.onclick = () => filterProducts(categoria.id);
    container.appendChild(button);
  });
}

// Cria um card de produto
function createProductCard(produto, isFerramentas = true) {
  const card = document.createElement('div');
  card.className = 'product-card animate-on-scroll';
  if (isFerramentas) {
    card.setAttribute('data-category', produto.categoria);
  }

  card.innerHTML = `
                <span class="product-badge">${produto.badge}</span>
                <h3>${produto.name}</h3>
                <p>${produto.description}</p>
                <div class="product-price">${produto.price}</div>
                <a href="${produto.link}" class="product-link" target="_blank">${produto.textLink}</a>
            `;

  // Adiciona efeitos de hover
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });

  return card;
}

// Carrega as tools
function loadFerramentas(tools) {
  const container = document.getElementById('tools-grid');
  container.innerHTML = '';

  tools.forEach(ferramenta => {
    const card = createProductCard(ferramenta, true);
    container.appendChild(card);
  });
}

// Carrega os courses
function loadCursos(courses) {
  const container = document.getElementById('courses-grid');
  if (!container) return
  container.innerHTML = '';

  courses.forEach(curso => {
    const card = createProductCard(curso, false);
    container.appendChild(card);
  });
}

// Filtra produtos por categoria
function filterProducts(category) {
  currentCategory = category;
  const cards = document.querySelectorAll('#tools-grid .product-card');
  const buttons = document.querySelectorAll('.category-btn');

  // Atualiza botões ativos
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Filtra cards
  cards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    if (category === 'all' || cardCategory === category) {
      card.style.display = 'block';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}

// Reinicia as animações para novos elementos
function restartAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Dados padrão caso não consiga carregar o JSON
function loadDefaultData() {


  // Carrega dados padrão mínimos
  const defaultCategories = [
    { id: 'all', name: 'Todas' },
    { id: 'ide', name: 'IDEs' },
    { id: 'hosting', name: 'Hosting' },
    { id: 'design', name: 'Design' }
  ];

  loadCategories(defaultCategories);
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// Carrega os dados quando a página carrega
document.addEventListener('DOMContentLoaded', loadData);