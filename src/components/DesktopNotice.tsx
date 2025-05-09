import {useTranslations} from 'next-intl';

export function DesktopNotice() {
    const t = useTranslations('HomePage');
    return (
        <div className="hidden md:flex h-screen items-center justify-center text-center px-4">
            <div className="max-w-md space-y-4">
                <h1 className="text-xl font-semibold text-white">
                    {t('title')}
                </h1>
                <p className="text-sm text-gray-400">
                    {t('notice')}
                </p>
            </div>
        </div>
    );
}
