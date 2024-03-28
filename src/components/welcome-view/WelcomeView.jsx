import styles from './WelcomeView.module.css'
export function WelcomeView () {
  return (
    <section className={styles.welcomeContainer}>
        <div className={ styles.welcomeTextContainer}>
          <h1>Bienvenido al smart-blog</h1>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis illo alias beatae 
             ea labore quidem natus, nihil asperiores iste eaque est deserunt nisi voluptatum quod animi! Illo dignissimos dolorem tenetur.
          </p>
        </div>
    </section>
  )
}
