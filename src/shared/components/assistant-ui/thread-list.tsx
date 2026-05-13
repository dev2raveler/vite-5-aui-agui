import {
  ThreadListItemMorePrimitive,
  ThreadListItemPrimitive,
  ThreadListPrimitive,
} from "@assistant-ui/react";
import {
  ArchiveIcon,
  ArchiveRestoreIcon,
  MoreHorizontalIcon,
  PlusIcon,
  TrashIcon,
} from "lucide-react";
import type { FC } from "react";

export const ThreadList: FC = () => {
  return (
    <ThreadListPrimitive.Root className="flex h-full min-h-0 flex-col gap-1 px-3 py-3">
      <ThreadListPrimitive.New className="group flex h-10 w-full items-center gap-2 rounded-xl border border-sidebar-border bg-background px-3 text-sm font-medium text-sidebar-foreground shadow-xs transition-colors hover:bg-sidebar-accent data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground">
        <span className="flex size-6 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground transition-transform group-hover:scale-105">
          <PlusIcon className="size-4" />
        </span>
        새 대화
      </ThreadListPrimitive.New>

      <div className="mt-4 flex items-center px-2 text-muted-foreground text-xs font-semibold uppercase tracking-wide">
        최근 대화
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto pr-1">
        <div className="space-y-1">
          <ThreadListPrimitive.Items>
            {() => <ThreadListItem />}
          </ThreadListPrimitive.Items>
        </div>

        <div className="mt-5 border-sidebar-border border-t pt-3">
          <div className="px-2 text-muted-foreground text-xs font-semibold uppercase tracking-wide">
            보관함
          </div>
          <div className="mt-1 space-y-1">
            <ThreadListPrimitive.Items archived>
              {() => <ArchivedThreadListItem />}
            </ThreadListPrimitive.Items>
          </div>
        </div>
      </div>
    </ThreadListPrimitive.Root>
  );
};

const ThreadListItem: FC = () => {
  return (
    <ThreadListItemPrimitive.Root className="group flex h-10 items-center rounded-xl text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground data-active:shadow-xs">
      <ThreadListItemPrimitive.Trigger className="min-w-0 flex-1 truncate rounded-xl px-3 py-2 text-left text-sm outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring">
        <span className="block truncate">
          <ThreadListItemPrimitive.Title fallback="새 채팅" />
        </span>
      </ThreadListItemPrimitive.Trigger>

      <ThreadListItemMorePrimitive.Root>
        <ThreadListItemMorePrimitive.Trigger
          aria-label="대화 작업 열기"
          className="mr-1 flex size-7 items-center justify-center rounded-lg opacity-0 outline-none transition-all hover:bg-background/80 focus-visible:ring-2 focus-visible:ring-sidebar-ring group-focus-within:opacity-100 group-hover:opacity-100 data-[state=open]:opacity-100"
        >
          <MoreHorizontalIcon className="size-4" />
        </ThreadListItemMorePrimitive.Trigger>
        <ThreadListItemMorePrimitive.Content className="z-50 min-w-36 rounded-xl border bg-popover p-1 text-popover-foreground shadow-lg">
          <ThreadListItemPrimitive.Archive asChild>
            <ThreadListItemMorePrimitive.Item className="flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-2 text-sm outline-none hover:bg-accent focus:bg-accent data-disabled:pointer-events-none data-disabled:opacity-50">
              <ArchiveIcon className="size-4" />
              보관
            </ThreadListItemMorePrimitive.Item>
          </ThreadListItemPrimitive.Archive>
          <ThreadListItemMorePrimitive.Separator className="my-1 h-px bg-border" />
          <ThreadListItemPrimitive.Delete asChild>
            <ThreadListItemMorePrimitive.Item className="flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-2 text-destructive text-sm outline-none hover:bg-destructive/10 focus:bg-destructive/10 data-disabled:pointer-events-none data-disabled:opacity-50">
              <TrashIcon className="size-4" />
              삭제
            </ThreadListItemMorePrimitive.Item>
          </ThreadListItemPrimitive.Delete>
        </ThreadListItemMorePrimitive.Content>
      </ThreadListItemMorePrimitive.Root>
    </ThreadListItemPrimitive.Root>
  );
};

const ArchivedThreadListItem: FC = () => {
  return (
    <ThreadListItemPrimitive.Root className="group flex h-10 items-center rounded-xl text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground data-active:shadow-xs">
      <ThreadListItemPrimitive.Trigger className="min-w-0 flex-1 truncate rounded-xl px-3 py-2 text-left text-sm outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring">
        <span className="block truncate">
          <ThreadListItemPrimitive.Title fallback="보관된 채팅" />
        </span>
      </ThreadListItemPrimitive.Trigger>

      <ThreadListItemMorePrimitive.Root>
        <ThreadListItemMorePrimitive.Trigger
          aria-label="보관된 대화 작업 열기"
          className="mr-1 flex size-7 items-center justify-center rounded-lg opacity-0 outline-none transition-all hover:bg-background/80 focus-visible:ring-2 focus-visible:ring-sidebar-ring group-focus-within:opacity-100 group-hover:opacity-100 data-[state=open]:opacity-100"
        >
          <MoreHorizontalIcon className="size-4" />
        </ThreadListItemMorePrimitive.Trigger>
        <ThreadListItemMorePrimitive.Content className="z-50 min-w-36 rounded-xl border bg-popover p-1 text-popover-foreground shadow-lg">
          <ThreadListItemPrimitive.Unarchive asChild>
            <ThreadListItemMorePrimitive.Item className="flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-2 text-sm outline-none hover:bg-accent focus:bg-accent data-disabled:pointer-events-none data-disabled:opacity-50">
              <ArchiveRestoreIcon className="size-4" />
              복원
            </ThreadListItemMorePrimitive.Item>
          </ThreadListItemPrimitive.Unarchive>
          <ThreadListItemMorePrimitive.Separator className="my-1 h-px bg-border" />
          <ThreadListItemPrimitive.Delete asChild>
            <ThreadListItemMorePrimitive.Item className="flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-2 text-destructive text-sm outline-none hover:bg-destructive/10 focus:bg-destructive/10 data-disabled:pointer-events-none data-disabled:opacity-50">
              <TrashIcon className="size-4" />
              삭제
            </ThreadListItemMorePrimitive.Item>
          </ThreadListItemPrimitive.Delete>
        </ThreadListItemMorePrimitive.Content>
      </ThreadListItemMorePrimitive.Root>
    </ThreadListItemPrimitive.Root>
  );
};
