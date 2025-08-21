import { useRef, useEffect, useState } from 'react';

export default function ViewPort({ active, content }) {
    const [fadeKey, setFadeKey] = useState(0);
    const prevActive = useRef(active);

    useEffect(() => {
        if (prevActive.current !== active) {
            setFadeKey(k => k + 1);
            prevActive.current = active;
        }
    }, [active]);

    return (
        <div className={`viewport ${active}`}>
            {active ? (
                <div
                    key={fadeKey}
                    className="content fade-in-box"
                >
                    {content}
                </div>
            ) : (
                <div className="iframe-container">
                    <iframe src="https://app.mirror-app.com/feed-instagram/6daa5f2d-2753-467a-bb75-3c251adf2b43/preview"></iframe>
                </div>
            )}
        </div>
    );
}
