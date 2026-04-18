import { Navbar } from '@shared/ui/navbar';
import { Footer } from '@shared/ui/footer';
import { LazyImage } from '@shared/ui/lazy-image';
import './home.css';

const images = import.meta.glob('@shared/assets/clothes/*.jpg', { eager: true });

const getImage = (name: string) => {
  const path = `/src/shared/assets/clothes/${name}.jpg`;
  return (images[path] as { default: string })?.default;
};

export const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Satin Ribbon Tweed Unconstructed Sportcoat',
      price: '$6,150',
      image: getImage('cloth-1'),
      large: true,
    },
    {
      id: 2,
      name: 'Satin Ribbon Tweed Unconstructed Sportcoat',
      price: '$6,150',
      image: getImage('cloth-2'),
    },
    {
      id: 3,
      name: 'Satin Ribbon Tweed Frayed Pleated Skirt',
      price: '$3,350',
      image: getImage('cloth-3'),
    },
    {
      id: 4,
      name: 'Classic Fit Sportcoat',
      price: '$2,500',
      image: getImage('cloth-4'),
    },
    {
      id: 5,
      name: 'White Oxford Shirt',
      price: '$450',
      image: getImage('cloth-5'),
    },
    {
      id: 6,
      name: 'Tricolor Striped Tie',
      price: '$190',
      image: getImage('cloth-6'),
    },
  ];

  return (
    <div className="homeContainer">
      <Navbar />

      <main className="productGrid">
        {products.map((product) => (
          <div
            key={product.id}
            className="productCard"
            style={product.large ? { gridRow: 'span 2' } : {}}
          >
            <LazyImage src={product.image} alt={product.name} className="productImage" />
            <div className="productInfo">
              <span className="productName">{product.name}</span>
              <span className="productPrice">{product.price}</span>
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
};
