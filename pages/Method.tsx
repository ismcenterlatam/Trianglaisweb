import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { UserGroupIcon, ChatBubbleBottomCenterTextIcon, ArrowRightIcon } from '../constants/icons';
import Seo from '../components/Seo';

interface MethodStepProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const MethodStep: React.FC<MethodStepProps> = ({ icon, title, description }) => (
    <div className="bg-brand-dark/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-brand-slate/20 flex items-start space-x-6">
        <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-brand-accent/10 text-brand-accent">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-brand-light mb-2">{title}</h3>
            <p className="text-brand-slate leading-relaxed">{description}</p>
        </div>
    </div>
);

const Method: React.FC = () => {
    const { t } = useContext(LanguageContext);
    
    const steps = [
        {
            icon: <UserGroupIcon className="h-8 w-8" />,
            title: t.method.steps.step1.title,
            description: t.method.steps.step1.description,
        },
        {
            icon: <ChatBubbleBottomCenterTextIcon className="h-8 w-8" />,
            title: t.method.steps.step2.title,
            description: t.method.steps.step2.description,
        },
        {
            icon: <ArrowRightIcon className="h-8 w-8" />,
            title: t.method.steps.step3.title,
            description: t.method.steps.step3.description,
        }
    ];

    return (
        <>
            <Seo
                title={t.seo.method.title}
                description={t.seo.method.description}
                path="method"
            />
            <section id="method" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-light">{t.method.title}</h1>
                        <p className="text-lg text-brand-slate mt-4 max-w-3xl mx-auto">{t.method.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="space-y-8">
                                {steps.map((step, index) => (
                                    <MethodStep key={index} {...step} />
                                ))}
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <img 
                                src="/assets/learning-process.svg" 
                                alt={t.method.title}
                                className="rounded-lg shadow-2xl w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Method;