import React, {useMemo, useState} from "react";

type ScoreProps = {
    score: boolean,
}

const CalcScore = ({score}: ScoreProps) => {
    const [total, setTotal]:any = useState([])

    const calcScore = (score: boolean) => {
        if(score) {
            setTotal([...total, score])
        }else {
            setTotal(total)
        }
    }

    useMemo(() => calcScore(score), [score])
    return <div>
        <h6 className="text-2xl font-bold">
            {total.length}
        </h6>
    </div>
}

export const MemoizedCalcScore = React.memo(CalcScore);