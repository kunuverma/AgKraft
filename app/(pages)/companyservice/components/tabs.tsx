import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import the card data array
import { cardsData } from "@/data/company-service";

export function TabsDemo() {
  return (
    <Tabs defaultValue="discovery" className="w-full">
      {/* Render the tab triggers dynamically */}
      <TabsList className="grid w-full grid-cols-5">
        {cardsData.map((card) => (
          <TabsTrigger key={card.value} value={card.value}>
            {card.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Render the card content dynamically based on selected tab */}
      {cardsData.map((card) => (
        <TabsContent key={card.value} value={card.value}>
          <Card>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
