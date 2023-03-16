import { SetStateAction, useEffect, useState } from "react";
import QuestionService from "../services/question-service";
import QuestionItem from "./question-item";
import { Result } from "./result";
import { ErrorMessage } from "../errors/error-message";

type QuestionState = {
    id: number,
    question: string,
    optionA: string,
    optionB: string,
    optionC: string,
    optionD: string,
    answer: string,
    setQuestions: SetStateAction<string>
}[]

const Question = () => {
    const [questions, setQuestions] = useState<QuestionState>([])
    const [selectOption, setSelectOption]: [string, (error: string) => void] = useState("")
    const [isError, setError]: [string, (error: string) => void] = useState("");
    const [questionNumber, setQuestionNumber]: [number, (number: number) => void] = useState(0)
    const [isQuestionTen, setIsQuestionTen] = useState(false)
    const [isLoading, setLoading]:[boolean, (val: boolean) => void] = useState(false)
    const [total, setTotal]:[number, (total: number) => void] = useState(0)

    useEffect(() => {QuestionService.getQuestions(setQuestions, setError, setLoading)},[])

    let questionPerPage = 1
    let questionAttempted = questionNumber * questionPerPage
  
    const visibleIfQuestion = <h2 className="font-bold text-2xl mb-7">
        Question {questionNumber + 1 } of 10
    </h2>
    
    const onOptionChange = (evt:any) =>  setSelectOption(evt.target.value)

    const nextQuestion = (score:boolean) => {
        if(score) setTotal(total + 10)
        if(questionNumber + 1 === 10) setIsQuestionTen(true)

        const next = questionNumber + 1 === questions.length ? 0 : questionNumber + 1
        setQuestionNumber(next)
    }

    const list = questions
        .slice(questionAttempted, questionAttempted + questionPerPage)
        .map(qtn =>         
        <QuestionItem 
            key={qtn.id}
            id={qtn.id}
            question={qtn.question}
            optionA={qtn.optionA}
            optionB={qtn.optionB}
            optionC={qtn.optionC}
            optionD={qtn.optionD}
            answer={qtn.answer}
            selectOption={selectOption}
            onOptionChange={onOptionChange}
            nextQuestion={() => nextQuestion(selectOption === qtn.answer)}
        />
    )

    if(isLoading) return <div className="text-2xl font-semibold">Loading...</div>
    if(isError) return <ErrorMessage isError={isError} />
    if(isQuestionTen) return <Result total={total} />

    return <section className="mr-[10rem]">
        {questions.length ? visibleIfQuestion : ''}
        {list}
    </section>
}

export default Question;