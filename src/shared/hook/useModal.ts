import { useCallback, useState } from "react";

function useModal() {
	const [isOpen, setIsOpen] = useState(false);

	const open = useCallback(() => setIsOpen(true), []);
	const toggle = useCallback(() => setIsOpen(prev => !prev), []);
	const close = useCallback(() => setIsOpen(false), []);

	return { isOpen, open, toggle, close };
}

export { useModal };
