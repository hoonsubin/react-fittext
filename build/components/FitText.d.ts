import React, { ReactNode } from 'react';
interface Props {
    children?: React.ReactElement | string;
    compressor: number;
    debounce: number;
    defaultFontSize: string;
    minFontSize: number;
    maxFontSize: number;
    parent?: string | object;
    vertical?: boolean;
}
interface States {
    fontSize: string;
}
declare class FitText extends React.Component<Props, States> {
    static defaultProps: {
        compressor: number;
        debounce: number;
        defaultFontSize: string;
        minFontSize: number;
        maxFontSize: number;
    };
    state: Readonly<States>;
    constructor(props: Props);
    componentDidUpdate(prevProps: ReactNode): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    _parentNode: ReactNode;
    element: HTMLDivElement | null;
    _getFontSize(value: number): number;
    _onBodyResize(): void;
    render(): JSX.Element;
}
export default FitText;
