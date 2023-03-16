import { ChangeEvent } from "react";
import Button from "../ui/button";
import InputField from "../ui/input-field";

type QuestionItemProps = {
    id: number,
    question: string,
    optionA: string,
    optionB: string,
    optionC: string,
    optionD: string,
    answer: string,
    selectOption: string,
    onOptionChange: (e: ChangeEvent<HTMLInputElement>) => void,
    nextQuestion: (value: boolean) => void
}

const QuestionItem = ({id, question, optionA, optionB, optionC, optionD, answer, selectOption, onOptionChange, nextQuestion}: QuestionItemProps) => {
    return <div key={id}>
        <div className="mb-4">
            <p className="text-base font-semibold">
                {question}
            </p>
        </div>
        <InputField
            name='mark'
            id='optionA'
            option={optionA}
            value={optionA}
            checked={selectOption === optionA}
            onChange={onOptionChange}
        />
        <InputField
            name='mark'
            id='optionB'
            option={optionB}
            value={optionB}
            checked={selectOption === optionB}
            onChange={onOptionChange}
        />
        <InputField
            name='mark'
            id='optionC'
            option={optionC}
            value={optionC}
            checked={selectOption === optionC}
            onChange={onOptionChange}
            className={`${!optionC ? 'none': ''}`}
        />
        <InputField
            name='mark'
            id='optionD'
            option={optionD}
            value={optionD} 
            checked={selectOption === optionD}
            onChange={onOptionChange}
            className={`${!optionD ? 'none': ''}`}
        />
        <Button 
            onClick={() => nextQuestion(selectOption === answer)} 
            text='Next Question'
            className={`${!selectOption ? 'none' : 'block'}`} 
        />
    </div>
}

export default QuestionItem