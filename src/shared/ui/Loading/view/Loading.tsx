import classes from './Loading.module.sass'

const Loading = () => {
    return (
        <div className={classes.loading}>
            <svg className={classes.loadingBlock} viewBox="0 0 128 128" width="128px" height="128px">
                <g fill="var(--root-white-color)">
                    <g className={classes.loadingBlock__Box}>
                        <rect
                            className={classes.loadingBlock__child}
                            rx="8" ry="8" x="0" y="128"
                            width="40"
                            height="24"
                            transform="rotate(180)"
                        />
                    </g>
                    <g className={classes.loadingBlock__Box}>
                        <rect
                            className={classes.loadingBlock__child}
                            rx="8" ry="8" x="44" y="128"
                            width="40"
                            height="24"
                            transform="rotate(180)"
                        />
                    </g>
                    <g className={classes.loadingBlock__Box}>
                        <rect
                            className={classes.loadingBlock__child}
                            rx="8" ry="8" x="88" y="128"
                            width="40"
                            height="24"
                            transform="rotate(180)"
                        />
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Loading