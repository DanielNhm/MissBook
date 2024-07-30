import { Fragment } from "react"

const { useState } = React


export function LongTxt({txt}) {
    const [isShowMore, setIsShowMore] = useState(false)
    function getTxt() {
        if (txt.length < 100)
            return txt
        else if (isShowMore)
            return txt
        else
            return txt.substring(0, 100) + '...'
    }
    return <React.Fragment>
        <p>
            {getTxt()}
        </p>
        {txt.length > 100 && <button onClick={() => {
            setIsShowMore(prevIsShowMore => !prevIsShowMore)
        }}>{!isShowMore ? 'Show more' : 'Show less'}</button>}
    </React.Fragment>

}