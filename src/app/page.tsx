import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { ArrowRight, Terminal, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen py-16 bg-surface-container-low flex items-center justify-center">
      <Container>
        <Card hoverEffect className="max-w-md mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="sage">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>UI Helpers Ready</span>
              </Badge>
              <span className="text-label-sm text-secondary">Task-03</span>
            </div>
            <h1 className="text-headline-md font-semibold text-on-surface">
              Akmal G. Hartono
            </h1>
            <p className="text-body-sm text-secondary">
              Backend &amp; Fullstack Software Engineer
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Komponen helper <code>cn()</code>, <code>Container</code>, <code>Button</code>, <code>Badge</code>, dan <code>Card</code> berhasil diinisialisasi dan diintegrasikan dengan Lucide Icons.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" size="sm">
              <Terminal className="w-4 h-4 mr-1.5" />
              <span>Docs</span>
            </Button>
            <Button variant="primary" size="sm">
              <span>Next Task</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </CardFooter>
        </Card>
      </Container>
    </main>
  );
}
