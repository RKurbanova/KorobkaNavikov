import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import addCourceToUser from "app/cource/mutations/addCourceToUser"
import { useMutation, useQuery } from "blitz"
import { useRouter } from "next/router"
import { useMemo } from "react"
import getCource from "../../queries/getCource"
import styles from "./style.module.scss"

export function Cource() {
  const user = useCurrentUser()
  const router = useRouter()
  const { id } = router.query

  const [addCourceMutation] = useMutation(addCourceToUser)
  const [cource] = useQuery(getCource, { id })

  const courceIsAdded = useMemo(() => {
    return user?.courcesIds.includes(id as string)
  }, [id, user?.courcesIds])

  const handleLinkClick = async (e) => {
    e.preventDefault()

    if (!courceIsAdded) {
      await addCourceMutation({ user, id })
    }

    router.push(`/cource/${id}/learn`)
  }

  return (
    <div className={styles.cource}>
      <div className={styles.cource__header}>
        <div className={styles.cource__headerName}>
          <div className={styles.cource__name}>
            <h1>{cource?.name}</h1>
          </div>
          <div className={styles.cource__courceDescription}>{cource?.description}</div>
        </div>
        <img className={styles.cource__img} alt="" src={cource?.image} />
      </div>
      <div className={styles.cource__block}>
        <h2>О курсе</h2>
        <div className={styles.cource__about}>{cource?.about}</div>
        <h2>Для кого этот курс</h2>
        <div className={styles.cource__targets}>{cource?.targets}</div>
      </div>
      <a
        onClick={(e) => {
          handleLinkClick(e)
        }}
        className={styles.cource__button}
      >
        {courceIsAdded ? "Продолжить" : "Начать"}
      </a>
      {user?.role === "TEACHER" ? (
        <a href={`/cource/${id}/lesson/create`} className={styles.cource__button}>
          Создать урок
        </a>
      ) : null}
    </div>
  )
}

export default Cource
