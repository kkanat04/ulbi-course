declare module '*.scss' {
    interface Icls {
        [className: string]: string
    }
    const cls: Icls;
    export = cls;
}

declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'

declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
