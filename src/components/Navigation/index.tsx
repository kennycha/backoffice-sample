import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const TABS = [
  {
    name: "분석 설정",
    key: "setting",
  },
  {
    name: "엔진 실행",
    key: "run",
  },
  {
    name: "서비스 운영",
    key: "operation",
  },
] as const;

const componentsMap = {
  setting: [
    {
      title: "Counting Line",
      href: "/",
      description: "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Interval Zone",
      href: "/",
      description: "For sighted users to preview content available behind a link.",
    },
    {
      title: "FP Filtering",
      href: "/",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
  ],
  run: [
    {
      title: "BBOX 분석",
      href: "/",
      description: "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Tracklet 분석",
      href: "/",
      description: "For sighted users to preview content available behind a link.",
    },
    {
      title: "Live 분석",
      href: "/",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
  ],
  operation: [
    {
      title: "스냅샷 비교/검증",
      href: "/",
      description: "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "스냅샷 검증 현황",
      href: "/",
      description: "For sighted users to preview content available behind a link.",
    },
    {
      title: "스냅샷 메모/이슈 종합",
      href: "/",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
  ],
} as const;

const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {TABS.map(({ name: tabName, key: tabKey }) => (
          <NavigationMenuItem key={tabName}>
            <NavigationMenuTrigger>{tabName}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {componentsMap[tabKey].map((component) => (
                  <ListItem key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default Navigation;
