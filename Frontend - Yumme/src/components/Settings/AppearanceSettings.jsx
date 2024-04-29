import React from "react";
import ThemeToggleButton from "../Header/ThemeToggleButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Palette } from "lucide-react";

/**
 * AppearanceSettings component - A component that displays the appearance settings
 * @returns {JSX.Element} AppearanceSettings component
 */
const AppearanceSettings = () => {
  return (
    <>
      <Card className="flex flex-col">
        <CardHeader className="space-y-2">
          <CardTitle className="flex gap-2 items-center">
            <Palette />
            Theme
          </CardTitle>
          <CardDescription>Change the appearance of the app</CardDescription>
        </CardHeader>
        <CardContent>
          <ThemeToggleButton />
        </CardContent>
      </Card>
    </>
  );
};

export default AppearanceSettings;
