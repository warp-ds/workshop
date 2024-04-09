'use client'
import { WarpButton } from '../../../../warp/components/dist/react/button/index.js';

export default function Button() {
    return (
<div>
    <WarpButton variant="primary" onClick={() => setCount((count) => count + 1)}>Button</WarpButton>
    <WarpButton variant="secondary" onClick={() => setCount((count) => count + 1)}>Button</WarpButton>
    </div>
    );
}