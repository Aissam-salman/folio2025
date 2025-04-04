export interface CharmingOptions {
    tagName?: keyof HTMLElementTagNameMap
    split?: (text: string) => string[]
    setClassName?: (index: number, char: string) => string | undefined
}

export function charming(
    element: HTMLElement,
    {
        tagName = 'span',
        split = (text: string) => text.split(''),
        setClassName = (index: number) => `char${index}`,
    }: CharmingOptions = {}
): void {
    element.normalize()
    let index = 1

    const inject = (textNode: Text): void => {
        const parentNode = textNode.parentNode
        if (!parentNode) return

        const nodeValue = textNode.nodeValue ?? ''
        const pieces = split(nodeValue)

        for (const piece of pieces) {
            const node = document.createElement(tagName)
            const className = setClassName(index++, piece)
            if (className) node.className = className
            node.textContent = piece
            node.setAttribute('aria-hidden', 'true')
            parentNode.insertBefore(node, textNode)
        }

        if (nodeValue.trim() !== '') {
            if (parentNode instanceof HTMLElement) {
                parentNode.setAttribute('aria-label', nodeValue)
            }
        }

        parentNode.removeChild(textNode)
    }

    const traverse = (node: Node): void => {
        if (node.nodeType === Node.TEXT_NODE) {
            inject(node as Text)
        } else {
            const children = Array.from(node.childNodes)
            if (
                children.length === 1 &&
                children[0].nodeType === Node.TEXT_NODE
            ) {
                inject(children[0] as Text)
            } else {
                children.forEach(traverse)
            }
        }
    }

    traverse(element)
}
