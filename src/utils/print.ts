const Print = (text: string): void => {
    const el = document.createElement("div");
    el.innerText = text;
    document.body.appendChild(el);
};

export default Print;
