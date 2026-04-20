import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../routes/AppRouter'
import { categories } from '../../data/products'
import styles from './CategoryFilter.module.css'

const CategoryFilter = () => {
  const getCategoryPath = (categoryId) => {
    if (categoryId === 'all') {
      return ROUTES.PRODUCTS
    }
    return ROUTES.PRODUCTS_BY_CATEGORY.replace(':categoria', categoryId)
  }

  return (
    <div className={styles.filterContainer}>
      <h2 className={styles.title}>Categorías</h2>
      <div className={styles.categories}>
        {categories.map(category => (
          <NavLink
            key={category.id}
            to={getCategoryPath(category.id)}
            className={({ isActive }) => 
              `${styles.categoryCard} ${isActive ? styles.active : ''}`
            }
          >
            <span className={styles.categoryIcon}>{category.icon}</span>
            <span className={styles.categoryName}>{category.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter;