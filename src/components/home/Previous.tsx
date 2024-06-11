function Previous() {
    return (<div className="vertical space-y-2">
        <p><b>previously</b></p>
        <ul className="italic space-y-1.5">
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
            </li>
            <li>
                ex-founder @ Hazel (backed by{" "}
                <a target="_blank" href="https://pear.vc/" className="link">
                    Pear VC
                </a>{" "}
                and others)
            </li>
        </ul>
    </div>);
}

export default Previous;