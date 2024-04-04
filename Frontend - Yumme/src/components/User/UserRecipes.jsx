import { PlusCircle } from "lucide-react";
import React from "react";

import { Button, buttonVariants } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Routes } from "../../constants";

const UserRecipes = () => {
  return (
    <section className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4  py-8 md:gap-8 ">
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <Link
              size="sm"
              className={cn(buttonVariants({ size: "sm" }), "gap-2")}
              to={Routes.CREATE_RECIPE}
            >
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Recipe
              </span>
            </Link>
          </div>
        </div>
        <TabsContent value="all">your uploads</TabsContent>
        <TabsContent value="saved">your saved recipes</TabsContent>
      </Tabs>
    </section>
  );
};

export default UserRecipes;
