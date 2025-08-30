import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { UserGroupIcon, ChatBubbleBottomCenterTextIcon, ArrowRightIcon } from '../constants/icons';

interface MethodStepProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const MethodStep: React.FC<MethodStepProps> = ({ icon, title, description }) => (
    <div className="bg-brand-dark/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-brand-slate/20 text-center flex flex-col items-center">
        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-accent/10 text-brand-accent mb-6">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-brand-light mb-4">{title}</h3>
        <p className="text-brand-slate leading-relaxed flex-grow">{description}</p>
    </div>
);

const Method: React.FC = () => {
    const { t } = useContext(LanguageContext);
    
    const steps = [
        {
            icon: <UserGroupIcon className="h-10 w-10" />,
            title: t.method.steps.step1.title,
            description: t.method.steps.step1.description,
        },
        {
            icon: <ChatBubbleBottomCenterTextIcon className="h-10 w-10" />,
            title: t.method.steps.step2.title,
            description: t.method.steps.step2.description,
        },
        {
            icon: <ArrowRightIcon className="h-10 w-10" />,
            title: t.method.steps.step3.title,
            description: t.method.steps.step3.description,
        }
    ];

    return (
        <section id="method" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-light">{t.method.title}</h1>
                    <p className="text-lg text-brand-slate mt-4 max-w-3xl mx-auto">{t.method.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <MethodStep key={index} {...step} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Method;
