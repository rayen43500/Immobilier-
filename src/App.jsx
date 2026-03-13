import { useState } from 'react'
import logo from './assets/Logo.png'
import './App.css'

function App() {
  const [favoriteIds, setFavoriteIds] = useState([])
  const [activeTab, setActiveTab] = useState('Populaires')
  const [visibleCount, setVisibleCount] = useState(6)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const properties = [
    {
      id: 1,
      title: 'Appartement moderne',
      price: '120 000 €',
      location: 'Tunis, Centre',
      beds: 3,
      baths: 2,
      area: '120 m2',
      status: 'Vente',
      tag: 'Populaire',
      rating: 4.8,
      published: 'il y a 2 jours',
      image:
        'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 2,
      title: 'Villa familiale avec jardin',
      price: '320 000 €',
      location: 'La Marsa',
      beds: 4,
      baths: 3,
      area: '240 m2',
      status: 'Vente',
      tag: 'Recommandee',
      rating: 4.9,
      published: 'il y a 4 jours',
      image:
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 3,
      title: 'Loft lumineux',
      price: '1 200 € / mois',
      location: 'Sousse, Corniche',
      beds: 2,
      baths: 1,
      area: '98 m2',
      status: 'Location',
      tag: 'Nouveau',
      rating: 4.6,
      published: 'il y a 1 jour',
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 4,
      title: 'Maison contemporaine',
      price: '210 000 €',
      location: 'Nabeul',
      beds: 3,
      baths: 2,
      area: '180 m2',
      status: 'Vente',
      tag: 'Recommandee',
      rating: 4.7,
      published: 'il y a 3 jours',
      image:
        'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 5,
      title: 'Appartement vue mer',
      price: '1 650 € / mois',
      location: 'Hammamet',
      beds: 3,
      baths: 2,
      area: '140 m2',
      status: 'Location',
      tag: 'Populaire',
      rating: 4.5,
      published: 'il y a 5 jours',
      image:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 6,
      title: 'Terrain residentiel',
      price: '95 000 €',
      location: 'Bizerte',
      beds: 0,
      baths: 0,
      area: '420 m2',
      status: 'Vente',
      tag: 'Investissement',
      rating: 4.4,
      published: 'il y a 1 semaine',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  const stats = [
    {
      id: 'offres',
      label: 'Offres actives',
      value: '1200+',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 'agents',
      label: 'Agents experts',
      value: '150+',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-7 8a7 7 0 0 1 14 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: 'clients',
      label: 'Clients satisfaits',
      value: '3000+',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M8 10h.01M16 10h.01M8 15c1.2 1 2.6 1.5 4 1.5s2.8-.5 4-1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="12"
            r="9"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      ),
    },
  ]

  const toggleFavorite = (propertyId) => {
    setFavoriteIds((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId],
    )
  }

  const handleLoadMore = () => {
    setIsLoadingMore(true)
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 3, properties.length))
      setIsLoadingMore(false)
    }, 800)
  }

  return (
    <div className="page">
      <header
        className="hero"
        style={{
          '--hero-image':
            'url(https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80)',
        }}
      >
        <div className="hero__overlay" />
        <nav className="navbar">
          <div className="navbar__brand">
            <img src={logo} alt="Dar Farah Immobilier" />
            <div>
              <span className="navbar__title">Dar Farah</span>
              <span className="navbar__subtitle">Immobilier</span>
            </div>
          </div>
          <div className="navbar__links">
            <a href="#">Accueil</a>
            <a href="#">Offres</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
          <button className="btn btn--primary navbar__cta">
            Publier une annonce
          </button>
        </nav>
        <div className="hero__content">
          <span className="hero__badge">Immobilier premium</span>
          <h1>
            Trouvez la maison <span className="hero__accent">parfaite</span> pour
            vous
          </h1>
          <p className="hero__subtitle">
            Découvrez des milliers de biens immobiliers vérifiés.
          </p>
          <div className="hero__search">
            <div className="hero__field">
              <span className="hero__icon" aria-hidden>
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 3a7 7 0 0 1 7 7c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 7-7z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="2.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
              <input
                className="hero__search-field"
                type="text"
                placeholder="Ville ou quartier"
              />
            </div>
            <div className="hero__field">
              <span className="hero__icon" aria-hidden>
                <svg viewBox="0 0 24 24">
                  <path
                    d="M5 7h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="2.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
              <input
                className="hero__search-field"
                type="text"
                placeholder="Budget max"
              />
            </div>
            <div className="hero__field">
              <span className="hero__icon" aria-hidden>
                <svg viewBox="0 0 24 24">
                  <path
                    d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <select defaultValue="">
                <option value="" disabled>
                  Type
                </option>
                <option>Appartement</option>
                <option>Maison</option>
                <option>Villa</option>
                <option>Terrain</option>
              </select>
            </div>
            <button className="btn btn--primary hero__search-btn">
              <span className="hero__icon" aria-hidden>
                <svg viewBox="0 0 24 24">
                  <circle
                    cx="11"
                    cy="11"
                    r="6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M16 16l4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              Rechercher
            </button>
          </div>
          <div className="scroll-indicator">
            <span aria-hidden>↓</span>
            <span>Decouvrir les offres</span>
          </div>
        </div>
      </header>

      <section className="stats" aria-label="Statistiques">
        <div className="stats__row">
          {stats.map((stat) => (
            <article key={stat.id} className="stat-card">
              <div className="stat-card__icon">{stat.icon}</div>
              <div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="filters" aria-label="Recherche avancee">
        <div className="filters__row">
          <input type="text" placeholder="Ville" />
          <input type="text" placeholder="Quartier" />
          <input type="text" placeholder="Prix min" />
          <input type="text" placeholder="Prix max" />
          <input type="text" placeholder="Surface (m2)" />
          <select defaultValue="">
            <option value="" disabled>
              Transaction
            </option>
            <option>Vente</option>
            <option>Location</option>
          </select>
          <select defaultValue="">
            <option value="" disabled>
              Type de propriété
            </option>
            <option>Appartement</option>
            <option>Maison</option>
            <option>Villa</option>
            <option>Terrain</option>
          </select>
          <select defaultValue="">
            <option value="" disabled>
              Chambres
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>
          <button className="btn btn--secondary">Rechercher</button>
          <button className="btn btn--ghost">Reinitialiser</button>
        </div>
      </section>

      <section className="listings">
        <div className="listings__header">
          <div>
            <span className="eyebrow">Offres immobilières</span>
            <h2>
              Biens disponibles
              <span className="listing-count">({properties.length} biens)</span>
            </h2>
          </div>
          <div className="listings__controls">
            <div className="tab-group" role="tablist">
              {['Populaires', 'Recommandées', 'Nouveautés'].map((tab) => (
                <button
                  key={tab}
                  className={`tab ${activeTab === tab ? 'tab--active' : ''}`}
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <select defaultValue="recent">
              <option value="recent">Plus récentes</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="popular">Plus populaires</option>
            </select>
          </div>
        </div>

        <div className="properties">
          {properties.slice(0, visibleCount).map((property) => {
            const isFavorite = favoriteIds.includes(property.id)
            return (
              <article key={property.id} className="property-card">
                <div
                  className="property-card__image"
                  style={{ '--property-image': `url(${property.image})` }}
                >
                  <button
                    className={`favorite ${isFavorite ? 'is-active' : ''}`}
                    onClick={() => toggleFavorite(property.id)}
                    aria-pressed={isFavorite}
                    aria-label="Ajouter aux favoris"
                  >
                    <span>❤</span>
                  </button>
                  <div className="property-card__badges">
                    <span className="badge badge--status">
                      {property.status}
                    </span>
                    <span className="badge">{property.tag}</span>
                  </div>
                  <div className="property-card__rating">
                    <span>⭐ {property.rating}</span>
                  </div>
                </div>
                <div className="property-card__body">
                  <div className="property-card__price">{property.price}</div>
                  <h3>{property.title}</h3>
                  <p className="property-card__location">{property.location}</p>
                  <div className="property-card__meta">
                    <span>🛏 {property.beds}</span>
                    <span>🛁 {property.baths}</span>
                    <span>📐 {property.area}</span>
                  </div>
                  <div className="property-card__foot">
                    <span className="property-card__time">
                      📅 {property.published}
                    </span>
                    <button className="btn btn--ghost">Voir détails</button>
                  </div>
                </div>
              </article>
            )
          })}
          {isLoadingMore &&
            Array.from({ length: 3 }).map((_, index) => (
              <article key={`skeleton-${index}`} className="property-card skeleton">
                <div className="property-card__image" />
                <div className="property-card__body">
                  <div className="skeleton-line" />
                  <div className="skeleton-line short" />
                  <div className="skeleton-line" />
                </div>
              </article>
            ))}
        </div>

        <div className="load-more">
          <button
            className={`btn btn--secondary ${isLoadingMore ? 'is-loading' : ''}`}
            onClick={handleLoadMore}
            disabled={isLoadingMore || visibleCount >= properties.length}
          >
            {isLoadingMore ? 'Chargement...' : 'Charger plus'}
          </button>
        </div>
      </section>

      <section className="extras">
        <div className="extras__header">
          <span className="eyebrow">Bonus pro</span>
          <h2>Services premium</h2>
        </div>
        <div className="extras__grid">
          <article>
            <div className="service-icon">🗺</div>
            <h3>Carte interactive</h3>
            <p>Explorez les propriétés directement sur la carte.</p>
          </article>
          <article>
            <div className="service-icon">📸</div>
            <h3>Galerie immersive</h3>
            <p>Découvrez les biens avec des photos haute qualité.</p>
          </article>
          <article>
            <div className="service-icon">💬</div>
            <h3>Chat avec un agent</h3>
            <p>Discutez en temps réel avec un expert.</p>
          </article>
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>Vous avez un bien à vendre ?</h2>
          <p>
            Publiez votre annonce gratuitement et trouvez des acheteurs
            rapidement.
          </p>
        </div>
        <button className="btn btn--primary">Publier une annonce</button>
      </section>

      <footer className="footer">
        <div className="footer__brand">
          <img src={logo} alt="Dar Farah Immobilier" />
          <p>Plateforme immobilière moderne pour vendre ou louer rapidement.</p>
        </div>
        <div className="footer__links">
          <div>
            <h4>Entreprise</h4>
            <a href="#">A propos</a>
            <a href="#">Notre equipe</a>
            <a href="#">Carriere</a>
          </div>
          <div>
            <h4>Proprietes</h4>
            <a href="#">Acheter</a>
            <a href="#">Louer</a>
            <a href="#">Estimation</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="#">Contact</a>
            <a href="#">FAQ</a>
            <a href="#">Centre d'aide</a>
          </div>
          <div>
            <h4>Reseaux</h4>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
          </div>
        </div>
        <div className="footer__bottom">
          © 2026 Dar Farah Immobilier. Tous droits reserves.
        </div>
      </footer>
    </div>
  )
}

export default App
