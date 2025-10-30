import { Button } from "./reusableComponents/button";
import { Input } from "./reusableComponents/input";
import { Badge } from "./reusableComponents/badge";
import { Card } from "./reusableComponents/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./reusableComponents/avatar";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "./reusableComponents/alert";
import { Progress } from "./reusableComponents/progress";
import { Switch } from "./reusableComponents/switch";
import { Slider } from "./reusableComponents/slider";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";

/**
 * Component Showcase - displays all design system components
 * Demonstrates the comprehensive Nexus Board design system with Tailwind tokens
 */
export function ComponentShowcase() {
  return (
    <div className="p-8 space-y-12 max-w-6xl mx-auto">
      <div>
        <h1 className="mb-2">Nexus Board Design System</h1>
        <p className="text-muted-foreground">
          A comprehensive component library built with Tailwind design tokens
        </p>
      </div>

      {/* Buttons */}
      <section className="space-y-4">
        <h2>Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="default">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="destructive">Destructive Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <CheckCircle2 className="size-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled Button</Button>
        </div>
      </section>

      {/* Inputs */}
      <section className="space-y-4">
        <h2>Input Fields</h2>
        <div className="grid gap-4 max-w-md">
          <Input placeholder="Default input" />
          <Input placeholder="Disabled input" disabled />
          <Input type="password" placeholder="Password input" />
          <Input type="email" placeholder="Email input" />
        </div>
      </section>

      {/* Badges */}
      <section className="space-y-4">
        <h2>Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge className="bg-blue-500/10 text-blue-600">Custom</Badge>
          <Badge className="bg-green-500/10 text-green-600">Success</Badge>
          <Badge className="bg-yellow-500/10 text-yellow-600">Warning</Badge>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-4">
        <h2>Cards</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-6">
            <h3 className="mb-2">Card Title</h3>
            <p className="text-muted-foreground">
              This is a card component with default styling using design tokens.
            </p>
          </Card>
          <Card className="p-6 bg-linear-to-br from-hero-gradient-from/10 to-hero-gradient-via/10 border-hero-gradient-from/20">
            <h3 className="mb-2">Gradient Card</h3>
            <p className="text-muted-foreground">
              Cards can use gradient backgrounds with hero gradient tokens.
            </p>
          </Card>
        </div>
      </section>

      {/* Avatars */}
      <section className="space-y-4">
        <h2>Avatars</h2>
        <div className="flex items-center gap-4">
          <Avatar className="size-8">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar className="size-10">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar className="size-12">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=3" />
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
          <Avatar className="size-16">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=4" />
            <AvatarFallback>XL</AvatarFallback>
          </Avatar>
        </div>
      </section>

      {/* Alerts */}
      <section className="space-y-4">
        <h2>Alerts</h2>
        <div className="space-y-3 max-w-2xl">
          <Alert>
            <Info className="size-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is an informational alert using default styling.
            </AlertDescription>
          </Alert>
          <Alert className="border-green-500/50 bg-green-500/10">
            <CheckCircle2 className="size-4 text-green-600" />
            <AlertTitle className="text-green-600">Success</AlertTitle>
            <AlertDescription className="text-green-600/80">
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="size-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              There was a problem processing your request.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Progress */}
      <section className="space-y-4">
        <h2>Progress Bars</h2>
        <div className="space-y-3 max-w-md">
          <Progress value={25} />
          <Progress value={50} />
          <Progress value={75} />
          <Progress value={100} />
        </div>
      </section>

      {/* Switch */}
      <section className="space-y-4">
        <h2>Switches</h2>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Switch id="switch-1" />
            <label htmlFor="switch-1">Default</label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="switch-2" defaultChecked />
            <label htmlFor="switch-2">Checked</label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="switch-3" disabled />
            <label htmlFor="switch-3">Disabled</label>
          </div>
        </div>
      </section>

      {/* Slider */}
      <section className="space-y-4">
        <h2>Slider</h2>
        <div className="max-w-md">
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      </section>

      {/* Color Tokens */}
      <section className="space-y-4">
        <h2>Color Tokens</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="h-20 rounded-lg bg-primary mb-2" />
            <p className="text-sm">Primary</p>
            <code className="text-xs text-muted-foreground">--primary</code>
          </div>
          <div>
            <div className="h-20 rounded-lg bg-secondary mb-2" />
            <p className="text-sm">Secondary</p>
            <code className="text-xs text-muted-foreground">--secondary</code>
          </div>
          <div>
            <div className="h-20 rounded-lg bg-accent mb-2" />
            <p className="text-sm">Accent</p>
            <code className="text-xs text-muted-foreground">--accent</code>
          </div>
          <div>
            <div className="h-20 rounded-lg bg-muted mb-2" />
            <p className="text-sm">Muted</p>
            <code className="text-xs text-muted-foreground">--muted</code>
          </div>
          <div>
            <div className="h-20 rounded-lg bg-destructive mb-2" />
            <p className="text-sm">Destructive</p>
            <code className="text-xs text-muted-foreground">--destructive</code>
          </div>
          <div>
            <div className="h-20 rounded-lg border border-border mb-2" />
            <p className="text-sm">Border</p>
            <code className="text-xs text-muted-foreground">--border</code>
          </div>
          <div>
            <div
              className="h-20 rounded-lg mb-2"
              style={{
                background:
                  "linear-gradient(135deg, var(--hero-gradient-from), var(--hero-gradient-via), var(--hero-gradient-to))",
              }}
            />
            <p className="text-sm">Hero Gradient</p>
            <code className="text-xs text-muted-foreground">
              --hero-gradient-*
            </code>
          </div>
          <div>
            <div className="h-20 rounded-lg bg-glass-light dark:bg-glass-dark backdrop-blur-xl border border-border mb-2" />
            <p className="text-sm">Glass</p>
            <code className="text-xs text-muted-foreground">
              --glass-light/dark
            </code>
          </div>
        </div>
      </section>

      {/* Radius Tokens */}
      <section className="space-y-4">
        <h2>Border Radius Tokens</h2>
        <div className="flex gap-4">
          <div>
            <div
              className="h-20 w-20 bg-primary mb-2"
              style={{ borderRadius: "var(--radius-sm)" }}
            />
            <p className="text-sm">Small</p>
            <code className="text-xs text-muted-foreground">--radius-sm</code>
          </div>
          <div>
            <div
              className="h-20 w-20 bg-primary mb-2"
              style={{ borderRadius: "var(--radius-md)" }}
            />
            <p className="text-sm">Medium</p>
            <code className="text-xs text-muted-foreground">--radius-md</code>
          </div>
          <div>
            <div
              className="h-20 w-20 bg-primary mb-2"
              style={{ borderRadius: "var(--radius-lg)" }}
            />
            <p className="text-sm">Large</p>
            <code className="text-xs text-muted-foreground">--radius-lg</code>
          </div>
          <div>
            <div
              className="h-20 w-20 bg-primary mb-2"
              style={{ borderRadius: "var(--radius-xl)" }}
            />
            <p className="text-sm">XLarge</p>
            <code className="text-xs text-muted-foreground">--radius-xl</code>
          </div>
        </div>
      </section>
    </div>
  );
}
