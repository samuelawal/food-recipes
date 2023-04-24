import styles from './ContainerBanner.module.css';
const ContainerBanner = ()=> {
    return (
        <div className={styles['img-placeholder']}>
           <img src="./food_banner.webp" className={styles['banner_img']} alt='food banner'/>
            <div className={styles.card_content}>
                <p className='small'>IN MY KITCHEN</p>
                <h1>The Best Kitchen Recipes</h1>
                <p>Join us as we dig deeper into the magic of food, and start you off in the next cooking adventure.</p>
            </div>
        </div>
    )
}
export default ContainerBanner