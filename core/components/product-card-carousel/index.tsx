import { ResultOf } from '~/client/graphql';
import { Carousel } from '~/components/ui/carousel';

import { ProductCard } from '../product-card';
import { AddToCart } from '../product-card/add-to-cart';

import { ProductCardCarouselFragment } from './fragment';

type Product = ResultOf<typeof ProductCardCarouselFragment>;

export const ProductCardCarousel = ({
  title,
  products,
  showCart,
  showCompare,
}: {
  title: string;
  products: Product[];
  showCart?: boolean;
  showCompare?: boolean;
}) => {
  if (products.length === 0) {
    return null;
  }

  const items = products.map((product) => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ProductCard
        imageSize="tall"
        key={product.entityId}
        product={product}
        showCart={showCart}
        showCompare={showCompare}
      />
      <AddToCart data={product} />
    </div>
  ));

  return <Carousel className="mb-14" products={items} title={title} />;
};
