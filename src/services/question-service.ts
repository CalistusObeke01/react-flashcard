import axios from '../http-common'

class QuestionService {
    getQuestions = async (setQuestions: any, setError:any) => {
        try {
            const response = await axios.get('questions')
            setQuestions(response.data.questions)
        } catch(err:any) {
            setError(err.message)
        }
    }
}

export default new QuestionService()