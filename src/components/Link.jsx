const address = "https://zrozumiecreact.pl";

export function Link({ text = address, shouldOpenNewTab }) {
    console.log(text);
    const target = shouldOpenNewTab ? "_blank" : "";
    const rel = shouldOpenNewTab ? "noopener noreferrer" : "";
    return (
        <a href={address} target={target} rel={rel}>
            {text}
        </a>
    );
}
