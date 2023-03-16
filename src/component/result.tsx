import Button from "../ui/button"

type ResultProps = {
    total : number
}
export const Result = ({total}: ResultProps) => {
    const handleRemark = (total:number) => {
        switch(true) {
            case (total === 100):
                return 'Excellent!'
            case (total > 70 && total < 100):
                return 'Great job!'
            case (total === 70):
                return 'Good!'
            default: 
                return ''
        }
    }

    return <div className="flex justify-center items-center flex-col h-[400px] ml-[-6rem]">
        <h1 className="text-2xl font-bold mb-4">{handleRemark(total)}</h1>
        <h2 className="font-extrabold tracking-wide result">{total}%</h2>
        <Button
            text="Refresh"
            onClick={() => window.location.reload()}
        />
    </div>
}