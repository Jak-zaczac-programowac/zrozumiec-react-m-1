export function Logger(props) {
    const date = new Date();
    console.log(
        `Komponent stworzony o ${date.getHours()} : ${date.getMinutes()}`
    );
    return <>{props.children}</>;
}
