import React, {useMemo, useState} from "react";

type PropsType = {
    score: boolean
}

const CalcScore = ({score}: PropsType) => {
    const [total, setTotal] = useState<number>(0)

    const calcScore = (score: boolean) => {
        let totalCorrectQtns = 0;
        
        for (let i = 0; i <= 1; i++) {
            if (score) {
                setTotal(total + totalCorrectQtns++)
            }
        }
        return totalCorrectQtns;
    }

    useMemo(() => calcScore(score), [score])
    return <div>
        <h6 className="text-2xl font-bold">
            {total}
        </h6>
    </div>
}

export const MemoizedCalcScore = React.memo(CalcScore);

