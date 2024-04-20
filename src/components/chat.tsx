"use client";

import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="relative flex h-[calc(100vh-56px)] flex-col p-4 gap-4 md:container">
      <ScrollArea className="flex-1">
        <ul className="space-y-2">
          {messages.map((m, index) => (
            <li key={index}>
              <span className="text-muted-foreground">
                {m.role === "user" ? "User: " : "AI: "}
              </span>
              {m.content}
            </li>
          ))}
        </ul>
      </ScrollArea>
      <form
        onSubmit={handleSubmit}
        className="relative overflow-hidden rounded-[var(--radius)] bg-background flex gap-4 items-center"
        x-chunk="dashboard-03-chunk-1"
      >
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Input
          value={input}
          id="message"
          placeholder="Type your prompt here..."
          onChange={handleInputChange}
          className="p-4 bg-secondary/30"
        />
        <Button type="submit" size="sm">
          Send
        </Button>
      </form>
    </div>
  );
}
