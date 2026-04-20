import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
import ProductDetail from '../pages/ProductDetail/ProductDetail'
import styles from './AppRouter.module.css'

export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/productos',
  PRODUCTS_BY_CATEGORY: '/productos/:categoria',
  PRODUCT_DETAIL: '/producto/:id',
  NOT_FOUND: '/404'
}

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PRODUCTS} element={<Products />} />
      <Route path={ROUTES.PRODUCTS_BY_CATEGORY} element={<Products />} />
      <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
    </Routes>
  )
}

const NotFound = () => {
  return (
    <div className={styles.notFoundPage}>
      <h1 className={styles.notFoundCode}>404</h1>
      <h2 className={styles.notFoundTitle}>Página no encontrada</h2>
      <p className={styles.notFoundText}>
        Lo sentimos, la página que buscas no existe
      </p>
      <a href="/" className={styles.notFoundLink}>
        Volver al inicio
      </a>
    </div>
  )
}

export default AppRouter;