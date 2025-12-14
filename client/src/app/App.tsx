import { TimelinePage } from "@/page/TimelinePage";

import AppProvider from "./AppProvider";

function App() {
  return (
    <AppProvider>
      <TimelinePage />
    </AppProvider>
  );
}

export default App;
