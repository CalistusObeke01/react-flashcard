import axios from '../http-common'

class QuestionService {
    getQuestions = async (setQuestions: any, setError:any, setLoading:any) => {
        setLoading(true)
        try {
            const response = await axios.get('questions')
            setQuestions(response.data.questions)
        } catch(err:any) {
            setError(err.message)
        }
        setLoading(false)
    }
}

export default new QuestionService()