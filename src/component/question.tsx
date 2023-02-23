import { SetStateAction, useEffect, useState } from "react";
import QuestionService from "../services/question-service";
import {MemoizedCalcScore} from "./calc-score"
import InputField from "../ui/input-field";
import Button from "../ui/button";

type QuestionType = {
    question: string,
    optionA: string,
    optionB: string,
    optionC: string,
    optionD: string,
    answer: string,
    setQuestions: SetStateAction<string>
}[]

const Question = () => {
    const [questions, setQuestions] = useState<QuestionType>([])
    const [selectOption, setSelectOption] = useState<string>('')
    const [isError, setError] = useState("")
    const [questionNumber, setQuestionNumber] = useState(0)

    useEffect(() => {
        QuestionService.getQuestions(setQuestions, setError)
    },[])

    let questionPerPage = 1
    let questionAttempted = questionNumber * questionPerPage
  
    const visibleIfQuestion = <h2 className="font-bold text-4xl mb-7">
        Question {questionAttempted+1 } of {questions.length}
    </h2>
    
    const onOptionChange = (evt:any) => {
        setSelectOption(evt.target.value)
    }

    const nextQuestion = () => {
        // setQuestionNumber(prev => prev + 1)
        const next = questionNumber + 1 === questions.length ? 0 : questionNumber + 1
        setQuestionNumber(next)
    }

    const list = questions
        .slice(questionAttempted, questionAttempted + questionPerPage)
        .map((qtn, index) => <div key={index}>
        <div className="mb-4">
            <p className="text-2xl font-semibold">
                {qtn.question}
            </p>
        </div>
        <InputField
            name='mark'
            id='optionA'
            option={qtn.optionA}
            value={qtn.optionA}
            checked={selectOption === qtn.optionA}
            onChange={onOptionChange}
        />
        <InputField
            name='mark'
            id='optionB'
            option={qtn.optionB}
            value={qtn.optionB}
            checked={selectOption === qtn.optionB}
            onChange={onOptionChange}
        />
        <InputField
            name='mark'
            id='optionC'
            option={qtn.optionC}
            value={qtn.optionC}
            checked={selectOption === qtn.optionC}
            onChange={onOptionChange}
            className={`${!qtn.optionC ? 'none': ''}`}
        />
        <InputField
            name='mark'
            id='optionD'
            option={qtn.optionD}
            value={qtn.optionD}
            checked={selectOption === qtn.optionD}
            onChange={onOptionChange}
            className={`${!qtn.optionD ? 'none': ''}`}
        />
        <MemoizedCalcScore
            score={selectOption === qtn.answer}
        />
    </div>)

    if(isError) return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
        <strong>Error:</strong>
        <span className="block sm:inline">{isError}</span>
    </div>

    return <section className="mr-[10rem]">
        {questions.length ? visibleIfQuestion : ''}
        {list}
        {
            // selectOption &&
            <Button 
                onClick={nextQuestion} 
                text='Next Question'
                className={`${selectOption === '' ? 'none' : 'block'}`}
            />
        }
    </section>
}

export default Question;