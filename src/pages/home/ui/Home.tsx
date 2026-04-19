import { useRef, useState } from 'react';
import { Navbar } from '@shared/ui/navbar';
import { Footer } from '@shared/ui/footer';
import { LazyImage } from '@shared/ui/lazy-image';
import './home.css';

const rueImages = import.meta.glob('@shared/assets/clothes/rue/*.jpg', { eager: true });
const hatImages = import.meta.glob('@shared/assets/clothes/hat/*.jpg', { eager: true });
const grindImages = import.meta.glob('@shared/assets/clothes/grind/*.jpg', { eager: true });

const mapImagesToProducts = (globResult: Record<string, unknown>, collectionName: string) => {
  return Object.keys(globResult).map((path, index) => {
    const fileName = path.split('/').pop()?.replace('.jpg', '') || '';
    return {
      id: `${collectionName}-${index}`,
      name: `${collectionName} ${fileName.replace(/^\d+-/, '')}`,
      image: (globResult[path] as { default: string }).default,
    };
  });
};

const rueProducts = mapImagesToProducts(rueImages, 'RUE');
const hatProducts = mapImagesToProducts(hatImages, 'HAT');
const grindProducts = mapImagesToProducts(grindImages, 'GRIND');

// Use some images for lookbook and instagram
const allProducts = [...rueProducts, ...hatProducts, ...grindProducts];
const lookbookImages = allProducts.slice(0, 5);

interface HomeProps {
  isLoaded?: boolean;
}

export const Home = ({ isLoaded = false }: HomeProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showInquiry, setShowInquiry] = useState(false);

  const toggleInquiry = () => setShowInquiry((prev) => !prev);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const collections = [
    {
      name: 'RUE',
      subtitle: 'COLLECTION 01 / PARISIAN STREET',
      products: rueProducts,
    },
    {
      name: 'HAT',
      subtitle: 'HEADWEAR / ESSENTIALS',
      products: hatProducts,
    },
    {
      name: 'GRIND',
      subtitle: 'URBAN SERIES / ARMENIAN STRENGTH',
      products: grindProducts,
    },
  ];

  return (
    <div className={`homeContainer ${isLoaded ? 'isLoaded' : ''}`}>
      <Navbar />

      <section className="heroSection">
        <div className="heroContent">
          <div className="heroTextContainer">
            <p className="heroTextLine">It started in Yerevan.</p>
            <p className="heroTextLine">The soul came from Paris.</p>
            <p className="heroTextLine heroMain">R3IGN brings together two worlds —</p>
            <p className="heroTextLine">Armenian strength and French elegance.</p>
            <p className="heroTextLine">This isn’t just clothing.</p>
            <p className="heroTextLine">It’s a journey to express your identity.</p>
          </div>
          <h1 className="brandNameHero">R3IGNE</h1>
        </div>
        <div className="heroBackgroundEffect"></div>
        <div className="scrollIndicator">
          <span>SCROLL</span>
          <div className="arrowDown"></div>
        </div>
      </section>

      {collections.map((collection) => (
        <section
          key={collection.name}
          className="collectionSection"
          aria-labelledby={`title-${collection.name}`}
        >
          <div className="sectionHeader">
            <h2 id={`title-${collection.name}`} className="sectionTitle">
              {collection.name}
            </h2>
            <p className="sectionSubtitle">{collection.subtitle}</p>
          </div>
          <div className="collectionGrid">
            {collection.products.map((product) => (
              <article key={product.id} className="productCard">
                <LazyImage
                  src={product.image}
                  alt={`${collection.name} piece - ${product.name}`}
                  className="productImage"
                />
                <div className="productInfo">
                  <span className="productName">{product.name}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="lookbookSection" aria-labelledby="title-lookbook">
        <h2 id="title-lookbook" className="sectionTitle">
          LOOKBOOK
        </h2>
        <div className="lookbookContainer">
          <button
            className="scrollButton left"
            onClick={() => scroll('left')}
            aria-label="Scroll Lookbook Left"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <div
            className="lookbookScroll"
            ref={scrollRef}
            role="region"
            aria-label="Lookbook gallery"
          >
            {lookbookImages.map((item) => (
              <div key={item.id} className="lookbookItem">
                <LazyImage
                  src={item.image}
                  alt="Editorial Lookbook view"
                  className="lookbookImage"
                />
              </div>
            ))}
          </div>
          <button
            className="scrollButton right"
            onClick={() => scroll('right')}
            aria-label="Scroll Lookbook Right"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </section>

      <section className="aboutSection" aria-labelledby="title-about">
        <div className="aboutContent">
          <h2 id="title-about" className="sectionTitle">
            ABOUT
          </h2>
          <p className="aboutText">From Yerevan to Paris — R3IGN is a bridge between styles.</p>
        </div>
      </section>

      <section className="purchaseSection" aria-labelledby="title-purchase">
        <div className="purchaseContent">
          <h2 id="title-purchase" className="sectionTitle">
            PURCHASE
          </h2>
          <p className="purchaseDescription">
            INTERESTED IN A PIECE? ALL OUR COLLECTIONS ARE AVAILABLE FOR DIRECT PURCHASE VIA
            PERSONAL INQUIRY.
          </p>
          <button
            className="inquiryButton"
            onClick={toggleInquiry}
            aria-expanded={showInquiry}
            aria-controls="inquiry-options"
          >
            {showInquiry ? 'CLOSE OPTIONS' : 'INQUIRE TO BUY'}
          </button>

          <div
            id="inquiry-options"
            className={`inquiryOptions ${showInquiry ? 'visible' : ''}`}
            aria-hidden={!showInquiry}
          >
            <div className="inquiryGrid">
              <a href="tel:+37477585583" className="inquiryLink">
                <span className="inquiryLabel">CALL US</span>
                <span className="inquiryValue">+374 77-585-583</span>
              </a>
              <a
                href="https://www.instagram.com/r3eign?igsh=em82MXh5a3J1ZDdm"
                target="_blank"
                rel="noopener noreferrer"
                className="inquiryLink"
              >
                <span className="inquiryLabel">INSTAGRAM</span>
                <span className="inquiryValue">@R3EIGN</span>
              </a>
              <a
                href="https://www.tiktok.com/@_r3ign._?_"
                target="_blank"
                rel="noopener noreferrer"
                className="inquiryLink"
              >
                <span className="inquiryLabel">TIKTOK</span>
                <span className="inquiryValue">@_R3IGN._</span>
              </a>
              <a
                href="https://www.facebook.com/r3iign"
                target="_blank"
                rel="noopener noreferrer"
                className="inquiryLink"
              >
                <span className="inquiryLabel">FACEBOOK</span>
                <span className="inquiryValue">R3IIGN</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
