import Image from "next/image";
import Button from "./button.tsx";
import "@aurodesignsystem/auro-button";

export default function Home() {
  return (
    <main>
      <Button />
      <div>
        <auro-button>Primary</auro-button>
        <auro-button variant="secondary">Secondary</auro-button>
        <auro-button variant="tertiary">Tertiary</auro-button>
      </div>
    </main>
  );
}
