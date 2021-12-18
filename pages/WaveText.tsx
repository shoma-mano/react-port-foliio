import styles from '../styles/Home.module.css';

export const WaveText=({text,color}:{text:string;color:string})=>{
return (<>
    <div className={styles.waviy}>
        {text.split("").map((val,index)=>
            (<span  key={val} style={{"--i":index,fontSize:"20px"} as React.CSSProperties}>{val}</span>))}
    </div>
    </>)
}