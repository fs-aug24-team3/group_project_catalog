/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { BackLink } from '../../components/NavigateBack';

import styles from './ProductDetailsPage.module.scss';
import { DetailedProduct } from '../../types/DetailedProduct';
import { getAllProducts, getDetailedProduct } from '../../api/api';

import { ProductOverview } from './components/ProductOverview';
import { About } from './components/About';
import { TechSpecs } from './components/Tech';
import { CardsSlider } from '../../components/CardsSlider';
import { Product } from '../../types/Product';
import { useTranslation } from 'react-i18next';

export const ProductDetailsPage = () => {
  const [products, setProducts] = useState<DetailedProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [productWithDetails, setProductWithDetails] =
    useState<DetailedProduct | null>(null);

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedCapacity, setSelectedCapacity] = useState('');

  const [productsForSlider, setProductsForSlider] = useState<Product[]>([]);

  const { t } = useTranslation();

  const { itemId } = useParams();
  const { pathname } = useLocation();
  const catalog = pathname.split('/')[1];

  let breadCrumbsTitle = '';

  for (let i = 0; i < catalog.length; i++) {
    if (i === 0) {
      breadCrumbsTitle += catalog[i].toUpperCase();
    } else {
      breadCrumbsTitle += catalog[i];
    }
  }

  const toShowDetails =
    productsForSlider.length !== 0 &&
    productWithDetails &&
    !isLoading &&
    !error;

  useEffect(() => {
    getAllProducts(catalog).then(setProductsForSlider);
  }, [catalog]);

  useEffect(() => {
    setIsLoading(true);
    setError('');

    getDetailedProduct(catalog)
      .then(data => {
        setProducts(data);

        const productDetailed = data.find(product => product.id === itemId);

        if (productDetailed) {
          setProductWithDetails(productDetailed);
          setSelectedColor(productDetailed.color);
          setSelectedCapacity(productDetailed.capacity);
        }
      })
      .catch(() => setError('Unable to load information'))
      .finally(() => setIsLoading(false));
  }, [catalog, itemId]);

  useEffect(() => {
    if (selectedColor && selectedCapacity) {
      const newProduct = products.find(
        product =>
          product.id === itemId &&
          product.color === selectedColor &&
          product.capacity === selectedCapacity,
      );

      if (newProduct) {
        setProductWithDetails(newProduct);
      }
    }
  }, [selectedCapacity, selectedColor, products, itemId]);

  return (
    <div className={styles.details}>
      <BreadCrumbs
        title={`pageTitle.${breadCrumbsTitle.toLowerCase()}`}
        theThirdPart={productWithDetails?.name}
      />

      <BackLink />

      {toShowDetails && (
        <div className={styles.details__wrap}>
          <h2 className={styles.details__title}>{productWithDetails?.name}</h2>

          <ProductOverview
            product={productWithDetails}
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
            selectedCapacity={selectedCapacity}
            onSelectCapacity={setSelectedCapacity}
          />

          <div className={styles.details__info}>
            <About product={productWithDetails} />

            <TechSpecs product={productWithDetails} />
          </div>

          <CardsSlider
            productsForSlider={productsForSlider}
            sliderTitle={t('details.title.you_may_also_like')}
            productYear={2020}
          />
        </div>
      )}
    </div>
  );
};
