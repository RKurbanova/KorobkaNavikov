import getCatalog from "app/catalog/queries/getCatalog"
import { usePaginatedQuery } from "blitz"
import { useCallback, useState } from "react"
import styles from "./styles.module.scss"

const ITEMS_PER_PAGE = 9

export function CourceList({ searchQuery }) {
  const [page, setPage] = useState(0)

  const [{ cources, count }] = usePaginatedQuery(getCatalog, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
    searchQuery,
  })

  const maxPage = Math.floor(count / ITEMS_PER_PAGE)

  const setPreviousPage = useCallback(() => {
    if (page > 0) {
      setPage(page - 1)
    }
  }, [page])

  const nextNextPage = useCallback(() => {
    if (page < maxPage) {
      setPage(page + 1)
    }
  }, [maxPage, page])

  return (
    <div>
      <div className={styles.courseList}>
        {cources.map(({ id, name }) => (
          <div className={styles.courseCard} key={id}>
            {name}
            <div className={styles.courseCard__photo}></div>
            <div className={styles.courseCard__about}></div>
            <div className={styles.courseCard__button}>Начать</div>
          </div>
        ))}
      </div>
      <div className={styles.paginator}>
        <div className={styles.paginator__wrapper}>
          <div>
            <span onClick={setPreviousPage} className={styles.paginator__button}>
              Назад
            </span>
          </div>
          <div className={styles.paginator__pages}>
            {Array(maxPage + 1)
              .fill(1)
              .map((_, index) => {
                return (
                  <span
                    onClick={() => setPage(index)}
                    key={index}
                    className={
                      styles.paginator__num +
                      (index == page ? ` ${styles.paginator__num_active}` : "")
                    }
                  >
                    {index + 1}
                  </span>
                )
              })}
          </div>
          <div>
            <span onClick={nextNextPage} className={styles.paginator__button}>
              Вперед
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourceList
