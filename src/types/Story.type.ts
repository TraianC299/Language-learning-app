interface QuestionType {
    question: string,
    correctAnswer: string,
    options: string[],
}


interface StoryType {
    title: string,
    description: string,
    questions: QuestionType[],
    text: string,
    image: string,
}

export default StoryType

