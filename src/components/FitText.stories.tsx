import React from 'react';
import FitText from './FitText';

export default { title: 'Fit Text' };

export const welcome: React.FC = () => {
    return (
        <div style={{ margin: '-5vw', padding: '5vw', background: 'black' }}>
            <FitText compressor={0.5}>Saint</FitText>
            <FitText>Saint-Sébastien – Froissar</FitText>
            <FitText compressor={2}>Saint-Sébastien – Froissar</FitText>
            <FitText compressor={10}>Saint-Sébastien – Froissar</FitText>
        </div>
    );
};

export const withATextString: React.FC = () => {
    return <FitText compressor={2}>The Quick Brown Fox</FitText>;
};

export const withScalingBasedOnVerticalOfDifferentParentNode: React.FC = () => {
    return (
        <div style={{ height: '75vh', outline: '2px dotted silver' }} id="js-example">
            <div style={{ padding: '4rem', outline: '2px solid red' }}>
                <FitText vertical compressor={1.15} parent="js-example">
                    <div>
                        <ul
                            style={{
                                listStyle: 'none',
                                margin: 0,
                                padding: 0,
                                lineHeight: '1.3',
                            }}
                        >
                            {[
                                'Waterfront',
                                'Vancouver City Centre',
                                'Yaletown–Roundhouse',
                                'Olympic Village',
                                'Broadway–City Hall',
                                'King Edward',
                                'Oakridge–41st Avenue',
                                'Langara–49th Avenue',
                                'Marine Drive',
                            ].map((item, index) => {
                                return (
                                    <li key={`vertical_${index}`} style={{ fontWeight: 100 }}>
                                        {item}{' '}
                                        <span style={{ fontSize: '0.25em', fontWeight: 400 }}>Check times →</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </FitText>
            </div>
        </div>
    );
};
