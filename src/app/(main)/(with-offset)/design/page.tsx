import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { colorTokens } from "@/lib/design-tokens";
import { designRules } from "@/lib/design-rules";
import Heading from "@/app/(main)/_components/heading";
import { instances } from "@/app/(main)/(with-offset)/instances/data";
import { DayNightStatus, LogoSample, ModeToggleSample } from "./_components/live-samples";
import TypeSpecimens from "./_components/type-specimens";

export const metadata: Metadata = {
  title: "Design | music_shio",
  description: "このサイトのデザインルール、色、昼と夜の決まり、コンポーネント。",
};

const BUTTON_VARIANTS = ["default", "secondary", "outline", "ghost", "link"] as const;
const BUTTON_SIZES = ["sm", "default", "lg"] as const;

export default function Page() {
  // カードの見本には実際の作品を使う
  const sample = instances.find((instance) => instance.id === "non-existent-discipline") ?? instances[0];

  return (
    <main className="mx-auto w-full max-w-3xl px-6 pt-10 pb-24">
      <Heading text="Design" />

      <Section id="rules" title="Rules">
        <ol className="space-y-3">
          {designRules.map((rule, index) => (
            <li key={rule} className="grid grid-cols-[2rem_1fr] gap-x-2 leading-7">
              <span className="text-muted-foreground text-sm leading-7 tabular-nums">{index + 1}</span>
              <span>{rule}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="color" title="Color">
        <ul className="divide-y border-y">
          {colorTokens.map((token) => (
            <li key={token.variable} className="grid gap-4 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
              <h3 className="font-medium">
                {token.name}
                <code className="text-muted-foreground ml-3 text-xs font-normal">{token.variable}</code>
              </h3>
              <div className="flex gap-4">
                <Swatch label="Day" color={token.day} />
                <Swatch label="Night" color={token.night} />
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="day-night" title="Day / Night">
        <DayNightStatus />
      </Section>

      <Section id="type" title="Type">
        <TypeSpecimens />
      </Section>

      <Section id="components" title="Components">
        <Sample title="Logo">
          <LogoSample />
        </Sample>

        <Sample title="Mode toggle">
          <ModeToggleSample />
        </Sample>

        <Sample title="Button">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              {BUTTON_VARIANTS.map((variant) => (
                <Button key={variant} variant={variant}>
                  {variant}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {BUTTON_SIZES.map((size) => (
                <Button key={size} size={size}>
                  {size}
                </Button>
              ))}
              <Button disabled>disabled</Button>
            </div>
          </div>
        </Sample>

        <Sample title="Card">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>{sample.title}</CardTitle>
              <CardDescription>{sample.year}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">{sample.description}</p>
            </CardContent>
          </Card>
        </Sample>
      </Section>
    </main>
  );
}

function Section({ id, title, lead, children }: { id: string; title: string; lead?: string; children: ReactNode }) {
  return (
    <section id={id} className="mt-20 scroll-mt-24">
      <h2 className="text-2xl font-medium">{title}</h2>
      {lead && <p className="text-muted-foreground mt-2 leading-relaxed">{lead}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Swatch({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="size-12 shrink-0 rounded-md border" style={{ backgroundColor: color }} />
      <span className="text-sm leading-tight">
        <span className="text-muted-foreground block">{label}</span>
        <code className="text-xs">{color}</code>
      </span>
    </div>
  );
}

function Sample({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-t py-8 first:border-t-0 first:pt-0">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-5">{children}</div>
    </div>
  );
}
