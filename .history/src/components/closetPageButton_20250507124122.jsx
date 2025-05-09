   
   




export default closetButton () {
    return(
        <Link to="/Closet" className={styles.Closet}>
        <img src={closetIcon} alt="Closet" className={styles["nav-icon"]} />
        </Link>
    )
}