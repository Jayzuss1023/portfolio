import type * as React from "react";
import ChatWrapper from "./chat/ChatWrapper";
import { Sidebar, SidebarContent, SidebarRail } from "./ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <ChatWrapper />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
