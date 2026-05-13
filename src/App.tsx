import {
  useAssistantTool,
  useAui,
  AuiProvider,
  Suggestions,
} from "@assistant-ui/react";
import { ThreadList } from "@/shared/components/assistant-ui/thread-list";
import { Thread } from "@/shared/components/assistant-ui/thread";

function BrowserAlertTool() {
  useAssistantTool<{ message: string }, { status: string }>({
    toolName: "browser_alert",
    description: "Display a native browser alert dialog to the user.",
    parameters: {
      type: "object",
      properties: {
        message: {
          type: "string",
          description: "Text to display inside the alert dialog.",
        },
      },
      required: ["message"],
    },
    execute: async ({ message }) => {
      alert(message);
      return { status: "shown" };
    },
    render: ({ args, result }) => (
      <div className="mt-3 w-full max-w-(--thread-max-width) rounded-lg border px-4 py-3 text-sm">
        <p className="font-semibold text-muted-foreground">browser_alert</p>
        <p className="mt-1">
          Requested alert with message:
          <span className="ml-1 font-mono text-foreground">
            {JSON.stringify(args.message)}
          </span>
        </p>
        {result?.status === "shown" && (
          <p className="mt-2 text-foreground/70 text-xs">
            Alert displayed in this tab.
          </p>
        )}
      </div>
    ),
  });

  return null;
}

function ThreadWithSuggestions() {
  const aui = useAui({
    suggestions: Suggestions([
      {
        title: "Run a web search",
        label: "for recent AI news",
        prompt: "Search the web for the latest AI news.",
      },
      {
        title: "Show a browser alert",
        label: "using the alert tool",
        prompt: "Show me a browser alert saying hello!",
      },
    ]),
  });
  return (
    <AuiProvider value={aui}>
      <Thread />
    </AuiProvider>
  );
}

function ThreadSidebar() {
  return (
    <aside className="flex h-64 shrink-0 flex-col border-sidebar-border border-b bg-sidebar text-sidebar-foreground md:h-auto md:w-72 md:border-r md:border-b-0">
      <div className="border-sidebar-border border-b px-5 py-4">
        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.24em]">
          AG-UI Protocol
        </p>
        <h1 className="mt-1 font-semibold text-lg">대화 목록</h1>
      </div>
      <ThreadList />
    </aside>
  );
}

function App() {
  return (
    <main className="flex h-dvh w-full flex-col overflow-hidden bg-background md:flex-row">
      <ThreadSidebar />
      <section className="relative min-h-0 min-w-0 flex-1">
        <ThreadWithSuggestions />
        <BrowserAlertTool />
      </section>
    </main>
  );
}

export default App;
