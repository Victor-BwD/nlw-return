import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
    onFeedbackTypeChange: (type: FeedbackType) => void;
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
    return (
        <> 
                <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>

                <CloseButton />
                </header>

            <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key, value]) => {
                    return(
                        <button 
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-x-brand-500 focus:outline-none"
                            onClick={() => props.onFeedbackTypeChange(key as FeedbackType)} // Passar a ativação de uma função sempre com arrow function, a key sempre vai ser o objeto tipado
                            type="button"
                        >
                            <img src={value.image.source} alt={value.image.alt}></img>
                            <span>{value.title}</span>
                        </button>
                    );
                }) }
            </div>
        </>
    )
}