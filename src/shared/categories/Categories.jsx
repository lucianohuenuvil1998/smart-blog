import styles from './Categories.module.css'
export function Categories (){
  return (
    <div className={styles.categories}>

        {/* <h2>Explorar Categorías</h2> */}

        <ul className={styles.listGroup}>
            <li className={styles.itemCategory}><a href="/categorias/tecnologia/index.html">Tecnología</a> </li>
            <li className={styles.itemCategory}><a href="/categorias/tecnologia/index.html">Tecnología</a> </li>
            <li className={styles.itemCategory}><a href="/categorias/tecnologia/index.html">Tecnología</a> </li>
        </ul>


    </div>
  )
}
