import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSucessStep";


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes; // Converte o objeto em tipagem

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ): (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep  onFeedbackTypeChange={setFeedbackType}/> // Passa o useState como propriedade para o componente filho
                    ) : (
                        <FeedbackContentStep onFeedbackSent={() => setFeedbackSent(true)} feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback}/> // Manda para o componente filho qual opção a pessoa selecionou
                    )}

                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-1" href="https://rocketseat.com.br">Rocketseat</a> e <a className="underline underline-offset-1" href="https://www.linkedin.com/in/victorbwd/">Victor</a>
            </footer>
        </div>
    )
}