import { Navbar } from "../../components/layouts/Navbar";
import { AppSidebar } from "../AppSidebar";
import { useState } from "react";
import { Card } from "../../components/reusableComponents/card";

export function ProjectMarketing() {
  const [isDark, setIsDark] = useState(false);

  const handleThemeToggle = () => setIsDark(!isDark);

  return (
    <>
      <Navbar onThemeToggle={handleThemeToggle} isDark={isDark} />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 min-h-[calc(100vh-73px)]">
          <div className="p-8">
            <Card className="p-6">
              <h1 className="text-3xl font-bold mb-4">Marketing Campaign</h1>
              <p className="text-muted-foreground mb-6">
                Plan and execute the Q4 marketing campaign across multiple
                channels.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Tasks</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Team Members</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Progress</p>
                  <p className="text-2xl font-bold">68%</p>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}
