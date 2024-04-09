import type { MetaFunction } from "@remix-run/node";
import { WarpButton } from '@warp-ds/components/react/button';
import { WarpIcon } from '@warp-ds/components/react/icon';
import '@warp-ds/components/icon';
import '@warp-ds/components/button';
import { Button } from "@warp-ds/react";
import SlButton from '@shoelace-style/shoelace/dist/react/button';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <div><WarpButton variant="primary" onClick={() => setCount((count) => count + 1)}>Button</WarpButton>
      <WarpButton onClick={() => setCount((count) => count + 1)}>Button</WarpButton>
      </div>
      <Button primary>Save</Button>
      <h4>Auro</h4>
      <div>
      <w-button variant="primary">Primary</w-button>
      <w-button variant="secondary">Secondary</w-button>
      </div>
      <div style={{ display: 'inline-flex', padding: '20px', gap: '10px' }}>
          <WarpIcon name="ads-16" />
          <WarpIcon name="alert-24" />
          <WarpIcon name="attachment-32" />
          <WarpIcon name="car-42" />
          
        </div>
        <div style={{ display: 'inline-flex', padding: '20px', gap: '10px' }}>
        <w-icon name="ads-16"></w-icon>
      <w-icon name="alert-24"></w-icon>
      <w-icon name="attachment-32"></w-icon>
      <w-icon name="car-42"></w-icon>
      </div>
      <div>Some text below the icons</div>
      <div>
      <SlButton variant="primary">Primary</SlButton>
        </div>
    </div>
  );
}
