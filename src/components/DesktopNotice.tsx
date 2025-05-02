export function DesktopNotice() {
    return (
        <div className="hidden md:flex h-screen items-center justify-center text-center px-4">
            <div className="max-w-md space-y-4">
                <h1 className="text-xl font-semibold text-white">
                    Menazone is currently mobile-first.
                </h1>
                <p className="text-sm text-gray-400">
                    Due to the urgency of the situation, we prioritized mobile to launch faster.
                    Desktop and tablet support is coming soon.
                </p>
            </div>
        </div>
    );
}
