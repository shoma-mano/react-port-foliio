//https://codepen.io/ziyovuddin/pen/JjNvVYW
import styles from '../../styles/Home.module.css';
export const WaveText = ({
    text,
    color,
    fontSize,
}: {
    text: string;
    color: string;
    fontSize?: string;
}) => {
    return (
        <>
            {text.split('').map((val, index) => (
                <span
                    className={styles.waviy}
                    key={val}
                    style={
                        {
                            '--i': index,
                            fontSize: fontSize ? fontSize : '20px',
                            color: color,
                        } as React.CSSProperties
                    }
                >
                    {val}
                </span>
            ))}
        </>
    );
};
