import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const SUBMITFEEDBACK = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(SUBMITFEEDBACK.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64/23423rewdfsdafsfsdcas',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit a feedback without type', async () => {
        await expect(SUBMITFEEDBACK.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64/23423rewdfsdafsfsdcas',
        })).rejects.toThrow();
    });

    it('should not be able to submit a feedback without comment', async () => {
        await expect(SUBMITFEEDBACK.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64/23423rewdfsdafsfsdcas',
        })).rejects.toThrow();
    });

    it('should not be able to submit a feedback with an invalid screenshot', async () => {
        await expect(SUBMITFEEDBACK.execute({
            type: 'BUG',
            comment: 'Ta tudo bugado!',
            screenshot: '123.jpg',
        })).rejects.toThrow();
    });
});