function Previous() {
    return (<div className="vertical space-y-2">
        <p><b>previously</b></p>
        <ul className="italic space-y-4">
            {/* <li>incoming student @ Stanford</li> */}
            <li>
                NLP research @{" "}
                <a
                    href="https://oval.cs.stanford.edu/"
                    target="_blank"
                    className="link"
                >
                    Stanford's Open Virtual Assistant Lab
                </a>
                <ul className="not-italic ml-4 list-disc space-y-1.5 mt-1.5">
                    <li>built Noora, a platform to help people with autism improve social conversation</li>
                    <li>first high-schooler to present to <a className="link" href="https://nlp.stanford.edu/" target="_blank" rel="noopener noreferrer">Stanford NLP Group</a></li>
                    <li>guest speaker at CS 372: AI for Precision Medicine & Psychiatric Disorders</li>
                </ul>
            </li>

            <li>
                cofounder @ Hazel
                <ul className="not-italic ml-4 list-disc space-y-1.5 mt-1.5">
                    <li>deferred freshman year to build Siri for realtors</li>
                    <li>raised seed round at 17 (backed by{" "}
                        <a target="_blank" href="https://pear.vc/" className="link">
                            Pear VC
                        </a>{" "}
                        and others)</li>
                </ul>
            </li>
        </ul>
    </div>);
}

export default Previous;