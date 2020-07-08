import React, { ReactNode } from 'react';
import _debounce from 'lodash.debounce';

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

class FitText extends React.Component<Props, States> {
    public static defaultProps = {
        compressor: 1.0,
        debounce: 100,
        defaultFontSize: 'inherit',
        minFontSize: Number.NEGATIVE_INFINITY,
        maxFontSize: Number.POSITIVE_INFINITY,
    };

    public state: Readonly<States> = {
        fontSize: this.props.defaultFontSize,
    };

    constructor(props: Props) {
        super(props);

        this._onBodyResize = this._onBodyResize.bind(this);
        this._parentNode = null;
        this.element = null;
    }

    componentDidUpdate(prevProps: ReactNode) {
        // When a new parent ID is passed in, or the new parentNode
        // is available, run resize again
        if (prevProps) {
            if (this.props.parent !== (prevProps as any).parent) {
                this._onBodyResize();
            }
        }
    }

    componentDidMount() {
        if (0 >= this.props.compressor) {
            console.warn(`Warning: The compressor should be greater than 0.`);
        }

        if (this.props.parent) {
            this._parentNode =
                typeof this.props.parent === 'string' ? document.getElementById(this.props.parent) : this.props.parent;
        }

        window.addEventListener('resize', _debounce(this._onBodyResize, this.props.debounce));
        this._onBodyResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', _debounce(this._onBodyResize, this.props.debounce));
    }

    _parentNode: ReactNode;
    element: HTMLDivElement | null;

    _getFontSize(value: number) {
        const props = this.props;

        return Math.max(Math.min(value / (props.compressor * 10), props.maxFontSize), props.minFontSize);
    }

    _onBodyResize() {
        if (this.element && this.element.offsetWidth) {
            let value = this.element.offsetWidth;

            if (this.props.vertical) {
                let parent = this._parentNode || this.element.parentNode;
                if (parent) {
                    value = (parent as any).offsetHeight;
                }
            }

            let newFontSize = this._getFontSize(value);

            this.setState({
                fontSize: `${newFontSize}px`,
            });
        }
    }

    public render() {
        return (
            <div ref={(el) => (this.element = el)} style={{ fontSize: this.state.fontSize }}>
                {this.props.children}
            </div>
        );
    }
}

export default FitText;
