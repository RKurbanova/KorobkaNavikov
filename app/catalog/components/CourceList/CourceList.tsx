import getCatalog from "app/catalog/queries/getCatalog"
import { usePaginatedQuery } from "blitz"
import styles from "./styles.module.scss"

const ITEMS_PER_PAGE = 10

export function CourceList() {
  const [cources] = usePaginatedQuery(getCatalog, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE,
    take: ITEMS_PER_PAGE,
  })

  return (
    <div>
      Cource list
      {cources.map(({ id, name }) => (
        <div className={styles.courseCard} key={id}>
          {name}
        </div>
      ))}
    </div>
  )
}

export default CourceList
