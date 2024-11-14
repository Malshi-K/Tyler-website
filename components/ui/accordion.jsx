"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item 
    ref={ref} 
    className={cn("mb-4 rounded-lg bg-white", className)} 
    {...props} 
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between p-4 text-base font-bold text-navy transition-all rounded-lg hover:bg-gray-50",
        className
      )}
      {...props}>
      {children}
      {/* Custom indicator based on state */}
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded bg-[#3E4345] data-[state=open]:bg-[#A67548] transition-colors">
        <Plus className="h-6 w-6 text-white shrink-0 transition-transform duration-200 data-[state=open]:hidden" />
        <Minus className="h-6 w-6 text-white shrink-0 transition-transform duration-200 hidden data-[state=open]:block" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-gray-600 px-4 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-4 pt-2", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }