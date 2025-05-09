'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {ChevronRightIcon} from "@/components/icons/ChevronRightIcon";
import {PlusIcon} from "@/components/icons/PlusIcon";

type ProtestCallToActionProps = {
  className?: string;
};

export default function ProtestCallToAction({
  className = '',
}: ProtestCallToActionProps) {
  const t = useTranslations();

  return (
    <Link href="https://menazone.notion.site/1e919f85600380778f1bd9cd227b764a?pvs=105" className={className}>
      <div className="w-full flex items-center justify-between p-4 rounded-default bg-cardColor border-default hover:bg-zinc-800 transition cursor-pointer">
        <div className="flex items-center gap-4">
          <div className="flex items-center border-default justify-center p-[10px] rounded-full bg-cardColor">
            <PlusIcon width={16} height={16} className="text-txt-main" />
          </div>
          
          <div className="flex flex-col">
            <span className="text-txt-main font-semibold text-base">{t('ProtestCTA.title')}</span>
            <span className="text-txt-secondary text-sm">{t('ProtestCTA.subtitle')}</span>
          </div>
        </div>
        
        <ChevronRightIcon width={20} height={20} className="text-txt-secondary" />
      </div>
    </Link>
  );
}
