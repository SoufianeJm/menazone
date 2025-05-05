import Link from 'next/link';
import { NavArrowRight, Plus } from 'iconoir-react';

type ProtestCallToActionProps = {
  className?: string;
};

export default function ProtestCallToAction({
  className = '',
}: ProtestCallToActionProps) {
  return (
    <Link href="/add-protest" className={className}>
      <div className="w-full flex items-center justify-between p-4 rounded-default bg-cardColor border-default hover:bg-zinc-800 transition cursor-pointer">
        <div className="flex items-center gap-4">
          <div className="flex items-center border-default justify-center p-[10px] rounded-full bg-cardColor">
            <Plus width={16} height={16} className="text-txt-main" />
          </div>
          
          <div className="flex flex-col">
            <span className="text-txt-main font-semibold text-base">You got a protest ?</span>
            <span className="text-txt-secondary text-sm">Click here and add it</span>
          </div>
        </div>
        
        <NavArrowRight width={20} height={20} className="text-txt-secondary" />
      </div>
    </Link>
  );
}
