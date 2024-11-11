import styles from './RightsPage.module.scss';

export const RightsPage = () => {
  return (
    <div className={styles.rights}>
      <h1 className={styles['rights__main-title']}>
        Product and Service Information
      </h1>
      <h2 className={styles.rights__title}>Your Privacy Matters</h2>
      <p className={styles.rights__descriptions}>
        At Nice Gadgets, we believe that your privacy is of the utmost
        importance. We are committed to safeguarding the personal information
        you share with us. From browsing our website to making purchases, we
        ensure that all your data is protected with the highest level of
        security measures. Our privacy policy is designed to give you peace of
        mind, knowing that your information is used solely for enhancing your
        shopping experience with us.
      </p>
      <h2 className={styles.rights__title}>Intellectual Property Rights</h2>
      <p className={styles.rights__descriptions}>
        All the content available on the Nice Gadgets website, including logos,
        product images, and text, is protected by copyright laws. Any
        unauthorized reproduction, distribution, or use of the intellectual
        property on this site is strictly prohibited. We take pride in the
        originality of our offerings and ask that you respect the creative
        rights behind the technology and content we provide.
      </p>
      <h2 className={styles.rights__title}>Product Warranty</h2>
      <p className={styles.rights__descriptions}>
        Nice Gadgets stands behind the quality of the products we offer. All our
        phones, watches, and tablets come with a warranty that covers any
        defects in materials or craftsmanship. Should you encounter any issues
        with your purchase, our dedicated customer support team is ready to
        assist you with returns, exchanges, or repairs in accordance with our
        warranty policies.
      </p>
      <h2 className={styles.rights__title}>Fair Pricing & Transparency</h2>
      <p className={styles.rights__descriptions}>
        We believe in offering the best value for your money. Our pricing is
        transparent, with no hidden fees or surprise charges. The prices listed
        on our website are what you’ll pay at checkout. At Nice Gadgets, we
        strive to make advanced technology accessible to everyone without
        compromising on quality, ensuring that you receive the best products at
        fair prices.
      </p>
      <h2 className={styles.rights__title}>Customer Support and Returns</h2>
      <p className={styles.rights__descriptions}>
        At Nice Gadgets, your satisfaction is our priority. If you have any
        questions or concerns about your purchase, our customer support team is
        here to help. We offer a straightforward return policy, giving you peace
        of mind knowing that you can return or exchange your products if they do
        not meet your expectations. We are committed to ensuring you have a
        smooth and enjoyable shopping experience with us.
      </p>
    </div>
  );
};
