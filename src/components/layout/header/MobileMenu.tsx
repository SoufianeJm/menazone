// MobileMenu.tsx (Server)
import dynamic from 'next/dynamic';

const MobileMenuClient = dynamic(() => import('./MobileMenuClient'), { ssr: false });

export function MobileMenu({ onClose }: { onClose: () => void }) {
    return <MobileMenuClient onClose={onClose} />;
}
