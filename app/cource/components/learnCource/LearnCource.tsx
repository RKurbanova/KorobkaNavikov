import { useQuery } from "blitz"
import { useRouter } from "next/router"
import { useState } from "react"
import getCource from "../../queries/getCource"
import styles from "./style.module.scss"

export function LearnCource() {
  const router = useRouter()
  const { id } = router.query
  const [cource] = useQuery(getCource, { id })

  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)

  return (
    <div className={styles.learnCource}>
      <h1>{cource?.name}</h1>
      <div className={styles.learnCource__lessonContent}>
        <div className={styles.learnCource__sideBar}>
          {cource?.lessons.map((lesson, index) => {
            return (
              <>
                <button
                  className={
                    styles.learnCource__button +
                    " " +
                    (index === currentLessonIndex ? styles.learnCource__buttonActive : "")
                  }
                  onClick={() => setCurrentLessonIndex(index)}
                >
                  {lesson?.name}
                </button>
              </>
            )
          })}
        </div>
        <div className={styles.learnCource__lesson}>
          {cource?.lessons[currentLessonIndex]?.text}
        </div>
      </div>
    </div>
  )
}

export default LearnCource
