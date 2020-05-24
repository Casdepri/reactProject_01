import React from 'react';
import preloader from '../images/preloader.gif'
import style from '../index.css'

let Preloader = () => {
	return <div className={style.preloaderOverlay}>
		<img src={preloader} alt=""/>
	</div>
}

export default Preloader;