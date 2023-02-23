import React, {useMemo, useState} from "react";

type PropsType = {
    score: boolean,
}

const CalcScore = ({score}: PropsType) => {
    const [total, setTotal] = useState<number>(0)

    const calcScore = (score: boolean) => {
        if(score) {
            setTotal(total + 1)
        }
    }

    useMemo(() => calcScore(score), [score])
    return <div>
        <h6 className="text-2xl font-bold">
            {total}
        </h6>
    </div>
}

export const MemoizedCalcScore = React.memo(CalcScore);