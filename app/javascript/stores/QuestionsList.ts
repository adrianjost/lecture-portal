import {destroy, Instance, types} from "mobx-state-tree";
import question, {QuestionModel} from "./Question";

export type QuestionsListModel = Instance<typeof QuestionsList>

const QuestionsList = types
    .model({
        list: types.optional(types.array(question), []),
    })
    .actions(self => ({
        addQuestion(questionData) {
            self.list.push(question.create({
                id: questionData.id,
                content: questionData.content,
                author_id: questionData.author_id,
                created_at: new Date(questionData.created_at)
            }));
            self.list = self.list.sort((a, b): number => {
                return (
                    new Date(b.created_at).getTime() -
                    new Date(a.created_at).getTime()
                );
            });
        },
        setQuestionsList(questionsListData) {
            self.list.clear();
            questionsListData.forEach(questionData => {
                self.list.push(question.create({
                    id: questionData.id,
                    content: questionData.content,
                    author_id: questionData.author_id,
                    created_at: new Date(questionData.created_at)
                }));
            });
            self.list = self.list.sort((a, b): number => {
                return (
                    new Date(b.created_at).getTime() -
                    new Date(a.created_at).getTime()
                );
            });
        },
        resolveQuestionById(id) {
            console.log(id);
            let resolvedQuestion: QuestionModel;
            self.list.forEach(question => {
                if(question.id == id)
                    resolvedQuestion = question
            });
            destroy(resolvedQuestion)
        }
    }));


export default QuestionsList;