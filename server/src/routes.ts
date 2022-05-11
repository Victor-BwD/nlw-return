import express from 'express'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const ROUTES = express.Router()



ROUTES.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot} = req.body;

    const PRISMA_FEEDBACKS_REPOSITORY = new PrismaFeedbacksRepository()
    const NODEMAILER_MAIL_ADAPTER = new NodemailerMailAdapter()
    const SUBMIT_FEEDBACK_USE_CASE = new SubmitFeedbackUseCase(PRISMA_FEEDBACKS_REPOSITORY, NODEMAILER_MAIL_ADAPTER)

    await SUBMIT_FEEDBACK_USE_CASE.execute({
        type,
        comment,
        screenshot,
    })

    
    

    return res.status(201).send() // Status de criado
});